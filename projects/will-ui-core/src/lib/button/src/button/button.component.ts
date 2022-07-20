import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

import { ButtonIconEnum } from '../enum/button-icon.enum';
import { ButtonObjectiveEnum } from '../enum/button-objective.enum';

@Component({
  selector: 'will-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    'class': 'will-ui-core'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnChanges {

  objectives = ButtonObjectiveEnum;

  icon: string = '';

  @Input() label: string = '';

  @Input() disabled: boolean = false;

  @Input() ariaLabel: string = '';

  @Input() objective = ButtonObjectiveEnum.Default;

  @Output() private clickEvent: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['objective']) {
      if (changes['objective'].currentValue === ButtonObjectiveEnum.Submit) {
        this.icon = ButtonIconEnum.RightArrow;

      } else {
        this.icon = ButtonIconEnum.None;
      }
    }
  }

  public click($event: MouseEvent): void {
    this.clickEvent.emit($event);
  }
}
