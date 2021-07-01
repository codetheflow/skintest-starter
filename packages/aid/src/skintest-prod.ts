import { extend } from '@skintest/common';
import { DEV } from './skintest-dev';
import { SkintestEnv } from './skintest-env';

// todo: get rid of any
export const PROD: SkintestEnv = extend<any>(
  DEV,
  {
    options: {
      headless: true,
      timeout: 60 * 1000,
    }
  }
);