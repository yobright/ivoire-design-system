import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'React/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Statique: Story = {
  render: () => (
    <Pagination
      pageCount={12}
      pageIndex={4}
      pageHref={(index) => `#page-${index + 1}`}
      paginationAriaLabel="Pagination des ressources"
    />
  ),
};

export const Interactive: Story = {
  render: () => {
    const [pageIndex, setPageIndex] = useState(0);

    return (
      <Pagination
        pageCount={8}
        pageIndex={pageIndex}
        onChange={(_, index) => setPageIndex(index)}
        paginationAriaLabel="Pagination interactive"
        rounded
      />
    );
  },
};
