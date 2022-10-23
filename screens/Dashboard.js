import React, { useContext } from "react";
import { ScrollView } from "react-native";
import WebView from "react-native-webview";
import { DataContext } from "../context";

export default function TestsFisicos({ route }) {
  const { refresh } = useContext(DataContext);
  const aux = React.useRef(null);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <WebView
        key={refresh}
        ref={aux}
        source={{
          html: '<iframe width="1000" height="762" src="https://datastudio.google.com/embed/reporting/6bd34bf6-194c-43ef-a66e-2069ff2244a7/page/iyQ3C" frameborder="0" style="border:0" allowfullscreen></iframe>',
        }}
        style={{ marginTop: 20, height: 1000 }}
      />
    </ScrollView>
  );
}
