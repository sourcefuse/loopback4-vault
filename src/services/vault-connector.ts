import {HttpErrors} from '@loopback/rest';
import * as vault from 'node-vault';
import {client, Option} from 'node-vault';
import {VaultProviderOptions} from '../types';

export class VaultConnector {
  private _vaultClient: client;
  private _unsealKey = '';
  private _config?: VaultProviderOptions;

  constructor(config?: VaultProviderOptions) {
    if (!config) {
      throw new HttpErrors.UnprocessableEntity('Vault config not available !');
    }
    this._config = config;
    this._connect();
  }

  reconnect(config: VaultProviderOptions) {
    this._config = Object.assign({}, this._config, config);
    this._connect();
  }

  async initContainer() {
    if (!this._vaultClient) {
      throw new HttpErrors.UnprocessableEntity(
        'Vault client instance not available !',
      );
    }
    const config = this._config;
    const opts = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      secret_shares: config?.secretShares ?? 1,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      secret_threshold: config?.secretThreshold ?? 1,
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
      this._unsealKey = keys[0];
      // unseal vault server
      await this._vaultClient.unseal({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        secret_shares: 1,
        key: this._unsealKey ?? config?.unsealKey ?? '',
      });
    } else if (health.sealed) {
      // unseal vault server
      await this._vaultClient.unseal({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        secret_shares: 1,
        key: config?.unsealKey ?? '',
      });
    }
  }

  async help(path: string, requestOptions?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.help(path, requestOptions);
  }
  async write(
    path: string,
    data: unknown,
    requestOptions?: Option,
  ): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.write(path, data, requestOptions);
  }
  async read(path: string, requestOptions?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.read(path, requestOptions);
  }

  async list(path: string, requestOptions?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.list(path, requestOptions);
  }

  async delete(path: string, requestOptions?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.delete(path, requestOptions);
  }

  async status(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.status(options);
  }

  async initialized(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.initialized(options);
  }

  async init(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.init(options);
  }

  async unseal(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.unseal(options);
  }

  async seal(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.seal(options);
  }

  async generateRootStatus(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.generateRootStatus(options);
  }

  async generateRootInit(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.generateRootInit(options);
  }

  async generateRootCancel(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.generateRootCancel(options);
  }

  async generateRootUpdate(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.generateRootUpdate(options);
  }

  async mounts(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.mounts(options);
  }

  async mount(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.mount(options);
  }

  async unmount(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.unmount(options);
  }

  async remount(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.remount(options);
  }

  async policies(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.policies(options);
  }

  async addPolicy(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.addPolicy(options);
  }

  async getPolicy(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.getPolicy(options);
  }

  async removePolicy(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.removePolicy(options);
  }

  async auths(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.auths(options);
  }

  async enableAuth(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.enableAuth(options);
  }

  async disableAuth(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.disableAuth(options);
  }

  async audits(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.audits(options);
  }

  async enableAudit(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.enableAudit(options);
  }

  async disableAudit(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.disableAudit(options);
  }

  async renew(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.renew(options);
  }

  async revoke(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.revoke(options);
  }

  async revokePrefix(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.revokePrefix(options);
  }

  async rotate(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.rotate(options);
  }

  async githubLogin(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.githubLogin(options);
  }

  async userpassLogin(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.userpassLogin(options);
  }

  async kubernetesLogin(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.kubernetesLogin(options);
  }

  async awsIamLogin(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.awsIamLogin(options);
  }

  async tokenAccessors(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.tokenAccessors(options);
  }

  async tokenCreate(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.tokenCreate(options);
  }

  async tokenCreateOrphan(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.tokenCreateOrphan(options);
  }

  async tokenCreateRole(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.tokenCreateRole(options);
  }

  async tokenLookup(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.tokenLookup(options);
  }

  async tokenLookupAccessor(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.tokenLookupAccessor(options);
  }

  async tokenLookupSelf(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.tokenLookupSelf(options);
  }

  async tokenRenew(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.tokenRenew(options);
  }

  async tokenRenewSelf(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.tokenRenewSelf(options);
  }

  async tokenRevoke(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.tokenRevoke(options);
  }

  async tokenRevokeAccessor(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.tokenRevokeAccessor(options);
  }

  async tokenRevokeOrphan(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.tokenRevokeOrphan(options);
  }

  async tokenRevokeSelf(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.tokenRevokeSelf(options);
  }

  async tokenRoles(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.tokenRoles(options);
  }

  async addTokenRole(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.addTokenRole(options);
  }

  async getTokenRole(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.getTokenRole(options);
  }

  async removeTokenRole(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.removeTokenRole(options);
  }

  async approleRoles(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.approleRoles(options);
  }

  async addApproleRole(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.addApproleRole(options);
  }

  async getApproleRole(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.getApproleRole(options);
  }

  async deleteApproleRole(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.deleteApproleRole(options);
  }

  async getApproleRoleId(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.getApproleRoleId(options);
  }

  async updateApproleRoleId(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.updateApproleRoleId(options);
  }

  async getApproleRoleSecret(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.getApproleRoleSecret(options);
  }

  async approleSecretAccessors(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.approleSecretAccessors(options);
  }

  async approleSecretLookup(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.approleSecretLookup(options);
  }

  async approleSecretDestroy(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.approleSecretDestroy(options);
  }

  async approleSecretAccessorLookup(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.approleSecretAccessorLookup(options);
  }

  async approleSecretAccessorDestroy(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.approleSecretAccessorDestroy(options);
  }

  async approleLogin(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.approleLogin(options);
  }

  async health(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.health(options);
  }

  async leader(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.leader(options);
  }

  async stepDown(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.stepDown(options);
  }

  async encryptData(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.encryptData(options);
  }

  async decryptData(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.decryptData(options);
  }

  async generateDatabaseCredentials(options?: Option): Promise<unknown> {
    await this.initContainer();
    return this._vaultClient.generateDatabaseCredentials(options);
  }

  private _connect() {
    try {
      this._vaultClient = vault.default({
        apiVersion: this._config?.apiVersion ?? 'v1',
        endpoint: this._config?.endpoint ?? 'http://127.0.0.1:8200',
        token: this._config?.token,
        namespace: this._config?.namespace,
        noCustomHTTPVerbs: this._config?.noCustomHTTPVerbs,
        pathPrefix: this._config?.pathPrefix,
      });
    } catch (error) {
      console.error(`Vault connection failed ! Error :: ${error}`);
      throw new HttpErrors.Forbidden('Vault connection failed !');
    }
  }
}
