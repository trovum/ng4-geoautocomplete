var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
    NgxGeoautocompleteModule_1 = NgxGeoautocompleteModule;
    NgxGeoautocompleteModule.forRoot = function () {
        return {
            ngModule: NgxGeoautocompleteModule_1
        };
    };
    var NgxGeoautocompleteModule_1;
    NgxGeoautocompleteModule = NgxGeoautocompleteModule_1 = __decorate([
        NgModule({
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
        })
    ], NgxGeoautocompleteModule);
    return NgxGeoautocompleteModule;
}());
export { NgxGeoautocompleteModule };
//# sourceMappingURL=ngx-geoautocomplete.module.js.map