import { Component } from '@angular/core';
import { FirstbatService } from '../services/firstbat.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent {
  firstBattingTeamName : any;
  lastBattingTeamName : any;

   constructor(private service : FirstbatService){}

   ngOnInit(): void{
     this.getTeamName();
   }
   
   getTeamName(): void{
    this.service.getFirstBattingResult()
    .subscribe((sum: any) => {
      this.firstBattingTeamName = sum.first_batting[0].team.teamName;
      this.lastBattingTeamName = sum.first_bowling[0].team.teamName;
    });
   }
}
