import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import type { Milestone } from '@/interfaces/history';

export function TimelineItem({ year, title, text }: Milestone) {
  return (
    <View style={styles.item}>
      <Text style={styles.year}>{year}</Text>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    alignItems: 'flex-start',
    gap: 16,
  },
  year: {
    minWidth: 90,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 30,
    backgroundColor: colors.timelinePink,
    color: colors.white,
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    fontWeight: '700',
    shadowColor: colors.timelinePink,
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
    zIndex: 1,
  },
  card: {
    width: '100%',
    padding: 24,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.92)',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  title: {
    color: colors.brown,
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '700',
    marginBottom: 8,
  },
  text: {
    color: colors.text,
    fontSize: 14,
    lineHeight: 21,
  },
});
