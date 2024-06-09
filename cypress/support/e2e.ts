import { setupUserway } from '@userway/a11y-cypress';

setupUserway({
  strict: false,
  saveReport: true,
  reportPath: './uw-a11y-reports',
});
