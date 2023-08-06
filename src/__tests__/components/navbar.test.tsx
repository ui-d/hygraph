import { render, screen } from '@testing-library/react';
import React, { ReactNode } from 'react';
import '@testing-library/jest-dom/extend-expect';

import { Navbar } from '@/components/global/navbar';
import Items from '@/components/global/navbar-navigation.json';

type Item = {
  id: number;
  name: string;
  url: string;
};

jest.mock('next/image', () => {
  // eslint-disable-next-line
  return ({ alt }: { alt: string }) => <img alt={alt} />;
});

jest.mock('next/link', () => {
  return ({ children }: { children: ReactNode }) => children;
});

describe('<Navbar />', () => {
  it('renders the company logo', () => {
    render(<Navbar />);

    expect(screen.getByAltText('Logo')).toBeInTheDocument();
  });

  it('renders navigation items', () => {
    render(<Navbar />);

    const { items } = Items;

    items.forEach((item: Item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });
});
