import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  services: string[];
}

export function ServiceCard({ title, description, icon: Icon, color, services }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-4">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: color }}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="mb-2" style={{ color: '#043927' }}>{title}</h3>
          <p className="text-sm text-slate-600 mb-4">{description}</p>
          <ul className="space-y-1 mb-4">
            {services.map((service, index) => (
              <li key={index} className="text-sm text-slate-700">
                {service}
              </li>
            ))}
          </ul>
          <button 
            className="text-sm hover:underline"
            style={{ color: '#4e58a6' }}
          >
            View more...
          </button>
        </div>
      </div>
    </div>
  );
}