import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MonthYearPicker from "./MonthYearPicker";
// import moment, { months } from "moment";

export default function App() {
  const [datepicker, hideDatePicker] = useState(false);
  // const [Month, setMonth] = useState(moment().format("MMM"));
  // const [Year, setYear] = useState(moment().format("YYYY"));

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <TouchableOpacity
        style={{
          width: "40%",
          height: "8%",
          backgroundColor: "green",
          borderRadius: 10,
        }}
        onPress={() => {
          hideDatePicker(true);
        }}
      >
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Text style={{ color: "#fff", fontSize: 15, fontWeight: "bold" }}>
            Click
          </Text>
        </View>
      </TouchableOpacity>
      <MonthYearPicker
        isShow={datepicker}
        close={() => {
          hideDatePicker(false);
        }}
        onChangeYear={(year) => {
          console.log("Year", year);
        }}
        onChangeMonth={(Month) => {
          console.log("Month", Month);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
