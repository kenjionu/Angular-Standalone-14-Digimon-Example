import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigimonList, DigimonServiceService } from './digimon.service.service';
import { DigimonListCardComponent } from './digimon-list-card.component';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-digimon-list',
  standalone: true,
  imports: [CommonModule, DigimonListCardComponent, HttpClientModule],
  templateUrl: './digimon-list.component.html',
  styleUrls: ['./digimon-list.component.sass'],
  providers: [DigimonServiceService]
})
export class DigimonListComponent implements OnInit {
  digimon: any | undefined;
 
  loading: boolean = false;
  errorMessage: any;
  constructor(readonly digiService: DigimonServiceService) { 
  }

  ngOnInit(): void {
    this.getDigimons()
  }
  public getDigimons() {
    this.loading = true;
    this.errorMessage = "";
    this.digiService.getDigimonApi()
      .subscribe(
        (response: DigimonList | any) => {                           //next() callback
          console.log('response received')
          this.digimon = response.content; 
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   //complete() callback
          this.loading = false; 
        })
  }

  redirectToDigimon(){
    
  }

 
}
