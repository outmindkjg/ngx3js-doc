import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 경과보험료 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2302Component
 */
@Component({
  selector: "app-uw2302",
  templateUrl: "./uw2302.component.html",
  styleUrls: ["./uw2302.component.scss"],
})
export class Uw2302Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2302 component (경과보험료).
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
