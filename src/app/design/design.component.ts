import { Component } from "@angular/core";
import { AbstractRedirectComponent } from "../shared/abstract.common";
import { CommonService } from "../shared/services";

@Component({
  selector: "app-design",
  templateUrl: "./design.component.html",
  styleUrls: ["./design.component.scss"],
})
export class DesignComponent extends AbstractRedirectComponent {
  constructor(commonService: CommonService) {
    super(commonService, "design");
  }
}
