import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App';

test('Assert that upon submitting the form will result in data being rendered in the output area', async () => {
  render(<App />);

  const button = await waitFor(() => screen.getByTestId('click-form'));
  const data =  await waitFor(() =>screen.getByTestId('data'));

  
    fireEvent.change(button, { target: { value: "" } });

  
  expect(data).toHaveTextContent('Results');
});