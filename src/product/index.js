import { View, Text, StyleSheet } from 'react-native';

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>这是产品列表页</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
