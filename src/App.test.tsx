import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App', () => {
  render(<App />);
  const linkElement = screen.getAllByText('Podcast');
  expect(linkElement[0]).toBeInTheDocument();
});
