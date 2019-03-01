import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent{
  nome: string = "Eduardo A. Cruz Junior";
  result: number = 0;

  calcular(valor1: number, valor2: number) : number {
     return valor1 + valor2;
  }

  clique() {
    //usar o getElementById ou Name do javascript para resolver isso
    //this.result = calcular();
  }

}
