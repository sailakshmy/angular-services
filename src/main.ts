import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";
import { TasksService } from "./app/tasks.service";
import { LoggingService } from "./app/logging.service";

bootstrapApplication(
  AppComponent
  //     , {
  //   providers: [LoggingService],
  // }
).catch((err) => console.error(err));
