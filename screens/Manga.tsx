
import React from 'react';
import { Linking } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Manga() {
  const uri = 'https://www.ahazones.com/'
  return (
    <WebView
        source={{ uri: uri }}
        style={{ marginTop: 20 }}
        ref={(ref) => { this.webview = ref; }}
        onNavigationStateChange={(event) => {
          if (!event.url.includes(uri)) {
            this.webview.stopLoading();
            Linking.openURL(event.url);
          }
        }}
      />
  );
}
