export interface RssFeed {
  description: string;
  date: string;
  link: string;
}

export interface Profile {
  description: string;
  title: string;
  link: string;
}

export interface FeedData {
  profile: Profile;
  feed: RssFeed[];
}
