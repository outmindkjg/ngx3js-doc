import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 변경설계(SOL) Component
 *
 * @extends AbstractCommonList
 * @exports Uw2220Component
 */
@Component({
  selector: "app-uw2220",
  templateUrl: "./uw2220.component.html",
  styleUrls: ["./uw2220.component.scss"],
})
export class Uw2220Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2220 component (변경설계(SOL)).
   * 
   * @param commonService 
   * @param formBuilder 
   */
  constructor(commonService: CommonService, formBuilder: FormBuilder) {
    super(
      commonService,
      "sample/exuser",
      formBuilder,
      {
        cmnGrpCd: [FSType.R],
      },
      null,
      { limit: 30 },
      "codeGrp"
    );
  }
}
