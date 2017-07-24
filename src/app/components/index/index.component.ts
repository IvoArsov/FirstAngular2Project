import { Component, EventEmitter, Output, Input } from '@angular/core'
import data from '../../data/Data'

@Component({
  selector: 'index-page',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent{  
  data = data;
  @Output() sendDescriptionToMain = new EventEmitter<string>();
  @Output() sendPhotoToMain = new EventEmitter<string>();   

  viewDetails(article){    
    this.sendDescriptionToMain.emit(article.description);
    this.sendPhotoToMain.emit(article.photoUrl);
  }
}
