import { Component } from '@angular/core';
import { LastbatService } from 'src/app/services/lastbat.service';



@Component({
  selector: 'app-lastbat',
  templateUrl: './lastbat.component.html',
  styleUrls: ['./lastbat.component.css']
})
export class LastbatComponent {
  constructor(private service: LastbatService){}

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
     this.service.getLastBattingResult().subscribe((score)=>{
         this.total = score.second_batting[0].team.totalRuns;
         this.overs = score.second_batting[0].team.overs;
         this.wickets = score.second_batting[0].team.wickets;
         this.batting = score.second_batting;
         this.bowling = score.second_bowling;
     });
  }
  
}
