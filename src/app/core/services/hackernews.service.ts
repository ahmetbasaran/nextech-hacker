import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HackerNews } from '../models/hackernews.model';
import { Observable } from 'rxjs/Observable';
import { map, mergeMap, concatMap } from 'rxjs/operators';


@Injectable()
export class HackerNewsService {
    constructor(private http: HttpClient) { }

    hnBestStoriesUrl = 'https://hacker-news.firebaseio.com/v0/beststories.json';
    hnStoryInfoUrl = 'https://hacker-news.firebaseio.com/v0/item/';

    // Left this as Observable<any> because we're really just returning an array of strings.
    getBestStories(): Observable<any> {
        return this.http.get(this.hnBestStoriesUrl);
    }

    // Returns our list of story information based on the ID passed in. Of type HackerNews in our Models folder.
    getStoryInfo(id: string): Observable<HackerNews> {
        return this.http.get<HackerNews>(this.hnStoryInfoUrl + `${id}` + '.json');
    }
}
