import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function CategoryScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>欢迎来到分类页面</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/product')}
      >
        <Text style={styles.buttonText}>查看产品列表</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
