import { StyleSheet } from 'react-native';

import { HistoryHero } from '@/components/history/HistoryHero';
import { StorySection } from '@/components/history/StorySection';
import { Timeline } from '@/components/history/Timeline';
import { Footer } from '@/components/layout/Footer';
import { Screen } from '@/components/layout/Screen';

export default function HistoryScreen() {
  return (
    <Screen contentContainerStyle={styles.content}>
      <HistoryHero />
      <StorySection />
      <Timeline />
      <Footer />
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 32,
  },
});
