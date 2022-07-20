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

  @Input() label: string = '';

  @Input() disabled: boolean = false;

  @Input() ariaLabel: string = '';

  @Output() private clickEvent: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  public click($event: MouseEvent): void {
    if (!this.disabled) {
      this.clickEvent.emit($event);
    }
  }
}
