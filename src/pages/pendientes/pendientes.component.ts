import { Component } from "@angular/core";
import { TasklistProvider } from "../../providers/tasklist.provider";
import { Lista } from "../../models";
import { NavController, AlertController, Alert } from "ionic-angular";
import { AgregarPage } from "../agregar/agregar.component";

@Component({
  selector: "page-pendientes",
  templateUrl: "pendientes.component.html"
})
export class PendientesPage {
  listas: Lista[] = [];

  constructor(
    private tasklistProvider: TasklistProvider,
    private navController: NavController,
    private alertController: AlertController
  ) {
    this.listas = this.tasklistProvider.listas;
  }

  public listaSeleccionada(lista: Lista) {
    this.navController.push(AgregarPage, {
      titulo: lista.titulo,
      lista: lista
    });
  }

  public agregarLista() {
    const alerta = this.alertController.create({
      title: "Nueva lista",
      message: "Nombre de la nueva lista",
      inputs: [{ name: "titulo", placeholder: "Título de la lista" }],
      buttons: [
        { text: "Cancelar" },
        {
          text: "Aceptar",
          handler: data => {
            if (data.titulo.length === 0) {
              console.warn("Titulo de la lista incompleto");
              return;
            }

            this.navController.push(AgregarPage, {
              titulo: data.titulo
            });
          }
        }
      ]
    });

    alerta.present();
  }

  public eliminarLista(lista: Lista): void {
    this.tasklistProvider.eliminarLista(lista);
  }
}
