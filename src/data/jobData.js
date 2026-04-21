// Key for localStorage
const STORAGE_KEY = "automotive_job_postings";

// Initial dummy data with TBS IDs
const initialJobs = [
  {
    id: "BEV_IN",
    title: "BEV Systems Integration Engineer",
    location: "Coventry, UK",
    type: "Full-time",
    description:
      "Vehicle-level integration of battery, power electronics, drive units & thermal systems for EV applications.",
    fullDescription: `Role Highlights:
- Vehicle-level integration of battery, power electronics, drive units & thermal systems
- System requirements, interfaces & validation
- Collaboration with design, validation & manufacturing teams
- Compliance with ISO 26262 & UNECE R100
- Hands-on with tools like CANalyzer, CANape, INCA, MATLAB/Simulink

Experience:
- 3+ years in Automotive / EV integration`,
  },
  {
    id: "ESETRY",
    title: "Embedded Software Engineer",
    location: "ELCOT IT Park, Trichy (Tamil Nadu)",
    type: "Full-time",
    description:
      "Automotive Embedded Software development, working with BSW, MCAL, SWC, and CDD.",
    fullDescription: `Role Highlights:
- Automotive Embedded Software development
- Hands-on development with BSW, MCAL, OS configuration, SWC, and Complex Device Drivers (CDD)
- Embedded C programming on automotive microcontrollers
- Working with peripherals and advanced debugging tools
- Software testing including Unit, Integration, and Acceptance Testing
- Leading and mentoring a team of engineers
- Adherence to automotive standards and processes such as ASPICE and ISO 26262

Experience Required:
- 4–8 years of experience in Automotive Embedded Software Development`,
  },
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
    console.error("Error reading from localStorage:", error);
    return initialJobs;
  }
};

const setStoredJobs = (jobs) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
  } catch (error) {
    console.error("Error writing to localStorage:", error);
  }
};

// Function to extract numeric part from TBS ID
const extractNumericPart = (jobId) => {
  if (typeof jobId !== "string") return 0;
  const match = jobId.match(/TBS(\d+)/);
  return match ? parseInt(match[1]) : 0;
};

// Function to find the next available TBS ID
const getNextTBSJobId = () => {
  const jobs = getStoredJobs();

  if (jobs.length === 0) {
    return "TBS0001";
  }

  // Get all numeric IDs and find the maximum
  const numericIds = jobs
    .map((job) => extractNumericPart(job.id))
    .filter((id) => !isNaN(id));

  if (numericIds.length === 0) {
    return "TBS0001";
  }

  const maxId = Math.max(...numericIds);
  const nextNumericId = maxId + 1;

  return `TBS${String(nextNumericId).padStart(4, "0")}`;
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
      id: getNextTBSJobId(), // Use the TBS ID system
    };
    console.log("Adding new job with ID:", newJob.id);
    const updatedJobs = [...jobs, newJob];
    setStoredJobs(updatedJobs);
    return newJob;
  } catch (error) {
    console.error("Error adding job:", error);
    throw error;
  }
};

export const updateJob = (id, updatedJob) => {
  try {
    const jobs = getStoredJobs();
    const index = jobs.findIndex((job) => job.id === id);
    if (index !== -1) {
      jobs[index] = { ...updatedJob, id };
      setStoredJobs(jobs);
      return jobs[index];
    }
    return null;
  } catch (error) {
    console.error("Error updating job:", error);
    throw error;
  }
};

export const deleteJob = (id) => {
  try {
    const jobs = getStoredJobs();
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setStoredJobs(updatedJobs);
    return true;
  } catch (error) {
    console.error("Error deleting job:", error);
    throw error;
  }
};

// Get all used job IDs (for verification)
export const getUsedJobIdsList = () => {
  return getStoredJobs().map((job) => job.id);
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
    jobIds: jobs.map((job) => job.id),
    nextId: getNextTBSJobId(),
    localStorage: localStorage.getItem(STORAGE_KEY),
  };
};
