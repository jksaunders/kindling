import React from 'react';
import { render, screen } from '@testing-library/react';
import AnotherPage from './AnotherPage';
import { LocalStoresRoot } from '../../../stores';

test('renders', async () => {
  const {
    container: { firstChild },
  } = render(
    <LocalStoresRoot>
      <AnotherPage />
    </LocalStoresRoot>
  );
  await screen.findByText("I'm another example page!");
  expect(screen.getByText("I'm another example page!")).toBeInTheDocument();
  expect(screen.getByText("I'm another example page!")).toHaveStyle(
    `border-radius: 10px`
  );
  expect(firstChild).toHaveStyle(`border-radius: 10px`);
  expect(firstChild).toMatchSnapshot();
});
