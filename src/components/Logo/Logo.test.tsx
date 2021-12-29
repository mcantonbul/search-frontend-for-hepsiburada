import { render, screen } from '@testing-library/react';
import Logo from './Logo';

test('hepsiburada logosu gözükmeli', () => {
  render(<Logo />);
  const linkElement = screen.getByAltText(/Hepsi Burada/i);
  expect(linkElement).toBeInTheDocument();
});
