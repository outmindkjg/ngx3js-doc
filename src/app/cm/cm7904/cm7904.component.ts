import { Component } from "@angular/core";
import { AbstractCommonComponent } from "../../shared/abstract.common";
import { CommonService } from "../../shared/services";

export interface AccordionItem {
  title: string;
  type: string;
  buttons?: { stylingMode: string; text: string; type: string }[];
  images?: string[];
  data?: any;
}

@Component({
  selector: "app-cm7904",
  templateUrl: "./cm7904.component.html",
  styleUrls: ["./cm7904.component.scss"],
})
export class Cm7904Component extends AbstractCommonComponent {
  constructor(commonService: CommonService) {
    super(commonService);
  }

  public dropDownItems: string[] = [
    "Download Trial For Visual Studio",
    "Download Trial For All Platforms",
    "Package Managers",
  ];

  public dataSource: AccordionItem[] = [
    {
      title: "Buttons",
      type: "button",
      buttons: [
        { stylingMode: "contained", text: "Contained normal", type: "normal" },
        { stylingMode: "outlined", text: "Outlined normal", type: "normal" },
        { stylingMode: "text", text: "Text normal", type: "normal" },
        {
          stylingMode: "contained",
          text: "Contained success",
          type: "success",
        },
        { stylingMode: "outlined", text: "Outlined success", type: "success" },
        { stylingMode: "text", text: "Text success", type: "success" },
        {
          stylingMode: "contained",
          text: "Contained default",
          type: "default",
        },
        { stylingMode: "outlined", text: "Outlined default", type: "default" },
        { stylingMode: "text", text: "Text default", type: "default" },
        { stylingMode: "contained", text: "Contained danger", type: "danger" },
        { stylingMode: "outlined", text: "Outlined danger", type: "danger" },
        { stylingMode: "text", text: "Text danger", type: "danger" },
      ],
    },
    {
      title: "Drop Down Buttons",
      type: "drop-down-button",
      buttons: [
        { stylingMode: "contained", text: "Contained normal", type: "normal" },
        { stylingMode: "outlined", text: "Outlined normal", type: "normal" },
        { stylingMode: "text", text: "Text normal", type: "normal" },
      ],
    },
    {
      title: "Gallery",
      type: "gallery",
      images: [
        "./assets/images/tmp_2.jpeg",
        "./assets/images/tmp_3.jpeg",
        "./assets/images/tmp_5.jpeg",
        "./assets/images/tmp_9.jpeg",
      ],
    },
    {
      title: "Chart",
      type: "chart",
      data: [
        {
          arg: 1960,
          val: 3032019978,
        },
        {
          arg: 1970,
          val: 3683676306,
        },
        {
          arg: 1980,
          val: 4434021975,
        },
        {
          arg: 1990,
          val: 5281340078,
        },
        {
          arg: 2000,
          val: 6115108363,
        },
        {
          arg: 2010,
          val: 6922947261,
        },
        {
          arg: 2020,
          val: 7795000000,
        },
      ],
    },
  ];

  onItemClick(e: any) {
    this.openNotify(e.itemData.name || e.itemData, "success", 600);
  }
}
