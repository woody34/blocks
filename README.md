# Getting started

## Tech Stack

### Frontent

React JS
  - [Functional Composition](https://reactjs.org/docs/components-and-props.html)
  - [Material UI](https://material-ui.com/)
  - [Redux](https://redux.js.org/introduction/getting-started)
  - [React Router Dom](https://reactrouter.com/web/guides/quick-start)
  - [Jest](https://jestjs.io/docs/en/getting-started) & [Testing Library React](https://testing-library.com/docs/react-testing-library/intro/)
  - [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)


## Project Structure

```sh
├── public # Public Assets
├── README.md # Setup Instructions
├── src # Source Code
│   ├── App.css # Main app styles
│   ├── App.tsx # Main app and router
│   ├── common # Common repo data types
│   ├── components # Common components
│   │   └── Component # Folder named after component
│   │       ├── Component.tsx # Component
│   │       └── util.ts
│   ├── index.css
│   ├── index.tsx
│   ├── mock # Mock tools and repo data
│   │   ├── data
│   │   │   └── podcast.ts
│   │   └── service.ts # Tools for mocking services
│   ├── feature # Feature folder example
│   │   ├── components # Feature specific components
│   │   │   ├── Component.tsx
│   │   ├── Page.tsx # Feature page (routable)
│   │   ├── util.ts
│   │   └── store # Feature specific store module
│   │       ├── actions.ts
│   │       ├── reducer.ts
│   │       └── types.ts
│   ├── routes.ts # Routes and route meta data
│   ├── services # Api services and tools for building crud services
│   ├── store # Common store modules
│   │   └── module # Short module name
│   │       ├── actions.ts
│   │       ├── reducer.ts
│   │       └── types.ts
│   └── util # Common utilities
└── tsconfig.json # Typescript Config

```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm lint`

Performs linting operations against the project using the `./eslintrc.json` config

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

