import { LucideIcon } from 'lucide-react';

interface ServiceCategoryProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  position: string;
}

export function ServiceCategory({ title, description, icon: Icon, color, position }: ServiceCategoryProps) {
  return (
    <div className={`absolute ${position} flex flex-col items-center group cursor-pointer transition-transform hover:scale-105 w-40`}>
      <div 
        className={`w-20 h-20 rounded-full flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-shadow`}
        style={{ backgroundColor: color }}
      >
        <Icon className="w-10 h-10 text-white" />
      </div>
      <h3 className="mb-2 text-center text-sm">{title}</h3>
      <p className="text-xs text-muted-foreground text-center leading-tight">
        {description}
      </p>
    </div>
  );
}