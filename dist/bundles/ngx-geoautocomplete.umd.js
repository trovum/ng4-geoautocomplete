/**
 * ngx-geoautocomplete - angular 6+ compatible google autocomplete with server side api support and AOT enabled
 * @version v0.1.1
 * @author forked from tanoy kumar maity
 * @link https://github.com/trovum/ngx-geoautocomplete#readme
 * @license MIT
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@angular/core"),require("@angular/common"),require("@angular/common/http"),require("@angular/forms")):"function"==typeof define&&define.amd?define(["@angular/core","@angular/common","@angular/common/http","@angular/forms"],t):"object"==typeof exports?exports.ngxGeoautocomplete=t(require("@angular/core"),require("@angular/common"),require("@angular/common/http"),require("@angular/forms")):e.ngxGeoautocomplete=t(e.ng.core,e.ng.common,e.ng.commonHttp,e.ng.forms)}(window,function(e,t,n,o){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=function(){return function(){}}();t.GlobalRef=i;var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),Object.defineProperty(t.prototype,"nativeGlobal",{get:function(){return window},enumerable:!0,configurable:!0}),t}(i);t.BrowserGlobalRef=c},function(e,t){e.exports=n},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var i,c=arguments.length,r=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(r=(c<3?i(r):c>3?i(t,n,r):i(t,n))||r);return c>3&&r&&Object.defineProperty(t,n,r),r},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=this&&this.__param||function(e,t){return function(n,o){t(n,o,e)}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),a=n(2),l=n(3),u=n(5),g=function(){function e(e,t,n,o){this._http=e,this.platformId=t,this._global=n,this._localStorageService=o}return e.prototype.getPredictions=function(e,t){var n=this;return new Promise(function(o){n._http.get(e,{params:(new l.HttpParams).set("query",t)}).subscribe(function(e){o(e||!1)})})},e.prototype.getLatLngDetail=function(e,t,n){var o=this;return new Promise(function(i){o._http.get(e,{params:(new l.HttpParams).set("lat",t).set("lng",n)}).subscribe(function(e){i(e||!1)})})},e.prototype.getPlaceDetails=function(e,t){var n=this;return new Promise(function(o){n._http.get(e,{params:(new l.HttpParams).set("query",t)}).subscribe(function(e){o(e||!1)})})},e.prototype.getGeoCurrentLocation=function(){var e=this;return new Promise(function(t){if(s.isPlatformBrowser(e.platformId)){var n=e._global.nativeGlobal;n.navigator.geolocation?n.navigator.geolocation.getCurrentPosition(function(e){var n={lat:parseFloat(e.coords.latitude+""),lng:parseFloat(e.coords.longitude+"")};t(n)},function(e){t(!1)}):t(!1)}else t(!1)})},e.prototype.getGeoLatLngDetail=function(e){var t=this;return new Promise(function(n){s.isPlatformBrowser(t.platformId)?(new t._global.nativeGlobal.google.maps.Geocoder).geocode({location:e},function(e,o){"OK"===o?t.getGeoPlaceDetail(e[0].place_id).then(function(e){n(e||!1)}):n(!1)}):n(!1)})},e.prototype.getGeoPrediction=function(e){var t=this;return new Promise(function(n){if(s.isPlatformBrowser(t.platformId)){var o=t._global.nativeGlobal,i=new o.google.maps.places.AutocompleteService,c={},r=[];if(c=e.countryRestriction.length?{input:e.query,componentRestrictions:{country:e.countryRestriction}}:{input:e.query},e.geoLocation&&(c.location=new o.google.maps.LatLng(parseFloat(e.geoLocation[0]),parseFloat(e.geoLocation[1])),c.radius=e.radius),e.geoTypes.length)for(var a=0;a<e.geoTypes.length;a++){var l=c;l.types=new Array(e.geoTypes[a]),r.push(t.geoPredictionCall(i,l))}else r.push(t.geoPredictionCall(i,c));Promise.all(r).then(function(e){var o=e;if(o.length>1){for(var i=[],c=0;c<o.length;c++)o[c]&&o[c].length&&(i=i.concat(o[c]));i=t.getUniqueResults(i),n(i)}else n(e[0])})}else n(!1)})},e.prototype.getGeoPlaceDetail=function(e){var t=this;return new Promise(function(n){s.isPlatformBrowser(t.platformId)?new t._global.nativeGlobal.google.maps.places.PlacesService(document.createElement("div")).getDetails({placeId:e},function(e,o){null==e||0===e.length?t.getGeoPaceDetailByReferance(e.referance).then(function(e){n(e||!1)}):n(e)}):n(!1)})},e.prototype.getGeoPaceDetailByReferance=function(e){var t=this;return new Promise(function(n){if(s.isPlatformBrowser(t.platformId)){var o=t._global.nativeGlobal;(new o.google.maps.places.PlacesService).getDetails({reference:e},function(e,t){t===o.google.maps.places.PlacesServiceStatus.OK?n(e):n(!1)})}else n(!1)})},e.prototype.addRecentList=function(e,t,n){var o=this;this.getRecentList(e).then(function(i){if(i){for(var c=0;c<i.length;c++)if(i[c].description===t.description){i.splice(c,1);break}i.unshift(t),i.length>n&&i.pop(),o._localStorageService.setItem(e,JSON.stringify(i))}})},e.prototype.getRecentList=function(e){var t=this;return new Promise(function(n){var o=t._localStorageService.getItem(e);n(o=o?JSON.parse(o):[])})},e.prototype.getUniqueResults=function(e){return Array.from(e.reduce(function(e,t){return e.set(t.place_id,t)},new Map).values())},e.prototype.geoPredictionCall=function(e,t){var n=this._global.nativeGlobal;return new Promise(function(o){e.getPlacePredictions(t,function(e,t){t===n.google.maps.places.PlacesServiceStatus.OK?o(e):o(!1)})})},e=o([r.Injectable(),c(1,r.Inject(r.PLATFORM_ID)),i("design:paramtypes",[l.HttpClient,Object,a.GlobalRef,u.LocalStorageService])],e)}();t.AutoCompleteSearchService=g},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var i,c=arguments.length,r=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(r=(c<3?i(r):c>3?i(t,n,r):i(t,n))||r);return c>3&&r&&Object.defineProperty(t,n,r),r};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=function(){function e(){}return e.prototype.setItem=function(e,t){localStorage.setItem(e,t)},e.prototype.getItem=function(e){return localStorage.getItem(e)},e.prototype.removeItem=function(e){localStorage.removeItem(e)},e=o([i.Injectable()],e)}();t.LocalStorageService=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(7))},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var i,c=arguments.length,r=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(r=(c<3?i(r):c>3?i(t,n,r):i(t,n))||r);return c>3&&r&&Object.defineProperty(t,n,r),r};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=n(1),r=n(3),s=n(8),a=n(9),l=n(4),u=n(5),g=n(2),d=function(){function e(){}var t;return t=e,e.forRoot=function(){return{ngModule:t}},e=t=o([i.NgModule({declarations:[a.AutoCompleteComponent],imports:[c.CommonModule,r.HttpClientModule,s.FormsModule],exports:[a.AutoCompleteComponent],providers:[{provide:g.GlobalRef,useClass:g.BrowserGlobalRef},l.AutoCompleteSearchService,u.LocalStorageService]})],e)}();t.NgxGeoautocompleteModule=d},function(e,t){e.exports=o},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var i,c=arguments.length,r=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(r=(c<3?i(r):c>3?i(t,n,r):i(t,n))||r);return c>3&&r&&Object.defineProperty(t,n,r),r},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=this&&this.__param||function(e,t){return function(n,o){t(n,o,e)}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(1),a=n(2),l=n(4),u=function(){function e(e,t,n,o){this.platformId=e,this._elmRef=t,this._global=n,this._autoCompleteSearchService=o,this.componentCallback=new r.EventEmitter,this.locationInput="",this.gettingCurrentLocationFlag=!1,this.dropdownOpen=!1,this.recentDropdownOpen=!1,this.queryItems=[],this.isSettingsError=!1,this.settingsErrorMsg="",this.settings={labels:{}},this.moduleinit=!1,this.selectedDataIndex=-1,this.recentSearchData=[],this.userSelectedOption="",this.defaultSettings={labels:{currentLocationText:"Use Current Location",recentSearchesText:"Recent Searches",locationsText:"Locations",searchPlaceholderText:"Search"},geoPredictionServerUrl:"",geoLatLangServiceUrl:"",geoLocDetailServerUrl:"",geoCountryRestriction:[],geoTypes:[],geoLocation:[],geoRadius:0,serverResponseListHierarchy:[],serverResponseatLangHierarchy:[],serverResponseDetailHierarchy:[],resOnSearchButtonClickOnly:!1,useGoogleGeoApi:!0,inputPlaceholderText:"Enter Area Name",inputString:"",showSearchButton:!0,showRecentSearch:!0,showCurrentLocation:!0,recentStorageName:"recentSearches",noOfRecentSearchSave:5,currentLocIconUrl:"",searchIconUrl:"",locationIconUrl:""}}return e.prototype.ngOnInit=function(){this.moduleinit||this.moduleInit()},e.prototype.ngOnChanges=function(){this.moduleinit=!0,this.moduleInit()},e.prototype.searchinputClickCallback=function(e){e.target.select(),this.searchinputCallback(e)},e.prototype.searchinputCallback=function(e){var t=this.locationInput;40===e.keyCode||38===e.keyCode||13===e.keyCode?this.navigateInList(e.keyCode):t?this.getListQuery(t):(this.queryItems=[],this.userSelectedOption&&this.userQuerySubmit("false"),this.userSelectedOption="",this.settings.showRecentSearch?this.showRecentSearch():this.dropdownOpen=!1)},e.prototype.activeListNode=function(e){for(var t=0;t<this.queryItems.length;t++)e===t?(this.queryItems[t].active=!0,this.selectedDataIndex=e):this.queryItems[t].active=!1},e.prototype.selectedListNode=function(e){this.dropdownOpen=!1,this.recentDropdownOpen?this.setRecentLocation(this.queryItems[e]):this.getPlaceLocationInfo(this.queryItems[e])},e.prototype.closeAutocomplete=function(e){this._elmRef.nativeElement.contains(e.target)||(this.selectedDataIndex=-1,this.dropdownOpen=!1)},e.prototype.userQuerySubmit=function(e){("false"===e?"":this.userSelectedOption)?this.componentCallback.emit({response:!0,data:this.userSelectedOption}):this.componentCallback.emit({response:!1,reason:"No user input"})},e.prototype.currentLocationSelected=function(){var e=this;s.isPlatformBrowser(this.platformId)&&(this.gettingCurrentLocationFlag=!0,this.dropdownOpen=!1,this._autoCompleteSearchService.getGeoCurrentLocation().then(function(t){t?e.getCurrentLocationInfo(t):(e.gettingCurrentLocationFlag=!1,e.componentCallback.emit({response:!1,reason:"Failed to get geo location"}))}))},e.prototype.moduleInit=function(){this.settings=this.setUserSettings(),this.settings.geoRadius&&2!==this.settings.geoLocation.length&&(this.isSettingsError=!0,this.settingsErrorMsg=this.settingsErrorMsg+'Radius should be used with GeoLocation. Please use "geoLocation" key to set lat and lng. '),2!==this.settings.geoLocation.length||this.settings.geoRadius||(this.settings.geoRadius=2e7),this.settings.showRecentSearch&&this.getRecentLocations(),this.settings.useGoogleGeoApi||(this.settings.geoPredictionServerUrl||(this.isSettingsError=!0,this.settingsErrorMsg=this.settingsErrorMsg+'Prediction custom server url is not defined. Please use "geoPredictionServerUrl" key to set. '),this.settings.geoLatLangServiceUrl||(this.isSettingsError=!0,this.settingsErrorMsg=this.settingsErrorMsg+'Latitude and longitude custom server url is not defined. Please use "geoLatLangServiceUrl" key to set. '),this.settings.geoLocDetailServerUrl||(this.isSettingsError=!0,this.settingsErrorMsg=this.settingsErrorMsg+'Location detail custom server url is not defined. Please use "geoLocDetailServerUrl" key to set. ')),this.locationInput=this.settings.inputString},e.prototype.processSearchQuery=function(){this.queryItems.length&&(this.selectedDataIndex>-1?this.selectedListNode(this.selectedDataIndex):this.selectedListNode(0))},e.prototype.setUserSettings=function(){var e={};if(this.userSettings&&"object"==typeof this.userSettings){for(var t=0,n=Object.keys(this.defaultSettings);t<n.length;t++){var o=n[t];e[o]=void 0!==this.userSettings[o]?this.userSettings[o]:this.defaultSettings[o]}return e}return this.defaultSettings},e.prototype.getListQuery=function(e){var t=this;if(this.recentDropdownOpen=!1,this.settings.useGoogleGeoApi){var n={query:e,countryRestriction:this.settings.geoCountryRestriction,geoTypes:this.settings.geoTypes};2===this.settings.geoLocation.length&&(n.geoLocation=this.settings.geoLocation,n.radius=this.settings.geoRadius),this._autoCompleteSearchService.getGeoPrediction(n).then(function(e){t.updateListItem(e)})}else this._autoCompleteSearchService.getPredictions(this.settings.geoPredictionServerUrl,e).then(function(e){e=t.extractServerList(t.settings.serverResponseListHierarchy,e),t.updateListItem(e)})},e.prototype.extractServerList=function(e,t){if(e.length){for(var n=t,o=0,i=e;o<i.length;o++){n=n[i[o]]}return n}return t},e.prototype.updateListItem=function(e){this.queryItems=e||[],this.dropdownOpen=!0},e.prototype.showRecentSearch=function(){var e=this;this.recentDropdownOpen=!0,this.dropdownOpen=!0,this._autoCompleteSearchService.getRecentList(this.settings.recentStorageName).then(function(t){e.queryItems=t||[]})},e.prototype.navigateInList=function(e){var t=0;40===e?(this.selectedDataIndex>=0&&(t=this.selectedDataIndex+1<=this.queryItems.length-1?this.selectedDataIndex+1:0),this.activeListNode(t)):38===e?(t=this.selectedDataIndex>=0&&this.selectedDataIndex-1>=0?this.selectedDataIndex-1:this.queryItems.length-1,this.activeListNode(t)):this.processSearchQuery()},e.prototype.getCurrentLocationInfo=function(e){var t=this;this.settings.useGoogleGeoApi?this._autoCompleteSearchService.getGeoLatLngDetail(e).then(function(e){e&&t.setRecentLocation(e),t.gettingCurrentLocationFlag=!1}):this._autoCompleteSearchService.getLatLngDetail(this.settings.geoLatLangServiceUrl,e.lat,e.lng).then(function(e){e&&(e=t.extractServerList(t.settings.serverResponseatLangHierarchy,e),t.setRecentLocation(e)),t.gettingCurrentLocationFlag=!1})},e.prototype.getPlaceLocationInfo=function(e){var t=this;this.settings.useGoogleGeoApi?this._autoCompleteSearchService.getGeoPlaceDetail(e.place_id).then(function(e){e&&t.setRecentLocation(e)}):this._autoCompleteSearchService.getPlaceDetails(this.settings.geoLocDetailServerUrl,e.place_id).then(function(e){e&&(e=t.extractServerList(t.settings.serverResponseDetailHierarchy,e),t.setRecentLocation(e))})},e.prototype.setRecentLocation=function(e){(e=JSON.parse(JSON.stringify(e))).description=e.description?e.description:e.formatted_address,e.active=!1,this.selectedDataIndex=-1,this.locationInput=e.description,this.settings.showRecentSearch&&(this._autoCompleteSearchService.addRecentList(this.settings.recentStorageName,e,this.settings.noOfRecentSearchSave),this.getRecentLocations()),this.userSelectedOption=e,this.settings.resOnSearchButtonClickOnly||this.componentCallback.emit({response:!0,data:e})},e.prototype.getRecentLocations=function(){var e=this;this._autoCompleteSearchService.getRecentList(this.settings.recentStorageName).then(function(t){e.recentSearchData=t&&t.length?t:[]})},o([r.Input(),i("design:type",Object)],e.prototype,"userSettings",void 0),o([r.Output(),i("design:type",r.EventEmitter)],e.prototype,"componentCallback",void 0),e=o([r.Component({selector:"ngxgeo-autocomplete",template:'\n    <div class="custom-autocomplete" *ngIf="!isSettingsError">\n      <div class="custom-autocomplete__container">\n        <div class="custom-autocomplete__input" [ngClass]="{\'button-included\':settings.showSearchButton}">\n          <div class="input-padding-container">\n            <button class="submit-button btn btn-primary" *ngIf="settings.showSearchButton" (click)="processSearchQuery()">\n              {{settings.labels.searchPlaceholderText}}\n            </button>\n            <div class="search-box-container">\n            <input  [(ngModel)]="locationInput" (click)="searchinputClickCallback($event)"\n                   (keyup)="searchinputCallback($event)"\n                   type="search" name="search" id="search_places" placeholder="{{settings.inputPlaceholderText}}"\n                   autocomplete="off" />\n            </div>\n          </div>\n        </div>\n        <pre class="custom-autocomplete__loader" *ngIf="gettingCurrentLocationFlag"><i class="gif"></i></pre>\n      </div>\n      <ul class="custom-autocomplete__dropdown"\n          *ngIf="dropdownOpen && (settings.showCurrentLocation || queryItems.length)">\n        <li *ngIf="settings.showCurrentLocation" class="currentlocation">\n          <a href="javascript:;" (click)="currentLocationSelected()">\n            <i class="location-icon" *ngIf="settings.currentLocIconUrl"\n               [ngStyle]="{\'background-image\': \'url(\' + settings.currentLocIconUrl + \')\'}"></i>{{settings.labels.currentLocationText}}\n            <i class="location-icon current-default-icon" *ngIf="!settings.currentLocIconUrl"></i>\n          </a>\n        </li>\n        <li class="heading heading-recent" *ngIf="!recentDropdownOpen && queryItems.length"><span>{{settings.labels.locationsText}}</span><span\n          class="line line-location"></span></li>\n        <li class="heading heading-recent" *ngIf="recentDropdownOpen && queryItems.length">\n          <span>{{settings.labels.recentSearchesText}}</span><span class="line line-recent"></span>\n        </li>\n        <li *ngFor="let data of queryItems;let $index = index" [ngClass]="{\'active\': data.active}">\n        <a href="javascript:;" (mouseover)="activeListNode($index)" (click)="selectedListNode($index)">\n            <i class="custom-icon" *ngIf="settings.locationIconUrl"\n               [ngStyle]="{\'background-image\': \'url(\' + settings.locationIconUrl + \')\'}"></i>\n            <i class="custom-icon location-default-icon" *ngIf="!settings.locationIconUrl"></i>\n            <span class="main-text">\n                {{data.structured_formatting?.main_text ? data.structured_formatting.main_text : data.description}}\n              </span>\n            <span class="secondary_text"\n                  *ngIf="data.structured_formatting?.secondary_text">{{data.structured_formatting.secondary_text}}</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class="custom-autocomplete--error" *ngIf="isSettingsError">{{settingsErrorMsg}}</div>\n  ',styles:["\n    .custom-autocomplete {\n      display: block;\n      position: relative;\n      width: 100%;\n      float: left;\n    }\n\n    .custom-autocomplete a, .custom-autocomplete a:hover {\n      text-decoration: none;\n    }\n\n    .custom-autocomplete--error {\n      color: #fff;\n      background-color: #fd4f4f;\n      padding: 10px;\n    }\n\n    .custom-autocomplete__dropdown {\n      position: absolute;\n      background: #fff;\n      margin: 0;\n      padding: 0;\n      width: 100%;\n      list-style: none;\n      border: 1px solid #909090;\n      z-index: 99;\n      top: 50px;\n    }\n\n    .custom-autocomplete__dropdown li {\n      float: left;\n      width: 100%;\n      font-size: 15px;\n    }\n\n    .custom-autocomplete__dropdown a {\n      width: 100%;\n      color: #353535;\n      float: left;\n      padding: 8px 10px;\n    }\n\n    .custom-autocomplete__dropdown a:hover {\n      text-decoration: none;\n    }\n\n    .custom-autocomplete__dropdown .currentlocation {\n      text-transform: uppercase;\n      letter-spacing: 1px;\n    }\n\n    .custom-autocomplete__dropdown .currentlocation a {\n      padding: 10px 10px 10px 13px;\n      font-size: 14px;\n    }\n\n    .custom-autocomplete__dropdown .currentlocation a:hover {\n      background-color: #eeeded;\n    }\n\n    .custom-autocomplete__dropdown .currentlocation .location-icon {\n      width: 16px;\n      height: 16px;\n      background-size: cover;\n      background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDg3Ljg1OSA4Ny44NTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDg3Ljg1OSA4Ny44NTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iTWFya2VyIj4KCQk8Zz4KCQkJPHBhdGggZD0iTTgwLjkzOCw0MC40ODNDNzkuMjk0LDIyLjcxMyw2NS4wOTMsOC41MjgsNDcuMzEyLDYuOTE3VjBoLTYuNzU3djYuOTE4QzIyLjc3Myw4LjUyOCw4LjU3MiwyMi43MTQsNi45Myw0MC40ODNIMHY2Ljc1NyAgICAgaDYuOTE5YzEuNTgyLDE3LjgzOCwxNS44MSwzMi4wODcsMzMuNjM2LDMzLjcwMXY2LjkxOGg2Ljc1N3YtNi45MThjMTcuODI2LTEuNjEzLDMyLjA1NC0xNS44NjIsMzMuNjM2LTMzLjcwMWg2LjkxMXYtNi43NTcgICAgIEg4MC45Mzh6IE00Ny4zMTIsNzQuMTQ2di02LjU1OGgtNi43NTd2Ni41NThDMjYuNDU3LDcyLjU4LDE1LjI0Miw2MS4zNDUsMTMuNzA4LDQ3LjI0aDYuNTY2di02Ljc1N2gtNi41NDkgICAgIGMxLjU5MS0xNC4wNDEsMTIuNzc3LTI1LjIxLDI2LjgyOS0yNi43NzF2Ni41NjRoNi43NTZ2LTYuNTY0YzE0LjA1MywxLjU2LDI1LjIzOSwxMi43MjksMjYuODMsMjYuNzcxaC02LjU1NnY2Ljc1N2g2LjU3MyAgICAgQzcyLjYyNSw2MS4zNDUsNjEuNDA5LDcyLjU4LDQ3LjMxMiw3NC4xNDZ6IE00My45MzQsMzMuNzI3Yy01LjU5NSwwLTEwLjEzNSw0LjUzMy0xMC4xMzUsMTAuMTMxICAgICBjMCw1LjU5OSw0LjU0LDEwLjEzOSwxMC4xMzUsMTAuMTM5czEwLjEzNC00LjU0LDEwLjEzNC0xMC4xMzlDNTQuMDY4LDM4LjI2LDQ5LjUyNywzMy43MjcsNDMuOTM0LDMzLjcyN3oiIGZpbGw9IiMwMDAwMDAiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);\n      float: left;\n      margin-right: 10px;\n    }\n\n    .custom-autocomplete__dropdown .heading {\n      padding: 13px 10px 7px 13px;\n      text-transform: uppercase;\n      letter-spacing: 1px;\n      font-size: 13px;\n      position: relative;\n    }\n\n    .custom-autocomplete__dropdown .heading .line {\n      border-top: 1px solid #c2c2c2;\n      width: calc(100% - 115px);\n      display: inline-block;\n      position: absolute;\n      top: 21px;\n      left: 100px;\n    }\n\n    .custom-autocomplete__dropdown .heading .line-location {\n      left: 100px;\n      top: 16px;\n      width: calc(100% - 110px);\n    }\n\n    .custom-autocomplete__dropdown .heading .line-recent {\n      left: 158px;\n      top: 16px;\n      width: calc(100% - 168px);\n    }\n\n    .custom-autocomplete__dropdown .heading-recent {\n      padding-top: 8px;\n    }\n\n    .custom-autocomplete__dropdown .custom-icon {\n      width: 16px;\n      height: 16px;\n      background-size: cover;\n      vertical-align: bottom;\n      display: inline-block;\n      margin-right: 4px;\n    }\n\n    .custom-autocomplete__dropdown .main-text {\n      padding-right: 4px;\n      font-weight: 700;\n    }\n\n    .custom-autocomplete__dropdown .secondary_text {\n      font-size: 12px;\n      color: #909090;\n    }\n\n    .custom-autocomplete__dropdown .active a {\n      background-color: #ffe0cd;\n    }\n\n    .custom-autocomplete__loader {\n      position: absolute;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      text-align: center;\n      background: white;\n    }\n\n    .custom-autocomplete__loader .gif {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLXJpcHBsZSI+PHBhdGggZmlsbD0ibm9uZSIgY2xhc3M9ImJrIiBkPSJNMCAwaDEwMHYxMDBIMHoiLz48Zz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBkdXI9IjJzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjBzIiBrZXlUaW1lcz0iMDswLjMzOzEiIHZhbHVlcz0iMTsxOzAiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgc3Ryb2tlPSIjYWZhZmI3IiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgZHVyPSIycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwcyIga2V5VGltZXM9IjA7MC4zMzsxIiB2YWx1ZXM9IjA7MjI7NDQiLz48L2NpcmNsZT48L2c+PGc+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZHVyPSIycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIxcyIga2V5VGltZXM9IjA7MC4zMzsxIiB2YWx1ZXM9IjE7MTswIi8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDAiIHN0cm9rZT0iI2ZmYTYzMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSI4IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMXMiIGtleVRpbWVzPSIwOzAuMzM7MSIgdmFsdWVzPSIwOzIyOzQ0Ii8+PC9jaXJjbGU+PC9nPjwvc3ZnPg==);\n      background-size: cover;\n      width: 30px;\n      height: 30px;\n      top: 50%;\n      left: 50%;\n      transform: translate3d(-50%, -50%, 0);\n      position: absolute;\n    }\n\n    .custom-autocomplete__container, .custom-autocomplete__input {\n      width: inherit;\n      float: inherit;\n      position: relative;\n    }\n\n    .custom-autocomplete__input {\n      border-radius: 2px;\n    }\n\n    .custom-autocomplete__input input {\n      font-family: Roboto;\n      color: #2a2a2a;\n      margin: 0;\n      padding: 10px;\n      height: 50px;\n      border-radius: 2px;\n      border: solid 1px #e4e4e4;\n      display: block;\n      width: 100%;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      font-size: 16px;\n\n    &\n    ::-webkit-input-placeholder {\n      color: #868484;\n    }\n\n    &\n    :-moz-placeholder { /* Firefox 18- */\n      color: #868484;\n    }\n\n    &\n    ::-moz-placeholder { /* Firefox 19+ */\n      color: #868484;\n    }\n\n    &\n    :-ms-input-placeholder {\n      color: #868484;\n    }\n\n    }\n\n    .button-included input {\n      padding-right: 60px;\n    }\n\n    .search-default-icon {\n      background-image: url('data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K');\n    }\n\n    .location-default-icon {\n      background-image: url('data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4Ny43MjQgNDg3LjcyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg3LjcyNCA0ODcuNzI0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTIzNi45MjUsMC4xMjRjLTk2LjksMy40LTE3Ny40LDc5LTE4Ni43LDE3NS41Yy0xLjksMTkuMy0wLjgsMzgsMi42LDU1LjlsMCwwYzAsMCwwLjMsMi4xLDEuMyw2LjEgICAgYzMsMTMuNCw3LjUsMjYuNCwxMy4xLDM4LjZjMTkuNSw0Ni4yLDY0LjYsMTIzLjUsMTY1LjgsMjA3LjZjNi4yLDUuMiwxNS4zLDUuMiwyMS42LDBjMTAxLjItODQsMTQ2LjMtMTYxLjMsMTY1LjktMjA3LjcgICAgYzUuNy0xMi4yLDEwLjEtMjUuMSwxMy4xLTM4LjZjMC45LTMuOSwxLjMtNi4xLDEuMy02LjFsMCwwYzIuMy0xMiwzLjUtMjQuMywzLjUtMzYuOUM0MzguNDI1LDg0LjcyNCwzNDcuNTI1LTMuNzc2LDIzNi45MjUsMC4xMjQgICAgeiBNMjQzLjgyNSwyOTEuMzI0Yy01Mi4yLDAtOTQuNS00Mi4zLTk0LjUtOTQuNXM0Mi4zLTk0LjUsOTQuNS05NC41czk0LjUsNDIuMyw5NC41LDk0LjVTMjk2LjAyNSwyOTEuMzI0LDI0My44MjUsMjkxLjMyNHoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K');\n    }\n\n    .current-default-icon {\n      background-image: url('data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDg3Ljg1OSA4Ny44NTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDg3Ljg1OSA4Ny44NTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iTWFya2VyIj4KCQk8Zz4KCQkJPHBhdGggZD0iTTgwLjkzOCw0MC40ODNDNzkuMjk0LDIyLjcxMyw2NS4wOTMsOC41MjgsNDcuMzEyLDYuOTE3VjBoLTYuNzU3djYuOTE4QzIyLjc3Myw4LjUyOCw4LjU3MiwyMi43MTQsNi45Myw0MC40ODNIMHY2Ljc1NyAgICAgaDYuOTE5YzEuNTgyLDE3LjgzOCwxNS44MSwzMi4wODcsMzMuNjM2LDMzLjcwMXY2LjkxOGg2Ljc1N3YtNi45MThjMTcuODI2LTEuNjEzLDMyLjA1NC0xNS44NjIsMzMuNjM2LTMzLjcwMWg2LjkxMXYtNi43NTcgICAgIEg4MC45Mzh6IE00Ny4zMTIsNzQuMTQ2di02LjU1OGgtNi43NTd2Ni41NThDMjYuNDU3LDcyLjU4LDE1LjI0Miw2MS4zNDUsMTMuNzA4LDQ3LjI0aDYuNTY2di02Ljc1N2gtNi41NDkgICAgIGMxLjU5MS0xNC4wNDEsMTIuNzc3LTI1LjIxLDI2LjgyOS0yNi43NzF2Ni41NjRoNi43NTZ2LTYuNTY0YzE0LjA1MywxLjU2LDI1LjIzOSwxMi43MjksMjYuODMsMjYuNzcxaC02LjU1NnY2Ljc1N2g2LjU3MyAgICAgQzcyLjYyNSw2MS4zNDUsNjEuNDA5LDcyLjU4LDQ3LjMxMiw3NC4xNDZ6IE00My45MzQsMzMuNzI3Yy01LjU5NSwwLTEwLjEzNSw0LjUzMy0xMC4xMzUsMTAuMTMxICAgICBjMCw1LjU5OSw0LjU0LDEwLjEzOSwxMC4xMzUsMTAuMTM5czEwLjEzNC00LjU0LDEwLjEzNC0xMC4xMzlDNTQuMDY4LDM4LjI2LDQ5LjUyNywzMy43MjcsNDMuOTM0LDMzLjcyN3oiIGZpbGw9IiMwMDAwMDAiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==');\n    }\n\n    .custom-autocomplete__container .searchpage {\n      margin-top: 0;\n      padding: 0;\n      height: 55px;\n      border: none;\n    }\n\n    .search-box-container {\n      overflow: hidden;\n      width: 75%;\n      padding-right: 15px;\n    }\n\n    .submit-button {\n      float: right;\n      width: 25%;\n      height: 50px;\n    }\n  "],host:{"(document:click)":"closeAutocomplete($event)"},encapsulation:r.ViewEncapsulation.None}),c(0,r.Inject(r.PLATFORM_ID)),i("design:paramtypes",[Object,r.ElementRef,a.GlobalRef,l.AutoCompleteSearchService])],e)}();t.AutoCompleteComponent=u}])});
//# sourceMappingURL=ngx-geoautocomplete.umd.js.map