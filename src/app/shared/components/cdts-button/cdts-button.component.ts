import { Component, Input, OnInit } from '@angular/core';
import { CdtsButtonType } from '../../Interfaces/shared.interface';

@Component({
  selector: 'cdts-button',
  templateUrl: './cdts-button.component.html',
  styleUrls: ['./cdts-button.component.scss']
})
export class CdtsButtonComponent implements OnInit {

  @Input() public label: string;
  // @Input() public type: CdtsButtonType;
  @Input() public type: string;
  @Input() public disabled: boolean;
  @Input() public buttonType: string;

  constructor() { }

  ngOnInit(): void {
    this.disabled = this.disabled ? this.disabled : false
  }

  checkDisabled(){
    this.disabled ?? event.stopPropagation()
  }
}
