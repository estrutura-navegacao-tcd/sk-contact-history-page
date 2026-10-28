import type { Href } from 'expo-router';

import type { IconName } from '@/types/icon';

export interface NavItem {
  label: string;
  icon: IconName;
  /** Sem `href`, o item ainda não tem tela (mostra um aviso). */
  href?: Href;
}
