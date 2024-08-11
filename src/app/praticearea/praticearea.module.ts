import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PraticeareaPageRoutingModule } from './praticearea-routing.module';

import { PraticeareaPage } from './praticearea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PraticeareaPageRoutingModule
  ],
  declarations: [PraticeareaPage]
})
export class PraticeareaPageModule {}
