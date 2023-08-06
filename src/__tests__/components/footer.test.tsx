import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { Footer } from '@/components/global/footer';
import navigationItems from '@/components/global/footer-navigation.json';

describe('<Footer />', () => {
  it('should render without crashing', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  it('should render all navigation items', () => {
    render(<Footer />);
    const { items } = navigationItems;

    items.forEach((item) => {
      const linkElement = screen.getByText(item.name);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.closest('a')).toHaveAttribute('href', item.url);
    });
  });

  it('should display the copyright text', () => {
    render(<Footer />);
    const copyrightElement = screen.getByText(
      /© 2023 Acme Co. All rights reserved./i
    );
    expect(copyrightElement).toBeInTheDocument();
  });
});
