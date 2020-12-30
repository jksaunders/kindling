import AnotherPage from './AnotherPage';
import { LocalStoresRoot } from '../../../stores';
import render from '../../../test-utils/render';

test('renders', async () => {
  const { hasStyle, screen, takeSnapshot } = render(
    <LocalStoresRoot>
      <AnotherPage />
    </LocalStoresRoot>
  );
  await screen.findByText("I'm another example page!");
  expect(screen.getByText("I'm another example page!")).toBeInTheDocument();
  expect(screen.getByText("I'm another example page!")).toHaveStyle(
    `border-radius: 10px`
  );

  hasStyle('border-radius: 10px');
  takeSnapshot();
});
