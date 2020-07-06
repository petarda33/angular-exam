import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PetComponent } from './components/pet/pet.component';
import { PetsComponent } from './components/pet/pets/pets.component';
import { AddPetComponent } from './components/add-pet/add-pet.component';
import { MouseOverDirective } from './mouse-over.directive';
import { Max20Pipe } from './max20.pipe';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PetResolver } from './pet.resolver';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
  path: 'list',
  component: PetsComponent,
  resolve: { pet$: PetResolver },
  },
  {
  path: 'add',
  component: AddPetComponent
  },
  ];

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    PetsComponent,
    MouseOverDirective,
    Max20Pipe,
    AddPetComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
