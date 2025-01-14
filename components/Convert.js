import { useState } from "react";
import { StyleSheet, Text, TextInput, Button } from "react-native";
import MyDropdown from "./MyDropdown";

export default function Convert() {
  const length = [
    { label: "Кілометри в милі", value: "1" },
    { label: "Кілограми в фунти", value: "2" },
    { label: "Градуси Цельсія в Фаренгейти", value: "3" },
  ];
  const [number, onChangeNumber] = useState("");
  const [result, setResult] = useState("");
  const [selectedConversion, setSelectedConversion] = useState(null);

  const handleCalculate = () => {
    const num = parseFloat(number);
    if (
      isNaN(num) ||
      (selectedConversion === "1" && num < 0) ||
      (selectedConversion === "2" && num < 0)
    )
      setResult("Будь ласка, введіть корректне число.");
    else if (selectedConversion === "1")
      setResult(`${num} км = ${(num * 0.62137).toFixed(2)} миль`);
    else if (selectedConversion === "2")
      setResult(`${num} кг = ${(num * 2.2046).toFixed(2)} фунтів`);
    else if (selectedConversion === "3")
      setResult(`${num} °C = ${(num * 1.8 + 32).toFixed(2)} °F`);
    else setResult("Будь ласка, виберіть тип конвертації.");
  };
  return (
    <>
      <Text style={styles.title}>Перетворення величин</Text>
      <MyDropdown
        array={length}
        onSelect={(value) => setSelectedConversion(value)}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Введіть данні"
        keyboardType="numeric"
      />
      <Text style={styles.result}>Результат: {result}</Text>
      <Button title="Порахувати" onPress={handleCalculate} />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginTop: 40,
    marginBottom: 10,
    fontSize: 24,
  },
  input: {
    height: 40,
    marginBlock: 10,
    marginInline: 100,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  result: {
    textAlign: "center",
    marginBottom: 10,
  },
});
