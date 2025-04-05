import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  async getByCategory(id:number): Promise<Producto[]> {
    const res = await fetch('/data/database.json');
    const data: Categoria[] = await res.json();
    return data.find(Categoria => Categoria.id === id)?.productos || [];
  }

  async getById(id:number): Promise<Producto> {
    const res = await fetch('/data/database.json');
    const data: Categoria[] = await res.json();
    for (const categoria of data) {
      const producto = categoria.productos.find(producto => producto.id === id);
      if (producto) {
        return producto;
      }
    }
    throw new Error('Producto no encontrado');
  }
}
