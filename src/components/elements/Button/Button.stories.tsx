import type { Meta, StoryObj } from '@storybook/nextjs'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Elements/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'text'],
      description: 'Visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the button',
    },
    label: {
      control: 'text',
      description: 'Button text label',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Filled: Story = {
  args: {
    label: 'Filled Button',
    variant: 'filled',
    size: 'medium',
  },
}

export const Outlined: Story = {
  args: {
    label: 'Outlined Button',
    variant: 'outlined',
    size: 'medium',
  },
}

export const Text: Story = {
  args: {
    label: 'Text Button',
    variant: 'text',
    size: 'medium',
  },
}

export const Small: Story = {
  args: {
    label: 'Small Button',
    variant: 'filled',
    size: 'small',
  },
}

export const Medium: Story = {
  args: {
    label: 'Medium Button',
    variant: 'filled',
    size: 'medium',
  },
}

export const Large: Story = {
  args: {
    label: 'Large Button',
    variant: 'filled',
    size: 'large',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    variant: 'filled',
    size: 'medium',
    disabled: true,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button label="Filled" variant="filled" />
      <Button label="Outlined" variant="outlined" />
      <Button label="Text" variant="text" />
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button label="Small" variant="filled" size="small" />
      <Button label="Medium" variant="filled" size="medium" />
      <Button label="Large" variant="filled" size="large" />
    </div>
  ),
}
