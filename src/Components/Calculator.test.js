import { render, screen } from '@testing-library/react';
import Calculator from './Calculator.js';

test('renders react', async () => {
  render(<Calculator />);
  const linkElement = screen.queryByText(/to react/i);
});
