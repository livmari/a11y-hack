import type { Meta, StoryObj } from '@storybook/nextjs'
import Avatar from './Avatar'
import { NotificationDot } from '../../feedback/NotificationDot/NotificationDot'

const meta: Meta<typeof Avatar> = {
  title: 'Elements/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['extra small', 'small', 'medium', 'large', 'extra large'],
      description: 'Size of the avatar',
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: 'Shape of the avatar',
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    size: 'medium',
    shape: 'circle',
  },
}

export const ExtraSmall: Story = {
  args: {
    size: 'extra small',
    shape: 'circle',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    shape: 'circle',
  },
}

export const Medium: Story = {
  args: {
    size: 'medium',
    shape: 'circle',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    shape: 'circle',
  },
}

export const ExtraLarge: Story = {
  args: {
    size: 'extra large',
    shape: 'circle',
  },
}

export const Square: Story = {
  args: {
    size: 'medium',
    shape: 'square',
  },
}

export const WithNotification: Story = {
  args: {
    size: 'medium',
    shape: 'circle',
  },
  render: (args) => (
    <Avatar {...args}>
      <NotificationDot variant="error" position="top-right" ariaLabel="New notification" />
    </Avatar>
  ),
}

export const WithNotificationLarge: Story = {
  args: {
    size: 'large',
    shape: 'circle',
  },
  render: (args) => (
    <Avatar {...args}>
      <NotificationDot variant="success" position="top-right" ariaLabel="Online" />
    </Avatar>
  ),
}

export const WithNotificationSquare: Story = {
  args: {
    size: 'medium',
    shape: 'square',
  },
  render: (args) => (
    <Avatar {...args}>
      <NotificationDot variant="primary" position="top-right" ariaLabel="Unread messages" />
    </Avatar>
  ),
}
