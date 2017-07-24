import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  demo = 'demo demo demo demo demo demo demo demo demo demo demo demo demo demo demo demo demo demo demo demo demo demo demo demo demo demo demo demo demo '
  backgroundColor = 'red'
  fontColor = 'white'
  description: string   

  selectBackgroundColor(value){
    this.backgroundColor = value;
  }

  selectFontColor(value){
    this.fontColor = value;
  }

  dataReceived(description){    
    this.description = description;
  }
}