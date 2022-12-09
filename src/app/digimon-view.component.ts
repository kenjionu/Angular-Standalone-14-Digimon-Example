import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigimonList, DigimonServiceService } from './digimon.service.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-digimon-view',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './digimon-view.component.html',
  styleUrls: ['./digimon-view.component.scss'],
  providers: [DigimonServiceService]
})
export class DigimonViewComponent implements OnInit {
  digimon$!: any;
  digimon: any | undefined = '';

  loading: boolean = false;
  errorMessage: any;
  constructor(readonly digimonService: DigimonServiceService, public route: ActivatedRoute, public rrouter: Router) { }

  ngOnInit(): void {
    this.digimon$ = this.digimonService.getDigimonName(this.route.snapshot.params['id']).subscribe(
      (response: DigimonList | any) => {                           //next() callback
        console.log('response received')
        this.digimon = response;
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

  comeBackDigimonList(){
    this.rrouter.navigateByUrl('/list')
  }



}
