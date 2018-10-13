import { Component, Input } from "@angular/core";
import { TasklistProvider } from "../providers/tasklist.provider";
import { NavController } from "ionic-angular";
import { AgregarPage } from "../pages/agregar/agregar.component";
import { Lista } from "../models";

@Component({
  selector: "app-listas",
  templateUrl: "listas.component.html"
})
export class ListasComponent {
  @Input()
  terminada: boolean = false;
  listas: Lista[] = [];

  constructor(
    private tasklistProvider: TasklistProvider,
    private navController: NavController
  ) {
    this.listas = this.tasklistProvider.listas;
  }

  public listaSeleccionada(lista: Lista) {
    this.navController.push(AgregarPage, {
      titulo: lista.titulo,
      lista: lista
    });
  }

  public eliminarLista(lista: Lista): void {
    this.tasklistProvider.eliminarLista(lista);
  }
}
