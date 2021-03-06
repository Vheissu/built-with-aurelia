import Aurelia, { StyleConfiguration } from 'aurelia';
import { RouterConfiguration } from '@aurelia/router';
import { MyApp } from './my-app';

import shared from './shared.css';

Aurelia
  .register(StyleConfiguration.shadowDOM({
    sharedStyles: [shared]
  }))
  .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(MyApp)
  .start();
