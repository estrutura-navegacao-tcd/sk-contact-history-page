import { StyleSheet, View } from 'react-native';

import { InfoCard } from '@/components/contact/InfoCard';
import { contactMethods } from '@/constants/contact';

export function ContactCards() {
  return (
    <View style={styles.cards}>
      {contactMethods.map((method) => (
        <InfoCard key={method.title} {...method} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  cards: {
    gap: 8,
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#f7b5cccc',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
  },
});
