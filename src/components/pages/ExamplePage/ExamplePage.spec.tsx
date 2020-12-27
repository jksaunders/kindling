import ExamplePage from './ExamplePage';
import { LocalStoresRoot } from '../../../stores';
import render from '../../../test-utils/render';

test('renders', async () => {
  const { screen, hasStyle, takeSnapshot } = render(
    <LocalStoresRoot>
      <ExamplePage />
    </LocalStoresRoot>
  );
  await screen.findByText("I'm an example page!");
  expect(screen.getByText("I'm an example page!")).toBeInTheDocument();
  expect(screen.getByText("I'm an example page!")).toHaveStyle(
    `border-radius: 10px`
  );

  takeSnapshot();
  hasStyle(`border-radius: 10px`);
});
