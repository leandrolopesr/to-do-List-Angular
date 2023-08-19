import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Lista de Tarefas';

  public tarefa = "";
  public items = [""];


add(){
  if(this.tarefa == ""){
    window.alert("Digite uma Tarefa Valida!")
  }
  else{
    this.items.push(this.tarefa);
  }
  
}

remove(item: string){
  this.items.splice(this.items.indexOf(item), 1);
}
  
}
