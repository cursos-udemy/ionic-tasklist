import { Component } from "@angular/core";
import { TasklistProvider } from "../../providers/tasklist.provider";
import { NavParams } from "ionic-angular";
import { Lista } from "../../models";

@Component({
  selector: "page-agregar",
  templateUrl: "agregar.component.html"
})
export class AgregarPage {
  public lista: Lista;

  constructor(
    private tasklistProvider: TasklistProvider,
    private navParams: NavParams
  ) {
    const titulo: string = this.navParams.get("titulo");
    this.lista = new Lista(titulo);
  }
}
