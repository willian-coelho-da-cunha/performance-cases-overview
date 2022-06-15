import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'will-button-submit',
  templateUrl: './button-submit.component.html',
  styleUrls: ['./button-submit.component.scss'],
  host: {
    'class': 'will-ui-core'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonSubmitComponent {

  @Input() label = '';

  @Input() ariaLabel = '';
}
