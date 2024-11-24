import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { PlatformModule } from '@angular/cdk/platform';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
     // CDK
     A11yModule,
     BidiModule,
     ObserversModule,
    //  OverlayModule,
     PlatformModule,
    //  PortalModule,
    //  CdkStepperModule,
    //  CdkTableModule,
    //  CdkTreeModule,
    //  DragDropModule,
     // Material
    //  MatAutocompleteModule,
    //  MatBadgeModule,
    //  MatBottomSheetModule,
    //  MatButtonToggleModule,
     MatPseudoCheckboxModule,
    //  MatChipsModule,
    //  MatDatepickerModule,
     MatDialogModule,
     MatDividerModule,
    //  MatExpansionModule,
    //  MatFormFieldModule,
    //  MatGridListModule,
    //  MatListModule,
    //  MatMenuModule,
    //  MatNativeDateModule,
    //  MatPaginatorModule,
    //  MatProgressBarModule,
    //  MatProgressSpinnerModule,
    //  MatRadioModule,
    //  MatRippleModule,
    //  MatSelectModule,
    //  MatSidenavModule,
    //  MatSliderModule,
    //  MatSlideToggleModule,
    //  MatSnackBarModule,
    //  MatSortModule,
    //  MatStepperModule,
    //  MatTableModule,
    //  MatTabsModule,
    //  MatTooltipModule,
    //  MatTreeModule,
  ]
})
export class MaterialModule {}
