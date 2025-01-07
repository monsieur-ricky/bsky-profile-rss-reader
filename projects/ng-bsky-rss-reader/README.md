# BlueSky Profile RSS Reader

BlueSky Profile RSS Reader is a library designed to fetch and display RSS feeds from BlueSky profiles. It allows users to enter a BlueSky profile and view their updates in a consolidated feed.
This project focuses on using modern Angular practices and **not relying on Zone.js or RxJS**.

## Key Features:
- Load BlueSky post from a given profile handle or id.
- Show selected profile description.
- Zone.js-Free Angular: Demonstrates the use of Angular without Zone.js using only Signals.
- No use of RxJS relying only on the new `resource` API for asynchronous requests.
- All styles were created with Tailwind CSS.

## Live Demo
Try out the live demo: [https://monsieur-ricky.github.io/bsky-profile-rss-reader/](https://monsieur-ricky.github.io/bsky-profile-rss-reader/)

## Prerequisites
- **Node.js** (v20.15.0 or higher recommended)
- **Angular CLI** (v19+)
- **Tailwind CSS** (v3)
- A modern browser (e.g., Chrome, Edge, or Safari)

## Installation
1. Install the library using NPM:
    ```bash
    npm install ng-bsky-rss-reader
    ```

2. Install Tailwind CSS and dependencies (skip if already present in the project):
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init
    ```

3. Update `tailwind.config.js` file to include `ng-bsky-rss-reader` files in the content array:
    ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./src/**/*.{html,ts}",
        "./node_modules/ng-bsky-rss-reader/**/*.{html,js,mjs}", // Add this line
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    };
    ```

## Usage
1. Import the library in your component:
    ```typescript
    import { BskyRssReaderComponent } from 'ng-bsky-rss-reader';

    @Component({
      selector: 'app-root',
      imports: [BskyRssReaderComponent],
    })
    ```

2. Add the component to your template:
    ```html
    <ng-bsky-rss-reader profileId="your.bsky.handle" />
    ```

3. Full example:
    ```typescript
    import { Component, signal } from '@angular/core';
    import { BskyRssReaderComponent } from 'ng-bsky-rss-reader';

    @Component({
      selector: 'bpr-root',
      imports: [BskyRssReaderComponent],
      template: `
        <div class="h-full w-screen flex items-center justify-center">
          <div class="h-[500px] w-[500px]">
            <ng-bsky-rss-reader [profileId]="profile()" />
          </div>
        </div>
      `
    })
    export class AppComponent {
      profile = signal('ricky.pt');
    }
    ```


## Contributing
Contributions are welcome! Please open an issue or submit a pull request to suggest features, fix bugs, or enhance the demo.

**Feel free to share your thoughts or suggest improvements!**
