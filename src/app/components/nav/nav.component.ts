import { Component, OnInit } from '@angular/core';
import Category from 'src/app/models/Category.model';
import Entity from 'src/app/models/Entity.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  public categories: Entity<Category>[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService
      .findAll()
      .subscribe(({ data }) => (this.categories = data));
  }
}
