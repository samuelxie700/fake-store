import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from '../../src/cartSlice';
import { useRouter } from 'expo-router';

export default function CartScreen() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  const totalPrice = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.controls}>
          <TouchableOpacity
            onPress={() => dispatch(decreaseQuantity(item.id))}
            style={styles.controlButton}
          >
            <Text style={styles.controlText}>−</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => dispatch(increaseQuantity(item.id))}
            style={styles.controlButton}
          >
            <Text style={styles.controlText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => dispatch(removeFromCart(item.id))}
            style={styles.removeButton}
          >
            <Text style={styles.removeText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <View style={styles.center}>
          <Text style={styles.emptyText}>Your cart is empty.</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
          <View style={styles.footer}>
            <Text style={styles.total}>Total: ${totalPrice}</Text>
            <Button title="Checkout" onPress={() => router.push('/tabs/checkout')} />
            <Button title="Clear Cart" color="red" onPress={() => dispatch(clearCart())} />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginVertical: 8,
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  details: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    color: '#4caf50',
    fontWeight: '600',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  controlButton: {
    backgroundColor: '#ddd',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  controlText: {
    fontSize: 18,
  },
  quantity: {
    fontSize: 16,
  },
  removeButton: {
    marginLeft: 10,
  },
  removeText: {
    color: '#f44336',
  },
  footer: {
    paddingVertical: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
