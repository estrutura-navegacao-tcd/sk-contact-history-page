import { StyleSheet, TextInput, type TextInputProps } from 'react-native';

import { FieldLabel } from '@/components/ui/FieldLabel';
import { colors } from '@/constants/colors';

interface FormFieldProps extends TextInputProps {
  label: string;
}

export function FormField({ label, style, ...inputProps }: FormFieldProps) {
  return (
    <>
      <FieldLabel>{label}</FieldLabel>
      <TextInput placeholderTextColor="#9b9b9b" style={[styles.input, style]} {...inputProps} />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    minHeight: 50,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    color: colors.brown,
    fontSize: 16,
    backgroundColor: colors.white,
  },
});
