import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Input() label: string = '';

  @Input() disabled: boolean = false;

  @Input() ariaLabel: string = '';

  @Output() private clickEvent: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  public click($event: MouseEvent): void {
    this.clickEvent.emit($event);
  }
}
