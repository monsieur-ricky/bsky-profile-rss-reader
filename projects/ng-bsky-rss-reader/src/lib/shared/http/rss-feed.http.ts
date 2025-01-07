import { Injectable } from '@angular/core';
import { FeedData, Profile, RssFeed } from '../models/rss-feed.model';

@Injectable({ providedIn: 'root' })
export class RssFeedHttpService {
  // To avoid CORS errors, https://allorigins.win/ is being used as a proxy to request the RSS feed
  private readonly allowOrigins = 'https://api.allorigins.win/raw?url=';
  private readonly bskyRssUrl = 'https://bsky.app/profile/{id}/rss';

  loadFeed(profile: string): Promise<FeedData> {
    const url = `${this.bskyRssUrl.replace('{id}', profile)}`;

    return fetch(`${this.allowOrigins}${url}`)
      .then((response) => response.text())
      .then((str) => new DOMParser().parseFromString(str, 'text/xml'))
      .then((data) => {
        const items = Array.from(data.querySelectorAll('item'));
        const profile: Profile = {
          description: data?.querySelector('description')?.textContent ?? 'n/a',
          title: data?.querySelector('title')?.textContent ?? 'n/a',
          link: data?.querySelector('link')?.textContent ?? 'n/a'
        };
        const feed = items.map(
          (item) =>
            ({
              link: item?.querySelector('link')?.textContent,
              description: item?.querySelector('description')?.textContent,
              date: item?.querySelector('pubDate')?.textContent
            } as RssFeed)
        );

        return {
          profile,
          feed
        };
      });
  }
}
