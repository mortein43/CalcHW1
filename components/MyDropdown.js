import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export default function MyDropdown({ array, onSelect }) {
  const [value, setValue] = useState(null);

  return (
    <View>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={array}
        labelField="label"
        valueField="value"
        placeholder="Зробіть свій вибір"
        value={value}
        onChange={(item) => {
          setValue(item.value);
          onSelect(item.value);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "white",
  },
  placeholderStyle,
  selectedTextStyle: {
    fontSize: 16,
  },
  placeholderStyle: {
    color: "gray",
  },
  selectedTextStyle: {
    color: "black",
  },
});
