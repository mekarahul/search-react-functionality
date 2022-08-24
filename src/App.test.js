import { render, screen } from '@testing-library/react';
import App from './App';

test('App component exists', () => {
  const app = render(<App />);
  expect(app).toBeTruthy();
});

test('heading exist', () => {
  const app = render(<App />);
  const heading = screen.getByText("List of Users");
  expect(heading).toBeInTheDocument();
});