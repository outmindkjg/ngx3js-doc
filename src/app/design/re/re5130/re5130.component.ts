import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 환급보험료 관리 Component
 *
 * @extends AbstractCommonList
 * @exports Re5130Component
 */
@Component({
  selector: "app-re5130",
  templateUrl: "./re5130.component.html",
  styleUrls: ["./re5130.component.scss"],
})
export class Re5130Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of re5130 component (환급보험료 관리).
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
