import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import {App} from './app';

test('renders App component correctly', () => {
  render(<App />);
  
  expect(screen.getByTestId('header')).toBeInTheDocument();
  expect(screen.getByTestId('main')).toBeInTheDocument();
  expect(screen.getByTestId('footer')).toBeInTheDocument();
});
