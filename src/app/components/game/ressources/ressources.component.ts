import { Component, OnInit } from '@angular/core';
import {LocalService} from '../../../services/local.service';



@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.css']
})



export class RessourcesComponent implements OnInit {


  constructor(public localService: LocalService ) { }

  ngOnInit(): void {

  }

}


