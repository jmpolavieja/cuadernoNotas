import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
    "projectId": "csi21-angular",
    "appId": "1:643169107473:web:40d11f432e4b62149f7bb0",
    "storageBucket": "csi21-angular.firebasestorage.app",
    "apiKey": "AIzaSyAyiHm9ECJPSohM58IW1L1A5aLeXOpFikU",
    "authDomain": "csi21-angular.firebaseapp.com",
    "messagingSenderId": "643169107473"
  })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync(),
    provideHttpClient()
  ]
};
