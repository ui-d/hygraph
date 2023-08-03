import { ComponentType, FC, ReactElement } from 'react';

import { hygraphClient } from '@/lib/client';
import { pageQuery, pagesSlugsQuery } from '@/lib/queries';

import * as Blocks from '@/components';

type ComponentData = {
  __typename: string;
  id: string;
  title?: string;
  stage?: string;
};

type BlockComponentProps = ComponentData;

type BlockComponent = ComponentType<BlockComponentProps>;

type Block = {
  id?: string;
  components: ComponentData[];
};

type SectionData = {
  id?: string;
  blocks: Block;
};

type PageData = {
  page: {
    title: string;
    sections: SectionData[];
  };
};

type PageProps = {
  params: {
    slug: string;
  };
};

type SectionProps = {
  section: SectionData;
};

interface BlocksInterface {
  [key: string]: BlockComponent;
}

const BlocksComponents = Blocks as BlocksInterface;

const ErrorComponent = () => <div>Error: Block not found</div>;

const createBlock = (component: ComponentData, key: string): ReactElement => {
  const Component = BlocksComponents[component.__typename] || ErrorComponent;
  return <Component key={key} {...component} />;
};

const Section: FC<SectionProps> = ({ section }) => (
  <div key={section.id} style={{ border: '1px solid red' }}>
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
      {page.sections.map((section) => (
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
