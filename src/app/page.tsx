import 'bootstrap/dist/css/bootstrap.css';

import '../../styles/orbit-1.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import Landing from './landing/Landing';

import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

export default function Entry() {
  return <Landing />;
}
