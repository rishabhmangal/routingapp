import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  myId: any;
  myAction: any;
  constructor(private ac: ActivatedRoute) {}

  ngOnInit(): void {
    this.myId = this.ac.snapshot.params['id'];
    this.myAction = this.ac.snapshot.params['action'];
  }
}
