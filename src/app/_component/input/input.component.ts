import { Component, EventEmitter, Output } from '@angular/core';
import { Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input()
  labelValue!: string;
  @Input()
  type!: string;
  @Input()
  name!: string;
  @Input()
  id!: string;
  @Input()
  class!: string;
  @Input()
  value!:string;
  @Input()
  placeholder="";

  @Output()
  inputEmitter: EventEmitter<string> = new EventEmitter<string>();
  emitInput(input:string): void{
    this.value=input;
    this.inputEmitter.emit(input);
  }

}
