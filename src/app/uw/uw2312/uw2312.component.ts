import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 갱신결과조회 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2312Component
 */
@Component({
  selector: "app-uw2312",
  templateUrl: "./uw2312.component.html",
  styleUrls: ["./uw2312.component.scss"],
})
export class Uw2312Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2312 component (갱신결과조회).
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
