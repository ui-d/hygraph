import { notFound } from 'next/navigation';
import { ElementType, FC, ReactElement } from 'react';

import { hygraphClient } from '@/lib/client';
import { pageData, pageMeta, pagesSlugs } from '@/lib/queries';
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

type PageMetadata = {
  page: {
    seo?: {
      title?: string;
      description?: string;
    };
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

type BlockMap = { [key: string]: ElementType };

const ErrorComponent: FC = () => <div>Error: Block not found</div>;

const createBlock = (component: ComponentData, key: string): ReactElement => {
  const Component =
    (Blocks as BlockMap)[component.__typename] || ErrorComponent;
  return <Component key={key} {...component} />;
};

const Section: FC<SectionProps> = ({ section }) => (
  <div
    key={section.id}
    className={cn(
      'mx-auto flex max-w-7xl flex-col gap-16 px-8 py-12 md:px-8 md:py-24'
    )}
  >
    {section.blocks.components.map((component) =>
      createBlock(component, component.id || '')
    )}
  </div>
);

const client = hygraphClient();

export default async function Page({
  params,
}: PageProps): Promise<ReactElement | void> {
  try {
    const { page } = await client.request<PageData>(pageData, {
      slug: params?.slug ?? '',
    });

    if (!page) {
      notFound();
      return;
    }

    return (
      <div>
        {page.sections?.map((section) => (
          <Section key={section.id ?? ''} section={section} />
        ))}
      </div>
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to fetch page data', error);
    throw error; // Or handle the error more gracefully for the user.
  }
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  try {
    const { pages } = await client.request<{ pages: { slug: string }[] }>(
      pagesSlugs
    );
    return pages;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to generate static params', error);
    throw error; // Or handle this error more gracefully.
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<{ title?: string; description?: string }> {
  try {
    const { page } = await client.request<PageMetadata>(pageMeta, {
      slug: params?.slug,
    });

    if (!page || !page.seo) {
      return {};
    }

    return {
      title: page.seo.title,
      description: page.seo.description,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to generate metadata', error);
    throw error; // Or handle this error more gracefully.
  }
}
