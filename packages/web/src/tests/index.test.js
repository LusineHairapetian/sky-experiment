import { render, screen } from '@testing-library/react';
import { HomePage } from '../pages';

test('renders learn react link', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/welcome to/i);
  expect(linkElement).toBeInTheDocument();
});
