import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 고객목록조회 Component
 *
 * @extends AbstractCommonList
 * @exports Uw1000Component
 */
@Component({
  selector: "app-uw1000",
  templateUrl: "./uw1000.component.html",
  styleUrls: ["./uw1000.component.scss"],
})
export class Uw1000Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw1000 component (고객목록조회).
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
