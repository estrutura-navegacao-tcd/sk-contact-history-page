import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';

export function ContactHeading() {
  return (
    <View style={styles.heading}>
      <Text style={styles.title}>Escreva para o Suki</Text>
      <Text style={styles.subtitle}>
        Estamos aqui para ajudar! Envie sua mensagem ou use nossos canais diretos.{' '}
        <Text style={styles.highlight}>Precisando? É só chamar!</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    alignItems: 'center',
    marginBottom: 36,
    paddingHorizontal: 4,
  },
  title: {
    color: colors.brown,
    fontSize: 38,
    lineHeight: 46,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
  },
  highlight: {
    color: colors.pink,
    fontWeight: '700',
  },
});
