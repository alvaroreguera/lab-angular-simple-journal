import { Injectable } from '@angular/core';
import { Post } from './post-interface';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs";

@Injectable()

export class ListPostService {
    BASE_URL: string = 'http://localhost:3000';
    constructor(private http: Http) {}
  
    getPosts() {
      return this.http.get(`${this.BASE_URL}/api/journal-entries`)
        .map((res) => res.json());
    }

    get(id) {
        return this.http.get(`${this.BASE_URL}/api/journal-entries/${id}`)
          .map((res) => res.json());
      }

    }