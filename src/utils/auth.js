// Hardcoded credentials - Change these to your preferred username and password
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'Tbsadmin@123'
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return localStorage.getItem('admin_authenticated') === 'true';
};

// Login function
export const login = (username, password) => {
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    localStorage.setItem('admin_authenticated', 'true');
    return { success: true };
  }
  return { 
    success: false, 
    error: 'Invalid credentials' 
  };
};

// Logout function
export const logout = () => {
  localStorage.removeItem('admin_authenticated');
};

// Get admin credentials for demo (optional)
export const getDemoCredentials = () => {
  return ADMIN_CREDENTIALS;
};