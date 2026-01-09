import { UserIcon } from '@heroicons/react/24/solid'
import React from 'react'

interface AvatarProps {
    size?: 'extra small' |'small' | 'medium' | 'large' | 'extra large'
    shape?: 'circle' | 'square'
    children?: React.ReactNode
}

const sizeClasses = {
    'extra small': 'w-6 h-6',
    'small': 'w-8 h-8',
    'medium': 'w-10 h-10',
    'large': 'w-12 h-12',
    'extra large': 'w-16 h-16'
}

const iconSizeClasses = {
    'extra small': 'w-4 h-4',
    'small': 'w-5 h-5',
    'medium': 'w-6 h-6',
    'large': 'w-7 h-7',
    'extra large': 'w-10 h-10'
}

// Map avatar sizes to notification dot sizes
const notificationDotSizes: Record<string, 'small' | 'medium' | 'large'> = {
    'extra small': 'small',
    'small': 'small',
    'medium': 'small',
    'large': 'medium',
    'extra large': 'large'
}

const Avatar:React.FC<AvatarProps> = ({size = 'medium', shape = 'circle', children}) => {
    const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-md'
    
    // Clone children and inject size and parentShape props if it's a NotificationDot
    const enhancedChildren = children && React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            // Check if it's a NotificationDot by checking for the expected props
            const childProps = child.props as any
            if ('ariaLabel' in childProps || 'variant' in childProps || child.type?.toString().includes('NotificationDot')) {
                return React.cloneElement(child as React.ReactElement<any>, {
                    size: notificationDotSizes[size],
                    parentShape: shape
                })
            }
        }
        return child
    })
    
    return (
        <div className="relative inline-block">
            <div className={`flex items-center justify-center bg-gray-200 ${sizeClasses[size]} ${shapeClass}`}>
                <UserIcon className={`text-gray-600 ${iconSizeClasses[size]}`} />
            </div>
            {enhancedChildren}
        </div>
    )
}

export default Avatar