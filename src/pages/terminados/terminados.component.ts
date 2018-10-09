import { Component } from "@angular/core";
import { TasklistProvider } from "../../providers/tasklist.provider";
import { Lista } from "../../models";

@Component ({
    selector: 'app-terminados',
    templateUrl: 'terminados.component.html'
})
export class TerminadosPage {

    listas:Lista [] = [];

    constructor (private taskListProvider:TasklistProvider) {
        this.listas = this.taskListProvider.listas;
    }

    public listaSeleccionada(lista: Lista) {
        console.log(lista);
      }
}