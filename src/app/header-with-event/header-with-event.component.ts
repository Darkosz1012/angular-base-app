import { Component, ContentChild, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-with-event',
  templateUrl: './header-with-event.component.html',
  styleUrls: ['./header-with-event.component.scss']
})
export class HeaderWithEventComponent implements OnInit {

  @Input() text: string;


  @Output() whenClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  func(elem: any){
    this.whenClick.emit(elem.innerText);
  }

}
