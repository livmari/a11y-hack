import type { Meta, StoryObj } from '@storybook/nextjs'
import { NotificationDot } from './NotificationDot'

const meta: Meta<typeof NotificationDot> = {
  title: 'Feedback/NotificationDot',
  component: NotificationDot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    visible: {
      control: 'boolean',
      description: 'Whether the notification dot is visible',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant of the dot',
    },
    variant: {
      control: 'select',
      options: ['primary', 'error', 'warning', 'success'],
      description: 'Color variant of the dot',
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      description: 'Position of the dot relative to parent',
    },
    ariaLabel: {
      control: 'text',
      description: 'Optional label for screen readers',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '40px', display: 'inline-block' }}>
        <div 
          style={{ 
            position: 'relative',
            width: '60px', 
            height: '60px', 
            backgroundColor: '#e0e0e0', 
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            color: '#666'
          }}
        >
          Parent
          <Story />
        </div>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof NotificationDot>

export const Default: Story = {
  args: {
    visible: true,
    size: 'medium',
    variant: 'error',
    ariaLabel: 'Notification',
    position: 'top-right',
  },
}

export const Small: Story = {
  args: {
    visible: true,
    size: 'small',
    variant: 'error',
    ariaLabel: 'Small notification',
    position: 'top-right',
  },
}

export const Medium: Story = {
  args: {
    visible: true,
    size: 'medium',
    variant: 'error',
    ariaLabel: 'Medium notification',
    position: 'top-right',
  },
}

export const Large: Story = {
  args: {
    visible: true,
    size: 'large',
    variant: 'error',
    ariaLabel: 'Large notification',
    position: 'top-right',
  },
}

export const Primary: Story = {
  args: {
    visible: true,
    size: 'medium',
    variant: 'primary',
    ariaLabel: 'Primary notification',
    position: 'top-right',
  },
}

export const Error: Story = {
  args: {
    visible: true,
    size: 'medium',
    variant: 'error',
    ariaLabel: 'Error notification',
    position: 'top-right',
  },
}

export const Warning: Story = {
  args: {
    visible: true,
    size: 'medium',
    variant: 'warning',
    ariaLabel: 'Warning notification',
    position: 'top-right',
  },
}

export const Success: Story = {
  args: {
    visible: true,
    size: 'medium',
    variant: 'success',
    ariaLabel: 'Success notification',
    position: 'top-right',
  },
}

export const TopLeft: Story = {
  args: {
    visible: true,
    size: 'medium',
    variant: 'error',
    ariaLabel: 'Top left notification',
    position: 'top-left',
  },
}

export const TopRight: Story = {
  args: {
    visible: true,
    size: 'medium',
    variant: 'error',
    ariaLabel: 'Top right notification',
    position: 'top-right',
  },
}

export const BottomLeft: Story = {
  args: {
    visible: true,
    size: 'medium',
    variant: 'error',
    ariaLabel: 'Bottom left notification',
    position: 'bottom-left',
  },
}

export const BottomRight: Story = {
  args: {
    visible: true,
    size: 'medium',
    variant: 'error',
    ariaLabel: 'Bottom right notification',
    position: 'bottom-right',
  },
}

export const Hidden: Story = {
  args: {
    visible: false,
    size: 'medium',
    variant: 'error',
    ariaLabel: 'Hidden notification',
    position: 'top-right',
  },
}
