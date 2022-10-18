import {
  ComponentRef,
  Directive,
  Inject,
  Injector,
  Input,
  IterableDiffers,
  KeyValueDiffers,
  OnChanges,
  OnDestroy,
  Optional,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { TEMPLATE_ENCAPSULATIONS, TemplateEncapsulation } from './template-encapsulation';
import { TemplateOutlet } from '../template-outlet/template-outlet';
import { assertMultiProvider } from '../utils';

@Directive({
  selector: '[encapsulate]',
  exportAs: 'encapsulate',
  inputs: ['ngClass: encapsulateNgClass', 'ngStyle: encapsulateNgStyle'],
})
export class TemplateEncapsulate extends TemplateOutlet implements OnChanges, OnDestroy {
  protected containerRef: ComponentRef<any> | null = null;

  @Input('encapsulate') encapsulationName?: string;

  get encapsulation(): TemplateEncapsulation | null {
    return this.encapsulations?.find((te) => te.name === this.encapsulationName) ?? null;
  }

  constructor(
    template: TemplateRef<any>,
    renderer: Renderer2,
    viewContainerRef: ViewContainerRef,
    iterableDiffers: IterableDiffers,
    keyValueDiffers: KeyValueDiffers,
    protected injector: Injector,
    @Optional()
    @Inject(TEMPLATE_ENCAPSULATIONS)
    protected encapsulations: /* @dynamic */ TemplateEncapsulation[]
  ) {
    super(renderer, iterableDiffers, keyValueDiffers, viewContainerRef);

    assertMultiProvider(encapsulations, TEMPLATE_ENCAPSULATIONS);
  }

  override ngOnChanges(changes: SimpleChanges) {
    const { encapsulationName } = changes;

    const shouldRecreate =
      encapsulationName?.firstChange || encapsulationName?.previousValue !== encapsulationName?.currentValue;

    if (shouldRecreate) {
      this.recreateViewRef();

      if (this.encapsulation != null) {
        this.containerRef?.destroy();
        this.containerRef = this.viewContainerRef.createComponent(this.encapsulation.container, {
          projectableNodes: this.viewRef ? [this.viewRef.rootNodes] : [],
          injector: this.injector,
        });

        const rootNodes = [this.containerRef.location.nativeElement];
        this.updateNgClasses(rootNodes);
        this.updateNgStyles(rootNodes);
      }
    }
  }

  override ngOnDestroy() {
    super.ngOnDestroy();

    this.containerRef?.destroy();
  }
}
