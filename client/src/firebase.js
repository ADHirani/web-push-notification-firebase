
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyD0CuV5Udnvx-7oFQmRvaJ66iKWlqwuADQ",
  authDomain: "check-push-notification.firebaseapp.com",
  projectId: "check-push-notification",
  storageBucket: "check-push-notification.appspot.com",
  messagingSenderId: "55727485454",
  appId: "1:55727485454:web:6852ddeb56d7fdccbb025f",
  measurementId: "G-0E0ZXKJ6X1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);

export async function requestForNotification() {
  const permission = await Notification.requestPermission();
  if (permission == "granted") {
    // Generate Token

    // get vapikey from firebase console -> project setting -> cloud messaging -> web push certificate => key
    const tokenData = await getToken(messaging, {
      vapidKey:
        "BEl5nq31jlEj8EBzsa6LM82d2-ctS5O1_F9fKhVi4FoEeSaskX19STgdXzRQiU8kobGwIGAHzytJequPaniw9s25NrudhK0gk", // remove askanirudh
    });

    return tokenData;
  } else if (permission == "denied") {
    alert("Notification permission denied !");
  }
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
