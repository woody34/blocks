import { Matcher, MatcherOptions, waitFor } from '@testing-library/react';
import React from 'react-dom';
import redux from '../store';
import { render, fireEvent, screen } from './testing-library';
import { Provider } from 'react-redux';
import { actionMiddleware } from '../podcast/util';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Actions, States } from '../store/types';
export interface TestingUtil {
  getByDataCy: <E extends HTMLElement>(value: Matcher) => E;
  getAllByDataCy: <E extends HTMLElement>(value: Matcher) => E[];
  getByText: <E extends HTMLElement>(value: Matcher) => E;
}

export interface TestUtilOptions extends MatcherOptions {
  provideStore?: boolean;
}

export const testUtil = (
  component: JSX.Element,
  options: TestUtilOptions,
): TestingUtil => {
  const wrappedComponent = (): JSX.Element => {
    return options.provideStore ? (
      <Provider store={redux.store}>{component}</Provider>
    ) : (
      component
    );
  };

  const { getByDataCy, getAllByDataCy } = render(wrappedComponent(), options);

  const util: TestingUtil = {
    getByDataCy: <E extends HTMLElement>(value: Matcher) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      return getByDataCy(value, options) as E;
    },
    getAllByDataCy: <E extends HTMLElement>(value: Matcher) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      return getAllByDataCy(value, options) as E[];
    },
    getByText: <E extends HTMLElement>(value: Matcher): E =>
      screen.getByText(value) as E,
  };

  return util;
};

export const mockStore = <T extends States>(
  state: T,
  actionLogger: (action: Actions) => void,
): MockStoreEnhanced<T> => {
  const mock = configureMockStore<T>([thunk, actionMiddleware(actionLogger)]);
  return mock(state);
};

export const strictEquals = <R, E>(received: R, expected: E): void => {
  return expect(received).toStrictEqual(expected);
};

export const makeAction = <T, P>(
  type: T,
  payload?: P,
): { type: T; payload?: P } => {
  if (payload) return { type, payload };
  return { type };
};

export { screen, fireEvent, waitFor };
