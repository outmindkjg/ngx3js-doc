import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 출자금관리 Component
 *
 * @extends AbstractCommonList
 * @exports Uw1020Component
 */
@Component({
  selector: "app-uw1020",
  templateUrl: "./uw1020.component.html",
  styleUrls: ["./uw1020.component.scss"],
})
export class Uw1020Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw1020 component (출자금관리).
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
