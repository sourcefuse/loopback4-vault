/* eslint-disable @typescript-eslint/naming-convention */
import {bind, BindingScope, inject, Provider} from '@loopback/core';
import {HttpErrors} from '@loopback/rest';
import * as vault from 'node-vault';
import {VaultSecurityBindings} from '../keys';
import {VaultConnect, VaultProviderOptions} from '../types';

@bind({scope: BindingScope.SINGLETON})
export class VaultConnectProvider
  implements Provider<VaultConnect | undefined> {
  private _vaultClient: VaultConnect;

  constructor(
    @inject(VaultSecurityBindings.CONFIG, {
      optional: true,
    })
    private readonly config?: VaultProviderOptions,
  ) {}

  async value() {
    if (!this._vaultClient) {
      try {
        this._vaultClient = vault.default({
          apiVersion: this.config?.apiVersion ?? 'v1',
          endpoint: this.config?.endpoint ?? 'http://127.0.0.1:8200',
          token: this.config?.token,
        });
        if (this._vaultClient) {
          await this._init();
        }
      } catch (error) {
        console.error(`Vault connection failed ! Error :: ${error}`);
        throw new HttpErrors.Forbidden('Vault connection failed !');
      }
    }
    return this._vaultClient;
  }

  private async _init() {
    const opts = {
      secret_shares: this.config?.secretShares ?? 1,
      secret_threshold: this.config?.secretThreshold ?? 1,
    };
    const health = await this._vaultClient.health({
      sealedcode: 200,
      uninitcode: 200,
    });
    if (!health.initialized) {
      const resp = await this._vaultClient.init(opts);
      if (!resp || !resp.keys || resp.keys.length === 0 || !resp.root_token) {
        console.error(`Vault initialisation failed ! Response :: ${resp}`);
        throw new Error('Vault initialisation failed !');
      }
      const keys = resp.keys;
      // set token for all following requests
      this._vaultClient.token = resp.root_token;
      // unseal vault server
      await this._vaultClient.unseal({
        secret_shares: 1,
        key: keys[0],
      });
    } else if (health.sealed) {
      // unseal vault server
      await this._vaultClient.unseal({
        secret_shares: 1,
        key: this.config?.unsealKey,
      });
    }
  }
}
