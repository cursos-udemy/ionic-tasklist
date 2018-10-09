import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { PendientesPage } from '../pages/pendientes/pendientes.component';
import { TerminadosPage } from '../pages/terminados/terminados.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TasklistProvider } from '../providers/tasklist.provider';
import { AgregarPage } from '../pages/agregar/agregar.component';

@NgModule({
  declarations: [
    MyApp,
    PendientesPage,
    TerminadosPage,
    AgregarPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendientesPage,
    TerminadosPage,
    AgregarPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TasklistProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
