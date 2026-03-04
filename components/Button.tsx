import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Aqui definimos as "regras" do botão. O que ele aceita receber?
type ButtonProps = {
  label: string;
  onPress: () => void;    // A função que roda quando clica
  isOperation?: boolean;  // É botão de operação? (Laranja)
  isSelected?: boolean;   // Está selecionado? (Branco)
};

export function Button({ label, onPress, isOperation, isSelected }: ButtonProps) {
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        isOperation && styles.operationButton, // Se for operação, aplica cor laranja
        isSelected && styles.selectedButton // Se estiver selecionado, aplica cor branca
      ]} 
      onPress={onPress}
    >
      <Text style={[
        styles.text,
        isSelected && styles.selectedText // Muda cor do texto se estiver selecionado
      ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 70, 
    height: 70,
    borderRadius: 35,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  operationButton: {
    backgroundColor: '#FF9500',
  },
  selectedButton: {
    backgroundColor: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#FF9500',
  }
});