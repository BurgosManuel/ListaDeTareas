import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Creamos la lista de tareas como un Array de strings.
  listaTareas: string[] = [];

  // Agregamos la tarea si no es un string vacio.
  agregarTarea(tarea:string):void {
    if (tarea != '') {
      this.listaTareas.push(tarea);
    }
  }

  //  Eliminamos la tarea a través del método splice().
  eliminarTarea(tarea:string):void {
    const arr: string[] = this.listaTareas;
    for(let i: number = 0; i < arr.length; i++ ) {
      if (arr[i] == tarea) {
        arr.splice(i, 1);
      }
    } 
  }

  // Condicionamos el (ngSubmit) para evitar agregar tareas que sean strings vacios o que contengan 'null', ya que este último valor es otorgado con el método reset().
  enviarFormulario(valorFormulario: any):void {
    if(valorFormulario.tarea !== '' && valorFormulario.tarea !== null) {
      this.agregarTarea(valorFormulario.tarea);
    }
  }
}

