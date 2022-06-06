import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import NotFound from '../../pages/NotFound/NotFound';
import {RenderOnePage} from '../TestHelpers';

test('NotFound page', () => {
  render(
    <RenderOnePage>
      <NotFound />
    </RenderOnePage>
  );
  expect(screen.getByText('Error 404', {selector: 'h1'})).toBeInTheDocument();
  expect(
    screen.getByText('Not found this page', {selector: 'h2'})
  ).toBeInTheDocument();
});
