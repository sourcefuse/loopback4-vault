import {bind, BindingScope, inject, Provider} from '@loopback/core';
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
      this._vaultClient = new VaultConnector(this.config);
    }
    return this._vaultClient;
  }
}
