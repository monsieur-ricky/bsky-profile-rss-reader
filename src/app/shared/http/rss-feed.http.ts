import { Injectable } from '@angular/core';
import { RssFeed } from '../models/rss-feed.model';

@Injectable({ providedIn: 'root' })
export class RssFeedHttpService {
  // To avoid CORS errors, https://allorigins.win/ is being used as a proxy to request the RSS feed
  readonly #allowOrigins = 'https://api.allorigins.win/raw?url=';
  readonly #bskyRssUrl = 'https://bsky.app/profile/{id}/rss';

  loadFeed(profile: string): Promise<RssFeed[]> {
    const url = `${this.#bskyRssUrl.replace('{id}', profile)}`;

    return fetch(`${this.#allowOrigins}${url}`)
      .then((response) => response.text())
      .then((str) => new DOMParser().parseFromString(str, 'text/xml'))
      .then((data) => {
        const items = Array.from(data.querySelectorAll('item'));

        return items.map(
          (item) =>
            ({
              link: item?.querySelector('link')?.textContent,
              description: item?.querySelector('description')?.textContent,
              date: item?.querySelector('pubDate')?.textContent
            } as RssFeed)
        );
      });
  }
}
