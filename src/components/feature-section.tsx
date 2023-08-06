import Image from 'next/image';

import { cn, extractYouTubeID } from '@/lib/utils';

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
  const videoId = extractYouTubeID(link);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 9', // aspect-ratio is set to 16:9
        overflow: 'hidden',
      }}
    >
      <iframe
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0,
        }}
        src={`https://www.youtube.com/embed/${videoId}`}
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
        'items-center justify-between gap-10 md:flex md:flex-row lg:gap-24'
      )}
    >
      <div className={cn('flex-1 pb-10 md:pb-0', { 'order-2': reversed })}>
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
        <p className={cn('!text-medium-blue font-inter text-lg-tight pb-7')}>
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
        <div className={cn('flex-1')}>
          <figure
            className={cn(
              'md:bg-gray flex justify-center rounded-xl md:px-10 md:py-10',
              {
                'order-1': reversed,
              }
            )}
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
        </div>
      )}
    </section>
  );
};
