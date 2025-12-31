importScripts("https://www.gstatic.com/firebasejs/12.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.7.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBogNfFLCU3gG2JPcMAJh7GYiKs8Zmbpuc",
  authDomain: "urban-trade-4d578.firebaseapp.com",
  projectId: "urban-trade-4d578",
  messagingSenderId: "895728069886",
  appId: "1:895728069886:web:045666fbeb6066cd3649af",
});

const messaging = firebase.messaging();


messaging.onBackgroundMessage((payload) => {
  console.log("[SW] Background message:", payload);

  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/logo.png",
  });
});
 