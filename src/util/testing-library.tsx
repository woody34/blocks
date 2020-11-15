import { render, queries, Matcher, MatcherOptions, Queries } from '@testing-library/react';
import { queryHelpers, buildQueries } from '@testing-library/react';
import React from 'react';

const queryAllByDataCy = (container: HTMLElement, id: Matcher, options: MatcherOptions): HTMLElement[] =>
  queryHelpers.queryAllByAttribute('data-cy', container, id, options);

const getMultipleError = (c: HTMLElement, selector: Matcher) =>
  `Found multiple elements with the data-cy attribute of: ${selector}`;
const getMissingError = (c: HTMLElement, selector: Matcher) =>
  `Unable to find an element with the data-cy attribute of: ${selector}`;

const [, getAllByDataCy, getByDataCy] = buildQueries(queryAllByDataCy, getMultipleError, getMissingError);

export { getByDataCy, getAllByDataCy };

interface CustomerRender extends Queries {
  getByDataCy: typeof getByDataCy;
  getAllByDataCy: typeof getAllByDataCy;
}

const customRender = <E extends React.ReactElement>(ui: E, options: MatcherOptions): CustomerRender => {
  const renderer = render(ui, {
    queries: {
      ...queries,
      getByDataCy,
      getAllByDataCy,
    },
    ...options,
  });
  return (renderer as unknown) as CustomerRender;
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
