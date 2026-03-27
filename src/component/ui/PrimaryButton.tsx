import { MoveRight } from 'lucide-react';
import type { ButtonProps } from '../../lib/types';

export const PrimaryButton = ({ text, href }: ButtonProps) => {
  return (
    <a
      href={href}
      className="bg-primary group relative inline-flex shrink-0 items-center overflow-hidden rounded-full py-3 pr-14 pl-6 font-medium text-white"
    >
      <span className="relative z-10 block">{text}</span>

      <span className="absolute right-4 flex space-x-1">
        <MoveRight className="transform transition-all duration-300 group-hover:translate-x-4 group-hover:opacity-0" />
        <MoveRight className="absolute left-0 -translate-x-4 transform opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
      </span>
    </a>
  );
};
