import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Tasks from '../../pages/Tasks/Tasks';
import {RenderOnePage} from '../TestHelpers';

test('Tasks page', () => {
  render(
    <RenderOnePage>
      <Tasks />
    </RenderOnePage>
  );
  expect(
    screen.getByLabelText('Description', {selector: 'textarea'})
  ).toBeInTheDocument();
  expect(screen.getByText('Save', {selector: 'button'})).toBeInTheDocument();
  expect(screen.getByText('Back', {selector: 'a'})).toBeInTheDocument();
});
