import React from 'react';

interface NotificationDotProps {
    /** Whether the notification dot is visible */
    visible?: boolean;
    /** Size variant of the dot */
    size?: 'small' | 'medium' | 'large';
    /** Color variant of the dot */
    variant?: 'primary' | 'error' | 'warning' | 'success';
    /** Optional label for screen readers */
    ariaLabel?: string;
    /** Position of the dot relative to parent */
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    /** Shape of parent element - affects positioning */
    parentShape?: 'circle' | 'square';
}

export const NotificationDot: React.FC<NotificationDotProps> = ({
    visible = true,
    size = 'medium',
    variant = 'error',
    ariaLabel = 'Notification',
    position = 'top-right',
    parentShape = 'square',
}) => {
    if (!visible) return null;

    const sizeClasses = {
        small: 'w-2 h-2',
        medium: 'w-3 h-3',
        large: 'w-4 h-4',
    };

    const variantClasses = {
        primary: 'bg-blue-600',
        error: 'bg-red-600',
        warning: 'bg-orange-600',
        success: 'bg-green-600',
    };

    // For circles, use percentage-based positioning to sit on the circular edge
    // For squares, use slight negative margins to overlap the corner
    const positionClasses = parentShape === 'circle' ? {
        'top-right': 'top-[8%] right-[8%]',
        'top-left': 'top-[8%] left-[8%]',
        'bottom-right': 'bottom-[8%] right-[8%]',
        'bottom-left': 'bottom-[8%] left-[8%]',
    } : {
        'top-right': '-top-0.5 -right-0.5',
        'top-left': '-top-0.5 -left-0.5',
        'bottom-right': '-bottom-0.5 -right-0.5',
        'bottom-left': '-bottom-0.5 -left-0.5',
    };

    return (
        <span
            className={`absolute rounded-full border-2 border-white ${sizeClasses[size]} ${variantClasses[variant]} ${positionClasses[position]}`}
            role="status"
            aria-label={ariaLabel}
            aria-live="polite"
        />
    );
};