import { Component } from "@angular/core";
import { AgregarPage } from "../agregar/agregar.component";
import { NavController, AlertController } from "ionic-angular";

@Component({
  selector: "page-pendientes",
  templateUrl: "pendientes.component.html"
})
export class PendientesPage {
  constructor(
    private navController: NavController,
    private alertController: AlertController
  ) {}

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
}
