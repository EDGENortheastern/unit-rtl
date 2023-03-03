import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders a textbox', () => {
  render(<App />);
  const inputBox = screen.getByRole('textbox', {name: /enter a number below👇🏿/i});
  expect(inputBox).toBeInTheDocument();
});

test('the initial input is empty', () => {
  render(<App />);
  const inputBox = screen.getByRole('textbox', {name: /enter a number below👇🏿/i});
  expect(inputBox.value).toBe('');
});

test('the user can type in the box', () => {
  render(<App />);
  const inputBox = screen.getByRole('textbox', {name: /enter a number below👇🏿/i});
  userEvent.type(inputBox, '777')
  expect(inputBox.value).toBe('777');
});

test('renders a button', () => {
  render(<App />);
  const inputButton = screen.getByRole('button', {name: /double!/i});
  expect(inputButton).toBeInTheDocument();
});

test('that the user can click the button and double', async () => {
  render(<App/>);
  const inputButton = screen.getByRole('button', {name: /double!/i});
  await userEvent.click(inputButton);
  await waitFor(async() => {
    const outputNumber = screen.getByText(/0/);
    expect(outputNumber).toBeInTheDocument();
  });

  const inputBox = screen.getByRole('textbox', {name: /enter a number below👇🏿/i});
  userEvent.type(inputBox, '7')

  await userEvent.click(inputButton);
  await waitFor(async() => {
    const outputNumber = screen.getByText(/15/);
    expect(outputNumber).toBeInTheDocument();
  });
})