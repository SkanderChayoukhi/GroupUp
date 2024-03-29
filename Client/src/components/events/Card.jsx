import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "../../styles/screens/styles";
import { FontAwesome } from "@expo/vector-icons";

function Card({ title, location, date, price, id, navigation, eventImage }) {
  const goToDetailPage = () => {
    navigation.navigate("EventsDetail", { id: id, title: title });
  };
  const st = styles;
  return (
    <View style={st.homeCard}>
      <View
        style={{
          height: 100,
        }}
      >
        <Image
          source={{
            uri: `${eventImage}`,
          }}
          style={{
            borderRadius: 10,
            width: "100%",
            height: "100%",
            maxHeight: "100%",
            resizeMode: "stretch",
          }}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          {title}
        </Text>
      </View>
      <View
        style={{
          gap: 10,
        }}
      >
        <View style={st.cardDetailText}>
          <FontAwesome name="map-marker" size={15} color="black" />
          <Text>{location}</Text>
        </View>
        <View style={st.cardDetailText}>
          <FontAwesome name="calendar" size={15} color="black" />
          <Text>{date.split("-").reverse().join(" ")}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={st.cardDetailsButton}
        onPress={goToDetailPage}
      >
        <Text style={{ color: "white" }}>Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Card;
