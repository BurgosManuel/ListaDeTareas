import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaTareas: string[] = [];

  agregarTarea(tarea:string):void {
    if (tarea != '') {
      this.listaTareas.push(tarea);
    }
  }
  eliminarTarea(tarea:string) {
    const arr: string[] = this.listaTareas;
    for(let i: number = 0; i < arr.length; i++ ) {
      if (arr[i] == tarea) {
        arr.splice(i, 1);
      }
    } 
  }
}

