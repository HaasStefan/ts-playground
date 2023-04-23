import { Bird, IBird } from "./bird";

export interface IEagle extends IBird {
    hasClaws: boolean;
}

export class Eagle extends Bird {
    public hasClaws!: boolean;
}