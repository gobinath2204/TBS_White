// Key for localStorage
const STORAGE_KEY = 'automotive_job_postings';

// Initial dummy data with TBS IDs
const initialJobs = [
  {
    id: 'TBS0001',
    title: "Automotive Engineer",
    location: "Birmingham, UK",
    type: "Full-time",
    description: "Design and develop next-generation vehicle systems for electric vehicles.",
    fullDescription: `Lead the development of EV propulsion systems. Responsibilities include:
- Designing battery management systems
- Optimizing thermal management solutions
- Collaborating with cross-functional teams
- Conducting prototype testing and validation

Requirements:
- Bachelor's in Mechanical/Electrical Engineering
- 5+ years automotive experience
- Expertise in CAD software`
  },
  {
    id: 'TBS0002',
    title: "Production Manager",
    location: "Coventry, UK",
    type: "Contract",
    description: "Oversee manufacturing processes in automotive assembly plant",
    fullDescription: `Manage daily operations of production line. Key responsibilities:
- Optimize manufacturing workflows
- Ensure production targets are met
- Implement lean manufacturing principles
- Supervise team of 50+ technicians

Requirements:
- Degree in Industrial Engineering
- 8+ years automotive production experience
- Six Sigma certification preferred`
  }
];

// Helper functions to work with localStorage
const getStoredJobs = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    // If no stored data, initialize with dummy data
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialJobs));
    return initialJobs;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return initialJobs;
  }
};

const setStoredJobs = (jobs) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
  } catch (error) {
    console.error('Error writing to localStorage:', error);
  }
};

// Function to extract numeric part from TBS ID
const extractNumericPart = (jobId) => {
  if (typeof jobId !== 'string') return 0;
  const match = jobId.match(/TBS(\d+)/);
  return match ? parseInt(match[1]) : 0;
};

// Function to find the next available TBS ID
const getNextTBSJobId = () => {
  const jobs = getStoredJobs();
  
  if (jobs.length === 0) {
    return 'TBS0001';
  }
  
  // Get all numeric IDs and find the maximum
  const numericIds = jobs.map(job => extractNumericPart(job.id)).filter(id => !isNaN(id));
  
  if (numericIds.length === 0) {
    return 'TBS0001';
  }
  
  const maxId = Math.max(...numericIds);
  const nextNumericId = maxId + 1;
  
  return `TBS${String(nextNumericId).padStart(4, '0')}`;
};

// Export functions
export const getJobs = () => {
  return getStoredJobs();
};

export const addJob = (job) => {
  try {
    const jobs = getStoredJobs();
    const newJob = {
      ...job,
      id: getNextTBSJobId() // Use the TBS ID system
    };
    console.log('Adding new job with ID:', newJob.id);
    const updatedJobs = [...jobs, newJob];
    setStoredJobs(updatedJobs);
    return newJob;
  } catch (error) {
    console.error('Error adding job:', error);
    throw error;
  }
};

export const updateJob = (id, updatedJob) => {
  try {
    const jobs = getStoredJobs();
    const index = jobs.findIndex(job => job.id === id);
    if (index !== -1) {
      jobs[index] = { ...updatedJob, id };
      setStoredJobs(jobs);
      return jobs[index];
    }
    return null;
  } catch (error) {
    console.error('Error updating job:', error);
    throw error;
  }
};

export const deleteJob = (id) => {
  try {
    const jobs = getStoredJobs();
    const updatedJobs = jobs.filter(job => job.id !== id);
    setStoredJobs(updatedJobs);
    return true;
  } catch (error) {
    console.error('Error deleting job:', error);
    throw error;
  }
};

// Get all used job IDs (for verification)
export const getUsedJobIdsList = () => {
  return getStoredJobs().map(job => job.id);
};

// Reset to default
export const resetToDefault = () => {
  setStoredJobs(initialJobs);
  return initialJobs;
};

// Debug function to check current state
export const debugJobData = () => {
  const jobs = getStoredJobs();
  return {
    totalJobs: jobs.length,
    jobIds: jobs.map(job => job.id),
    nextId: getNextTBSJobId(),
    localStorage: localStorage.getItem(STORAGE_KEY)
  };
};