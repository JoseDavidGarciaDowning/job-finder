import { Capacitor } from '@capacitor/core';
import {
  PushNotifications,
  Token,
  PushNotificationSchema,
  ActionPerformed,
} from '@capacitor/push-notifications';
import { http } from './http-client.plugin';
import { Preferences } from '@capacitor/preferences';

const PUSH_NOTIFICATIONS_TOKEN_KEY = 'push_token';

class NotificationsService {
  public async initialize() {
    if (Capacitor.getPlatform() === 'web') {
      console.log('Push notifications not available on web.');
      return;
    }

    try {
      await this.addListeners();
      const permissionStatus = await this.checkPermissions();

      if (permissionStatus === 'prompt') {
        await this.requestPermissions();
      }

      if (permissionStatus !== 'granted') {
        throw new Error('User denied permissions!');
      }

      await PushNotifications.register();
    } catch (error) {
      console.error('Error initializing push notifications:', error);
    }
  }

  private async checkPermissions() {
    const { receive } = await PushNotifications.checkPermissions();
    return receive;
  }

  private async requestPermissions() {
    const { receive } = await PushNotifications.requestPermissions();
    if (receive === 'denied') {
      console.error('Push notification permission denied.');
    }
    return receive;
  }

  private addListeners() {
    PushNotifications.addListener('registration', async (token: Token) => {
      console.info('Push registration success, token:', token.value);
      await this.sendTokenToBackend(token.value);
    });

    PushNotifications.addListener('registrationError', (error: any) => {
      console.error('Error on registration:', JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        console.log('Push received:', JSON.stringify(notification));
      }
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        console.log('Push action performed:', JSON.stringify(notification));

        // Extraemos los datos adjuntos a la notificación
        const data = notification.notification.data;
        if (data.jobApplicationId) {
          // Disparamos un evento personalizado con los detalles
          const event = new CustomEvent('navigateToPage', {
            detail: {
              path: `/applicant/home`,
            },
          });
          window.dispatchEvent(event);
        }
      }
    );
  }

  private async sendTokenToBackend(token: string) {
    try {
      const { value: storedToken } = await Preferences.get({ key: PUSH_NOTIFICATIONS_TOKEN_KEY });
      if (storedToken === token) {
        console.log('Token already sent to backend.');
        return;
      }
      
      console.log(`Sending token ${token} to backend...`);
      const baseUrl = 'https://qp5wg7p4-3000.use2.devtunnels.ms/api';
      await http.postAuth(`${baseUrl}/notifications/register-token`, { token });

      await Preferences.set({ key: PUSH_NOTIFICATIONS_TOKEN_KEY, value: token });
      console.log('Token sent and stored successfully.');

    } catch (error) {
      console.error('Error sending token to backend:', error);
    }
  }
}

export const notificationsService = new NotificationsService(); 