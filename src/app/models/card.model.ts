export interface Card {
  id: number;
  title: string;
  simpleDescription: string;
  description?: string;
  subtitle: string;
  image: string;
  images?: string[];
}
