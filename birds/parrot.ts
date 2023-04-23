import { Bird, IBird } from "./bird";

export type ParrotColor = "red" | "blue" | "green" | "yellow";

export interface IParrot extends IBird {
  color: ParrotColor;
}

export class Parrot extends Bird {
  public color!: ParrotColor;
}
