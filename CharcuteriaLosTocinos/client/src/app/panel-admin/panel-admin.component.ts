import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.scss']
})
export class PanelAdminComponent implements OnInit {

  MyNewForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    precio: new FormControl(''),
    description: new FormControl(''),
    imagen: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }
  Clic(datos) { console.log(datos); }
}
