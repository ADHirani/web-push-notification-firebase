/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyD0CuV5Udnvx-7oFQmRvaJ66iKWlqwuADQ",
  authDomain: "check-push-notification.firebaseapp.com",
  projectId: "check-push-notification",
  storageBucket: "check-push-notification.appspot.com",
  messagingSenderId: "55727485454",
  appId: "1:55727485454:web:6852ddeb56d7fdccbb025f",
  measurementId: "G-0E0ZXKJ6X1",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
