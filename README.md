# Personal Expense Tracker

A small, client-side single-page web app to track daily expenses — add, edit, list, and persist expenses in the browser using localStorage. Built with vanilla ES modules and bundled with Webpack as a learning/starter project.

## Features
- Add expenses with name and amount
- Edit and remove individual expenses
- Clear all expenses at once
- Totals and average displayed
- Persistence via localStorage (no backend required)

## Tech stack
- Languages: JavaScript, HTML, CSS
- Bundler: Webpack (dev server + production build)
- Notable tooling: html-webpack-plugin, css-loader, style-loader

## Project structure
```
src/
  index.html           App HTML (SPA shell)
  index.js             Entry point — imports styles and modules
  styles/style.css     App styles
  modules/
    expense.js         Expense and ExpenseTracker classes (business model)
    storage.js         localStorage persistence (save/load)
    ui.js              UI rendering, form validation and event handlers
```

## Get started
Prerequisites: Node.js and npm.

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Build a production bundle:

```bash
npm run build
```

Lint the code:

```bash
npm run lint
npm run lint:fix
```

Open your browser to the dev server address (webpack-dev-server will show the URL). The app runs entirely in the browser and requires no environment variables.

## Notes & suggestions
- IDs are generated with `crypto.randomUUID()` in `src/modules/expense.js`; add a fallback if you need IE11/support for older browsers.
- `src/modules/storage.js` quietly ignores malformed or empty stored data; consider adding an import/export JSON backup feature.
- Screenshots, a demo GIF, and a short usage guide would make the README more friendly for new users.

## License
MIT
