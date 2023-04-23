export interface IBird {
  name: string;
  species: string;
  height: number;
}

export abstract class Bird {
  public name!: string;
  public species!: string;
  public height!: number;
}