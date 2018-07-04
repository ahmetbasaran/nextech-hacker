import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../../core/services/hackernews.service';
import { shareReplay, map } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private hns: HackerNewsService) { }
  hackerPosts: Array<Object>;
  isComplete: boolean;
  searchText: any;
  postViewed: boolean;
  lastClear: any;
  timeNow: any;

  ngOnInit() {
    this.hackerPosts = [];
    this.isComplete = false;
    this.lastClear = localStorage.getItem('lastClear');
    this.timeNow = Date.now();

    // clearing our local storage every 15 minutes
    if ((this.timeNow - this.lastClear) > 900000) {
      localStorage.clear();
      localStorage.setItem('lastClear', this.timeNow);
    }

    // checks to see if there's savedData in our local storage, if there is we retrieve and use this data instead of making our http calls.
    if (localStorage.getItem('savedData')) {
      const cachedData = JSON.parse(localStorage.getItem('savedData'));
      this.isComplete = true;
      this.hackerPosts = cachedData;
    } else {
    // if there's no savedData in our localstorage, we call our listBestStories to get the list of best stories.
      this.listBestStories();
      localStorage.setItem('lastClear', this.timeNow);
    }
  }

  listBestStories() {
    this.hns.getBestStories().subscribe(res => {
      // sync map over the IDS and create observables that will eventually give us the story info
      const bestStoryReqs = res.map(id => this.hns.getStoryInfo(id));
      // source becomes our array of returned observables
      // concat calls in order, merge will make a quicker call - time dropped from 19s to 3s
      const source = Observable.merge(...bestStoryReqs);
      // subscribe to our observable, push to our initialized empty array
      source.subscribe(
        x => {
          this.hackerPosts.push(x);
        },
        // console log our error because who needs SPLUNK
        err => console.log(err),
        // on observable complete we're just gonna set an isComplete flag to true (we can add a spinner here or something for UI)
        () => {
          this.isComplete = true;
          localStorage.setItem('savedData', JSON.stringify(this.hackerPosts));
        }
      );
    });
  }

}
