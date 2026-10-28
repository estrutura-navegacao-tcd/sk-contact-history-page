import type { ContactFormValues } from '@/interfaces/contact';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Retorna a mensagem do primeiro erro encontrado, ou `null` se estiver tudo certo. */
export function validateContactForm({
  name,
  email,
  phone,
  message,
}: ContactFormValues): string | null {
  if (name.trim().length < 3) {
    return 'Informe seu nome completo (mínimo de 3 caracteres).';
  }
  if (!EMAIL_PATTERN.test(email.trim())) {
    return 'Informe um e-mail válido.';
  }
  if (phone.trim().length < 8) {
    return 'Informe um telefone válido.';
  }
  if (message.trim().length < 10) {
    return 'A mensagem precisa ter pelo menos 10 caracteres.';
  }
  return null;
}
