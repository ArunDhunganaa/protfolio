import { MoveRight } from 'lucide-react';
import type { ButtonProps } from '../../lib/types';

export const OutlineButton = ({ text, href }: ButtonProps) => {
  return (
    <a
      href={href}
      className="group border-border text-text hover:border-primary hover:text-primary relative inline-flex items-center gap-3 rounded-full border-2 py-3 pr-14 pl-6 font-medium transition-all duration-300"
    >
      <span className="relative z-10">{text}</span>

      <span className="absolute right-4 flex space-x-1">
        <MoveRight className="text-text group-hover:text-primary transform transition-all duration-300 group-hover:translate-x-4 group-hover:opacity-0" />
        <MoveRight className="text-text group-hover:text-primary absolute left-0 -translate-x-4 transform opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
      </span>
    </a>
  );
};
