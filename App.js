import React from "react";
import Main from "./Main";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { LogBox } from "react-native";
import { Asset } from "expo-asset";
import AppLoading from "expo-app-loading";
// Just for now
LogBox.ignoreAllLogs();

const App = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  const cacheResources = async () => {
    const images = [
      require("./assets/adaptive-icon.png"),
      require("./assets/favicon.png"),
      require("./assets/icon.png"),
      require("./assets/splash.png"),
      require("./assets/images/AppP1.png"),
      require("./assets/images/AppP2.png"),
      require("./assets/images/avatar.png"),
      require("./assets/images/banner.jpg"),
      require("./assets/images/bkash.png"),
      require("./assets/images/bkash.svg"),
      require("./assets/images/bus.png"),
      require("./assets/images/D.png"),
      require("./assets/images/dark-bg.webp"),
      require("./assets/images/dark-map.jpeg"),
      require("./assets/images/diubanner.jpg"),
      require("./assets/images/gradient-bg.jpeg"),
      require("./assets/images/live.png"),
      require("./assets/images/menu-bg.jpeg"),
      require("./assets/images/onboarding-img1.png"),
      require("./assets/images/onboarding-img2.png"),
      require("./assets/images/onboarding-img3.png"),
      require("./assets/images/oneCard.png"),
      require("./assets/images/paymentSuccess.webp"),
      require("./assets/images/qr-code-scan.png"),
      require("./assets/images/r1.png"),
      require("./assets/images/r2.png"),
      require("./assets/images/r3.png"),
      require("./assets/images/tlogo.png"),
      require("./assets/images/user-profile.jpeg"),
      require("./assets/images/user-profile.png"),
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  };

  React.useEffect(() => {
    const loadResources = async () => {
      await cacheResources();
      setIsLoaded(true);
    };
    loadResources();
  }, []);

  if (!isLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
