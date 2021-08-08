# Trending Songs Test App

#### Based on: NextJS Typescript Boilerplate

Bootstrap a developer-friendly NextJS app configured with:

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

## Getting started

- `npm install` to install all dependenccies
- `npm start dev` start dev server on `http://localhost:3000`

The repository uses `husky` to setup precommit hooks that runs the test and linters.

## Command Pallet

The following commands are available via `npm run` or `yarn run`:

- `dev`: Run dev server on `http://localhost:3000`
- `build`: Creat production build
- `start`: Start production server on `http://localhost:3000`
- `type-check`: Run typescript type checking
- `format`: Run prettier to reformat code
- `lint`: Run eslint
- `test:watch`: Run jest in watch mode for writing tests
- `test`: Run tests with jest
- `test-all`: Runs linter, typechecker and jest tests
