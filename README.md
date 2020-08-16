# @sourceloop/vault

[![LoopBack](<https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png>)](http://loopback.io/)

![Dependencies Status](https://img.shields.io/david/sourcefuse/loopback4-vault?style=flat-square)
![Loopback Core Version](https://img.shields.io/npm/dependency-version/@sourceloop/vault/@loopback/core?style=flat-square)

[![Latest version](https://img.shields.io/npm/v/@sourceloop/vault.svg?style=flat-square)](https://www.npmjs.com/package/@sourceloop/vault)
[![License](https://img.shields.io/github/license/sourcefuse/loopback4-authentication.svg?color=blue&label=License&style=flat-square)](https://github.com/sourcefuse/loopback4-vault/blob/master/LICENSE)
[![Downloads](https://img.shields.io/npm/dw/@sourceloop/vault.svg?label=Downloads&style=flat-square&color=blue)](https://www.npmjs.com/package/@sourceloop/vault)
[![Total Downloads](https://img.shields.io/npm/dt/@sourceloop/vault.svg?label=Total%20Downloads&style=flat-square&color=blue)](https://www.npmjs.com/package/@sourceloop/vault)

A simple loopback-next extension for Hashicorp's [Vault](https://learn.hashicorp.com/vault) integration in loopback applications based on node.js vault client [node-vault](https://github.com/kr1sp1n/node-vault).

## Install

```sh
npm install @sourceloop/vault
```

## Usage

In order to use this component into your LoopBack application, please follow below steps.

- Add component to application and provide vault endpoint, vault token and unseal key via `VaultSecurityBindings`.

```ts
this.component(VaultComponent);
this.bind(VaultSecurityBindings.CONFIG).to({
  endpoint: process.env.VAULT_URL,
  token: process.env.VAULT_TOKEN,
  unsealKey: process.env.VAULT_UNSEAL_KEY,
});
```

- After this, you can just inject the `VaultSecurityBindings.VAULT_CONNECTOR` across application.

```ts
@inject(VaultSecurityBindings.VAULT_CONNECTOR)
private readonly vaultConnector: VaultConnect,
```

All the methods mentioned [here](https://github.com/kr1sp1n/node-vault/blob/master/features.md) are now available on `vaultConnector`.

Here is an example usage below

```ts
  private async upsertKeyToVault(credKey: string): Promise<{data: AnyObject}> {
    let data: {data: AnyObject};
    try {
      data = await this.vaultConnector.read(credKey);
    } catch (error) {
      if (error.response.statusCode === 404) {
        await this.vaultConnector.write(credKey, {empty: true});
        data = await this.vaultConnector.read(credKey);
      } else {
        this.logger.error(error);
        throw error;
      }
    }
    return data;
  }
```

## Feedback

If you've noticed a bug or have a question or have a feature request, [search the issue tracker](https://github.com/sourcefuse/loopback4-vault/issues) to see if someone else in the community has already created a ticket.
If not, go ahead and [make one](https://github.com/sourcefuse/loopback4-vault/issues/new/choose)!
All feature requests are welcome. Implementation time may vary. Feel free to contribute the same, if you can.
If you think this extension is useful, please [star](https://help.github.com/en/articles/about-stars) it. Appreciation really helps in keeping this project alive.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/sourcefuse/loopback4-vault/blob/master/.github/CONTRIBUTING.md) for details on the process for submitting pull requests to us.

## Code of conduct

Code of conduct guidelines [here](https://github.com/sourcefuse/loopback4-vault/blob/master/.github/CODE_OF_CONDUCT.md).

## License

[MIT](https://github.com/sourcefuse/loopback4-vault/blob/master/LICENSE)
