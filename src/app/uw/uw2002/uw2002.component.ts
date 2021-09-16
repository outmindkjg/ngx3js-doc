import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 출력문구관리 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2002Component
 */
@Component({
  selector: "app-uw2002",
  templateUrl: "./uw2002.component.html",
  styleUrls: ["./uw2002.component.scss"],
})
export class Uw2002Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2002 component (출력문구관리).
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
