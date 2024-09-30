import {ReactVideoProps} from './types';

declare global {
  interface ScreenOrientation {
    lock(orientation: ReactVideoProps['fullscreenOrientation']): Promise<void>;
  }
}
