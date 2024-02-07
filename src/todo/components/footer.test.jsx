import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import {Footer} from './footer';

test('renders Footer component correctly', () => {
  const todos = [
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: true },
  ];
  const dispatch = jest.fn();

  render(<Footer todos={todos} dispatch={dispatch} />);
  
  expect(screen.getByTestId('footer')).toBeInTheDocument();
});

test('calls dispatch when clicking "Clear completed"', () => {
  const todos = [
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: true },
  ];
  const dispatch = jest.fn();

  render(<Footer todos={todos} dispatch={dispatch} />);
  
  fireEvent.click(screen.getByText('Clear completed'));

  expect(dispatch).toHaveBeenCalledWith({ type: 'REMOVE_COMPLETED_ITEMS' });
});
