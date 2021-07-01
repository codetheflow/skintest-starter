import { LaunchOptions, Plugin } from '@skintest/platform';

export interface SkintestEnv {
  readonly options: Partial<LaunchOptions>;
  readonly paths: string[];
  readonly plugins: Plugin[];
  readonly project: RegExp;
}