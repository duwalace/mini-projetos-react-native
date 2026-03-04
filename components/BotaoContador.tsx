import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Definindo os tipos das propriedades que o botão vai receber
type BotaoContadorProps = {
  label: string;
  onPress: () => void;
  tipo: 'incrementar' | 'decrementar' | 'zerar';
};

export function BotaoContador({ label, onPress, tipo }: BotaoContadorProps) {
  // Lógica para definir a cor de fundo com base na prop "tipo"
  let corFundo = '#333333'; // Padrão
  if (tipo === 'incrementar') corFundo = '#1db954';
  if (tipo === 'decrementar') corFundo = '#e53935';
  if (tipo === 'zerar') corFundo = '#444444';
  return (
    <TouchableOpacity 
      style={[styles.botao, { backgroundColor: corFundo }]} 
      onPress={onPress}
    >
      <Text style={styles.texto}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    flex: 1,
  },
  texto: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});