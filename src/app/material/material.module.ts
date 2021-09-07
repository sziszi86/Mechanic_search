import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatPaginatorModule,
        MatInputModule
    ],
    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatPaginatorModule,
        MatInputModule
    ]
})
export class MaterialModule {
}
