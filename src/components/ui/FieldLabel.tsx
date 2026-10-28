import { StyleSheet, Text } from 'react-native';

import { colors } from '@/constants/colors';

export function FieldLabel({ children }: { children: string }) {
  return <Text style={styles.label}>{children}</Text>;
}

const styles = StyleSheet.create({
  label: {
    color: colors.pink,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '600',
    marginTop: 18,
    marginBottom: 8,
  },
});
