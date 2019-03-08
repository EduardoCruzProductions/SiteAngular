import {Component, OnInit} from '@angular/core';
import {Conta} from './classes/Conta';

@Component({
  selector: 'calculadora-component',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent{
  n1: string;
  n2: string;
  results = new Array<Conta>();

  calcular() : void{
    v1: number = parseInt(n1);
    v2: number = parseInt(n2);
    c: Conta = new Conta(v1,v2,v1+v2);
    this.results.push(c);
  }

  excluir(i: number) : void{
    this.results.splice(i, 1);
  }

  //falta alterar pra usar a classe Conta

}
