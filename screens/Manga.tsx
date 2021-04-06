
import React from 'react';
import { WebView } from 'react-native-webview';

export default function Manga() {
  return (
    <WebView
        source={{ uri: 'https://www.ahazones.com/' }}
        style={{ marginTop: 20 }}
      />
  );
}
