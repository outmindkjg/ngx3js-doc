import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 중개수수료관리 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2307Component
 */
@Component({
  selector: "app-uw2307",
  templateUrl: "./uw2307.component.html",
  styleUrls: ["./uw2307.component.scss"],
})
export class Uw2307Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2307 component (중개수수료관리).
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
