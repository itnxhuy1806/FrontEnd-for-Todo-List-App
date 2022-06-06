import {Task} from '@mui/icons-material';
import '@testing-library/jest-dom';
import {fireEvent, render, screen} from '@testing-library/react';
import AlertDialog from '../../components/Dialog';

const props = {icon: <Task />, id: 1, handleDelete: () => {}};
test('should passed when not clicked yet', () => {
  render(<AlertDialog {...props} />);
  expect(
    screen.getByText('', {
      selector: '.MuiIconButton-root .MuiSvgIcon-root[data-testid="TaskIcon"]'
    })
  ).toBeInTheDocument();
});
test('should icon not exists if dont pass props.icon', () => {
  let err = false;
  const propsNoIcon = {...props};
  delete propsNoIcon.icon;
  render(<AlertDialog {...propsNoIcon} />);

  try {
    expect(
      screen.getByText('', {
        selector: '.MuiIconButton-root .MuiSvgIcon-root[data-testid="TaskIcon"]'
      })
    ).toBeInTheDocument();
  } catch {
    err = true;
  }
  expect(err).toEqual(true);
});
test('should passed when clicked', () => {
  render(<AlertDialog {...props} />);
  const iconButton = screen.getByText('', {
    selector: '.MuiIconButton-root .MuiSvgIcon-root[data-testid="TaskIcon"]'
  });
  fireEvent.click(iconButton);
  expect(iconButton).toBeInTheDocument();
  expect(
    screen.getByText('', {
      selector: '.MuiModal-root'
    })
  ).toBeInTheDocument();
  expect(screen.getByText('Delete')).toBeInTheDocument();
  expect(
    screen.getByText('Are you sure ?', {selector: '.MuiDialogContentText-root'})
  ).toBeInTheDocument();
  expect(
    screen.getByText('Agree', {selector: '.MuiButton-root'})
  ).toBeInTheDocument();
  expect(
    screen.getByText('Disagree', {selector: '.MuiButton-root'})
  ).toBeInTheDocument();
});
