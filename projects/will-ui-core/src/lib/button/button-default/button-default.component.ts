import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

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
}
