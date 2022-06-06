import '@testing-library/jest-dom';
import {fireEvent, render, screen} from '@testing-library/react';
import MenuAppBar from '../../components/MenuAppBar';
import {RenderOnePage} from '../TestHelpers';

test('UI when not logged', () => {
  render(
    <RenderOnePage>
      <MenuAppBar />
    </RenderOnePage>
  );
  expect(screen.getByText('Todo List App')).toBeInTheDocument();
  expect(
    screen.getByText('', {
      selector: '.MuiButtonBase-root .MuiSvgIcon-root[data-testid="MenuIcon"]'
    })
  ).toBeInTheDocument();
});

test('UI when logged', () => {
  render(
    <RenderOnePage logged={true}>
      <MenuAppBar />
    </RenderOnePage>
  );
  expect(screen.getByText('Todo List App')).toBeInTheDocument();
  expect(
    screen.getByText('', {
      selector: '.MuiButtonBase-root .MuiSvgIcon-root[data-testid="MenuIcon"]'
    })
  ).toBeInTheDocument();
  expect(
    screen.getByText('', {
      selector:
        '.MuiButtonBase-root .MuiSvgIcon-root[data-testid="AccountCircleIcon"]'
    })
  ).toBeInTheDocument();
  expect(screen.getByText('Profile')).toBeInTheDocument();
  expect(screen.getByText('Logout')).toBeInTheDocument();
  expect(
    screen.getByText('', {selector: 'div.MuiPaper-root'}).style._values.opacity
  ).toEqual('0');
});
test('UI when logged and clicked AccountCircleIcon', () => {
  render(
    <RenderOnePage logged={true}>
      <MenuAppBar />
    </RenderOnePage>
  );
  fireEvent.click(
    screen.getByText('', {
      selector:
        '.MuiButtonBase-root .MuiSvgIcon-root[data-testid="AccountCircleIcon"]'
    })
  );
  expect(screen.getByText('Todo List App')).toBeInTheDocument();

  expect(
    screen.getByText('', {
      selector: '.MuiButtonBase-root .MuiSvgIcon-root[data-testid="MenuIcon"]'
    })
  ).toBeInTheDocument();
  expect(
    screen.getByText('', {
      selector:
        '.MuiButtonBase-root .MuiSvgIcon-root[data-testid="AccountCircleIcon"]'
    })
  ).toBeInTheDocument();

  expect(screen.getByText('Profile')).toBeInTheDocument();
  expect(screen.getByText('Logout')).toBeInTheDocument();
  expect(
    screen.getByText('', {selector: 'div.MuiPaper-root'}).style._values.opacity
  ).toEqual('1');
});
