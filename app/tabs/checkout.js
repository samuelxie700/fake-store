import { useSelector, useDispatch } from 'react-redux';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { clearCart } from '../../src/cartSlice';

export default function CheckoutPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.details}>
        ${item.price.toFixed(2)} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
      </Text>
    </View>
  );

  const handleConfirm = () => {
    dispatch(clearCart());
    router.replace('/order-success');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Order Summary</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <Text style={styles.total}>Total: ${total}</Text>
      <View style={{ marginTop: 20 }}>
        <Button title="Confirm Order" onPress={handleConfirm} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  item: {
    marginBottom: 12,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 6,
  },
  title: { fontSize: 16, fontWeight: '600' },
  details: { fontSize: 14, color: '#555' },
  total: {
    marginTop: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
