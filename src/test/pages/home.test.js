import '@testing-library/jest-dom';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, screen} from '@testing-library/react';
import {RenderOnePage} from '../TestHelpers';
import * as API from '../../ultis/api';
import axios from 'axios';
import Home from '../../pages/Home/Home';

const server = setupServer(
  rest.get('/greeting', (req, res, ctx) => {
    return res(ctx.json({data: 'data'}));
  })
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Home page not logged', () => {
  render(
    <RenderOnePage>
      <Home />
    </RenderOnePage>
  );
  expect(
    screen.getByText('please! Login', {selector: 'h1'})
  ).toBeInTheDocument();
  expect(screen.getByText('Login', {selector: 'button'})).toBeInTheDocument();
});
test('Home page logged', () => {
  render(
    <RenderOnePage logged={true}>
      <Home />
    </RenderOnePage>
  );
  expect(
    screen.getByText('Enter new todo list name', {
      selector: 'fieldset legend span'
    })
  ).toBeInTheDocument();
  expect(
    screen.getByText('Enter new todo list name', {
      selector: 'label'
    })
  ).toBeInTheDocument();
  expect(
    screen.getByText('', {selector: '.MuiButton-root'})
  ).toBeInTheDocument();
});
test('API Home page logged', async () => {
  API.getTodos = jest.fn(thenFn => {
    axios.get('/greeting').then(thenFn);
  });
  await render(
    <RenderOnePage logged={true}>
      <Home />
    </RenderOnePage>
  );
  expect(
    screen.getByText('Enter new todo list name', {
      selector: 'fieldset legend span'
    })
  ).toBeInTheDocument();
});
