import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { subjectOptions } from '@/constants/contact';
import type { Subject } from '@/types/contact';

interface SubjectSelectorProps {
  value: Subject;
  onChange: (subject: Subject) => void;
}

export function SubjectSelector({ value, onChange }: SubjectSelectorProps) {
  return (
    <View style={styles.options}>
      {subjectOptions.map((option) => {
        const selected = value === option.value;
        return (
          <Pressable
            key={option.value}
            accessibilityRole="radio"
            accessibilityState={{ checked: selected }}
            style={styles.option}
            onPress={() => onChange(option.value)}
          >
            <View style={[styles.radio, selected && styles.radioSelected]}>
              {selected && <View style={styles.radioDot} />}
            </View>
            <Text style={styles.label}>{option.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 18,
    rowGap: 14,
    marginTop: 4,
  },
  option: {
    minHeight: 28,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  radio: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: colors.pinkLight,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    borderColor: colors.pink,
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.pink,
  },
  label: {
    color: colors.pink,
    fontSize: 15,
    fontWeight: '500',
  },
});
