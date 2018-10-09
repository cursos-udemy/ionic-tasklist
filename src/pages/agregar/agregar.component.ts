import { Component } from "@angular/core";
import { TasklistProvider } from "../../providers/tasklist.provider";

@Component({
  selector: "page-agregar",
  templateUrl: "agregar.component.html"
})
export class AgregarPage {
  constructor(private tasklistProvider: TasklistProvider) {}
}
