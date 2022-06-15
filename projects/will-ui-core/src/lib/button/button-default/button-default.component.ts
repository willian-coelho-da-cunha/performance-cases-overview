import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'will-button-default',
  templateUrl: './button-default.component.html',
  styleUrls: ['./button-default.component.scss'],
  host: {
    'class': 'will-ui-core'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDefaultComponent {

  @Input() label = '';

  @Input() ariaLabel = '';

  @Output() clickEvent = new EventEmitter<MouseEvent>();
}
