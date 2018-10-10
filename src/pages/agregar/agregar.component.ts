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
    const titulo: string = this.navParams.get("titulo");
    this.lista = new Lista(titulo);
    this.nombreTarea = "";
  }


  public agregarTarea ():void {
    console.log("Nombre Tarea: ", this.nombreTarea);

    if (this.nombreTarea.length === 0) {
      console.warn("nombre de la Tarea incompleto");
      return;
    }
    
    let nuevaTarea = new ListaItem (this.nombreTarea);
    this.lista.items.push (nuevaTarea);

    this.nombreTarea = "";
  }

  public actualizar (item:ListaItem):void {
    item.completado = !item.completado;
  } 

  public eliminar(index:number):void {
    this.lista.items.splice( index, 1);
  }
}
