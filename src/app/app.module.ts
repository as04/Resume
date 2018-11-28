import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
	MatButtonModule,
	MatAutocompleteModule,
	MatBadgeModule,
	MatBottomSheetModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDialogModule,
	MatDividerModule,
	MatExpansionModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatStepperModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule,
	MatTreeModule
	} from '@angular/material';

import { AppComponent } from './app.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WorkComponent } from './components/work/work.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    AboutComponent,
    ProjectsComponent,
    WorkComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
  	AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatAutocompleteModule,
  	MatBadgeModule,
	MatBottomSheetModule,
	MatButtonToggleModule,
	MatCardModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDialogModule,
	MatDividerModule,
	MatExpansionModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatStepperModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule,
	MatTreeModule,
	FlexLayoutModule
	],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SidemenuComponent]
})
export class AppModule { }
