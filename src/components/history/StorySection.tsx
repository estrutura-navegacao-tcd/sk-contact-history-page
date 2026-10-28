import { Image, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';

export function StorySection() {
  return (
    <View style={styles.section}>
      <View style={styles.text}>
        <Text style={styles.heading}>Nossa Paixão</Text>
        <Text style={styles.paragraph}>
          Na Suki Doces, acreditamos que cada doce carrega uma história. Somos apaixonados por
          criar sobremesas artesanais, feitas com ingredientes selecionados e muito carinho.
        </Text>
        <Text style={styles.paragraph}>
          Nossa missão não é apenas vender doces, mas entregar pequenos pedaços de felicidade que
          transformam o dia de quem os prova. Seja bem-vindo ao nosso mundo doce!
        </Text>
      </View>
      <View style={styles.imageCard}>
        <Image
          source={require('@/assets/images/candy-wallpaper.jpg')}
          style={styles.image}
          resizeMode="cover"
          accessibilityLabel="Aroma e sabor Suki Doces"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 24,
    paddingTop: 44,
    paddingBottom: 32,
    gap: 32,
  },
  text: {
    gap: 12,
  },
  heading: {
    color: colors.timelinePink,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
  },
  paragraph: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 27,
  },
  imageCard: {
    padding: 24,
    minHeight: 290,
    justifyContent: 'center',
    backgroundColor: '#fff0facc',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.8)',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
  },
});
