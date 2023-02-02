import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Input() item:string|undefined

//@input to hold the data from the parent
////item -property binding - dashboard html [item]"acno "

  constructor() { }
 @Output() onCancel=new EventEmitter();
 //user defind event -onClick
  ngOnInit(): void {
  }
 cancel(){
  this.onCancel.emit();
 }
}
