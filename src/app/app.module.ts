import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { TestComponent } from './testComponent/testComponenet.component';
import { TrialComponent } from './trial/trial.component';

@NgModule({
  declarations: [
    AppComponent, ServerComponent, ServersComponent, TestComponent, TrialComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
