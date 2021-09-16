import { Component, Directive, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

/**
 * Base Abstract
 *
 * @export
 * @abstract
 * @class AbstractBase
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
@Component({
  template: "",
})
export abstract class AbstractBase implements OnInit, OnDestroy {

  /**
   * 구독
   *
   * @private
   * @type {Subscription}
   */
   protected subscribes: Subscription[] = [];
  
  /**
   * Creates an instance of AbstractBase.
   *
   * @constructor
   */
  constructor() {}

  /**
   * A callback method that is invoked immediately after the
   * default change detector has checked the directive's
   * data-bound properties for the first time,
   * and before any of the view or content children have been checked.
   * It is invoked only once when the directive is instantiated.
   */
  ngOnInit(): void {
    console.debug("ngOnInit", this.constructor.name);
  }

  /**
   * A callback method that performs custom clean-up, invoked immediately
   * after a directive, pipe, or service instance is destroyed.
   */
  ngOnDestroy(): void {
    if (this.subscribes !== null && this.subscribes.length > 0) {
      this.subscribes.forEach(subscribe => {
        subscribe.unsubscribe();
      });
      this.subscribes = [];
    }
    console.debug("ngOnDestroy", this.constructor.name);
  }
}

/**
 * BaseComponent Abstract
 *
 * @export
 * @abstract
 */
@Component({
  template: "",
})
export abstract class AbstractBaseComponent extends AbstractBase {

}

/**
 * BaseDirective Abstract
 *
 * @export
 * @abstract
 */
@Directive()
export abstract class AbstractBaseDirective {
  /**
   * 구독
   *
   * @private
   * @type {Subscription}
   */
   protected subscribes: Subscription[] = [];
  
  /**
   * Creates an instance of AbstractBase.
   *
   * @constructor
   */
  constructor() {}

  /**
   * A callback method that is invoked immediately after the
   * default change detector has checked the directive's
   * data-bound properties for the first time,
   * and before any of the view or content children have been checked.
   * It is invoked only once when the directive is instantiated.
   */
  ngOnInit(): void {
    console.debug("ngOnInit", this.constructor.name);
  }

  /**
   * A callback method that performs custom clean-up, invoked immediately
   * after a directive, pipe, or service instance is destroyed.
   */
  ngOnDestroy(): void {
    if (this.subscribes !== null && this.subscribes.length > 0) {
      this.subscribes.forEach(subscribe => {
        subscribe.unsubscribe();
      });
      this.subscribes = [];
    }
    console.debug("ngOnDestroy", this.constructor.name);
  }  
}

/**
 * BasePipe Abstract
 *
 * @export
 * @abstract
 */
@Component({
  template: "",
})
export abstract class AbstractBasePipe extends AbstractBase {

}

/**
 * BaseService Abstract
 *
 * @export
 * @abstract
 */
@Component({
  template: "",
})
export abstract class AbstractBaseService extends AbstractBase {
}

