import React from 'react'

interface AvatarGroupProps {
    max?: number
    size?: 'extra small' | 'small' | 'medium' | 'large' | 'extra large'
    children: React.ReactNode
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ max = 3, size = 'medium', children }) => {
    const childArray = React.Children.toArray(children)
    const visibleChildren = max ? childArray.slice(0, max) : childArray
    const remainingCount = childArray.length - visibleChildren.length

    // Size classes for the overflow avatar
    const sizeClasses = {
        'extra small': 'w-6 h-6 text-xs',
        'small': 'w-8 h-8 text-xs',
        'medium': 'w-10 h-10 text-sm',
        'large': 'w-12 h-12 text-base',
        'extra large': 'w-16 h-16 text-lg'
    }

    return (
        <div className="flex items-center">
            {visibleChildren.map((child, index) => {
                if (React.isValidElement(child)) {
                    return (
                        <div
                            key={index}
                            className="-ml-2 first:ml-0 ring-2 ring-white rounded-full"
                            style={{ zIndex: visibleChildren.length - index }}
                        >
                            {React.cloneElement(child as React.ReactElement<any>, {
                                size: size
                            })}
                        </div>
                    )
                }
                return null
            })}
            {remainingCount > 0 && (
                <div
                    className={`-ml-2 flex items-center justify-center bg-base-300 text-base-700 font-medium rounded-full ring-2 ring-white ${sizeClasses[size]}`}
                    style={{ zIndex: 0 }}
                >
                    +{remainingCount}
                </div>
            )}
        </div>
    )
}

export default AvatarGroup
