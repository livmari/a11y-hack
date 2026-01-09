import React from 'react'

interface ButtonGroupProps {
    orientation?: 'horizontal' | 'vertical'
    size?: 'small' | 'medium' | 'large'
    variant?: 'filled' | 'outlined' | 'text'
    children: React.ReactNode
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ 
    orientation = 'horizontal', 
    size = 'medium',
    variant = 'outlined',
    children 
}) => {
    const childArray = React.Children.toArray(children)

    const containerClasses = orientation === 'horizontal' 
        ? 'inline-flex' 
        : 'inline-flex flex-col'

    return (
        <div className={containerClasses} role="group">
            {childArray.map((child, index) => {
                if (React.isValidElement(child)) {
                    const isFirst = index === 0
                    const isLast = index === childArray.length - 1
                    
                    let positionClasses = ''
                    if (orientation === 'horizontal') {
                        positionClasses = isFirst 
                            ? 'rounded-r-none' 
                            : isLast 
                            ? 'rounded-l-none -ml-[2px]' 
                            : 'rounded-none -ml-[2px]'
                    } else {
                        positionClasses = isFirst 
                            ? 'rounded-b-none' 
                            : isLast 
                            ? 'rounded-t-none -mt-[2px]' 
                            : 'rounded-none -mt-[2px]'
                    }

                    return (
                        <div key={index} className="relative">
                            {React.cloneElement(child as React.ReactElement<any>, {
                                size: size,
                                variant: variant,
                                className: `${(child.props as any).className || ''} ${positionClasses}`.trim()
                            })}
                        </div>
                    )
                }
                return null
            })}
        </div>
    )
}

export default ButtonGroup
