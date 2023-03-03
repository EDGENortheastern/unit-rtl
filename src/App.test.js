import { render, screen } from '@testing-library/react';
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

test('renders a button', () => {
  render(<App />);
  const inputButton = screen.getByRole('button', {name: /double!/i});
  expect(inputButton).toBeInTheDocument();
});

