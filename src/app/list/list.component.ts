import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public items = [1, 2, 3, 4];
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.items = this.activatedRoute.snapshot.data['items'];
  }

}
