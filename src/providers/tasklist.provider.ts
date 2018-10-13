import { Injectable } from "@angular/core";
import { Lista } from "../models";

@Injectable()
export class TasklistProvider {
  public listas: Lista[] = [];

  constructor() {
    console.log("TasklistProvider [OK]");
    this.loadStorage();
  }

  public agregarLista(lista: Lista) {
    this.listas.push(lista);
    this.saveStorage();
  }

  public eliminarLista(lista: Lista): void {
    this.listas = this.listas.filter(listData => {
      return listData.id !== lista.id;
    });

    this.saveStorage();
  }

  public saveStorage() {
    localStorage.setItem("data", JSON.stringify(this.listas));
  }

  public loadStorage() {
    let valueStorage: string = localStorage.getItem("data");
    if (valueStorage) {
      this.listas = JSON.parse(valueStorage);
    } else {
      this.listas = [];
    }
  }
}
