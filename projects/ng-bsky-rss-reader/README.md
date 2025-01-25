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
- **Tailwind CSS** (v4)
- A modern browser (e.g., Chrome, Edge, or Safari)

## NOTE: Angular (at v19.1.3) isn't fully compatible with TailwindCSS v4. For that reason, it's necessary to add `--force` or `--legacy-peer-deps` when installing the NPM dependencies, i.e., via `npm install`. 

## Installation
1. Install Tailwind CSS and dependencies (more information in the [official installation documentation](https://tailwindcss.com/docs/installation/framework-guides/angular)). Jump to step 4 if Tailwind v4 is already present in the project:
    ```bash
    npm install tailwindcss @tailwindcss/postcss postcss --force
    ```

2. Create a `.postcssrc.json` file in the root of your project and add the `@tailwindcss/postcss` plugin to your PostCSS configuration.:
    ```json
    {
      "plugins": {
        "@tailwindcss/postcss": {}
      }
    }
    ```

3. Import Tailwind CSS to your main styles file (e.g., `src/styles.css`):
    ```css
    @import "tailwindcss";
    ```

4. Install the library using NPM:
    ```bash
    npm install ng-bsky-rss-reader --legacy-peer-deps
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
