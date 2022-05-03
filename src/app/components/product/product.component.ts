import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.products);

  }

  tableHeadings: string[] = ["ID", "NAME", "PRICE", "LOCATION", "PRICE DESC."]
  products: any = [
    { "Name": "Cheese", "Price": 2.50, "Location": "Refrigerated foods", "Type": "C" },
    { "Name": "Crisps", "Price": 3, "Location": "the Snack isle", "Type": "M" },
    { "Name": "Pizza", "Price": 4, "Location": "Refrigerated foods", "Type": "?" },
    { "Name": "Chocolate", "Price": 1.50, "Location": "the Snack isle", "Type": "C" },
    { "Name": "Caviar", "Price": 45.50, "Location": "Refrigerated foods", "Type": "E" },
    { "Name": "Self-raising flour", "Price": 1.50, "Location": "Home baking", "Type": "C" },
    { "Name": "Ground almonds", "Price": 3, "Location": "Home baking", "Type": "M" }
  ];
}
