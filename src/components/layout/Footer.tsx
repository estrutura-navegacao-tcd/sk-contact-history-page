import { useRouter } from 'expo-router';
import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { footerCategories, footerInformationLinks, footerSocials } from '@/constants/footer';
import { store } from '@/constants/store';

function FooterSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <View style={styles.list}>
      <Text style={styles.heading}>{heading}</Text>
      {children}
    </View>
  );
}

export function Footer() {
  const router = useRouter();

  return (
    <View style={styles.footer}>
      <View style={styles.logo}>
        <Text style={styles.logoName}>Suki</Text>
        <Text style={styles.logoTagline}>doces</Text>
      </View>

      <FooterSection heading="Informações">
        {footerInformationLinks.map((item) => (
          <Text key={item} style={styles.link}>{item}</Text>
        ))}
        <Pressable onPress={() => router.navigate('/contact')}>
          <Text style={styles.link}>Escreva para o Suki</Text>
        </Pressable>
      </FooterSection>

      <FooterSection heading="Categorias">
        {footerCategories.map((item) => (
          <Text key={item} style={styles.link}>{item}</Text>
        ))}
      </FooterSection>

      <View style={styles.about}>
        <Text style={styles.contact}>Endereço: {store.address}</Text>
        <Text style={styles.contact}>Telefone: {store.phone}</Text>
        <Text style={styles.contact}>E-mail: {store.email}</Text>
        <Text style={styles.socialTitle}>Siga-nos nas Redes:</Text>
        <Text style={styles.social}>{footerSocials}</Text>
      </View>

      <Text style={styles.copyright}>
        <Text style={styles.copyrightBrand}>SukiDoces</Text>. Todos os direitos reservados.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 112,
    gap: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#201613',
  },
  logo: {
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  logoName: {
    color: '#fff0fa',
    fontSize: 48,
    lineHeight: 50,
    fontWeight: '900',
    letterSpacing: -2,
  },
  logoTagline: {
    color: '#fff0fa',
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '800',
    fontStyle: 'italic',
    marginTop: -6,
  },
  list: {
    gap: 3,
    paddingVertical: 10,
  },
  heading: {
    color: colors.pinkLight,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '700',
    marginBottom: 2,
  },
  link: {
    color: colors.white,
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '600',
  },
  about: {
    padding: 12,
    gap: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  contact: {
    color: colors.white,
    fontSize: 13,
    lineHeight: 18,
  },
  socialTitle: {
    color: colors.white,
    fontSize: 14,
    lineHeight: 19,
  },
  social: {
    color: colors.pinkLight,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
  },
  copyright: {
    alignSelf: 'center',
    marginTop: 8,
    color: colors.white,
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
  },
  copyrightBrand: {
    color: colors.pinkLight,
    fontWeight: '700',
  },
});
