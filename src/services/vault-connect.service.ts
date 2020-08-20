import {bind, BindingScope, inject, Provider} from '@loopback/core';
import {HttpErrors} from '@loopback/rest';
import * as vault from 'node-vault';
import {VaultSecurityBindings} from '../keys';
import {VaultProviderOptions} from '../types';
import {VaultConnector} from './vault-connector';

@bind({scope: BindingScope.SINGLETON})
export class VaultConnectProvider
  implements Provider<VaultConnector | undefined> {
  private _vaultClient: VaultConnector;

  constructor(
    @inject(VaultSecurityBindings.CONFIG, {
      optional: true,
    })
    private readonly config?: VaultProviderOptions,
  ) {}

  async value() {
    if (!this._vaultClient) {
      try {
        const vaultClient = vault.default({
          apiVersion: this.config?.apiVersion ?? 'v1',
          endpoint: this.config?.endpoint ?? 'http://127.0.0.1:8200',
          token: this.config?.token,
        });
        if (vaultClient) {
          this._vaultClient = new VaultConnector(vaultClient);
        }
      } catch (error) {
        console.error(`Vault connection failed ! Error :: ${error}`);
        throw new HttpErrors.Forbidden('Vault connection failed !');
      }
    }
    return this._vaultClient;
  }
}
