import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Item } from './item';



test('renders Item component correctly', () => {
  const todo = { id: 1, title: 'Sample Todo', completed: false };
  const dispatch = jest.fn();

  render(<Item todo={todo} dispatch={dispatch} index={0} />);
  
  expect(screen.getByTestId('todo-item')).toBeInTheDocument();
});

test('toggles item when checkbox is clicked', () => {
  const todo = { id: 1, title: 'Sample Todo', completed: false };
  const dispatch = jest.fn();

  render(<Item todo={todo} dispatch={dispatch} index={0} />);
  
  fireEvent.click(screen.getByTestId('todo-item-toggle'));

  expect(dispatch).toHaveBeenCalledWith({ type: 'TOGGLE_ITEM', payload: { id: 1 } });
});

test('removes item when remove button is clicked', () => {
  const todo = { id: 1, title: 'Sample Todo', completed: false };
  const dispatch = jest.fn();

  render(<Item todo={todo} dispatch={dispatch} index={0} />);
  
  fireEvent.click(screen.getByTestId('todo-item-button'));

  expect(dispatch).toHaveBeenCalledWith({ type: 'REMOVE_ITEM', payload: { id: 1 } });
});
