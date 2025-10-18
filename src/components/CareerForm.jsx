import './CareerForm.css';
import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { motion } from 'framer-motion';

export default function CareerForm() {
  const [form, setForm] = useState({ name: '', email: '', resume: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });
  const [resumeError, setResumeError] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));

    if (name === 'resume') {
      const urlPattern = /^https?:\/\/.+/;
      setResumeError(value && !urlPattern.test(value) ? 'Please enter a valid link starting with http:// or https://' : '');
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    const urlPattern = /^https?:\/\/.+/;
    if (!urlPattern.test(form.resume)) {
      setStatus({ loading: false, success: null, error: 'Please provide a valid resume link.' });
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'applicants'), {
        name: form.name,
        email: form.email,
        resume: form.resume,
        message: form.message,
        createdAt: serverTimestamp(),
      });

      setStatus({ loading: false, success: 'Application submitted! Thank you.', error: null });
      setForm({ name: '', email: '', resume: '', message: '' });
      setResumeError('');
    } catch (err) {
      setStatus({ loading: false, success: null, error: 'Failed to submit. Try again later.' });
    }
  }

  return (
    <div className="career-form-wrapper">
      <motion.form
        onSubmit={handleSubmit}
        className="career-form card form-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="form-title">Apply Now</h3>

        <div className="form-grid">
          <label>
            <span>Name</span>
            <input name="name" value={form.name} onChange={handleChange} required placeholder="Enter your full name" />
          </label>

          <label>
            <span>Email</span>
            <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" />
          </label>

          <label>
            <span>Resume Link</span>
            <input name="resume" type="url" value={form.resume} onChange={handleChange} placeholder="e.g. https://drive.google.com/..." required />
            {resumeError && <p className="error-text">{resumeError}</p>}
          </label>

          <label className="full">
            <span>Message</span>
            <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Your message (optional)" />
          </label>
        </div>

        <div className="actions">
          <button type="submit" className="btn" disabled={status.loading}>
            {status.loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>

        {status.success && <p className="success">{status.success}</p>}
        {status.error && <p className="error">{status.error}</p>}
      </motion.form>
    </div>
  );
}
