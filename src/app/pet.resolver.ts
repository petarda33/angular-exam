import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Pet } from './models/pet.model';
import { PetService } from '../app/services/pet.service';

@Injectable({ providedIn: 'root' })
export class PetResolver implements Resolve<Pet> {
    subscription$;
    pet$;
    constructor(private petService: PetService) { }

    public resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Pet> | Promise<Pet> | Pet {
        this.subscription$ = this.petService._pets$.subscribe(array => this.pet$ = array);
        return this.pet$;
    }
}