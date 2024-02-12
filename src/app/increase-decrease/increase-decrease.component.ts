import { Component } from '@angular/core';

@Component({
  selector: 'app-increase-decrease',
  templateUrl: './increase-decrease.component.html',
  styleUrls: ['./increase-decrease.component.css']
})
export class IncreaseDecreaseComponent {
  number = 0;

  increase_Num(){
    this.number ++;
  }

  decrease_Num(){
    if(this.number > 0)
    this.number--;
}
}