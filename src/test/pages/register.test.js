import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Register from '../../pages/Register/Register';
import {RenderOnePage} from '../TestHelpers';

test('Register page', () => {
  render(
    <RenderOnePage>
      <Register />
    </RenderOnePage>
  );
  expect(screen.getByText('Register', {selector: 'h1'})).toBeInTheDocument();
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
    screen.getByText('Email', {selector: '.MuiInputLabel-root'})
  ).toBeInTheDocument();
  expect(
    screen.getByText('Email', {
      selector: '.MuiOutlinedInput-root fieldset legend span'
    })
  ).toBeInTheDocument();
  expect(
    screen.getByText('RePassword', {selector: '.MuiInputLabel-root'})
  ).toBeInTheDocument();
  expect(
    screen.getByText('RePassword', {
      selector: '.MuiOutlinedInput-root fieldset legend span'
    })
  ).toBeInTheDocument();
  expect(
    screen.getByText('Register', {
      selector: 'button'
    })
  ).toBeInTheDocument();
});
