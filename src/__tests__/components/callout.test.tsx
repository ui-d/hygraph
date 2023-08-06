import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'; // for the "toBeInTheDocument" matcher

import { Callout } from '@/components/callout';

describe('<Callout />', () => {
  it('renders the title and description', () => {
    render(
      <Callout
        title='Test Title'
        description='Test Description'
        actionButton={{
          size: 'md',
          text: 'Click me',
        }}
      />
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders the action button with correct text', () => {
    render(
      <Callout
        title='Test Title'
        description='Test Description'
        actionButton={{
          size: 'md',
          text: 'Click me',
        }}
      />
    );

    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
  });

  // Add more tests as necessary for other scenarios or edge cases.
});
