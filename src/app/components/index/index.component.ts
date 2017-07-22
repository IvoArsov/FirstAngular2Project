import { Component } from '@angular/core'
import data from '../../data/Data'

@Component({
  selector: 'index-page',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent{  
  data = data;  

  viewDetails(article){
    
  }
}
