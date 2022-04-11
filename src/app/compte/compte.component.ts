import { Component, OnInit } from '@angular/core';
import { CompteService } from '../services/compte.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {

  listComptes : any;
  constructor(private compteService: CompteService) { }

  ngOnInit(): void {
    this.compteService.listCompte().subscribe(data =>{
      this.listComptes= data;
      console.log(this.listComptes);
    })
  }

}
