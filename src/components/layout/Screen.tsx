import { ScrollView, StyleSheet, type ScrollViewProps } from 'react-native';

import { colors } from '@/constants/colors';

/** Container rolável padrão das telas. */
export function Screen({ children, ...props }: ScrollViewProps) {
  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} {...props}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
