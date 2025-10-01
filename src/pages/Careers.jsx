import React, { useState, useEffect } from "react";
import { getJobs } from "../data/jobData";
import "./Careers.css";

const Careers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Load jobs from data storage
    setJobs(getJobs());
  }, []);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.id.toLowerCase().includes(searchQuery.toLowerCase()) // Also search by job ID
  );

  const handleApply = (job) => {
    const subject = `Application for ${job.title} - ${job.id}`;
    const body = `
Dear TBS Hiring Team,
I am writing to apply for the ${job.title} position (ID: ${job.id}) at your company.

{General Instruction : Inlcude your CV and cover letter (if applicable). Do not change the Subject, Remove the content in this curly braces while sending the email.}

`;

    // Encode the subject and body for mailto link
    const mailtoLink = `mailto:careers@automotivecompany.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="careers-container">
      <h1 className="h1">Career Opportunities</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search automotive jobs by title, description, or job ID..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Job cards in horizontal row */}
      <div className="job-listings">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="job-card"
            onClick={() => setSelectedJob(job)}
          >
            <div className="job-header">
              <h3>{job.title}</h3>
              <span className="job-id-badge">{job.id}</span>
            </div>
            <div className="job-meta">
              <span className="location">{job.location}</span>
              <span className="type">{job.type}</span>
            </div>
            <p className="job-description">{job.description}</p>
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="no-jobs">
          <p>No job openings found matching your search.</p>
        </div>
      )}

      {/* Popup modal for job details */}
      {selectedJob && (
        <div className="modal-overlay" onClick={() => setSelectedJob(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>{selectedJob.title}</h2>
              <span className="modal-job-id">{selectedJob.id}</span>
            </div>
            <p>
              <strong>Location:</strong> {selectedJob.location}
            </p>
            <p>
              <strong>Type:</strong> {selectedJob.type}
            </p>
            <div className="job-full-details">
              <p className="modal-description">{selectedJob.fullDescription}</p>
            </div>
            <div className="modal-actions">
              <button 
                className="apply-btn" 
                onClick={() => handleApply(selectedJob)}
              >
                Apply via Email
              </button>
              <button className="close-btn" onClick={() => setSelectedJob(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;