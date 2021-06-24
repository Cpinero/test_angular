import { Component, OnInit } from '@angular/core';
import { HogwartsService } from 'src/app/services/hogwarts.service';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  public form:FormGroup | any;
  public estudiantes:any[] = [];
  public alert:boolean = false;
  public hoy: any;

  constructor(public _hs:HogwartsService, private fb:FormBuilder) {
    this._hs.getEstudiantes().subscribe((data:any) =>{ // cargamos los estudiantes mediante le servicio
      this.estudiantes = data;
      this.hoy =  new Date().toISOString().split("T")[0]; //ajustar la fecha del input date
    });
    this.crearFormulario();
  }

  crearFormulario(){
    this.form = this.fb.group({
        name:['',Validators.required],
        patronus:[''],
        dateOfBirth:['',Validators.required],
    });
  }

  guardarEstudiante(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return
    }
    let fecha = this.form.value.dateOfBirth.split("-").reverse().join("-");
    this.form.value.dateOfBirth = fecha;
    let recoveredData = localStorage.getItem('estudiantes');
    if(recoveredData == null){
      let estudiantes = [this.form.value];
      localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
      this.form.reset();
      this.alert = true;
      setTimeout(()=>{
        this.alert = false;
      }, 2000);
    }else{
      let data = JSON.parse(recoveredData);
      data.push(this.form.value)
      localStorage.setItem('estudiantes', JSON.stringify(data));
      this.form.reset();
      this.alert = true;
      setTimeout(()=>{
        this.alert = false;
      }, 2000);
    }
  }


  ngOnInit(): void {
  }

  get nombreNoValido(){
    return this.form.get('name').invalid && this.form.get('name').touched
  }
  get fechaNoValida(){
    return this.form.get('dateOfBirth').invalid && this.form.get('dateOfBirth').touched
  }

}
