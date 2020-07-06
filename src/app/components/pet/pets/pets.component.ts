import { Component, OnInit, OnDestroy } from '@angular/core';
import { PetService } from '../../../services/pet.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit, OnDestroy {
pets$ = [];
subscription$: Subscription;
  constructor(private petService: PetService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription$ = this.petService._pets$.subscribe(array => this.pets$ = array);
  }
  ngOnDestroy(): void {
  }
}
