import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../../core/services/hackernews.service';
import { HackerNews } from '../../core/models/hackernews.model';
import { switchMap, mergeMap, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { concat } from 'rxjs/operators/concat';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private hns: HackerNewsService) { }
  hackerNews: any;
  hackerPosts: Array<Object>;
  isComplete: boolean;

  ngOnInit() {
    this.hackerPosts = [];
    this.isComplete = false;
    this.listTopStories();
  }

  listTopStories() {
    this.hns.getTopStories().subscribe(res => {
      // sync map over the IDS and create observables that will eventually give us the story info
      const topStoryReqs = res.map(id => this.hns.getStoryInfo(id));
      // source becomes our array of returned observables
      const source = Rx.Observable.concat(...topStoryReqs);
      // subscribe to our observable, push to our initialized empty array
      source.subscribe(
        x => { this.hackerPosts.push(x); },
        // console log our error because who needs SPLUNK
        err => console.log(err),
        // on observable complete we're just gonna set an isComplete flag ot true (we can add a spinner here or something for UI)
        () => { this.isComplete = true; }
      );
    });
  }

}
