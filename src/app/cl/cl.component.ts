import { Component } from "@angular/core";
import { AbstractRedirectComponent } from "../shared/abstract.common";
import { CommonService } from "../shared/services";

@Component({
  selector: "app-cl",
  templateUrl: "./cl.component.html",
  styleUrls: ["./cl.component.scss"],
})
export class ClComponent extends AbstractRedirectComponent {
  constructor(commonService: CommonService) {
    super(commonService, "cl");
  }
}
