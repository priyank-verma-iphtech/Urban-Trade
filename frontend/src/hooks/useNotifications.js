import { useEffect } from "react";
import { onForegroundMessage } from "../firebase/messaging";

export const useNotification = () => {
  useEffect(() => {
    onForegroundMessage((payload) => {
      new Notification(payload.notification.title, {
        body: payload.notification.body,
      });
    });
  }, []);
};
