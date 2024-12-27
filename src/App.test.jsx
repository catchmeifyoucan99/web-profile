/* global test, expect */
import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders Vite + React', () => {
  render(<App />);
  const headingElement = screen.getByText(/Vite \+ React/i);
  expect(headingElement).toBeInTheDocument();
});
