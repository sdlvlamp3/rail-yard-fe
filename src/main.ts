import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


//   bootstrapApplication(AppComponent, {
//     providers: [provideCharts(withDefaultRegisterables())],
//   }).catch((err) => console.error(err));



const mergedConfig = {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideCharts(withDefaultRegisterables()),
  ],
};

bootstrapApplication(AppComponent, mergedConfig)
  .catch((err) => console.error(err));
