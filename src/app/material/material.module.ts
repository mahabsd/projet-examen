import { NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatBadgeModule
  
} from '@angular/material';

import { MatIconModule } from '@angular/material/icon'
import { MatChipsModule } from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
const Material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatIconModule
];
@NgModule({
  imports: [
    Material
  ],
  exports: [
    Material
  ],

  })
export class MaterialModule { }
