import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { product } from '../../model/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'dashboard-component',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {
  products: product[] = [];
  filteredproducts: product[] = [];
  searchQuery: string = '';
  sortByPriceAsc: boolean = true;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchproducts();
  }

  fetchproducts(): void {
    let data = this.dataService.getProductData()
    this.products = data;
    this.filteredproducts = [...this.products];
  }

  toggleSortByPrice(): void {
    this.sortByPriceAsc = !this.sortByPriceAsc;

  }




}
