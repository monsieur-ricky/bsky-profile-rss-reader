# BlueSky Profile RSS Reader

BlueSky Profile RSS Reader is a demo project application designed to fetch and display RSS feeds from BlueSky profiles. It allows users to enter a BlueSky profile and view their updates in a consolidated feed.
This project focuses on using modern Angular practices and **not relying on Zone.js or RxJS**.

## Key Features:
- Load BlueSky post from a given profile handle or id.
- Show selected profile description.
- Zone.js-Free Angular: Demonstrates the use of Angular without Zone.js using only Signals.
- No use of RxJS relying only on the new `resource` API for asynchronous requests.
- All styles were created with Tailwind CSS.

## Live Demo
Try out the live demo: [TODO]

## Prerequisites

- **Node.js** (v20.15.0 or higher recommended)
- **Angular CLI** (v19+)
- A modern browser (e.g., Chrome, Edge, or Safari)

## Running Demo Locally

1. Clone the Repository:
   ```bash
   git clone git@github.com:monsieur-ricky/bsky-profile-rss-reader.git
   ```

2. Install Dependencies:
   ```bash
   cd bsky-profile-rss-reader
   npm ci
   ```

3. Start the development server:
   ```bash
   ng start
   ```

4. Open your browser and navigate to: [http://localhost:4200](http://localhost:4200)


## Contributing
Contributions are welcome! Please open an issue or submit a pull request to suggest features, fix bugs, or enhance the demo.

**Feel free to share your thoughts or suggest improvements!**
