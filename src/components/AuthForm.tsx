'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface AuthFormProps {
  onSuccess: () => void;
}

const AuthForm = ({ onSuccess }: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simple local authentication for demo purposes
    setTimeout(() => {
      if (email === 'admin@example.com' && password === 'password123') {
        // Store mock token in localStorage
        localStorage.setItem('auroraAdminToken', 'mock-jwt-token');
        onSuccess();
      } else {
        setError('Invalid credentials. Try admin@example.com / password123');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <motion.div
      className="w-full max-w-md mx-auto p-8 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-white">Team Login</h2>
      <p className="text-gray-400 mb-8">Sign in to access the admin dashboard and manage portfolio content.</p>
      
      {error && (
        <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
            placeholder="admin@example.com"
            required
          />
        </div>
        
        <div className="mb-8">
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
            placeholder="password123"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 rounded-lg bg-orange-500 text-white font-medium transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>For demo purposes use:</p>
          <p className="mt-1">Email: admin@example.com</p>
          <p>Password: password123</p>
        </div>
      </form>
    </motion.div>
  );
};

export default AuthForm; 