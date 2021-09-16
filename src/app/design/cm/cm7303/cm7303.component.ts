import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 리멤버동기화 Component
 *
 * @extends AbstractCommonList
 * @exports Cm7303Component
 */
@Component({
  selector: "app-cm7303",
  templateUrl: "./cm7303.component.html",
  styleUrls: ["./cm7303.component.scss"],
})
export class Cm7303Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of cm7303 component (리멤버동기화).
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
