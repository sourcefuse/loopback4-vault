import {client, VaultOptions} from 'node-vault';

export interface VaultConfig {
  secretShares?: number;
  secretThreshold?: number;
  pgpKeys?: string[];
  rootTokenPgpKey?: string;
  unsealKey?: string;
}

export type VaultConnect = client;

export type VaultProviderOptions = VaultOptions & VaultConfig;
