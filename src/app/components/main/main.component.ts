import { Component, EventEmitter, Input, Output } from '@angular/core'
import data from '../../data/Data'

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent { 
  backgroundColor = '#b30000';
  fontColor = 'white';
  description = data[0].description;
  photoUrl = data[0].photoUrl;   
  isShowPhoto = false;
  showHidePhotoBtn = 'Hide Photo';  
  totalDescriptionLength = this.description.length;
  remainingDescriptionLength = this.description.length;
  descriptionStartIndex = 0;  
  isDescriptionTotal = false;
  descriptionTextLengthStep = 500;
  fontSize = 26;

  
  selectBackgroundColor(value){
    this.backgroundColor = value;
  }

  selectFontColor(value){
    this.fontColor = value;
  }

  descriptionReceived(description){    
    this.description = description;
  }

  photoReceived(photoUrl){
    this.photoUrl = photoUrl;
  }

  showHidePhoto(){
    if(!this.isShowPhoto){
      this.isShowPhoto = true;
      this.showHidePhotoBtn = 'Show Photo';
    }else{
      this.isShowPhoto = false;
      this.showHidePhotoBtn = 'Hide Photo'
    }
  }

  showMoreText() { 
    if (this.remainingDescriptionLength <= this.descriptionTextLengthStep) {
      this.isDescriptionTotal = true;
    }

    this.description += this.description.slice(this.descriptionStartIndex, this.descriptionStartIndex + 500);    
    this.remainingDescriptionLength -= this.descriptionTextLengthStep;
    this.descriptionStartIndex += this.descriptionTextLengthStep;
  }

  increaseFont(){
    this.fontSize++;
  }

  decreaseFont(){
    this.fontSize--;
  }
}