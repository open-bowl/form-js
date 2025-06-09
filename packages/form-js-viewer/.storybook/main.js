import { join, dirname } from "path"


import preact from '@preact/preset-vite';

import svgr from "vite-plugin-svgr";;



/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')))
}

/** @type { import('@storybook/preact-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath("@storybook/experimental-addon-test")
  ],
  "framework": {
    "name": getAbsolutePath('@storybook/preact-vite'),
    "options": {}
  },
  "viteFinal": async (config) => {
    return {
      ...config,
      plugins: [...config.plugins, svgr(), preact()],
      esbuild: {
        ...config.esbuild,
        jsx: 'automatic',
        jsxImportSource: 'preact'
      }
    };
  }
};

export default config;