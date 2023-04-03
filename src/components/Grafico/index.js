import React from "react";
import { View, Text, Dimensions, ActivityIndicator } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function Grafico({ dados, status }) {
  return (
    <>
      {dados == null ? (
        <View>
          <ActivityIndicator color="#f50d41" size={30} />
        </View>
      ) : (
        <View>
          <LineChart
            data={{
              datasets: [
                {
                  data: dados,
                },
              ],
            }}
            width={Dimensions.get("window").width}
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1}
            chartConfig={{
              backgroundColor: "#000000",
              backgroundGradientFrom: "#232323",
              backgroundGradientTo: "#3f3f3f",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "1",
                strokeWidth: "1",
                stroke: "#f50d41",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              marginHorizontal: 8,
              borderRadius: 10,
            }}
          />
        </View>
      )}
    </>
  );
}
