import { Injectable } from '@angular/core';
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.setItem = function (key, value) {
        localStorage.setItem(key, value);
    };
    LocalStorageService.prototype.getItem = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorageService.prototype.removeItem = function (key) {
        localStorage.removeItem(key);
    };
    LocalStorageService.decorators = [
        { type: Injectable },
    ];
    return LocalStorageService;
}());
export { LocalStorageService };
//# sourceMappingURL=storage.service.js.map