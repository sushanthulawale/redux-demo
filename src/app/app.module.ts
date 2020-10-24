import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { NgRedux, NgReduxModule, DevToolsExtension} from 'ng2-redux';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IAppState, rootReducer, INITIAL_STATE} from './store';
import { fromJS, Map} from 'immutable';


// import { AppComponent } from './app.component';
// import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(ngRedux: NgRedux<IAppState>,
      devtools: DevToolsExtension){
        var enhancer= isDevMode() ?  [devtools.enhancer()] : [];
        //ngRedux.configureStore(rootReducer, fromJS(INITIAL_STATE));
        ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancer);
     }
}
