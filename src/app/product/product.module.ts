import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './overview/overview.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:"overview", component: OverviewComponent}
    ])
  ],
  declarations: [ProductComponent, OverviewComponent],
  exports: [ProductComponent]
})
export class ProductModule { }
