import { Component } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent {
  constructor(public _service:ProductServiceService){}
   products:any;

/*  ngOnInit(): void {
    this._service.getProduit()
    .subscribe(response => {
      this.products = response;
    });
  }*/

  ngOnInit(): void {
    this._service.searchBarTouched$.subscribe(
      (value => {
        if (value.length === 0) {
          this._service.getProduit().subscribe(
            res => {
        console.log(res);

              this.products = res;
            })
        } else {
          console.log("else")
          this._service.searchByName(this._service.searchInput).subscribe(
            res => {
              this.products = res;
            })
        }
      })
    
  );console.log(this.products);

}




  delete(id:any){
    this._service.delete(id).subscribe(
      res=>{
        console.log(id);
        //get the new update 
        this.ngOnInit();
      },err=>{
        console.log(err);
        
      }
    )
  }
}
