import type { Meta, StoryObj } from '@storybook/nextjs'
import AvatarGroup from './AvatarGroup'
import Avatar from '../Avatar/Avatar'

const meta: Meta<typeof AvatarGroup> = {
  title: 'Elements/AvatarGroup',
  component: AvatarGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    max: {
      control: 'number',
      description: 'Maximum number of avatars to display before showing +N',
    },
    size: {
      control: 'select',
      options: ['extra small', 'small', 'medium', 'large', 'extra large'],
      description: 'Size of the avatars',
    },
  },
}

export default meta
type Story = StoryObj<typeof AvatarGroup>

export const Default: Story = {
  args: {
    max: 3,
    size: 'medium',
  },
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
    </AvatarGroup>
  ),
}

export const SmallSize: Story = {
  args: {
    max: 3,
    size: 'small',
  },
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
    </AvatarGroup>
  ),
}

export const LargeSize: Story = {
  args: {
    max: 4,
    size: 'large',
  },
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
    </AvatarGroup>
  ),
}

export const NoLimit: Story = {
  args: {
    max: undefined,
    size: 'medium',
  },
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
    </AvatarGroup>
  ),
}

export const FewAvatars: Story = {
  args: {
    max: 5,
    size: 'medium',
  },
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar />
      <Avatar />
      <Avatar />
    </AvatarGroup>
  ),
}
