import type { Meta, StoryObj } from '@storybook/nextjs'
import Badge from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Elements/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Badge text label',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error'],
      description: 'Visual style variant of the badge',
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    label: 'Default',
    variant: 'default',
  },
}

export const Primary: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
  },
}

export const Success: Story = {
  args: {
    label: 'Success',
    variant: 'success',
  },
}

export const Warning: Story = {
  args: {
    label: 'Warning',
    variant: 'warning',
  },
}

export const Error: Story = {
  args: {
    label: 'Error',
    variant: 'error',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Badge label="Default" variant="default" />
      <Badge label="Primary" variant="primary" />
      <Badge label="Success" variant="success" />
      <Badge label="Warning" variant="warning" />
      <Badge label="Error" variant="error" />
    </div>
  ),
}
