import { Component } from "@angular/core";
import { TasklistProvider } from "../../providers/tasklist.provider";
import { NavParams } from "ionic-angular";
import { Lista, ListaItem } from "../../models";

@Component({
  selector: "page-agregar",
  templateUrl: "agregar.component.html"
})
export class AgregarPage {
  public lista: Lista;
  public nombreTarea: string;

  constructor(
    private tasklistProvider: TasklistProvider,
    private navParams: NavParams
  ) {
    // leer el parametro titulo
    const titulo: string = this.navParams.get("titulo");

    // verificar si se envio el parametro lista
    if (this.navParams.get("lista")) {
      this.lista = this.navParams.get("lista");
    } else {
      this.lista = new Lista(titulo);
      this.tasklistProvider.agregarLista(this.lista);
    }
    // inicializo el nombre de la tarea
    this.nombreTarea = "";
  }

  public agregarTarea(): void {
    console.log("Nombre Tarea: ", this.nombreTarea);

    if (this.nombreTarea.length === 0) {
      console.warn("nombre de la Tarea incompleto");
      return;
    }

    let nuevaTarea = new ListaItem(this.nombreTarea);
    this.lista.items.push(nuevaTarea);
    this.tasklistProvider.saveStorage();

    this.nombreTarea = "";
  }

  public actualizar(item: ListaItem): void {
    item.completado = !item.completado;
    const pendientes = this.lista.items.filter(itemData => {
      return !itemData.completado;
    }).length;
    console.log(pendientes);

    if (pendientes === 0) {
      this.lista.terminada = true;
      this.lista.terminadaEn = new Date();
    } else {
      this.lista.terminada = true;
      this.lista.terminadaEn = new Date();
    }
    
    this.tasklistProvider.saveStorage();
  }

  public eliminar(index: number): void {
    this.lista.items.splice(index, 1);
    this.tasklistProvider.saveStorage();
  }
}
