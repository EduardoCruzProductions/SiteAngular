import { Component, OnInit } from '@angular/core';
import { Estado } from '../classes/Estado';

@Component({
  selector: 'teste-component',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent{
  estados = new Array<Estado>();
  estado: Estado = new Estado();

  constructor(){

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

    this.estados.push(this.estado);
    this.estado = new Estado();

  }

  excluir(i: number) : void{
    this.estados.splice(i, 1);
  }

  alterar(i: number) : void{
    let estado: Estado = this.estados[i];
    this.estados.splice(i, 1);
    this.estado = estado;
    console.log(this.estado.getNome())
  }

}
