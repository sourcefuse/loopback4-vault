import {BindingKey} from '@loopback/core';
import {VaultConnector} from './services/vault-connector';
import {VaultProviderOptions} from './types';

export namespace VaultSecurityBindings {
  export const VAULT_CONNECTOR = BindingKey.create<VaultConnector>(
    'sf.security.vault.connect',
  );

  export const CONFIG = BindingKey.create<VaultProviderOptions | null>(
    'sf.security.vault.config',
  );
}
