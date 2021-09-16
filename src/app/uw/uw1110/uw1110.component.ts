import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 선사영업관리 Component
 *
 * @extends AbstractCommonList
 * @exports Uw1110Component
 */
@Component({
  selector: "app-uw1110",
  templateUrl: "./uw1110.component.html",
  styleUrls: ["./uw1110.component.scss"],
})
export class Uw1110Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw1110 component (선사영업관리).
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
