import type { ContactMethod, SubjectOption } from '@/interfaces/contact';
import type { Subject } from '@/types/contact';

import { store } from './store';

export const contactMethods: ContactMethod[] = [
  {
    icon: 'location',
    title: 'Nossa Loja',
    lines: [store.address, store.city],
  },
  {
    icon: 'phone',
    title: 'Telefone',
    lines: [store.phone, store.openingHours],
  },
  {
    icon: 'mail',
    title: 'E-mail',
    lines: [store.email, store.partnershipEmail],
  },
];

export const subjectOptions: SubjectOption[] = [
  { value: 'duvida', label: 'Dúvida' },
  { value: 'pedido', label: 'Sugestão' },
  { value: 'reclamacao', label: 'Reclamação' },
  { value: 'parceria', label: 'Parcerias' },
];

export const defaultSubject: Subject = 'duvida';
