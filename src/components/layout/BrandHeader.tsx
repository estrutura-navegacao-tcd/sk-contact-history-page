import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { store } from '@/constants/store';

export function BrandHeader() {
  return (
    <View style={styles.header}>
      <View accessible accessibilityLabel={store.name} style={styles.lockup}>
        <Text style={styles.name}>Suki</Text>
        <Text style={styles.tagline}>doces</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 90,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 8,
    paddingHorizontal: 20,
    borderRadius: 29,
    backgroundColor: colors.pink,
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    zIndex: 2,
  },
  lockup: {
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  name: {
    color: '#fff5fa',
    fontSize: 38,
    lineHeight: 39,
    fontWeight: '900',
    letterSpacing: -2,
  },
  tagline: {
    color: '#fff5fa',
    fontSize: 13,
    lineHeight: 14,
    fontWeight: '800',
    fontStyle: 'italic',
    marginTop: -5,
  },
});
