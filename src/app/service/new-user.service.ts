import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor() { }

  users: any[] = [
    {nombres: '', apellidos: '', username: 'admin', email: 'admin@ug.edu.ec', rol: 'Administrador', contrasenia: 'admin'},
    {nombres: 'Jose', apellidos: 'Jimenez', username: 'jjimenezz', email: 'j_jimenez@ug.edu.ec', rol: 'Coach', contrasenia: '12345'},
    {nombres: 'Ana', apellidos: 'Naranjo', username: 'annaranjo', email: 'naranjo.a@ug.edu.ec', rol: 'Coach', contrasenia: '12345'},
    {nombres: 'Roberto', apellidos: 'Carpio', username: 'rcarpio', email: 'rober_carpio@ug.edu.ec', rol: 'Coach', contrasenia: '12345'},
    {nombres: 'Carlos', apellidos: 'Gómez', username: 'carlosgomez', email: 'gomez.c@ug.edu.ec', rol: 'Coach', contrasenia: 'qwerty'},
    {nombres: 'Laura', apellidos: 'Rodríguez', username: 'laurarod', email: 'rodriguez.l@ug.edu.ec', rol: 'Miembro', contrasenia: 'password123'},
    {nombres: 'Javier', apellidos: 'Sánchez', username: 'javiersan', email: 'sanchez.j@ug.edu.ec', rol: 'Coach', contrasenia: 'securepass'},
    {nombres: 'María', apellidos: 'Pérez', username: 'mariaperez', email: 'perez.m@ug.edu.ec', rol: 'Miembro', contrasenia: 'abc123'},
    {nombres: 'Elena', apellidos: 'Martínez', username: 'elenamart', email: 'martinez.e@ug.edu.ec', rol: 'Coach', contrasenia: 'pass1234'},
    {nombres: 'Alejandro', apellidos: 'López', username: 'alejandrolop', email: 'lopez.a@ug.edu.ec', rol: 'Miembro', contrasenia: 'ilovecoding'},
    {nombres: 'Isabel', apellidos: 'García', username: 'isabelgarcia', email: 'garcia.i@ug.edu.ec', rol: 'Coach', contrasenia: 'letmein'},
    {nombres: 'Diego', apellidos: 'Hernández', username: 'diegohern', email: 'hernandez.d@ug.edu.ec', rol: 'Miembro', contrasenia: 'd1e2g3o4'},
    {nombres: 'Sofía', apellidos: 'Díaz', username: 'sofiadiaz', email: 'diaz.s@ug.edu.ec', rol: 'Coach', contrasenia: 'p@ssw0rd'},
    {nombres: 'Ricardo', apellidos: 'Ortega', username: 'ricardoort', email: 'ortega.r@ug.edu.ec', rol: 'Miembro', contrasenia: 'summer2023'},
    {nombres: 'Patricia', apellidos: 'Fernández', username: 'patriciafer', email: 'fernandez.p@ug.edu.ec', rol: 'Coach', contrasenia: 'myp@ss'},
  ];
  _userEditable: any = [];
  indice: number = 0;

  getUsers(): any[] {
    return this.users;
  }

  addUser(data: any): any {
    this.users.push(data);
  }

  eliminarUser(index: number){
    this.users.splice(index, 1);
  }

  //para editar un usuario

  setUserEdit(index: number){
    this.indice = index;
  }

  replaceUser(user:any){
    this.users.at(this.indice).nombres = user.nombres;
    this.users.at(this.indice).apellidos = user.apellidos;
    this.users.at(this.indice).username = user.username;
    this.users.at(this.indice).email = user.email;
    this.users.at(this.indice).rol = user.rol;
  }

}