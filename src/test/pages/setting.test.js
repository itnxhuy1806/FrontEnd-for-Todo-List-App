import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Setting from '../../pages/Setting/Setting';
import {RenderOnePage} from '../TestHelpers';

test('Setting page', () => {
  render(
    <RenderOnePage>
      <Setting />
    </RenderOnePage>
  );
  expect(screen.getByText('Setting', {selector: 'h1'})).toBeInTheDocument();
  expect(screen.getByLabelText('Blue', {})).toBeInTheDocument();
  expect(screen.getByLabelText('Green', {})).toBeInTheDocument();
  expect(screen.getByLabelText('Red', {})).toBeInTheDocument();
  expect(screen.getByLabelText('Pupple', {})).toBeInTheDocument();
});
