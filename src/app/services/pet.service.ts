import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pet, PetType } from '../models/pet.model';

@Injectable({providedIn: 'root'})
export class PetService {
  public _pets$: BehaviorSubject<Pet[]> = new BehaviorSubject<Pet[]>([
    {
      name: "Rexi",
      type: PetType.DOG,
      description: "Etiam in congue metus. In at pulvinar nulla, sollicitudin vulputate elit. " +
        "Mauris posuere sit amet ex nec gravida."
    },
    {
      name: "Buksi",
      type: PetType.DOG,
      description: "Etiam in congue metus. In at pulvinar nulla, sollicitudin vulputate elit. " +
        "Mauris posuere sit amet ex nec gravida."
    },
    {
      name: "Samu",
      type: PetType.DOG,
      description: "Etiam in congue metus. In at pulvinar nulla, sollicitudin vulputate elit. " +
        "Mauris posuere sit amet ex nec gravida."
    },
    {
      name: "Pajkos",
      type: PetType.DOG,
      description: "Etiam in congue metus. In at pulvinar nulla, sollicitudin vulputate elit. " +
        "Mauris posuere sit amet ex nec gravida."
    },
    {
      name: "Félix",
      type: PetType.DOG,
      description: "Etiam in congue metus. In at pulvinar nulla, sollicitudin vulputate elit. " +
        "Mauris posuere sit amet ex nec gravida."
    },
    {
      name: "Loncsos",
      type: PetType.CAT,
      description: "Etiam in congue metus. In at pulvinar nulla, sollicitudin vulputate elit. " +
        "Mauris posuere sit amet ex nec gravida."
    },
    {
      name: "Moncsos",
      type: PetType.CAT,
      description: "Etiam in congue metus. In at pulvinar nulla, sollicitudin vulputate elit. " +
        "Mauris posuere sit amet ex nec gravida."
    },
    {
      name: "Mancsos",
      type: PetType.CAT,
      description: "Etiam in congue metus. In at pulvinar nulla, sollicitudin vulputate elit. " +
        "Mauris posuere sit amet ex nec gravida."
    },
    {
      name: "Koncsos",
      type: PetType.CAT,
      description: "Etiam in congue metus. In at pulvinar nulla, sollicitudin vulputate elit. " +
        "Mauris posuere sit amet ex nec gravida."
    },
    {
      name: "Pontyos",
      type: PetType.CAT,
      description: "Etiam in congue metus. In at pulvinar nulla, sollicitudin vulputate elit. " +
        "Mauris posuere sit amet ex nec gravida."
    },
  ]);
  addPet(pet: Pet) {
  
    const currentValue = this._pets$.getValue();
    const updatedValue = [...currentValue, pet];
    console.log(this._pets$);
    this._pets$.next(updatedValue);
  }
}
