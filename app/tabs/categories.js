import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Categories() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Welcome to the Categories Page
      </Text>
      <Button title="View Products" onPress={() => router.push('/products')} />
    </View>
  );
}
