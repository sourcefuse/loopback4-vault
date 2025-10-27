import {expect, sinon} from '@loopback/testlab';
import {ILogger} from '@sourceloop/core';
import proxyquire from 'proxyquire';
import {VaultConnector, VaultConnectProvider} from '../../services';
import {MockClient} from './mock-client';

describe('Vault Service', () => {
  describe('Vault Service', () => {
    const config = {
      endpoint: 'http://127.0.0.1:8001',
    };
    const mockLogger: ILogger = {
      log: sinon.stub(),
      error: sinon.stub(),
      info: sinon.stub(),
      warn: sinon.stub(),
      debug: sinon.stub(),
    };
    it('returns error message when config is not passed', async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const vaultClient = await new VaultConnectProvider(mockLogger).value();
      } catch (err) {
        const result = err.message;
        expect(result).to.be.eql('Vault config not available !');
      }
    });
    it('returns the vaultConnector object', async () => {
      const vaultClient = await new VaultConnectProvider(
        mockLogger,
        config,
      ).value();
      expect(vaultClient).to.be.eql(new VaultConnector(mockLogger, config));
    });
    it('return a Promise when calling the help method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.help('dummyPath');
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the write method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.write('dummyPath', 'dummydata');
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the read method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.read('dummyPath');
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the list method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.list('dummyPath');
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the delete method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.delete('dummyPath');
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the status method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.status();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the initialized method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.initialized();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the init method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.init();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the unseal method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.unseal();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the seal method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.seal();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the generateRootStatus method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.generateRootStatus();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the generateRootInit method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.generateRootInit();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the generateRootCancel method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.generateRootCancel();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the generateRootUpdate method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.generateRootUpdate();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the mounts method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.mounts();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the mount method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.mount();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the unmount method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.unmount();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the remount method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.remount();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the policies method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.policies();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the addPolicy method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.addPolicy();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the getPolicy method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.getPolicy();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the removePolicy method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.removePolicy();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the auths method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.auths();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the enableAuth method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.enableAuth();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the disableAuth method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.disableAuth();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the audits method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.audits();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the enableAudit method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.enableAudit();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the disableAudit method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.disableAudit();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the renew method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.renew();
      await expect(result).to.be.fulfilled();
    });
    it('calling the revoke method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.revoke();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the revokePrefix method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.revokePrefix();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the rotate method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.rotate();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the githubLogin method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.githubLogin();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the userpassLogin method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.userpassLogin();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the kubernetesLogin method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.kubernetesLogin();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the awsIamLogin method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.awsIamLogin();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the tokenAccessors method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.tokenAccessors();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the tokenCreate method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.tokenCreate();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the tokenCreateOrphan method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.tokenCreateOrphan();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the tokenCreateRole method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.tokenCreateRole();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the tokenLookup method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.tokenLookup();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the tokenLookupAccessor method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.tokenLookupAccessor();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the tokenLookupSelf method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.tokenLookupSelf();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the tokenRenewSelf method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.tokenRenewSelf();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the tokenRenew method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.tokenRenew();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the tokenRevoke method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.tokenRevoke();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the tokenRevokeAccessor method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.tokenRevokeAccessor();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the tokenRevokeOrphan method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.tokenRevokeOrphan();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the tokenRevokeSelf method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.tokenRevokeSelf();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the tokenRoles method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.tokenRoles();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the addTokenRole method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.addTokenRole();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the getTokenRole method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.getTokenRole();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the removeTokenRole method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.removeTokenRole();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the approleRoles method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.approleRoles();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the addApproleRole method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.addApproleRole();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the getApproleRole method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.getApproleRole();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the deleteApproleRole method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.deleteApproleRole();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the getApproleRoleId method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.getApproleRoleId();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the updateApproleRoleId method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.updateApproleRoleId();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the getApproleRoleSecret method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.getApproleRoleSecret();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the approleSecretAccessors method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.approleSecretAccessors();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the approleSecretLookup method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.approleSecretLookup();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the approleSecretDestroy method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.approleSecretDestroy();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the approleSecretAccessorLookup method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.approleSecretAccessorLookup();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the approleSecretAccessorDestroy method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.approleSecretAccessorDestroy();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the approleLogin method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.approleLogin();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the health method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.health();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the leader method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.leader();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the stepDown method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.stepDown();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the encryptData method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.encryptData();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the decryptData method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.decryptData();
      await expect(result).to.be.fulfilled();
    });
    it('return a Promise when calling the generateDatabaseCredentials method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      const result = vaultConnector.generateDatabaseCredentials();
      await expect(result).to.be.fulfilled();
    });
    it('using the client via the reconnect method', async () => {
      const connector = MockClient.mockClient();
      const vaultConnector = new connector(mockLogger, config);
      vaultConnector.reconnect(config);
      const result = vaultConnector.generateDatabaseCredentials();
      await expect(result).to.be.fulfilled();
    });
    it('returns error message when cannot initialize', async () => {
      try {
        const mockClient = {
          health: sinon.stub().returns({promise: () => Promise.resolve()}),
          init: sinon.stub().returns({}),
          unseal: sinon.stub().returns({promise: () => Promise.resolve()}),
          seal: sinon.stub().returns({promise: () => Promise.resolve()}),
          read: sinon.stub().returns({promise: () => Promise.resolve()}),
        };
        const connector = proxyquire('../../services/vault-connector', {
          'node-vault': sinon.stub().returns(mockClient),
        }).VaultConnector;
        const vaultConnector = new connector(mockLogger, config);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const readResult = vaultConnector.read('dummyPath');
      } catch (err) {
        const result = err.message;
        expect(result).to.be.eql('Vault initialisation failed !');
      }
    });
  });
});
