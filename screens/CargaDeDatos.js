import React, { useState } from "react";
//galio
import { Datos, TestsFisicos, Videos, RutinaJugador } from "../components";
//argon
import { Tab, TabView } from "@rneui/themed";

export default function CargaDeDatos(props) {
  const [index, setIndex] = useState(0);

  const { navigation } = props;
  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "darkblue",
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Datos"
          titleStyle={{ fontSize: 15, color: "black" }}
          buttonStyle={{ backgroundColor: "#9bdcfa" }}
          icon={{
            name: "stats-chart",
            type: "ionicon",
            color: "black",
          }}
        />
        <Tab.Item
          title="Videos"
          titleStyle={{ fontSize: 15, color: "black" }}
          buttonStyle={{ backgroundColor: "#9bdcfa" }}
          icon={{ name: "videocam", type: "ionicon", color: "black" }}
        />
        <Tab.Item
          title="Tests físicos"
          titleStyle={{ fontSize: 15, color: "black" }}
          buttonStyle={{ backgroundColor: "#9bdcfa" }}
          icon={{ name: "bar-chart", type: "ionicon", color: "black" }}
        />
        <Tab.Item
          title="Jugador - Rutina"
          titleStyle={{ fontSize: 15, color: "black" }}
          buttonStyle={{ backgroundColor: "#9bdcfa" }}
          icon={{ name: "barbell", type: "ionicon", color: "black" }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: "100%" }}>
          <Datos />
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <Videos />
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <TestsFisicos />
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <RutinaJugador />
        </TabView.Item>
      </TabView>
    </>
  );
}
