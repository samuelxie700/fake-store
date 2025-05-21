import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function OrderSuccess() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>✅</Text>
      <Text style={styles.title}>Order Placed Successfully!</Text>
      <Text style={styles.subtitle}>Thank you for shopping with us.</Text>
      <View style={{ marginTop: 20 }}>
        <Button title="Back to Products" onPress={() => router.replace('/products')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  emoji: { fontSize: 60 },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
  subtitle: { fontSize: 16, color: '#555', textAlign: 'center' },
});
