import { Component, OnInit } from '@angular/core';
import { ListPostService } from '../listPost.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  posts$: Observable <any>;


  constructor( private thePost : ListPostService, private router: Router ) { 
    this.posts$ = this.thePost.getPosts();
  }

  ngOnInit() {
    
  }

}





