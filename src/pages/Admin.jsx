import React, { useState, useEffect } from "react";
import { logout } from "../utils/auth";
import { getJobs, addJob, updateJob, deleteJob, resetToDefault } from "../data/jobData";
import "./Admin.css";

const Admin = () => {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    type: "",
    description: "",
    fullDescription: ""
  });

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = () => {
    const jobsData = getJobs();
    setJobs(jobsData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingJob) {
      updateJob(editingJob.id, formData);
    } else {
      addJob(formData);
    }
    
    resetForm();
    loadJobs();
  };

  const resetForm = () => {
    setFormData({
      title: "",
      location: "",
      type: "",
      description: "",
      fullDescription: ""
    });
    setEditingJob(null);
    setShowForm(false);
  };

  const handleEdit = (job) => {
    setFormData({
      title: job.title,
      location: job.location,
      type: job.type,
      description: job.description,
      fullDescription: job.fullDescription
    });
    setEditingJob(job);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this job posting?")) {
      deleteJob(id);
      loadJobs();
    }
  };

  const handleResetToDefault = () => {
    if (window.confirm("Are you sure you want to reset to default jobs? This will remove all custom jobs.")) {
      resetToDefault();
      loadJobs();
    }
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      logout();
      window.location.reload();
    }
  };

  return (
    <div className="admin-container">
      {/* Admin Header */}
      <div className="admin-header">
        <div className="header-left">
          <h1>Job Postings Management</h1>
          <div className="user-info">
            <span>Welcome, Administrator</span>
          </div>
        </div>
        <div className="header-actions">
          <button 
            className="btn-primary"
            onClick={() => setShowForm(true)}
          >
            Add New Job
          </button>
          <button 
            className="btn-reset"
            onClick={handleResetToDefault}
          >
            Reset to Default
          </button>
          <button 
            className="btn-logout"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Job Form Modal */}
      {showForm && (
        <div className="form-modal">
          <div className="form-content">
            <h2>{editingJob ? "Edit Job" : "Add New Job"}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Job Title:</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Location:</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Job Type:</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div className="form-group">
                <label>Short Description:</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="3"
                  required
                />
              </div>

              <div className="form-group">
                <label>Full Description:</label>
                <textarea
                  name="fullDescription"
                  value={formData.fullDescription}
                  onChange={handleInputChange}
                  rows="8"
                  required
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-primary">
                  {editingJob ? "Update Job" : "Add Job"}
                </button>
                <button type="button" onClick={resetForm} className="btn-secondary">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Jobs List */}
      <div className="jobs-list">
        <div className="jobs-header">
          <h2>Current Job Postings ({jobs.length})</h2>
          <p className="storage-info">Data is stored in your browser's localStorage</p>
        </div>
        {jobs.length === 0 ? (
          <p className="no-jobs">No job postings yet. Add your first job!</p>
        ) : (
          <div className="jobs-grid">
            {jobs.map(job => (
              <div key={job.id} className="job-item">
                <div className="job-info">
                    <h3>{job.title} <span className="job-id">(ID: {job.id})</span></h3>
                    <h3>{job.title}</h3>
                    <p><strong>Location:</strong> {job.location}</p>
                    <p><strong>Type:</strong> {job.type}</p>
                    <p><strong>Short Description:</strong> {job.description}</p>
                </div>
                <div className="job-actions">
                  <button 
                    onClick={() => handleEdit(job)}
                    className="btn-edit"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(job.id)}
                    className="btn-delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;