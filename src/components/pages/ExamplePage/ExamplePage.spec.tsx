import React from 'react';
import { render, screen } from '@testing-library/react';
import ExamplePage from './ExamplePage';
import { LocalStoresRoot } from '../../../stores';

test('renders', async () => {
  const {
    container: { firstChild },
  } = render(
    <LocalStoresRoot>
      <ExamplePage />
    </LocalStoresRoot>
  );
  await screen.findByText("I'm an example page!");
  expect(screen.getByText("I'm an example page!")).toBeInTheDocument();
  expect(screen.getByText("I'm an example page!")).toHaveStyle(
    `border-radius: 10px`
  );
  expect(firstChild).toHaveStyle(`border-radius: 10px`);
  expect(firstChild).toMatchSnapshot();
});
