import { ICardContentItem } from "./card-content-item.interface";

export interface IAppCardProps {
  action: string;
  cardItems: ICardContentItem[];
  subtitle: string;
  title: string;
}
