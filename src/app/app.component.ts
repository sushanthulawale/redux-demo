import { Observable } from 'rxjs';
import { IAppState } from './store';
import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { INCREMENT } from './action';
import { Map} from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-demo';
  //counter = 0;
  //@select() counter: Observable<number>;
  @select(s => s.get('counter')) counter;

  constructor(private ngRedux: NgRedux<Map<string, any>>){
    // var subscription = ngRedux.subscribe(() => {
    // var store = ngRedux.getState();
    // this.counter = store.counter;
    //  });
  }
  increment(){
    //this.counter++;
    this.ngRedux.dispatch({type: INCREMENT });
  }
}
