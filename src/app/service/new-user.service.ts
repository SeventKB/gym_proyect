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
    //this._userEditable = this.users.at(index);
    this.indice = index;
  }

  /*getEditableUser(){
    return this._userEditable;
  }*/

  replaceUser(user:any){
    this.users.at(this.indice).cedula = user.cedula;
    this.users.at(this.indice).nombres = user.nombres;
    this.users.at(this.indice).apellidos = user.apellidos;
    this.users.at(this.indice).direccion = user.direccion;
    this.users.at(this.indice).edad = user.edad;
  }

}