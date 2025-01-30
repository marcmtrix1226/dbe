import { useEffect, useRef } from 'react';

export function useFormProtection() {
  const hasUnsavedChanges = useRef(false);

  useEffect(() => {
    const forms = document.querySelectorAll('form');
    
    const handleFormChange = () => {
      hasUnsavedChanges.current = true;
    };

    forms.forEach(form => {
      form.addEventListener('change', handleFormChange);
      form.addEventListener('submit', () => {
        hasUnsavedChanges.current = false;
      });
    });

    return () => {
      forms.forEach(form => {
        form.removeEventListener('change', handleFormChange);
      });
    };
  }, []);

  return {
    checkUnsavedChanges: () => hasUnsavedChanges.current
  };
}