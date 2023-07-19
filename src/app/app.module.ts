import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { DetailsProduitComponent } from './details-produit/details-produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AjouterProduitComponent,
    DetailsProduitComponent,
    ListProduitComponent,
    EditProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
