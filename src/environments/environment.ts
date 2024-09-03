// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  APIPRODUCT_URL:
    'https://productapi-efcwb3e2fch0dtez.eastus-01.azurewebsites.net/api/',
  APIORDER_URL:
    'https://orderapi-ayhdgadef6frdydp.eastus-01.azurewebsites.net/api/',
  ASSET_PATH: './assets/img/',
  HORAINICIODEFECTO: '06:00',
  HORAFINDEFECTO: '22:00',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
