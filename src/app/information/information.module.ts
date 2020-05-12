import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { InformationComponent } from './information.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

import {MatDatepickerModule} from '@angular/material/datepicker';
// import { MatIconModule, MatTableModule, MatToolbarModule, MatMenuModule, MatDialogModule, MatSortModule, MatProgressSpinnerModule, MatPaginatorModule, MatCheckboxModule, MatRippleModule, MatStepperModule, MatExpansionModule, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule, MatChipsModule, MatDividerModule, MatGridListModule, MatListModule, MatProgressBarModule, MatRadioModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatTabsModule, MatTooltipModule, MatTreeModule, MAT_CHECKBOX_CLICK_ACTION, MAT_RIPPLE_GLOBAL_OPTIONS, MatSelectModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatTooltipModule} from '@angular/material/tooltip';

 

@NgModule({
  declarations: [InformationComponent],
  imports: [
    CommonModule,
    InformationRoutingModule,
   ReactiveFormsModule,
   MatSelectModule,
   MatCardModule, 
   MatInputModule, 
   MatFormFieldModule, 
   MatButtonModule, 
   MatSnackBarModule,
   MatDatepickerModule,
   MatNativeDateModule,
   FormsModule,   
   
   MatCheckboxModule,
   MatRippleModule,
   // MatIconModule,
   // MatSelectModule,
   MatDatepickerModule,
   MatNativeDateModule,
   // MatSortModule,
   // MatToolbarModule,
   MatButtonModule,
   MatCardModule,
   MatInputModule,
   // MatDialogModule,
   // MatTableModule,
   // MatMenuModule,
   // MatProgressSpinnerModule,
   // MatCheckboxModule,
   // MatRippleModule,
   // MatPaginatorModule,
   // MatStepperModule,
   // MatAutocompleteModule,
   // MatBadgeModule,
   // MatBottomSheetModule,
   // MatButtonToggleModule,
   // MatChipsModule,
   // MatDividerModule,
   // MatExpansionModule,
   // MatGridListModule,
   // MatIconModule,
   // MatListModule,
   // MatProgressBarModule,
   // MatRadioModule,
   // MatSidenavModule,
   // MatSliderModule,
   // MatSlideToggleModule,
   MatSnackBarModule,
   // MatTabsModule,
   MatTooltipModule,
   // MatTreeModule,
   // MatExpansionModule,
  ]
})
export class InformationModule { }
