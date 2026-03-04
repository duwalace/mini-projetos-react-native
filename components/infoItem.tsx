import { View, Text, StyleSheet } from 'react-native';

type InfoItemProps = {
  icone: string;
  rotulo: string;
  valor: string;
};

export function InfoItem({ icone, rotulo, valor }: InfoItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.icone}>{icone}</Text>

      <View>
        <Text style={styles.rotulo}>{rotulo}</Text>
        <Text style={styles.valor}>{valor}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  icone: {
    fontSize: 20,
    width: 30,
  },
  rotulo: {
    fontSize: 12,
    color: '#aaa',
  },
  valor: {
    fontSize: 14,
    color: '#fff',
  },
});