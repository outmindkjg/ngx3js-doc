import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 문서관리 Component
 *
 * @extends AbstractCommonList
 * @exports Re5210Component
 */
@Component({
  selector: "app-re5210",
  templateUrl: "./re5210.component.html",
  styleUrls: ["./re5210.component.scss"],
})
export class Re5210Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of re5210 component (문서관리).
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
