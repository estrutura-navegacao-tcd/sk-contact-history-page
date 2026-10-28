import { useState } from 'react';

import { defaultSubject } from '@/constants/contact';
import type { ContactFormValues } from '@/interfaces/contact';
import { validateContactForm } from '@/lib/validation';
import { sendContactMessage } from '@/services/contactService';

const initialValues: ContactFormValues = {
  name: '',
  phone: '',
  email: '',
  subject: defaultSubject,
  message: '',
};

export function useContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  function setField<K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  async function submit() {
    const validationError = validateContactForm(values);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');
    await sendContactMessage(values);
    setSuccess(true);
  }

  return { values, error, success, setField, submit };
}
