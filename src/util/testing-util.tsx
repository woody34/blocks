import { Matcher, MatcherOptions, waitFor } from '@testing-library/react';
import redux from '../store';
import { render, fireEvent, screen } from './testing-library';
import { Provider } from 'react-redux';
import React from 'react';

export interface TestingUtil {
  getByDataCy: <E extends HTMLElement>(value: string) => E;
  getAllByDataCy: <E extends HTMLElement>(value: string) => E[];
  getByText: <E extends HTMLElement>(value: Matcher) => E;
}

export interface TestUtilOptions extends MatcherOptions {
  provideStore?: boolean
}

export const testUtil = async (
  component: JSX.Element,
  options: TestUtilOptions,
): Promise<TestingUtil> => {

  const wrappedComponent = (): JSX.Element => {
    return options.provideStore ? (<Provider store={redux.store}>{component}</Provider>) : component;
  };

  const { getByDataCy, getAllByDataCy } = await render(wrappedComponent(), options);

  const util: TestingUtil = {
    getByDataCy:  <E extends HTMLElement>(value: string): E => getByDataCy(value),
    getAllByDataCy: <E extends HTMLElement>(value: string): E[] => getAllByDataCy(value),
    getByText: <E extends HTMLElement>(value: Matcher): E => screen.getByText(value) as E,
  };

  return util ;
};

export { screen, fireEvent, waitFor };
