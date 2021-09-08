import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatPaginatorModule,
        MatInputModule,
        MatAutocompleteModule
    ],
    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatPaginatorModule,
        MatInputModule,
        MatAutocompleteModule
    ]
})
export class MaterialModule {
}
