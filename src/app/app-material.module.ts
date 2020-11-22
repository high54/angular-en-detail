import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { MatToolbarModule } from '@angular/material/toolbar';
const materialModules: any[] = [
    MatButtonModule,
    MatToolbarModule
];

@NgModule({
    imports: [
        ...materialModules
    ],
    exports: [
        ...materialModules
    ]
})
export class AppMaterialModule { }
