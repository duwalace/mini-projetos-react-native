import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Tipagem
type BotaoPontoProps = {
  valor: number;
  onPress: () => void;
};

export function BotaoPonto({ valor, onPress }: BotaoPontoProps) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.texto}>+{valor}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#1db954',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  texto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});