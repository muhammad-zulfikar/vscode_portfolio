## What's this?

[VS Code](https://code.visualstudio.com/) / [Atom One Dark](https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onedark) inspired developer portfolio app. :blush:

Forked from https://github.com/caglarturali/caglarturali.github.io.bak.

## How to ...

### ... run locally?


Make sure you have [Node](https://nodejs.org/en/) and [git](https://git-scm.com/) installed.

- Clone the repo

  ```bash
  git clone https://github.com/muhammad-zulfikar/vscode_portfolio.git
  ```

- Install the dependencies

  ```bash
  npm install
  ```

- Fire up a development server

  ```bash
  npm start
  ```

### ... push to GitHub pages?


- Install gh-pages

  ```bash
  npm install gh-pages --save-dev
  ```
  
- Change the homepage script link in package.json to your username and repository name.
 
  ```bash
  "homepage": "http://muhammad-zulfikar.github.io/vscode_portfolio",
  ```

- Deploy

  ```bash
  npm run deploy
  ```

#### Credits

- [typed.js](https://github.com/mattboldt/typed.js/) by [@mattboldt](https://github.com/mattboldt)

- [multilanguage-hello-json](https://github.com/novellac/multilanguage-hello-json) by [@novellac](https://github.com/novellac)
