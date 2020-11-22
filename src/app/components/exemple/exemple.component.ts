import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-exemple',
  templateUrl: './exemple.component.html',
  styleUrls: ['./exemple.component.scss']
})
export class ExempleComponent implements OnInit {
  @Input() params: any;
  @Output() monEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  public triggerEvent(): void {
    this.monEvent.emit(this.params);
  }

}
