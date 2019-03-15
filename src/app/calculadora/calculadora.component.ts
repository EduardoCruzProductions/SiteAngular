import {Component, OnInit} from '@angular/core';
import {Conta} from '../classes/Conta';

@Component({
  selector: 'calculadora-component',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent{

  n1 : string;
  n2 : string;
  results = new Array<Conta>();

  calcular() : void{

    let v1 : number = parseInt(this.n1);
    let v2 : number = parseInt(this.n2);
    let c : Conta = new Conta(v1,v2,v1+v2);

    this.results.push(c);
    this.n1 = "";
    this.n2 = "";

  }

  excluir(i: number) : void{
    this.results.splice(i, 1);
  }

  editar(c: Conta){
    this.results.splice(this.results.indexOf(c), 1);
    this.n1 = String(c.n1);
    this.n2 = String(c.n2);
  }

}
