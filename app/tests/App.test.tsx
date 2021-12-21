import React from 'react';
import App from '@/containers/App';
import { render, screen } from '@testing-library/react';

describe('AppContainer', () => {
  test('reanders without error', () => {
    const { getByText } = render(<App />);
    getByText('Butler is ready to serve!');
  });
});
