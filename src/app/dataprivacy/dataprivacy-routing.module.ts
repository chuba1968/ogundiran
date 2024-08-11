import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataprivacyPage } from './dataprivacy.page';

const routes: Routes = [
  {
    path: '',
    component: DataprivacyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataprivacyPageRoutingModule {}
