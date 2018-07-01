import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HackerNews } from '../models/hackernews.model';
import { Observable } from 'rxjs/Observable';
import { map, mergeMap, concatMap } from 'rxjs/operators';


@Injectable()
export class HackerNewsService {
    constructor(private http: HttpClient) { }
    hnBaseApiUrl = 'https://hacker-news.firebaseio.com/v0';
    hnTopStoriesUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    hnStoryInfoUrl = 'https://hacker-news.firebaseio.com/v0/item/';


    getTopStories(): Observable<any> {
        return this.http.get(this.hnTopStoriesUrl);
    }

    getStoryInfo(id: string): Observable<any> {
        return this.http.get(this.hnStoryInfoUrl + `${id}` + '.json');
    }

    getTopStoriesInfo(): Observable<any> {
        return this.http.get(this.hnBaseApiUrl + '/topstories.json')
            .pipe(
                map((res: any) => res),
                concatMap((story: any) => {
                    console.log(story);
                    return this.http.get(this.hnBaseApiUrl + `/item/${story[0]}` + '.json')
                        .pipe(
                            map((res: any) => res));
                }));
    }
}
