
import { cn } from '@/lib/utils';

export interface IconProps extends React.HTMLAttributes<SVGElement> {
  className?: string;
  size?: number;
}

export const Icons = {
  hospital: ({ className, size = 24, ...props }: IconProps) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={cn("", className)}
      width={size}
      height={size}
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
      {...props}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
      />
    </svg>
  ),
  school: ({ className, size = 24, ...props }: IconProps) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={cn("", className)}
      width={size}
      height={size}
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      {...props}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l-6.16-3.422a12.083 12.083 0 00-.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 006.824-2.998 12.078 12.078 0 00-.665-6.479L12 14z" 
      />
    </svg>
  ),
  sports: ({ className, size = 24, ...props }: IconProps) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={cn("", className)}
      width={size}
      height={size}
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
      {...props}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" 
      />
    </svg>
  ),
  hotel: ({ className, size = 24, ...props }: IconProps) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={cn("", className)} 
      width={size}
      height={size}
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
      {...props}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
      />
    </svg>
  ),
  factory: ({ className, size = 24, ...props }: IconProps) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={cn("", className)}
      width={size}
      height={size}
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
      {...props}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
      />
    </svg>
  ),
  scout: ({ className, size = 24, ...props }: IconProps) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={cn("", className)}
      width={size}
      height={size}
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
      {...props}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" 
      />
    </svg>
  ),
};
