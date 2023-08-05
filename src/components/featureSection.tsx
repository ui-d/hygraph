import Image from 'next/image';

import { cn } from '@/lib/utils';

import { Button } from '@/components/button';

type ActionButtonProps = {
  id: string;
  size: 'sm' | 'md' | 'lg';
  text: string;
};

type YoutubeType = {
  link: string;
};

type ImageType = {
  image: { url: string };
};

type FeatureSectionProps = {
  label?: string;
  title: string;
  description: string;
  reversed: boolean;
  media: YoutubeType | ImageType; // changed here
  featureActionButton?: ActionButtonProps;
};

const YouTubeEmbed = ({ link }: YoutubeType) => {
  let videoId = '';

  if (link.includes('youtu.be')) {
    videoId = link.split('youtu.be/')[1];
  } else if (link.includes('youtube.com')) {
    videoId = new URL(link).searchParams.get('v') || '';
  }

  return (
    <div>
      <iframe
        width='480'
        height='320'
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </div>
  );
};

export const FeatureSection = ({
  label,
  title,
  description,
  reversed,
  media,
  featureActionButton,
}: FeatureSectionProps) => {
  return (
    <section
      className={cn(
        'flex flex-col items-center justify-between gap-24 md:flex-row'
      )}
    >
      <div className={cn('flex-1', { 'order-2': reversed })}>
        {label && (
          <p className={cn('font-space-grotesk text-purple text-lg font-bold')}>
            {label}
          </p>
        )}
        <h2
          className={cn(
            'font-inter text-darker-blue pb-4 text-2xl font-semibold'
          )}
        >
          {title}
        </h2>
        <p className={cn('text-medium-blue font-inter text-lg-narrow pb-7')}>
          {description}
        </p>
        {featureActionButton && (
          <Button
            url='#'
            text={featureActionButton.text}
            id={featureActionButton.id}
            size={featureActionButton.size}
            className={cn('w-full sm:w-auto')}
          />
        )}
      </div>
      {media && (
        <figure
          className={cn('bg-gray flex flex-1 justify-center rounded-xl py-10', {
            'order-1': reversed,
          })}
        >
          {'link' in media ? (
            <YouTubeEmbed link={media.link} />
          ) : (
            media.image && (
              <Image
                src={media.image.url}
                alt='Feature Image'
                width={480}
                height={320}
              />
            )
          )}
        </figure>
      )}
    </section>
  );
};
