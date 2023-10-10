import { render, screen } from '@testing-library/react';
import App from './App';
import { FaHeart } from "react-icons/fa";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

<Input></Input>