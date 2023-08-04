import Image from 'next/image';

import { cn } from '@/lib/utils';

import { Button } from '@/components/button';

type FeatureActionButton = {
  id: string;
  size: 'sm' | 'md' | 'lg';
  text: string;
};

type FeatureSectionProps = {
  label?: string;
  title: string;
  description: string;
  order: boolean;
  featureActionButton?: FeatureActionButton;
};

export const FeatureSection = ({
  title,
  label,
  description,
  featureActionButton,
  order,
}: FeatureSectionProps) => {
  return (
    <section className={cn('flex justify-between gap-20')}>
      <div className={cn('flex-1', { 'order-2': order })}>
        {!!label && (
          <p className={cn('font-space-grotesk text-purple text-lg font-bold')}>
            {label}
          </p>
        )}
        <h2
          className={cn(
            'font-inter text-darkerBlue pb-5 text-2xl font-semibold'
          )}
        >
          {title}
        </h2>
        <p className={cn('text-mediumBlue font-inter pb-10 text-base')}>
          {description}
        </p>
        {!!featureActionButton && (
          <Button
            url='#'
            text={featureActionButton.text}
            id={featureActionButton.id}
            size={featureActionButton.size}
          />
        )}
      </div>
      <figure className={cn('flex-1', { 'order-1': order })}>
        <Image src='' width='100' height='100' alt='placeholder' />
      </figure>
    </section>
  );
};
