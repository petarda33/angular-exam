import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PetService } from 'src/app/services/pet.service';
@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
public addForm: FormGroup;
  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      type: new FormControl(null, Validators.required),
      description: new FormControl(null, [Validators.required, Validators.maxLength(200)])
    }
    )
  }

  public onAdd() {
    this.petService.addPet(this.addForm.getRawValue());
  }

}
