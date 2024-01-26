import type { Meta, StoryObj } from '@storybook/react';
import HouseCard from '../components/card/HouseCard';

const meta = {
  title: 'Wizard-World',
  component: HouseCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof HouseCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    id: '',
    name: 'Gryffindor',
    animal: 'Lion',
    founder: 'Godric Gryffindor',
    startColor: 'blue',
    endColor: '#2ee4e8'
  },
};

