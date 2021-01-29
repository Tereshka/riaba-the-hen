# Riaba the Hen [LIVE DEMO](https://tereshka.github.io/riaba-the-hen/)
## Standalone Babel/Webpack/React/Redux/FBT Demo

### Relevant package dependences:
[fbt](https://www.npmjs.com/package/fbt)  (runtime)  
[babel-plugin-fbt](https://www.npmjs.com/package/babel-plugin-fbt)  
[babel-plugin-fbt-runtime](https://www.npmjs.com/package/babel-plugin-fbt-runtime)  

* `yarn install` to pull in dependencies down
* `yarn clean-fbts` to clean all built files
* `yarn manifest` to generate enum and source manifests
* `yarn collect-fbts` to collect FBT translatable texts
* `yarn translate-all` to generate one single file with translations
* `yarn translate-split` to generate split translation dictionaries (in `src/dict`) from translation_input.json
* `yarn build` to generate static files in `./output/`.
  * The commands above are required to run this step
* `yarn start` to run a local server with hot reloading.
* `yarn test` to run unit tests.
* `yarn deploy` to deploy build on github pages.
