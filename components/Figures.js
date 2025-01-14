import { useState } from "react";
import { StyleSheet, Text, TextInput, Button } from "react-native";
import MyDropdown from "./MyDropdown";

export default function Figures() {
  const length = [
    { label: "Прямокутник", value: "1" },
    { label: "Круг", value: "2" },
    { label: "Трикутник", value: "3" },
  ];
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [radius, setRadius] = useState("");
  const [base, setBase] = useState("");
  const [triangleHeight, setTriangleHeight] = useState("");
  const [result, setResult] = useState("");
  const [selectedConversion, setSelectedConversion] = useState(null);

  const handleCalculate = () => {
    if (selectedConversion === "1") {
      const w = parseFloat(width);
      const h = parseFloat(height);

      if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0)
        setResult("Будь ласка, введіть коректні числа.");
      else setResult(`Площа прямокутника: ${(w * h).toFixed(2)} од²`);
    } else if (selectedConversion === "2") {
      const r = parseFloat(radius);

      if (isNaN(r) || r <= 0)
        setResult("Будь ласка, введіть коректний радіус.");
      else setResult(`Площа круга: ${(Math.PI * r * r).toFixed(2)} од²`);
    } else if (selectedConversion === "3") {
      const b = parseFloat(base);
      const h = parseFloat(triangleHeight);

      if (isNaN(b) || isNaN(h) || b <= 0 || h <= 0)
        setResult("Будь ласка, введіть коректні числа.");
      else setResult(`Площа трикутника: ${(0.5 * b * h).toFixed(2)} од²`);
    } else setResult("Будь ласка, виберіть фігуру.");
  };
  return (
    <>
      <Text style={styles.title}>Площі геометричних фігур</Text>
      <MyDropdown
        array={length}
        onSelect={(value) => setSelectedConversion(value)}
      />
      {selectedConversion === "1" && (
        <>
          <TextInput
            style={styles.input}
            onChangeText={setWidth}
            value={width}
            placeholder="Введіть ширину"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="Введіть висоту"
            keyboardType="numeric"
          />
        </>
      )}
      {selectedConversion === "2" && (
        <TextInput
          style={styles.input}
          onChangeText={setRadius}
          value={radius}
          placeholder="Введіть радіус"
          keyboardType="numeric"
        />
      )}
      {selectedConversion === "3" && (
        <>
          <TextInput
            style={styles.input}
            value={base}
            onChangeText={setBase}
            placeholder="Введіть основу"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={triangleHeight}
            onChangeText={setTriangleHeight}
            placeholder="Введіть висоту"
            keyboardType="numeric"
          />
        </>
      )}

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
    marginBlock: 10,
  },
});
