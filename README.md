# eslint-config-saildrone
:sailboat: Saildrone ESLint Config

## Usage

From your project root, run:

```
$ npm i --save-dev eslint eslint-config-saildrone
```

Create a `.eslintrc.json` file in your project's root directory. At minimum, it should include:

```json
{
  "extends": "saildrone"
}
```

Optionally, you can add a `lint` script to `package.json`:

```json
{
  "lint": "eslint ."
}
```

With this script added, run `npm run lint` to lint your project. For added awesomeness, include it as a `postTest` step in the `scripts` section of `package.json`.

## Justification

This configuration is based upon AirBnB's excellent Javascript styleguide. We have added a handful of overrides to this configuration - you can see the justification for these decisions in our [fork](https://github.com/saildrone/javascript#amendments) of the AirBnB styleguide.

## Contributing

If you'd like to make a change to our linting configuration, open an issue or PR on the [styleguide fork](https://github.com/saildrone/javascript). Once the change has been approved, you may add override configuration to this repository.

## sd_login

This project is now using CodeArtifact repository to push and pull NPM packages. This requires AWS credentials to generate an AWS CodeArtifact authentication token, which is then used to login to CodeArtifact. For local development, you can retrieve the appropriate credentials and CODEARTIFACT_AUTH_TOKEN by adding the `sd_login` to your local machine: https://github.com/Saildrone/sd_login/blob/main/README.md