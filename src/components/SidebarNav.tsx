import { LucideIcon, ChevronRight } from 'lucide-react';

interface SidebarNavProps {
  categories: {
    title: string;
    icon: LucideIcon;
    isActive?: boolean;
  }[];
}

export function SidebarNav({ categories }: SidebarNavProps) {
  return (
    <div className="bg-slate-50 rounded-lg p-4">
      <h3 className="mb-4 text-lg" style={{ color: '#043927' }}>Campus Service Catalog</h3>
      <nav className="space-y-1">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`w-full flex items-center justify-between px-3 py-2 text-left text-sm rounded-md transition-colors hover:bg-white ${
              category.isActive ? 'bg-white shadow-sm' : ''
            }`}
            style={{ 
              color: category.isActive ? '#043927' : '#64748b'
            }}
          >
            <div className="flex items-center space-x-3">
              <category.icon className="w-4 h-4" />
              <span>{category.title}</span>
            </div>
            <ChevronRight className="w-4 h-4" />
          </button>
        ))}
      </nav>
      <div className="mt-6">
        <button 
          className="w-full px-4 py-2 text-sm text-white rounded-md hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#006472' }}
        >
          Login to View Departmental Catalogs
        </button>
      </div>
    </div>
  );
}