import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border-b border-current pb-px text-[var(--color-vermilion-mark)] underline-offset-4 hover:text-[var(--color-charcoal-ink)]',
        glow:
          'border-b border-current pb-px text-[var(--color-vermilion-mark)] underline-offset-4 hover:text-[var(--color-charcoal-ink)]',
        destructive: 'text-destructive hover:underline',
        outline: 'text-[var(--color-charcoal-ink)] hover:text-[var(--color-vermilion-mark)]',
        secondary: 'text-[var(--color-charcoal-ink)] hover:text-[var(--color-vermilion-mark)]',
        ghost: 'text-[var(--color-charcoal-ink)] hover:text-[var(--color-vermilion-mark)]',
        link: 'border-b border-current pb-px text-[var(--color-vermilion-mark)] underline-offset-4',
      },
      size: {
        default: 'h-10 px-0 py-0',
        sm: 'h-9 px-0 py-0',
        lg: 'h-11 px-0 py-0 text-[22px]',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
