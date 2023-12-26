import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() color: 'red' | 'green' | 'blue' | 'pink' | 'white' = 'red';
  @Input() typeBtn: 'reset' | 'submit' | 'button' = 'button';
  @Input() disabled = false;
  @Input() loading = false;

}
