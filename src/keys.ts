import {BindingKey} from '@loopback/core';
import {VaultConnect, VaultProviderOptions} from './types';

export namespace VaultSecurityBindings {
  export const VAULT_CONNECTOR = BindingKey.create<VaultConnect>(
    'sf.security.vault.connect',
  );

  export const CONFIG = BindingKey.create<VaultProviderOptions | null>(
    'sf.security.vault.config',
  );
}
