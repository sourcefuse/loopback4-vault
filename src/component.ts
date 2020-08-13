import {Binding, Component, ProviderMap} from '@loopback/core';
import {VaultSecurityBindings} from './keys';
import {VaultConnectProvider} from './services';

export class VaultComponent implements Component {
  constructor() {
    this.providers = {
      [VaultSecurityBindings.VAULT_CONNECTOR.key]: VaultConnectProvider,
    };
    this.bindings.push(Binding.bind(VaultSecurityBindings.CONFIG.key).to(null));
  }

  providers?: ProviderMap;
  bindings: Binding[] = [];
}
