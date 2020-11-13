import {
  render,
  queries,
  Matcher,
  MatcherOptions,
} from '@testing-library/react';
import { queryHelpers, buildQueries } from '@testing-library/react';

// The queryAllByAttribute is a shortcut for attribute-based matchers
// You can also use document.querySelector or a combination of existing
// testing library utilities to find matching nodes for your query
const queryAllByDataCy = (
  container: HTMLElement,
  id: Matcher,
  options: MatcherOptions
): HTMLElement[] =>
  queryHelpers.queryAllByAttribute('data-cy', container, id, options);

const getMultipleError = (c: HTMLElement, dataCyValue: Matcher) =>
  `Found multiple elements with the data-cy attribute of: ${dataCyValue}`;
const getMissingError = (c: HTMLElement, dataCyValue: Matcher) =>
  `Unable to find an element with the data-cy attribute of: ${dataCyValue}`;

const [
  queryByDataCy,
  getAllByDataCy,
  getByDataCy,
  findAllByDataCy,
  findByDataCy,
] = buildQueries(queryAllByDataCy, getMultipleError, getMissingError);

export {
  queryByDataCy,
  queryAllByDataCy,
  getByDataCy,
  getAllByDataCy,
  findAllByDataCy,
  findByDataCy,
};

const customRender = <E extends React.ReactElement>(
  ui: E,
  options: MatcherOptions
): any => render(ui, { queries: { 
    ...queries,
    queryByDataCy,
    queryAllByDataCy,
    getByDataCy,
    getAllByDataCy,
    findAllByDataCy,
    findByDataCy 
  }, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
