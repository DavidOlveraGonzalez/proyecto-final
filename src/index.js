//import {saludar} from './js/componentes.js';
import './styles.css';

import { Todo, Todolist } from './classes';
import {crearTodoHtml} from './js/componentes';

export const todoList = new Todolist();

todoList.todos.forEach(crearTodoHtml);

/*
const tarea = new Todo('Aprender Bootstrap 5');
todoList.nuevoTodo(tarea);

console.log(tarea);
crearTodoHtml(tarea);
*/

//let nombre=prompt('Escriba su nombre: ');
//saludar(nombre);