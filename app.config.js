import "dotenv/config";
export default {
  expo: {
    name: "DIUSmartTransportSystem",
    slug: "DIUSmartTransportSystem",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#000000",
    },
    scheme: "com.diu.transport",
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.diu.transport",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
      package: "com.diu.transport",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "96cffcb5-7a33-47b9-892c-ce788fecd919",
      },

      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.measurementId,
      google_client_id: process.env.AWS_FED_TARGET,
      ios_client_id: process.env.ios_client_id,
      android_client_id: process.env.android_client_id,
      JWT_SECRET: process.env.JWT_SECRET,

      AWS_REGION: process.env.AWS_REGION,
      AWS_USER_POOL_ID: process.env.AWS_USER_POOL_ID,
      AWS_USER_POOL_WEB_CLIENT: process.env.AWS_USER_POOL_WEB_CLIENT,
      AWS_OATH_DOMAIN: process.env.AWS_OATH_DOMAIN,
      AWS_OATH_USER_SEC_ATTR: process.env.AWS_OATH_USER_SEC_ATTR,
      AWS_GRAPHQL_ENDPOINT: process.env.AWS_GRAPHQL_ENDPOINT,
      AWS_APPSYNC_API_KEY: process.env.AWS_APPSYNC_API_KEY,
      AWS_AUTH_SIGN_IN: process.env.AWS_AUTH_SIGN_IN,
      AWS_AUTH_LOGOUT: process.env.AWS_AUTH_LOGOUT,
      AWS_FED_TARGET: process.env.AWS_FED_TARGET,
    },
    plugins: [],
  },
};
