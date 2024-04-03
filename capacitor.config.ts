import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'InmobiliariaFloresMApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  "plugins": {
		"SplashScreen": {
			"launchShowDuration": 2000,
			"launchAutoHide": true,
			"backgroundColor": "#ffffff",
			"androidSplashResourceName": "splash",
			"androidScaleType": "CENTER",
			"showSpinner": false,
			"androidSpinnerStyle": "small",
			"iosSpinnerStyle": "small",
			"splashFullScreen": true,
			"splashImmersive": true

      }
    }

  };

export default config;
