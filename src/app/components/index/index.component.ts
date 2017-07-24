import { Component, EventEmitter, Output, Input } from '@angular/core'
import data from '../../data/Data'

@Component({
  selector: 'index-page',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent{  
  data = data;
  @Output() sendDataToMain = new EventEmitter<string>();   

  viewDetails(article){    
    this.sendDataToMain.emit(article.description);
  }
}
