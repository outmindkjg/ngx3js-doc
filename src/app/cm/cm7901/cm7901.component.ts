import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { ModalAlertComponent, ModalConfirmComponent } from "../../shared/modals";
import { CommonService } from "../../shared/services";

@Component({
  selector: 'app-cm7901',
  templateUrl: './cm7901.component.html',
  styleUrls: ['./cm7901.component.scss']
})
export class Cm7901Component extends AbstractCommonList<TestSchema> {
    constructor(commonService: CommonService, formBuilder: FormBuilder) {
      super(commonService, "sample/exuser", formBuilder, {
        email: [FSType.EMAIL, FSType.R],
        assured: [FSType.EMPTY],
        in01: [FSType.EMPTY],
        in02: [FSType.EMPTY],
        nr: [FSType.EMPTY],
        entered: [FSType.EMPTY],
        insurance: [FSType.EMPTY],
        period: [FSType.EMPTY],
      }, null, { limit : 30, fixedSearch : { codeLeng : 20 }}, 'codeGrp');
    }
  
    text: string = "test";
  
    changeText() {
      this.text = "random : " + (Math.random() * 10000).toFixed(2);
    }
  
    showModal(type: string) {
      switch (type) {
        case "alert":
          this.openModal(ModalAlertComponent, {
            title: "Info",
            message: "Message Body",
          });
          break;
        case "confirm":
          this.openModal(ModalConfirmComponent, {
            title: "Info",
            message: "Click Yes Or No!",
          }).then((result) => {
            this.openNotify("Clicked : " + result, "success");
          });
          break;
      }
    }
  
    public onUploadJson(jsonList : any[]) {
      // this.changeTmpData(jsonList.length, false);
    }
  
    changeTmpData(limit : number) {
      this.searchForm.limit = limit;
      this.getPageList(0);
    }
  }
