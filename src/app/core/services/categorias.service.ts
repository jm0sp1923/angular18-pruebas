import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  constructor() {}

  async getAll(): Promise<Categoria[]> {
    const res = await fetch('/data/database.json');
    const data: Categoria[] = await res.json();
    return data;
  }

  async getById(id: number): Promise<Categoria |undefined>{
   const res = await fetch('/data/database.json');
    const data: Categoria[] = await res.json();
    return data.find(Categoria => Categoria.id === id) ;
   
  }

}
