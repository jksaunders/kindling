import React from 'react';
import { render, screen } from '@testing-library/react';
import ExamplePage from './ExamplePage';

test('renders', async () => {
  render(<ExamplePage />);
  await screen.findByText("I'm an example page!");
  expect(screen.getByText("I'm an example page!")).toBeInTheDocument();
});
