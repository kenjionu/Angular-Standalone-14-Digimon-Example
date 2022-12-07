import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Digimon, DigimonServiceService } from './digimon.service.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-digimon-list-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './digimon-list-card.component.html',
  styleUrls: ['./digimon-list-card.component.sass']
})
export class DigimonListCardComponent implements OnInit {
  
  @Input() digi!: Digimon;
  @Input() index!: number;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  digimonView(digi:Digimon): void{
    this.route.navigateByUrl('/details/'+ digi.id)
  }
  
}
