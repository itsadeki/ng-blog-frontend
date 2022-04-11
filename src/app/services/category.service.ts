import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Category from '../models/Category.model';
import Entity from '../models/Entity.model';
import Response from '../models/Response.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private API_URL = environment.api;

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<Response<Entity<Category>[]>>(
      `${this.API_URL}/categories`
    );
  }
}
