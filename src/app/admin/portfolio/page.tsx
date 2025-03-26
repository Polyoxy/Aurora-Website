'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  services: string[];
  image: string;
}

// Sample data
const samplePortfolioItems: PortfolioItem[] = [
  {
    id: 'project1',
    title: 'Nebula Analytics Dashboard',
    category: 'Product Design',
    services: ['UI Design', 'UX Research', 'Development'],
    image: '/images/portfolio/project1.jpg',
  },
  {
    id: 'project2',
    title: 'Quantum Brand Identity',
    category: 'Branding',
    services: ['Visual Identity', 'Brand Strategy', 'Art Direction'],
    image: '/images/portfolio/project2.jpg',
  },
  {
    id: 'project3',
    title: 'Solstice Mobile Application',
    category: 'App Development',
    services: ['UI Design', 'Front-end Development', 'User Testing'],
    image: '/images/portfolio/project3.jpg',
  },
];

export default function PortfolioManagementPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(samplePortfolioItems);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState<PortfolioItem | null>(null);
  const router = useRouter();

  // Form states
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [services, setServices] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    // Check if user is authenticated - in a real app, this would use a secure auth system
    const checkAuth = () => {
      // For demo purposes, assume the user is authenticated
      // In a real app, you would check session/cookies/auth state
      setIsAuthenticated(true);
      setLoading(false);
    };

    // Simulate API call delay
    setTimeout(checkAuth, 1000);
  }, [router]);

  const handleEdit = (item: PortfolioItem) => {
    setCurrentItem(item);
    setTitle(item.title);
    setCategory(item.category);
    setServices(item.services.join(', '));
    setImage(item.image);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setPortfolioItems(portfolioItems.filter(item => item.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = {
      title,
      category,
      services: services.split(',').map(service => service.trim()),
      image,
    };

    if (isEditing && currentItem) {
      // Update existing item
      setPortfolioItems(
        portfolioItems.map(item => 
          item.id === currentItem.id ? { ...item, ...formData } : item
        )
      );
    } else {
      // Add new item
      const newId = `project${Date.now()}`;
      setPortfolioItems([...portfolioItems, { id: newId, ...formData }]);
    }

    // Reset form
    setTitle('');
    setCategory('');
    setServices('');
    setImage('');
    setIsEditing(false);
    setCurrentItem(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    router.push('/admin');
    return null;
  }

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Portfolio Management</h1>
          <Link 
            href="/admin" 
            className="text-gray-400 hover:text-white flex items-center"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="mr-2"
            >
              <path d="M15.8334 10H4.16669" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 4.16666L4.16667 10L10 15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Dashboard
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Form */}
          <div className="lg:col-span-1">
            <motion.div 
              className="bg-gray-900 rounded-xl p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-xl font-bold mb-6">{isEditing ? 'Edit Project' : 'Add New Project'}</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-white"
                    placeholder="e.g. Nebula Analytics Dashboard"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                    Category
                  </label>
                  <input
                    id="category"
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-white"
                    placeholder="e.g. Product Design"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="services" className="block text-sm font-medium text-gray-300 mb-2">
                    Services (comma separated)
                  </label>
                  <input
                    id="services"
                    type="text"
                    value={services}
                    onChange={(e) => setServices(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-white"
                    placeholder="e.g. UI Design, UX Research, Development"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="image" className="block text-sm font-medium text-gray-300 mb-2">
                    Image URL
                  </label>
                  <input
                    id="image"
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-white"
                    placeholder="/images/portfolio/project1.jpg"
                    required
                  />
                </div>
                
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-lg bg-gray-700 text-white font-medium transition-colors hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    {isEditing ? 'Update Project' : 'Add Project'}
                  </button>
                  
                  {isEditing && (
                    <button
                      type="button"
                      onClick={() => {
                        setTitle('');
                        setCategory('');
                        setServices('');
                        setImage('');
                        setIsEditing(false);
                        setCurrentItem(null);
                      }}
                      className="px-6 py-2 rounded-lg border border-gray-600 text-white font-medium transition-colors hover:bg-gray-800"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
          
          {/* Project List */}
          <div className="lg:col-span-2">
            <motion.div 
              className="bg-gray-900 rounded-xl p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h2 className="text-xl font-bold mb-6">Projects ({portfolioItems.length})</h2>
              
              {portfolioItems.length === 0 ? (
                <div className="text-center py-8 text-gray-400">
                  No projects found. Add your first project!
                </div>
              ) : (
                <div className="space-y-4">
                  {portfolioItems.map((item) => (
                    <motion.div 
                      key={item.id}
                      className="bg-gray-800 rounded-lg p-4 flex flex-col md:flex-row gap-4 justify-between"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.category}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {item.services.map((service, index) => (
                            <span 
                              key={index}
                              className="text-xs px-2 py-1 bg-gray-700 rounded-full"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex md:flex-col gap-2 self-end md:self-center">
                        <button
                          onClick={() => handleEdit(item)}
                          className="px-3 py-1 bg-gray-700 rounded-md text-sm hover:bg-gray-600 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="px-3 py-1 bg-red-900/50 text-red-300 rounded-md text-sm hover:bg-red-900 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 