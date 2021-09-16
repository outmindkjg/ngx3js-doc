import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 상품관리 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2000Component
 */
@Component({
  selector: "app-uw2000",
  templateUrl: "./uw2000.component.html",
  styleUrls: ["./uw2000.component.scss"],
})
export class Uw2000Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2000 component (상품관리).
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
