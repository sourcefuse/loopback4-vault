import {sinon} from '@loopback/testlab';
import proxyquire from 'proxyquire';

export class MockClient {
  static mockClient() {
    const mockClient = {
      health: sinon.stub().returns({promise: () => Promise.resolve()}),
      // eslint-disable-next-line @typescript-eslint/naming-convention
      init: sinon.stub().returns({keys: 'dummykeys', root_token: 'token'}),
      unseal: sinon.stub().returns({promise: () => Promise.resolve()}),
      seal: sinon.stub().returns({promise: () => Promise.resolve()}),
      help: sinon.stub().returns({promise: () => Promise.resolve()}),
      write: sinon.stub().returns({promise: () => Promise.resolve()}),
      read: sinon.stub().returns({promise: () => Promise.resolve()}),
      list: sinon.stub().returns({promise: () => Promise.resolve()}),
      delete: sinon.stub().returns({promise: () => Promise.resolve()}),
      status: sinon.stub().returns({promise: () => Promise.resolve()}),
      initialized: sinon.stub().returns({promise: () => Promise.resolve()}),
      generateRootStatus: sinon
        .stub()
        .returns({promise: () => Promise.resolve()}),
      generateRootInit: sinon
        .stub()
        .returns({promise: () => Promise.resolve()}),
      generateRootCancel: sinon
        .stub()
        .returns({promise: () => Promise.resolve()}),
      generateRootUpdate: sinon
        .stub()
        .returns({promise: () => Promise.resolve()}),
      mounts: sinon.stub().returns({promise: () => Promise.resolve()}),
      mount: sinon.stub().returns({promise: () => Promise.resolve()}),
      unmount: sinon.stub().returns({promise: () => Promise.resolve()}),
      remount: sinon.stub().returns({promise: () => Promise.resolve()}),
      policies: sinon.stub().returns({promise: () => Promise.resolve()}),
      addPolicy: sinon.stub().returns({promise: () => Promise.resolve()}),
      getPolicy: sinon.stub().returns({promise: () => Promise.resolve()}),
      removePolicy: sinon.stub().returns({promise: () => Promise.resolve()}),
      auths: sinon.stub().returns({promise: () => Promise.resolve()}),
      enableAuth: sinon.stub().returns({promise: () => Promise.resolve()}),
      disableAuth: sinon.stub().returns({promise: () => Promise.resolve()}),
      audits: sinon.stub().returns({promise: () => Promise.resolve()}),
      enableAudit: sinon.stub().returns({promise: () => Promise.resolve()}),
      disableAudit: sinon.stub().returns({promise: () => Promise.resolve()}),
      renew: sinon.stub().returns({promise: () => Promise.resolve()}),
      revoke: sinon.stub().returns({promise: () => Promise.resolve()}),
      revokePrefix: sinon.stub().returns({promise: () => Promise.resolve()}),
      rotate: sinon.stub().returns({promise: () => Promise.resolve()}),
      githubLogin: sinon.stub().returns({promise: () => Promise.resolve()}),
      userpassLogin: sinon.stub().returns({promise: () => Promise.resolve()}),
      kubernetesLogin: sinon.stub().returns({promise: () => Promise.resolve()}),
      awsIamLogin: sinon.stub().returns({promise: () => Promise.resolve()}),
      tokenAccessors: sinon.stub().returns({promise: () => Promise.resolve()}),
      tokenCreate: sinon.stub().returns({promise: () => Promise.resolve()}),
      tokenCreateOrphan: sinon
        .stub()
        .returns({promise: () => Promise.resolve()}),
      tokenCreateRole: sinon.stub().returns({promise: () => Promise.resolve()}),
      tokenLookup: sinon.stub().returns({promise: () => Promise.resolve()}),
      tokenLookupAccessor: sinon
        .stub()
        .returns({promise: () => Promise.resolve()}),
      tokenLookupSelf: sinon.stub().returns({promise: () => Promise.resolve()}),
      tokenRenewSelf: sinon.stub().returns({promise: () => Promise.resolve()}),
      tokenRenew: sinon.stub().returns({promise: () => Promise.resolve()}),
      tokenRevoke: sinon.stub().returns({promise: () => Promise.resolve()}),
      tokenRevokeAccessor: sinon
        .stub()
        .returns({promise: () => Promise.resolve()}),
      tokenRevokeOrphan: sinon
        .stub()
        .returns({promise: () => Promise.resolve()}),
      tokenRevokeSelf: sinon.stub().returns({promise: () => Promise.resolve()}),
      tokenRoles: sinon.stub().returns({promise: () => Promise.resolve()}),
      addTokenRole: sinon.stub().returns({promise: () => Promise.resolve()}),
      getTokenRole: sinon.stub().returns({promise: () => Promise.resolve()}),
      removeTokenRole: sinon.stub().returns({promise: () => Promise.resolve()}),
      approleRoles: sinon.stub().returns({promise: () => Promise.resolve()}),
      addApproleRole: sinon.stub().returns({promise: () => Promise.resolve()}),
      getApproleRole: sinon.stub().returns({promise: () => Promise.resolve()}),
      deleteApproleRole: sinon
        .stub()
        .returns({promise: () => Promise.resolve()}),
      getApproleRoleId: sinon
        .stub()
        .returns({promise: () => Promise.resolve()}),
      updateApproleRoleId: sinon
        .stub()
        .returns({promise: () => Promise.resolve()}),
      getApproleRoleSecret: sinon
        .stub()
        .returns({promise: () => Promise.resolve()}),
      approleSecretAccessors: sinon
        .stub()
        .returns({promise: () => Promise.resolve()}),
      approleSecretLookup: sinon
        .stub()
        .returns({promise: () => Promise.resolve()}),
      approleSecretDestroy: sinon
        .stub()
        .returns({promise: () => Promise.resolve()}),
      approleSecretAccessorLookup: sinon
        .stub()
        .returns({promise: () => Promise.resolve()}),
      approleSecretAccessorDestroy: sinon
        .stub()
        .returns({promise: () => Promise.resolve()}),
      approleLogin: sinon.stub().returns({promise: () => Promise.resolve()}),
      leader: sinon.stub().returns({promise: () => Promise.resolve()}),
      stepDown: sinon.stub().returns({promise: () => Promise.resolve()}),
      encryptData: sinon.stub().returns({promise: () => Promise.resolve()}),
      decryptData: sinon.stub().returns({promise: () => Promise.resolve()}),
      generateDatabaseCredentials: sinon
        .stub()
        .returns({promise: () => Promise.resolve()}),
    };

    const connector = proxyquire('../../services/vault-connector', {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'node-vault': sinon.stub().returns(mockClient),
    }).VaultConnector;

    return connector;
  }
}
