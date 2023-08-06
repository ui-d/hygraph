import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { Hero } from '@/components/hero';

type ActionButton = {
  id: string;
  size: 'sm' | 'md' | 'lg';
  text: string;
};

describe('<Hero />', () => {
  it('renders the title and description', () => {
    render(
      <Hero
        title='Test Title'
        description='Test Description'
        actionButtons={[]}
      />
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders the action buttons', () => {
    const actionButtons: ActionButton[] = [
      { id: 'btn1', size: 'sm', text: 'Button 1' },
      { id: 'btn2', size: 'md', text: 'Button 2' },
    ];

    render(
      <Hero title='Test' description='Test' actionButtons={actionButtons} />
    );

    expect(screen.getByText('Button 1')).toBeInTheDocument();
    expect(screen.getByText('Button 2')).toBeInTheDocument();
  });

  it('renders no action buttons if none are provided', () => {
    render(<Hero title='Test' description='Test' actionButtons={[]} />);
    const buttons = screen.queryByRole('button');
    expect(buttons).not.toBeInTheDocument();
  });
});
