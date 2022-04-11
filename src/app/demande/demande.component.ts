import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demande } from './demande';
import { DemandeService } from '../services/demande.service';
@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.scss']
})
export class DemandeComponent implements OnInit {

  demande: Demande = new Demande();
  submitted = false;

  constructor(private demandeService: DemandeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newDemande(): void {
    this.submitted = false;
    this.demande = new Demande();
  }

  saveDemande() {
    this.demandeService.createDemande(this.demande).subscribe(data => {
      console.log(data)
      this.demande = new Demande();
      this.gotoList();
    },
    error => console.log(error)
    );
  }
  onSubmit() {
    console.log(this.demande);
    this.saveDemande();    
  }
  gotoList() {
    this.router.navigate(['/demandelist']);
  }
}
