import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AbstractBaseComponent } from '../../abstract.base';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent extends AbstractBaseComponent implements OnInit, AfterViewInit {

  @Input() label : string = "No Label";
  @Input() isGroup : boolean = false;
  @Input() required : boolean = false;
  

  constructor(private ele : ElementRef) { 
    super();
  }
  
  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  

}

