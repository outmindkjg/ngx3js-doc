import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 담보정지 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2205Component
 */
@Component({
  selector: "app-uw2205",
  templateUrl: "./uw2205.component.html",
  styleUrls: ["./uw2205.component.scss"],
})
export class Uw2205Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2205 component (담보정지).
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
