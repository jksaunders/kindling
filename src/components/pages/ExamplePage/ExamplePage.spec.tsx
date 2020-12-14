import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ExamplePage from './ExamplePage';

test('renders', async () => {
  render(<ExamplePage />);
  await waitFor(() => screen.getByText("I'm an example page!"));
});
