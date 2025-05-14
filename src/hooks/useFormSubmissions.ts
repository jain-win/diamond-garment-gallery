
import { useState, useEffect } from 'react';

interface FormSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  product: string;
  message: string;
  status: 'new' | 'read' | 'responded';
  date: string;
}

export const useFormSubmissions = () => {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load submissions from localStorage
    const loadSubmissions = () => {
      setIsLoading(true);
      try {
        const saved = localStorage.getItem('contactSubmissions');
        const parsedSubmissions = saved ? JSON.parse(saved) : [];
        setSubmissions(parsedSubmissions);
      } catch (error) {
        console.error('Error loading submissions:', error);
        setSubmissions([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadSubmissions();
  }, []);

  const updateSubmission = (id: string, updates: Partial<FormSubmission>) => {
    setSubmissions(prevSubmissions => {
      const updated = prevSubmissions.map(submission =>
        submission.id === id ? { ...submission, ...updates } : submission
      );
      localStorage.setItem('contactSubmissions', JSON.stringify(updated));
      return updated;
    });
  };

  const deleteSubmission = (id: string) => {
    setSubmissions(prevSubmissions => {
      const filtered = prevSubmissions.filter(submission => submission.id !== id);
      localStorage.setItem('contactSubmissions', JSON.stringify(filtered));
      return filtered;
    });
  };

  const addSubmission = (submission: Omit<FormSubmission, 'id' | 'status' | 'date'>) => {
    const newSubmission: FormSubmission = {
      ...submission,
      id: Date.now().toString(),
      status: 'new',
      date: new Date().toISOString()
    };

    setSubmissions(prevSubmissions => {
      const updated = [...prevSubmissions, newSubmission];
      localStorage.setItem('contactSubmissions', JSON.stringify(updated));
      return updated;
    });

    return newSubmission;
  };

  return { 
    submissions, 
    isLoading, 
    updateSubmission, 
    deleteSubmission, 
    addSubmission 
  };
};
