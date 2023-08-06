import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { FeatureSection } from '@/components';

jest.mock('next/image', () => ({ src, alt }: { src: string; alt: string }) => (
  // eslint-disable-next-line
  <img src={src} alt={alt} />
));

describe('FeatureSection', () => {
  it('renders without crashing', () => {
    render(
      <FeatureSection
        title='Test Title'
        description='Test Description'
        reversed={false}
        media={{ image: { url: 'test-image-url.jpg' } }}
      />
    );
  });

  it('renders label, title, and description', () => {
    render(
      <FeatureSection
        label='Test Label'
        title='Test Title'
        description='Test Description'
        reversed={false}
        media={{ image: { url: 'test-image-url.jpg' } }}
      />
    );

    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders YouTube embed when media contains link', () => {
    render(
      <FeatureSection
        title='Test Title'
        description='Test Description'
        reversed={false}
        media={{ link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }}
      />
    );

    const iframe = screen.getByTitle('Embedded youtube');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute(
      'src',
      'https://www.youtube.com/embed/dQw4w9WgXcQ'
    );
  });

  it('renders Image when media contains image', () => {
    render(
      <FeatureSection
        title='Test Title'
        description='Test Description'
        reversed={false}
        media={{ image: { url: 'test-image-url.jpg' } }}
      />
    );

    const img = screen.getByAltText('Feature Image');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'test-image-url.jpg');
  });
});
