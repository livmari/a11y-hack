import type { Meta, StoryObj } from '@storybook/nextjs'
import ButtonGroup from './ButtonGroup'
import Button from '../Button/Button'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Elements/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the button group',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the buttons',
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'text'],
      description: 'Visual style variant of the buttons',
    },
  },
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

export const HorizontalOutlined: Story = {
  args: {
    orientation: 'horizontal',
    size: 'medium',
    variant: 'outlined',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button label="Left" />
      <Button label="Center" />
      <Button label="Right" />
    </ButtonGroup>
  ),
}

export const HorizontalFilled: Story = {
  args: {
    orientation: 'horizontal',
    size: 'medium',
    variant: 'filled',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button label="Option 1" />
      <Button label="Option 2" />
      <Button label="Option 3" />
    </ButtonGroup>
  ),
}

export const VerticalOutlined: Story = {
  args: {
    orientation: 'vertical',
    size: 'medium',
    variant: 'outlined',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button label="Top" />
      <Button label="Middle" />
      <Button label="Bottom" />
    </ButtonGroup>
  ),
}

export const VerticalFilled: Story = {
  args: {
    orientation: 'vertical',
    size: 'medium',
    variant: 'filled',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button label="First" />
      <Button label="Second" />
      <Button label="Third" />
    </ButtonGroup>
  ),
}

export const SmallSize: Story = {
  args: {
    orientation: 'horizontal',
    size: 'small',
    variant: 'outlined',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button label="One" />
      <Button label="Two" />
      <Button label="Three" />
      <Button label="Four" />
    </ButtonGroup>
  ),
}

export const LargeSize: Story = {
  args: {
    orientation: 'horizontal',
    size: 'large',
    variant: 'filled',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button label="Save" />
      <Button label="Cancel" />
    </ButtonGroup>
  ),
}

export const TextVariant: Story = {
  args: {
    orientation: 'horizontal',
    size: 'medium',
    variant: 'text',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button label="Edit" />
      <Button label="Share" />
      <Button label="Delete" />
    </ButtonGroup>
  ),
}
