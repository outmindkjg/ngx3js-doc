import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 상품담보관리 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2001Component
 */
@Component({
  selector: "app-uw2001",
  templateUrl: "./uw2001.component.html",
  styleUrls: ["./uw2001.component.scss"],
})
export class Uw2001Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2001 component (상품담보관리).
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
