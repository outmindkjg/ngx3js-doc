import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 판례 및 선행처리 관리 (판례 및 선행처리 관리) Component
 *
 * @extends AbstractCommonList
 * @exports Cl3000Component
 */
@Component({
  selector: "app-cl3000",
  templateUrl: "./cl3000.component.html",
  styleUrls: ["./cl3000.component.scss"],
})
export class Cl3000Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of cl3000 component (판례 및 선행처리 관리 (판례 및 선행처리 관리)).
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
