import { Estado } from '../classes/Estado';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceEstado{
  estado: Estado = new Estado();
  listEstado = new Array<Estado>();

  adicionar(estado: Estado) : void {
    this.listEstado.push(estado);
  }

  excluir(i: number) : void {

  }

  alterar(estado: Estado) : void {

  }

  buscar() : Array<Estado> {
    return this.listEstado;
  }

}
