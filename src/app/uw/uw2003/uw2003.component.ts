import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 항해구역관리_Trading Area Component
 *
 * @extends AbstractCommonList
 * @exports Uw2003Component
 */
@Component({
  selector: "app-uw2003",
  templateUrl: "./uw2003.component.html",
  styleUrls: ["./uw2003.component.scss"],
})
export class Uw2003Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2003 component (항해구역관리_Trading Area).
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
