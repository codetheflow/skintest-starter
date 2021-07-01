import { tagFilter, ttyLogo, ttyPause, ttyReport, ttySummaryReport } from '@skintest/plugins';
import * as path from 'path';
import { SkintestEnv } from './skintest-env';

export const DEV: SkintestEnv = {
  paths: [
    path.resolve(__dirname, '../../')
  ],
  project: /.*/,
  options: {
    headless: false,
    timeout: 30 * 1000
  },
  plugins: [
    ttyLogo()
    , ttyReport()
    , ttySummaryReport()
    , ttyPause()
    , tagFilter({
      method: 'include-all-when-no-matches',
      include: ['#now'],
    })
  ]
};