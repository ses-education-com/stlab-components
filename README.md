# STLAB shared components

This repository is created to solve the Bit.dev breaking version change that removed our components from accessible repos at bit.cloud and left us without shared components in 4 apps.

## Scripts

- `npm start` starts the react scripts app
- `npm run build` exports the components as parsed and minified script to /dist folder. Please, manually update semver version number in package.json before running this command to publish updated components' code

## Deploying

- the package.json files in each module's folder is the remnant of a monorepo attempt via Lerna. It didn't work out, so we opted for boiling the code down to ESM via a separate webpack config in root.
- to deploy changes:
  - change the version number in package.json at project root level to reflect the change (semver)
  - run `npm run build` - this will build minified script in /dist folder
  - push the result to repo
