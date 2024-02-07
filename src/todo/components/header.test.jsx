import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import {Header} from './header';

test('renders Header component correctly', () => {
  const dispatch = jest.fn();
  render(<Header dispatch={dispatch} />);
  
  expect(screen.getByTestId('header')).toBeInTheDocument();
});

test('calls dispatch when submitting new todo', () => {
  const dispatch = jest.fn();
  render(<Header dispatch={dispatch} />);
  
  fireEvent.change(screen.getByTestId('text-input'), { target: { value: 'New Todo' } });
  fireEvent.keyDown(screen.getByTestId('text-input'), { key: 'Enter', code: 'Enter' });

  expect(dispatch).toHaveBeenCalledWith({ type: 'ADD_ITEM', payload: { title: 'New Todo' } });
});
