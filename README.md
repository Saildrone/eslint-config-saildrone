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

Optionally, you can add `lint` script to `package.json`:

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
