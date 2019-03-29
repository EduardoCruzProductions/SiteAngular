import { Component, OnInit } from '@angular/core';
import { Estado } from '../classes/Estado';
import { ServiceEstado } from '../service/service.estado';

@Component({
  selector: 'teste-component',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent{

  estados = this.service.buscar();
  estado: Estado = new Estado();

  constructor(private service: ServiceEstado){
    
  }

  adicionar() : void{

    let cancel: boolean = false;

    if(this.estado.getNome() == null || this.estado.getNome() == ""){
        cancel = true;
        alert('Preencha o campo Nome!');
    }

    if(this.estado.getSigla() == null || this.estado.getSigla() == "" || cancel){
        cancel = false;
        alert("Preecha o campo Sigla!");
    }

    this.service.adicionar(this.estado);
    this.estado = new Estado();

  }

  excluir(i: number) : void{
    this.service.excluir(i);
  }

  alterar(i: number) : void{
    let estado: Estado = this.estados[i];
    this.service.alterar(estado);
  }

  mostrarDetalhes(i: number) : void{
    this.estado = this.estados[i];
  }

}
