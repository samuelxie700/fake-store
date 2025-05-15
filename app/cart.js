import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, removeFromCart, clearCart } from '../src/cartSlice';

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>数量：{item.quantity}</Text>
      <Text>单价：${item.price}</Text>
      <View style={styles.buttons}>
        <Button title="＋" onPress={() => dispatch(increment(item.id))} />
        <Button title="－" onPress={() => dispatch(decrement(item.id))} />
      </View>
    </View>
  );

  if (cart.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.empty}>Your shopping cart is empty.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.summary}>总数：{totalQuantity} 件</Text>
      <Text style={styles.summary}>总价：${totalPrice}</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <Button title="清空购物车" onPress={() => dispatch(clearCart())} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: {
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
  },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  buttons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  summary: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  empty: { fontSize: 18 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
