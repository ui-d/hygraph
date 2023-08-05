import { cn } from '@/lib/utils';

import { Button } from '@/components/button';

type ActionButton = {
  id: string;
  size: 'sm' | 'md' | 'lg';
  text: string;
};

type CalloutProps = {
  title: string;
  description: string;
  actionButton: ActionButton;
};
export const Callout = ({ title, description, actionButton }: CalloutProps) => {
  return (
    <section
      className={cn(
        'bg-dark-blue flex flex-col justify-between rounded-xl p-16 md:flex-row'
      )}
    >
      <div>
        <h2 className={cn('font-inter pb-4 text-2xl font-semibold text-white')}>
          {title}
        </h2>
        <p className={cn('font-inter text-xl text-white')}>{description}</p>
      </div>
      <Button
        text={actionButton.text}
        id={actionButton.id}
        size={actionButton.size}
        className={cn('w-full sm:w-auto')}
        url='#'
      />
    </section>
  );
};
