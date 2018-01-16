import { appModule } from './app/main.module';

import './style.scss';
import './js/toogle.js';

angular.bootstrap(document.body, [appModule], { strictDi: true });
