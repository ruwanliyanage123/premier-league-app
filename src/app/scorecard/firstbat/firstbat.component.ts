import { Component } from '@angular/core';
import { FirstbatService } from 'src/app/services/firstbat.service';

@Component({
  selector: 'app-firstbat',
  templateUrl: './firstbat.component.html',
  styleUrls: ['./firstbat.component.css']
})
export class FirstbatComponent {

  constructor(private service: FirstbatService){}

  batting : any;
  bowling : any;
  total :any;
  overs: any;
  wickets: any;
  battingColumns: string[] = ['name', 'runs', 'balls', 'fours', 'sixes', 'sr'];
  bowlingColumns: string[] = ['name', 'overs', 'runs', 'wickets', 'economy'];

  ngOnInit(){
    this.getLastBattingResult();
  }

  getLastBattingResult():void{
     this.service.getFirstBattingResult().subscribe((score)=>{
         this.total = score.first_batting[0].team.totalRuns;
         this.overs = score.first_batting[0].team.overs;
         this.wickets = score.first_batting[0].team.wickets;
         this.batting = score.first_batting;
         this.bowling = score.first_bowling;
     });
  }
}
