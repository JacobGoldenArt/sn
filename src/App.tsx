import { 
  Search, HelpCircle, Settings, BookOpen, Users, Shield, Building, 
  Briefcase, MessageSquare, Monitor, Lock, Database, GraduationCap,
  FileText, Server, Smartphone, Globe
} from 'lucide-react';
import { ServiceCard } from './components/ServiceCard';
import { SidebarNav } from './components/SidebarNav';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import backgroundImage from 'figma:asset/c81ad969ffb3a03a3dd4480208fd14ffab5a716e.png';

export default function App() {
  const sidebarCategories = [
    { title: "Administrative & Business", icon: Briefcase, isActive: true },
    { title: "Communication & Collaboration", icon: MessageSquare },
    { title: "Desktop & Mobile Computing", icon: Monitor },
    { title: "Information Security", icon: Lock },
    { title: "Infrastructure", icon: Server },
    { title: "IT Professional Services", icon: Settings },
    { title: "Research", icon: Database },
    { title: "Teaching & Learning", icon: GraduationCap }
  ];

  const serviceCards = [
    {
      title: "Administrative & Business",
      description: "Business process automation, facilities management, and administrative support services.",
      icon: Briefcase,
      color: "#4e58a6", // Princess Tree Purple
      services: [
        "Business Capability & Process Automation",
        "Facilities Management", 
        "Administrative Support Services"
      ]
    },
    {
      title: "Communication & Collaboration",
      description: "Tools and services for effective communication, collaboration, and connectivity across campus.",
      icon: MessageSquare,
      color: "#006472", // American River Teal
      services: [
        "Conferencing & Telephony",
        "Email & Collaboration Services",
        "Communication Platforms"
      ]
    },
    {
      title: "Desktop & Mobile Computing",
      description: "Computer support, mobile device management, and printing services for the campus community.",
      icon: Monitor,
      color: "#8b346d", // Mulberry
      services: [
        "Desktop & Mobile Device Support",
        "Printing & Related Services",
        "Software Distribution"
      ]
    },
    {
      title: "Information Security",
      description: "Comprehensive security services to protect campus data, systems, and digital infrastructure.",
      icon: Lock,
      color: "#c6401d", // Red Maple
      services: [
        "Access Management",
        "Secure Computing",
        "Security Consulting & Education"
      ]
    },
    {
      title: "Infrastructure",
      description: "Core technology infrastructure including networks, servers, and system monitoring services.",
      icon: Server,
      color: "#006472", // American River Teal
      services: [
        "Network Services",
        "Database Management",
        "Monitoring & Alert Management"
      ]
    },
    {
      title: "IT Professional Services",
      description: "Professional IT consulting, project management, and specialized technical services.",
      icon: Settings,
      color: "#8b346d", // Mulberry
      services: [
        "Consulting & Documentation",
        "IT Service Delivery & Support",
        "Project Management"
      ]
    },
    {
      title: "Research",
      description: "Specialized computing resources and support services for academic and scientific research.",
      icon: Database,
      color: "#4e58a6", // Princess Tree Purple
      services: [
        "Research Data Services",
        "Research Software",
        "Research-Specific Computing & Applications"
      ]
    },
    {
      title: "Teaching & Learning",
      description: "Educational technology services supporting innovative teaching methods and student learning.",
      icon: GraduationCap,
      color: "#008453", // Stinger Green
      services: [
        "Academic Technology & Support",
        "Assessment Systems & Learning Analytics",
        "Educational Platforms"
      ]
    }
  ];

  return (
    <div 
      className="min-h-screen relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.95), rgba(248, 250, 252, 0.95)), url(${backgroundImage})`
      }}
    >
      {/* Header */}
      <header style={{ backgroundColor: '#043927' }} className="shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Building className="w-8 h-8 text-white" />
            <h1 className="text-2xl text-white">Hornet Hub</h1>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-white text-lg">Customer Service Portal</span>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input 
                placeholder="Search the Service Desk..."
                className="pl-10 w-80 bg-white border-slate-200"
              />
            </div>
            <Button 
              size="sm" 
              style={{ backgroundColor: '#e6b711' }}
              className="hover:opacity-90 text-slate-900"
            >
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8">
        {/* Sidebar */}
        <aside className="w-80 flex-shrink-0">
          <SidebarNav categories={sidebarCategories} />
        </aside>

        {/* Main Content Area */}
        <main className="flex-1">
          {/* Page Title */}
          <div className="mb-6">
            <h2 className="text-2xl mb-2" style={{ color: '#043927' }}>Campus Service Catalog</h2>
            <p className="text-slate-600 mb-4">
              Welcome to the Campus Service Catalog. Browse services within the categories and offerings listed below and track your location in the left hand margin. 
              <button className="hover:underline ml-1" style={{ color: '#4e58a6' }}>Login</button> to view departmental catalogs.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input 
                placeholder="Search the Campus Service Catalog"
                className="pl-10 bg-white border-slate-200"
              />
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((card, index) => (
              <ServiceCard key={index} {...card} />
            ))}
          </div>

          {/* Additional Services Note */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> Additional services may be available through departmental catalogs. 
              Please log in to access specialized services for your department or role.
            </p>
          </div>
        </main>
      </div>

      {/* Help Assistant */}
      <div className="fixed bottom-6 right-6 z-30">
        <Button 
          size="lg" 
          className="rounded-full w-14 h-14 shadow-lg hover:opacity-90"
          style={{ backgroundColor: '#e6b711', color: '#043927' }}
        >
          <HelpCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}