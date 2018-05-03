import { Component, OnInit } from '@angular/core';
import { ListPostService } from '../listPost.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit {
  post: any;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private ListPostService: ListPostService,

  ) {
    route.params.subscribe(params => {
      ListPostService.get(params.id).subscribe(post => {
        this.post = post;
      });
    });
  }

  ngOnInit() {
  }

}

