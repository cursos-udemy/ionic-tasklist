import { Component } from "@angular/core";
import { TasklistProvider } from "../../providers/tasklist.provider";
import { Lista } from "../../models";
import { NavController } from "ionic-angular";
import { AgregarPage } from "../agregar/agregar.component";

@Component({
  selector: "page-pendientes",
  templateUrl: "pendientes.component.html"
})
export class PendientesPage {
  listas: Lista[] = [];

  constructor(private tasklistProvider: TasklistProvider,
    private navController:NavController) {
    this.listas = this.tasklistProvider.listas;
  }

  public listaSeleccionada(lista: Lista) {
    console.log(lista);
  }

  public agregarLista() {
    this.navController.push(AgregarPage);
  }
}
