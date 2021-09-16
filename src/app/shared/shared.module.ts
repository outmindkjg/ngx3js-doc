import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import {
  DxButtonModule,
  DxContextMenuModule,
  DxDataGridModule,
  DxDateBoxModule,
  DxFormModule,
  DxListModule,
  DxPopupModule,
  DxRadioGroupModule,
  DxScrollViewModule,
  DxSelectBoxModule,
  DxTemplateModule,
  DxTextAreaModule,
  DxTextBoxModule,
  DxToolbarModule,
  DxTreeListModule,
  DxTreeViewModule,
  DxAccordionModule,
  DxGalleryModule,
  DxDropDownButtonModule,
  DxNumberBoxModule,
  DxChartModule
} from "devextreme-angular";
import { DxoTooltipModule } from "devextreme-angular/ui/nested";
import { ModalModule } from "ngx-bootstrap/modal";
import { COMMON_COMPONENTS } from "./components";
import { COMMON_DIRECTIVES } from "./directives";
import { MODAL_COMPONENTS } from "./modals";
import { COMMON_PIPES } from "./pipes";

const DX_MODULES = [
  DxSelectBoxModule,
  DxTextAreaModule,
  DxFormModule,
  DxTextBoxModule,
  DxNumberBoxModule,
  DxButtonModule,
  DxDateBoxModule,
  DxRadioGroupModule,
  DxDataGridModule,
  DxTemplateModule,
  DxContextMenuModule,
  DxPopupModule,
  DxListModule,
  DxoTooltipModule,
  DxScrollViewModule,
  DxToolbarModule,
  DxTreeListModule,
  DxTreeViewModule,
  DxAccordionModule,
  DxGalleryModule,
  DxChartModule,
  DxDropDownButtonModule
]
@NgModule({
  declarations: [
    ...COMMON_PIPES,
    ...COMMON_DIRECTIVES,
    ...COMMON_COMPONENTS,
    ...MODAL_COMPONENTS,
  ],
  entryComponents: [...COMMON_COMPONENTS],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    TranslateModule,
    FontAwesomeModule,
    ...DX_MODULES,
    ...COMMON_PIPES,
    ...COMMON_DIRECTIVES,
    ...COMMON_COMPONENTS,
    ...MODAL_COMPONENTS,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    ...DX_MODULES
  ],
  providers: [],
})
export class SharedModule {}
