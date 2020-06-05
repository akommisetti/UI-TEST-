import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-common-dropdown',
  templateUrl: './common-dropdown.component.html',
  styleUrls: ['./common-dropdown.component.scss']
})
export class CommonDropdownComponent implements OnInit {

  @Input() labelName: String = "";
  @Input() dataList: Array<String> = [];
  @Output() selectedValue = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  valueChanged(value:String){
    this.selectedValue.emit({value});
  }
}
