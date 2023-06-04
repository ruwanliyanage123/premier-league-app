import { Component } from '@angular/core';
import { FirstbatService } from 'src/app/services/firstbat.service';

@Component({
  selector: 'app-firstbat',
  templateUrl: './firstbat.component.html',
  styleUrls: ['./firstbat.component.css']
})
export class FirstbatComponent {
  score: any;
  batsman: any;

  constructor(private service: FirstbatService){}

  ngOnInit(): void {
    this.getSummary();
  }

  getSummary(): void {
    this.service.getSummary()
      .subscribe((data: any) => {
        this.score = data;
        this.batsman = this.score.first_batting
      });
  }

  displayedColumns: string[] = ['name', 'runs','balls', 'fours', 'sixes', 'sr'];

}
