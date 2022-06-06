import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Todos from '../../pages/Todos/Todos';
import {RenderOnePage} from '../TestHelpers';

test('Todos page', () => {
  render(
    <RenderOnePage>
      <Todos />
    </RenderOnePage>
  );
  expect(screen.getByText('Back home', {selector: 'a'})).toBeInTheDocument();
  expect(
    screen.getByText('', {
      selector: '.MuiButton-root .MuiSvgIcon-root[data-testid="AddIcon"]'
    })
  ).toBeInTheDocument();
  expect(
    screen.getByLabelText('Enter new task content', {selector: 'input'})
  ).toBeInTheDocument();
});
