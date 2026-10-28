import { StyleSheet, Text, View } from 'react-native';

import { Icon } from '@/components/ui/Icon';
import { colors } from '@/constants/colors';
import type { ContactMethod } from '@/interfaces/contact';

export function InfoCard({ icon, title, lines }: ContactMethod) {
  return (
    <View style={styles.card}>
      <View style={styles.icon}>
        <Icon name={icon} color={colors.white} size={24} />
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        {lines.map((line) => (
          <Text key={line} style={styles.line}>{line}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 125,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.72)',
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.pink,
    shadowColor: colors.pink,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  text: {
    flex: 1,
  },
  title: {
    color: '#050505',
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '700',
    marginBottom: 4,
  },
  line: {
    color: '#222',
    fontSize: 15,
    lineHeight: 21,
  },
});
