import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 보상 월마감 및 마감데이터 조회(월별 마감/결산) Component
 *
 * @extends AbstractCommonList
 * @exports Cl3100Component
 */
@Component({
  selector: "app-cl3100",
  templateUrl: "./cl3100.component.html",
  styleUrls: ["./cl3100.component.scss"],
})
export class Cl3100Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of cl3100 component (보상 월마감 및 마감데이터 조회(월별 마감/결산)).
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
