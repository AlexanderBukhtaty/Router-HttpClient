import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  public itemId;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    // this.itemId = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.params.subscribe((params) => {
      this.itemId = params['id'];
    });

    // this.router.events.subscribe((e) => {
    //   console.log(e);
    // });

  }
  goTo(id) {
    this.router.navigate(['/items', id]);
    this.router.navigate(['/items', id], {
      queryParams: {
        fromItem: this.itemId
      },
      queryParamsHandling: 'merge'
    });
  }
}
