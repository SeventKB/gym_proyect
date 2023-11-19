import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor() { }

  public users: any[] = [];
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