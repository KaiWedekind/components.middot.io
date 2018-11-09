import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'middot-timer',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
