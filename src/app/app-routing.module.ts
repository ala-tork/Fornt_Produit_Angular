import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { DetailsProduitComponent } from './details-produit/details-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';

const routes: Routes = [
  {path:"",redirectTo:"/listProduct",pathMatch:"full"},
  {path:"listProduct",component:ListProduitComponent},
  {path:"AddProduct",component:AjouterProduitComponent},
  {path:"Details/:id",component:DetailsProduitComponent},
  {path:"UpdateProduct/:id",component:EditProduitComponent},

  //NotFound

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
