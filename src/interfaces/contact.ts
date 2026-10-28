import type { IconName } from '@/types/icon';
import type { Subject } from '@/types/contact';

export interface ContactMethod {
  icon: IconName;
  title: string;
  lines: string[];
}

export interface SubjectOption {
  value: Subject;
  label: string;
}

export interface ContactFormValues {
  name: string;
  phone: string;
  email: string;
  subject: Subject;
  message: string;
}
