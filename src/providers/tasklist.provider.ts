import { Injectable } from "@angular/core";
import { Lista } from "../models";

@Injectable()
export class TasklistProvider {
  listas:Lista[] = [];

  constructor() {
      console.log("TasklistProvider [OK]");

      const l1 = new Lista("Recolectar piedras del infinito");
      const l2 = new Lista ("Heroes a vencer");

      this.listas.push(l1, l2);

      console.log(this.listas);      
  }
}
