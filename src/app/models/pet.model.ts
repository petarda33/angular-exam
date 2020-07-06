export interface Pet {
  name: string;
  type: PetType;
  description: string;
}

export enum PetType {
  DOG = 1,
  CAT
}
