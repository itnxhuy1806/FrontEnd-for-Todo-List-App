import '@testing-library/jest-dom';
import {fireEvent, render, screen} from '@testing-library/react';
import SideBar from '../../components/SideBar';
import {RenderOnePage} from '../TestHelpers';

test('default UI', () => {
  render(
    <RenderOnePage>
      <SideBar />
    </RenderOnePage>
  );
  expect(
    screen.getByText('', {
      selector: '.MuiSvgIcon-root[data-testid="MenuIcon"]'
    })
  ).toBeInTheDocument();
});
test('UI when clicked', () => {
  render(
    <RenderOnePage>
      <SideBar />
    </RenderOnePage>
  );
  fireEvent.click(
    screen.getByText('', {
      selector: '.MuiSvgIcon-root[data-testid="MenuIcon"]'
    })
  );
  expect(
    screen.getByText('', {
      selector: '.MuiSvgIcon-root[data-testid="MenuIcon"]'
    })
  ).toBeInTheDocument();
  expect(
    screen.getByText('Home', {selector: '.MuiListItemText-root span'})
  ).toBeInTheDocument();
  expect(
    screen.getByText('Setting', {selector: '.MuiListItemText-root span'})
  ).toBeInTheDocument();
});
