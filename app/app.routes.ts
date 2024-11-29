import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPoliceComponent } from './privacy-police/privacy-police.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'privacyPolice', component: PrivacyPoliceComponent },
    { path: 'imprint', component: ImprintComponent },
];
