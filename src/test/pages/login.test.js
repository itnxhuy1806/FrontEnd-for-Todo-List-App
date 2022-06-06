import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Login from '../../pages/Login/Login';
import {RenderOnePage} from '../TestHelpers';

test('Login page', () => {
  render(
    <RenderOnePage>
      <Login />
    </RenderOnePage>
  );
  expect(screen.getByText('Login', {selector: 'h1'})).toBeInTheDocument();
  expect(
    screen.getByText('Username', {selector: '.MuiInputLabel-root'})
  ).toBeInTheDocument();
  expect(
    screen.getByText('Username', {
      selector: '.MuiOutlinedInput-root fieldset legend span'
    })
  ).toBeInTheDocument();
  expect(
    screen.getByText('Password', {selector: '.MuiInputLabel-root'})
  ).toBeInTheDocument();
  expect(
    screen.getByText('Password', {
      selector: '.MuiOutlinedInput-root fieldset legend span'
    })
  ).toBeInTheDocument();
  expect(
    screen.getByText('Login', {
      selector: 'button'
    })
  ).toBeInTheDocument();
});
