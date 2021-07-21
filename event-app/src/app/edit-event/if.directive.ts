import {
  Directive,
  EmbeddedViewRef,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';


@Directive({
  selector: 'ng-template[appIf]'
})
export class IfDirective implements OnChanges{
  @Input('appIf')
  public value: number | undefined;

  @Input('appIfSize')
  public size: number | undefined;

  constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<any>) { }

  ngOnChanges(changes: SimpleChanges) {
    this.updateView(this.size, this.value)
  }

  public updateView(size: number|undefined, value: number|undefined){
    this.viewContainer.clear()
    if(size === value){
      this.viewContainer.createEmbeddedView(this.templateRef)
    }


  }

}
