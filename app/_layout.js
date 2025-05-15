import { Tabs } from 'expo-router';
import { Provider, useSelector } from 'react-redux';
import store from '../src/store';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Provider store={store}>
      <TabsLayout />
    </Provider>
  );
}

function TabsLayout() {
  const cart = useSelector((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Tabs>
      <Tabs.Screen
        name="products"
        options={{
          title: 'Products',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pricetags-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarBadge: total > 0 ? total : undefined,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
