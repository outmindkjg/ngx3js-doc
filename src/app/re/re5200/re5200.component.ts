import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * Bordereaux 관리 Component
 *
 * @extends AbstractCommonList
 * @exports Re5200Component
 */
@Component({
  selector: "app-re5200",
  templateUrl: "./re5200.component.html",
  styleUrls: ["./re5200.component.scss"],
})
export class Re5200Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of re5200 component (Bordereaux 관리).
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
