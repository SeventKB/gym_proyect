import { Component, OnInit, Inject} from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'; 
import { NewUserService } from 'src/app/service/new-user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{

  usuarioEditable!: FormGroup;

  constructor(private fb: FormBuilder, 
    private dialogRef: MatDialogRef<EditUserComponent>, 
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dataService: NewUserService)
    {
    this.usuarioEditable = this.fb.group({
      nombres: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      rol: '',
    })
  }

  ngOnInit() {
    this.usuarioEditable.patchValue(this.data);
 }

  editarUsuario(){
    this.dialogRef.close(this.usuarioEditable);

      if (this.usuarioEditable.valid){
        this.dataService.replaceUser(this.usuarioEditable.value);      
      }
  }
}
