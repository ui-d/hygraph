import { ElementType, FC, ReactElement } from 'react';

import { hygraphClient } from '@/lib/client';
import { pageQuery, pagesSlugsQuery } from '@/lib/queries';
import { cn } from '@/lib/utils';

import * as Blocks from '@/components';

type ComponentData = {
  __typename: string;
  id?: string;
};

type SectionProps = {
  section: {
    id?: string;
    blocks: {
      components: ComponentData[];
    };
  };
};

type PageProps = {
  params: {
    slug: string;
  };
};

type PageData = {
  page: {
    sections: {
      id?: string;
      blocks: {
        components: ComponentData[];
      };
    }[];
  };
};

const ErrorComponent = () => <div>Error: Block not found</div>;

const createBlock = (component: ComponentData, key: string): ReactElement => {
  const Component =
    (Blocks as { [key: string]: ElementType })[component.__typename] ||
    ErrorComponent;

  return <Component key={key} {...component} />;
};

const Section: FC<SectionProps> = ({ section }) => (
  <div
    key={section.id}
    className={cn(
      'mx-auto flex max-w-7xl flex-col gap-20 px-8 py-16 md:px-8 md:py-24'
    )}
  >
    {section.blocks.components.map((component) =>
      createBlock(component, component.id || '')
    )}
  </div>
);

export default async function Page({ params }: PageProps) {
  const client = hygraphClient();

  const { page } = await client.request<PageData>(pageQuery, {
    slug: params.slug,
  });

  return (
    <div>
      {page?.sections?.map((section) => (
        <Section key={section.id || ''} section={section} />
      ))}
    </div>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const client = hygraphClient();

  const { pages } = await client.request<{ pages: { slug: string }[] }>(
    pagesSlugsQuery
  );

  return pages;
}
