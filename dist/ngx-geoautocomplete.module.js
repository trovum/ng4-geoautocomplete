import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AutoCompleteComponent } from './auto-complete.component';
import { AutoCompleteSearchService } from './auto-complete.service';
import { LocalStorageService } from './storage.service';
import { GlobalRef, BrowserGlobalRef } from './windowRef.service';
var NgxGeoautocompleteModule = /** @class */ (function () {
    function NgxGeoautocompleteModule() {
    }
    NgxGeoautocompleteModule.forRoot = function () {
        return {
            ngModule: NgxGeoautocompleteModule
        };
    };
    NgxGeoautocompleteModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        AutoCompleteComponent
                    ],
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        FormsModule
                    ],
                    exports: [
                        AutoCompleteComponent
                    ],
                    providers: [{ provide: GlobalRef, useClass: BrowserGlobalRef }, AutoCompleteSearchService, LocalStorageService]
                },] },
    ];
    return NgxGeoautocompleteModule;
}());
export { NgxGeoautocompleteModule };
//# sourceMappingURL=ngx-geoautocomplete.module.js.map