import { Component, Input } from '@angular/core';
import { ICardContentItem } from 'src/app/models/card-content-item.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() listContentItems: ICardContentItem[] = [];
  @Input() action = '';
}
