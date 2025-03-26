// This is a placeholder file that provides mock authentication functionality
// instead of using actual Firebase services

/**
 * Mock authentication service that simulates Firebase Auth functionality
 */
export const placeholderAuth = {
  // Simulates Firebase Auth signIn method
  signIn: async (email: string, password: string) => {
    // Mock implementation
    if (email === 'admin@example.com' && password === 'password123') {
      localStorage.setItem('auroraAdminToken', 'mock-jwt-token');
      return { user: { uid: 'mock-user-id', email } };
    } else {
      throw new Error('Invalid credentials');
    }
  },
  
  // Simulates Firebase Auth signOut method
  signOut: async () => {
    localStorage.removeItem('auroraAdminToken');
  },
  
  // Simulates Firebase Auth onAuthStateChanged method
  onAuthStateChanged: (callback: (user: any) => void) => {
    const token = localStorage.getItem('auroraAdminToken');
    callback(token ? { uid: 'mock-user-id', email: 'admin@example.com' } : null);
    return () => {}; // Unsubscribe function
  }
};

/**
 * Mock database service that simulates Firestore functionality
 */
export const placeholderDb = {
  // Simulates Firestore collection method
  collection: (path: string) => ({
    add: async (data: any) => ({ id: `mock-id-${Date.now()}` }),
    get: async () => ({
      docs: []
    })
  }),
  
  // Simulates Firestore doc method
  doc: (path: string, id: string) => ({
    update: async (data: any) => {},
    delete: async () => {}
  })
}; 