import { Component } from '@angular/core'
import { Data } from '../../data/Data'

@Component({
  selector: 'index-page',
  templateUrl: './index.component.html'
})
export class IndexComponent{  
  data = new Data();
  test = 'test'; 
}
