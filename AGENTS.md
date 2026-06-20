# Repository Guidelines

## Project Structure & Module Organization

This is a small Node.js service using Express. The main application entry point is `app.js`, which currently defines the `/hello` route and starts the server on port `3000`. Dependency metadata is kept in `package.json`, with the locked install state in `package-lock.json`. Runtime or agent configuration is stored in `setting.json` and `.claude/`; avoid committing local-only settings. The repository currently has no dedicated `src/`, `tests/`, or `assets/` directories. If the app grows, place route handlers and middleware under `src/` and tests under `tests/`.

## Build, Test, and Development Commands

- `npm install`: install dependencies from `package.json` and update `package-lock.json` if needed.
- `node app.js`: start the Express server locally on `http://localhost:3000`.
- `curl http://localhost:3000/hello`: verify the current JSON endpoint.
- `npm test`: currently a placeholder that exits with an error; update this when real tests are added.

There is no build step at present because the project uses plain CommonJS JavaScript without transpilation.

## Coding Style & Naming Conventions

Use CommonJS imports (`require`) to match the existing code. Prefer `const` by default and `let` only when reassignment is required. Keep indentation at two spaces, terminate statements with semicolons, and use single quotes for strings. Name files and route modules with short, lowercase names such as `routes.js` or `health.js`. Use descriptive route paths and return JSON for API responses.

## Testing Guidelines

No test framework is configured yet. When adding tests, prefer a lightweight setup such as Node's built-in test runner or Jest/Supertest for HTTP endpoints. Place tests in `tests/` and name them with `.test.js`, for example `tests/app.test.js`. Add a real `npm test` script and ensure it can run from a fresh checkout after `npm install`.

## Commit & Pull Request Guidelines

Recent commits use short, imperative messages such as `Add package.json and setting.json files for project setup`. Follow that style: start with a verb, keep the subject concise, and describe one logical change per commit.

Pull requests should include a brief summary, testing notes, and any relevant endpoint examples. Link related issues when available. For API changes, include sample requests/responses or screenshots of terminal output when helpful.

## Security & Configuration Tips

Do not commit `node_modules`, secrets, machine-specific Claude settings, or generated local files such as `.DS_Store`. Keep configuration values explicit and document any required environment variables when they are introduced.
