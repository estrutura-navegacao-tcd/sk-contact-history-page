import { StyleSheet, Text, View } from 'react-native';

import { TimelineItem } from '@/components/history/TimelineItem';
import { colors } from '@/constants/colors';
import { milestones } from '@/constants/history';

export function Timeline() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Nossa Trajetória</Text>
      <View style={styles.timeline}>
        <View style={styles.rail} />
        {milestones.map((milestone) => (
          <TimelineItem key={milestone.year} {...milestone} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingTop: 48,
    paddingBottom: 80,
    backgroundColor: colors.white,
  },
  title: {
    color: colors.brown,
    fontSize: 34,
    lineHeight: 42,
    fontWeight: '700',
    textAlign: 'center',
    marginHorizontal: 24,
    marginBottom: 44,
  },
  timeline: {
    position: 'relative',
    gap: 24,
    marginHorizontal: 24,
  },
  rail: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 45,
    width: 2,
    backgroundColor: '#f178b64d',
  },
});
