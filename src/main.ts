import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


//need to check on this and errors?#@
  // bootstrapApplication(AppComponent, {
  //   providers: [provideCharts(withDefaultRegisterables())],
  // }).catch((err) => console.error(err));
