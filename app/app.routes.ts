import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPoliceComponent } from './privacy-police/privacy-police.component';
import { ImprintComponent } from './imprint/imprint.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'privacyPolice', component: PrivacyPoliceComponent, runGuardsAndResolvers: 'always', },
    { path: 'imprint', component: ImprintComponent, runGuardsAndResolvers: 'always', },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { 
        // anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload',
        scrollPositionRestoration: 'enabled',
        useHash: false,
    })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }