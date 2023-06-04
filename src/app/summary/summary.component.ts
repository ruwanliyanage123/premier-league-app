import { Component } from '@angular/core';
import { MatchSummaryService } from '../services/match-summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent {
   first_batting : any;
   first_bowling : any;
   second_batting : any;
   second_bowling : any;
   constructor(private service: MatchSummaryService){}

   ngOnInit(){
    this.getMatchSummary();
   }

   getMatchSummary(): void{
     this.service.getMatchSummary()
     .subscribe((sum)=>{
        this.first_batting = sum.first_batting;
        this.first_bowling = sum.first_bowling;
        this.second_batting = sum.second_batting;
        this.second_bowling = sum.second_bowling;
     });
   }
}
