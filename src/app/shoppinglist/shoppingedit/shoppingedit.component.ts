import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IngredientModel } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit {

@ViewChild('NameInput')  nameinputRef :ElementRef;
@ViewChild("PriceInput") priceinputRef :ElementRef;

// @Output() EventEmitForShoppingItems = new EventEmitter<IngredientModel>();

  constructor(private ShoppingListService :ShoppingListService) { }
  inputSaved(){
    const nameRef = this.nameinputRef.nativeElement.value;
    const priceRef = this.priceinputRef.nativeElement.value;
    // this.EventEmitForShoppingItems.emit(new IngredientModel(nameRef, priceRef));
    this.ShoppingListService.addIngredient(new IngredientModel(nameRef, priceRef))

  }

  ngOnInit(): void {
  }

}
