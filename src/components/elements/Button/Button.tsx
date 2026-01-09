interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string
    variant?: 'filled' | 'outlined' | 'text'
    size?: 'small' | 'medium' | 'large'
}

const Button:React.FC<ButtonProps> = ({label, variant = 'outlined', size = 'medium', className, ...props}) => {
    const baseStyles = 'rounded-md font-medium cursor-pointer transition-all duration-200 border-0 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const sizeStyles = {
        small: 'px-3 py-1.5 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-2.5 text-lg'
    }
    
    const variantStyles = {
        filled: 'bg-blue-500 text-white border-2 border-transparent hover:bg-blue-600 active:bg-blue-700 disabled:hover:bg-blue-500',
        outlined: 'bg-transparent text-blue-500 border-2 border-blue-500 hover:bg-blue-50 active:bg-blue-100 disabled:hover:bg-transparent',
        text: 'bg-transparent text-blue-500 border-2 border-transparent hover:bg-blue-50 active:bg-blue-100 disabled:hover:bg-transparent'
    }
    
    const buttonClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className || ''}`.trim()
    
    return <button {...props} className={buttonClassName}>{label && <span>{label}</span>}</button>
}

export default Button