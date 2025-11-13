# axe DevTools Demos

https://workshop2.dequelabs.com

## Prerequisites

- node 18
- npm 8+

## Installation

```sh
$ npm install
```

## Starting local server

```sh
$ npm start
```

## axe DevTools Linter

- set up the axe DevTools Linter Connector: https://docs.deque.com/linter/4.0.0/en/axe-linter-connector
- move the downloaded connector to `.husky/_/`
- set the `AXE_LINTER_API_KEY` env var to a valid production linter key

## axe Developer Hub

### Running local cypress tests

- Install appropriate packages `npm install`
- Start the local server `npm start`
- Create a project within [axe Developer Hub](https://axe.deque.com/axe-watcher/projects), select "cypress" as the project type
- Use the API key to create environment variables for `API_KEY` and `SERVER_URL`
  - `export API_KEY=<your_api_key>`
  - `export SERVER_URL=https://axe.deque.com/`
- Run the cypress tests `npm run cypress:watcher`
- Check your results in [axe Developer Hub](https://axe.deque.com/axe-watcher/projects)

### Viewing the results of the GitHub Action

- Create a pull request in this repo
- Wait for the GitHub Action to run
- Watcher will add a comment to the PR e.g., "axe Watcher found 28 accessibility violations in this PR."

## axe DevTools Pro Browser Extension Demos

### Automatic Color Contrast Analyzer

- [auto color contrast analyzer blog post](https://www.deque.com/blog/axe-devtools-extension-update-new-color-contrast-analyzer/)
- [auto color contrast analyzer documentation](https://docs.deque.com/devtools-html/4.0.0/en/devtools-color-contrast-resolver)

#### Steps to demo

- ensure needs review is not disabled ([see configuration docs](https://docs.deque.com/devtools-html/4.0.0/en/devtools-configuration#general-settings))
- run auto scan via "Scan ALL of my page" on https://workshop2.dequelabs.com (or localhost if running locally)
- Click the button
  > We've found (8) color contrast issues for you to review. Click to automatically review them.
- All 8 of the needs review color contrast issues should now be resolved automatically

### Automatic identification of interactive elements via computer vision

- [Interactive Elements IGT documentation](https://docs.deque.com/devtools-html/4.0.0/en/devtools-igt-interactive-elements)

#### Steps to demo

- create or navigate to saved test for https://workshop2.dequelabs.com (or localhost if running locally)
- start new Interactive Elements IGT run
- observe the automatic predictions of interactive elements (specifically the "COOK {RECIPE_NAME}" buttons)
  - NOTE: intermittently AI may predict some non interactive elements (like table cells) but it will always predict all 8 of the "COOK" buttons which are missing interactive semantics.

### Automatic identification of table headers via computer vision

- [Interactive Elements IGT documentation](https://docs.deque.com/devtools-html/4.0.0/en/devtools-igt-table)

#### Steps to demo

- create or navigate to saved test for https://workshop2.dequelabs.com (or localhost if running locally)
- start new Table IGT run
- select the "Full Recipe Breakdown" table at the bottom of the page
- select "A table with 1 row of headers"
- observe the automatic predictions of table headers
  - for the first (header) row, notice how it says "Our AI identified this as a header cell. If that is correct, click the 'THIS IS NOT A DATA CELL' button below."
- click "THIS IS NOT A DATA CELL" for each of the cells in the first row
- once you get to the first real data cell ("Chocolate Cake"), notice that the table header is already pre-selected (:robot:) so all you have to do is click "NEXT" for the entire table test
