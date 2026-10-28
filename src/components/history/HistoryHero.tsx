import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';

export function HistoryHero() {
  return (
    <View style={styles.hero}>
      <Text style={styles.title}>A Essência da Suki Doces</Text>
      <Text style={styles.subtitle}>Doces que encantam, momentos que marcam.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    paddingVertical: 80,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: colors.pinkPale,
    borderBottomColor: colors.timelinePink,
    borderBottomWidth: 2,
  },
  title: {
    color: colors.brown,
    fontSize: 35,
    lineHeight: 42,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: '#6b4c4c',
    fontSize: 17,
    lineHeight: 23,
    textAlign: 'center',
  },
});
