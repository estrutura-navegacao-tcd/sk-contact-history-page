import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';

export function MessageHistoryCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Histórico de mensagens</Text>
      <Text style={styles.text}>
        Suas mensagens aparecerão aqui assim que o histórico da conta estiver conectado.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 28,
    padding: 24,
    borderRadius: 16,
    backgroundColor: '#fff0facc',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  title: {
    color: colors.brown,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
    marginBottom: 12,
  },
  text: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 21,
  },
});
