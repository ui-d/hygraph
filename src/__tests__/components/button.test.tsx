import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'; // for extended matchers

import { Button } from '@/components/button';

describe('<Button />', () => {
  it('renders the button with given text', () => {
    render(<Button text='Click me' url='/test' size='md' />);

    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '/test');
  });

  it('applies the correct styles for variant and size', () => {
    render(<Button text='Click me' url='/test' size='lg' variant='default' />);

    const button = screen.getByText('Click me');

    // This is a bit tricky since you're using a utility for classnames.
    // For demonstration purposes, let's just check for one of the expected classes:
    expect(button).toHaveClass('text-base'); // This class is applied for the 'lg' size.
  });

  // Add more tests as necessary for other scenarios or edge cases.
});
