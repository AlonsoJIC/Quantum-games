import { User } from "./user.model";
import { Colors } from "@models/colors.model";
import { List } from "@models/list.model";
import { Card } from "@models/card.model";

export interface Board {
  id: string;
  title: string;
  backgroundColor: Colors;
  members: User[];
  lists: List[];
  cards: Card[];
}
