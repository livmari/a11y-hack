interface BadgeProps {
    label: string;
    variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
    color?: string; // Any Tailwind color like 'emerald', 'rose', 'purple', etc.
    size?: 'small' | 'medium' | 'large';
}

const Badge: React.FC<BadgeProps> = ({ label, variant = 'default', color, size = 'medium' }) => {
    const sizeClasses = {
        small: 'px-2 py-0.5 text-xs',
        medium: 'px-2.5 py-1 text-sm',
        large: 'px-3 py-1.5 text-base'
    };

    // If custom color is provided, use it; otherwise use variant
    const getColorClasses = () => {
        if (color) {
            return `bg-${color}-100 text-${color}-800 border border-${color}-200`;
        }
        
        const variantClasses = {
            default: 'bg-base-100 text-base-800 border border-base-200',
            primary: 'bg-primary-100 text-primary-800 border border-primary-200',
            success: 'bg-success-100 text-success-800 border border-success-200',
            warning: 'bg-warning-100 text-warning-800 border border-warning-200',
            error: 'bg-error-100 text-error-800 border border-error-200'
        };
        
        return variantClasses[variant];
    };

    return (
        <span className={`inline-flex items-center rounded-full font-medium ${sizeClasses[size]} ${getColorClasses()}`}>
            {label}
        </span>
    );
}

export default Badge