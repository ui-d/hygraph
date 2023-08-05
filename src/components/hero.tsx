import { cn } from '@/lib/utils';

import { Button } from '@/components/button';

type ActionButton = {
  id: string;
  size: 'sm' | 'md' | 'lg';
  text: string;
};

type HeroProps = {
  title: string;
  description: string;
  actionButtons: ActionButton[];
};

export const Hero = ({ title, description, actionButtons }: HeroProps) => {
  return (
    <section className={cn('pt-20 text-center')}>
      <h1
        className={cn(
          'font-inter text-darker-blue pb-6 text-3xl font-semibold tracking-tight md:text-4xl'
        )}
      >
        {title}
      </h1>
      <p
        className={cn(
          'font-inter text-light-blue mx-auto max-w-3xl pb-12 text-xl'
        )}
      >
        {description}
      </p>
      <div className={cn('flex items-center justify-center gap-5')}>
        {actionButtons?.map((actionButton) => (
          <Button
            key={actionButton.id}
            size={actionButton.size}
            text={actionButton.text}
            className={cn('w-full md:w-auto')}
            url='#'
          />
        ))}
      </div>
    </section>
  );
};
