import {bind, BindingScope, inject, Provider} from '@loopback/core';
import {VaultSecurityBindings} from '../keys';
import {VaultProviderOptions} from '../types';
import {VaultConnector} from './vault-connector';
import {ILogger, LOGGER} from '@sourceloop/core';

@bind({scope: BindingScope.SINGLETON})
export class VaultConnectProvider
  implements Provider<VaultConnector | undefined>
{
  private _vaultClient: VaultConnector;

  constructor(
    @inject(LOGGER.LOGGER_INJECT)
    public logger: ILogger,
    @inject(VaultSecurityBindings.CONFIG, {
      optional: true,
    })
    private readonly config?: VaultProviderOptions,
  ) {}

  async value() {
    if (!this._vaultClient) {
      this._vaultClient = new VaultConnector(this.logger, this.config);
    }
    return this._vaultClient;
  }
}
