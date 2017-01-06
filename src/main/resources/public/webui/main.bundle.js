webpackJsonp([0,4],{

/***/ 1145:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(532);


/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var LoginService = (function () {
    function LoginService(http, api) {
        this.http = http;
        this.api = api;
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.api + 'session', JSON.stringify({ username: username, password: password }))
            .map(function (res) {
            var token = res.json() && res.json().token;
            console.log("Success === >" + res.status);
            if (token) {
                // set token property
                _this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                return res;
            }
            else {
                // return false to indicate failed login
                return res;
            }
        })
            .catch(function (err) {
            console.log("Error === >" + err.status);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(err);
        });
    };
    LoginService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    LoginService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('api')), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object, Object])
    ], LoginService);
    return LoginService;
    var _a;
}());
//# sourceMappingURL=/Users/mrin/Perforce/mmajumdar_mac/users/EmailSecurity/mmajumdar/casb/cui/src/login.service.js.map

/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
        // Incidents Chart
        this.incidentChartLabels = ['Critical', 'Alert', 'Warning', 'Info'];
        this.incidentChartData = [50, 250, 100, 300];
        this.incidentChartType = 'doughnut';
    }
    // events
    DashboardComponent.prototype.incidentChartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.incidentChartHovered = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-dashboard-pg',
            template: __webpack_require__(883),
            styles: [__webpack_require__(869)],
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=/Users/mrin/Perforce/mmajumdar_mac/users/EmailSecurity/mmajumdar/casb/cui/src/dashboard.component.js.map

/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return IncidentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IncidentsComponent = (function () {
    function IncidentsComponent() {
    }
    IncidentsComponent.prototype.ngOnInit = function () { };
    IncidentsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-incidents-pg',
            template: __webpack_require__(884),
            styles: [__webpack_require__(870)],
        }), 
        __metadata('design:paramtypes', [])
    ], IncidentsComponent);
    return IncidentsComponent;
}());
//# sourceMappingURL=/Users/mrin/Perforce/mmajumdar_mac/users/EmailSecurity/mmajumdar/casb/cui/src/incidents.component.js.map

/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_login_service__ = __webpack_require__(451);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.model = {};
        this.errMsg = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.loginService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login(this.model.username, this.model.password)
            .subscribe(function (successResponse) {
            _this.router.navigate(['/']);
        }, function (errResponse) {
            switch (errResponse.status) {
                case 401:
                    _this.errMsg = 'Username or password is incorrect';
                    break;
                case 404:
                    _this.errMsg = 'Service not found';
                case 408:
                    _this.errMsg = 'Request Timedout';
                default:
                    _this.errMsg = 'Server Error';
            }
        });
    };
    LoginComponent.prototype.onSignUp = function () {
        this.router.navigate(['signup']);
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-login-pg',
            template: __webpack_require__(885),
            styles: [__webpack_require__(871)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__api_login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__api_login_service__["a" /* LoginService */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/mrin/Perforce/mmajumdar_mac/users/EmailSecurity/mmajumdar/casb/cui/src/login.component.js.map

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PolicyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PolicyComponent = (function () {
    function PolicyComponent() {
    }
    PolicyComponent.prototype.ngOnInit = function () { };
    PolicyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-policy-pg',
            template: __webpack_require__(886),
            styles: [__webpack_require__(872)],
        }), 
        __metadata('design:paramtypes', [])
    ], PolicyComponent);
    return PolicyComponent;
}());
//# sourceMappingURL=/Users/mrin/Perforce/mmajumdar_mac/users/EmailSecurity/mmajumdar/casb/cui/src/policy.component.js.map

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () { };
    SettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-settings-pg',
            template: __webpack_require__(887),
            styles: [__webpack_require__(873)],
        }), 
        __metadata('design:paramtypes', [])
    ], SettingsComponent);
    return SettingsComponent;
}());
//# sourceMappingURL=/Users/mrin/Perforce/mmajumdar_mac/users/EmailSecurity/mmajumdar/casb/cui/src/settings.component.js.map

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(129);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(router, formBuilder) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.acceptInvite = false;
        this.emailVerified = false;
        this.invitedByCompanyName = "[Company Name]";
        this.invitedByCompanyPhone = "000-000-0000";
        this.wizSteps = [
            { itemId: '1', itemDescr: 'Company Info', status: 'active' },
            { itemId: '2', itemDescr: 'Your Account', status: 'pending' },
            { itemId: '3', itemDescr: 'Verify', status: 'pending' },
        ];
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.frmSignUp = this.formBuilder.group({
            frmCompany: this.formBuilder.group({
                company: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                phone: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                address1: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                address2: [''],
                country: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                postal: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            }),
            frmPersonalInfo: this.formBuilder.group({
                firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                title: [''],
                email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                secretQuestion: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                secretAnswer: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                enableBetaTesting: [false],
                enableRenewal: [true]
            })
        });
    };
    SignupComponent.prototype.onBack = function () {
        this.gotoLogin();
    };
    SignupComponent.prototype.onDeclineAccess = function () {
        this.gotoLogin();
    };
    SignupComponent.prototype.onAcceptAccess = function () {
        this.acceptInvite = true;
    };
    SignupComponent.prototype.gotoPage1 = function () {
        this.wizSteps[0].status = "active";
        this.wizSteps[1].status = "pending";
        this.wizSteps[2].status = "pending";
    };
    SignupComponent.prototype.gotoPage2 = function () {
        this.wizSteps[0].status = "done";
        this.wizSteps[1].status = "active";
        this.wizSteps[2].status = "pending";
    };
    SignupComponent.prototype.gotoPage3 = function () {
        console.log(this.frmSignUp);
        this.wizSteps[0].status = "done";
        this.wizSteps[1].status = "done";
        this.wizSteps[2].status = "active";
    };
    SignupComponent.prototype.gotoLogin = function () {
        this.router.navigate(['login']);
    };
    SignupComponent.prototype.finish = function () {
        // Make rest call to do email varification
        this.emailVerified = true;
        this.wizSteps[2].status = "done";
    };
    SignupComponent.prototype.submitSignUpForm = function () {
        console.log("Submit the form");
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], SignupComponent.prototype, "wizSteps", void 0);
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-signup-pg',
            styles: [__webpack_require__(874)],
            template: __webpack_require__(888)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === 'function' && _b) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/mrin/Perforce/mmajumdar_mac/users/EmailSecurity/mmajumdar/casb/cui/src/signup.component.js.map

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(129);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router, activeRoute) {
        var _this = this;
        this.router = router;
        this.activeRoute = activeRoute;
        this.selectedNavItem = "customers";
        this.openRightDraw = false;
        this.toolbarNavItems = [
            { itemId: 'dashboard', itemDescr: 'Dashboard' },
            { itemId: 'policy', itemDescr: 'Policy' },
            { itemId: 'incidents', itemDescr: 'Incidents' },
            { itemId: 'settings', itemDescr: 'Settings' }
        ];
        // This block is to retrieve the data from the routes
        router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]; })
            .map(function (_) { return _this.router.routerState.root; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            ;
            return route;
        })
            .flatMap(function (route) { return route.data; })
            .subscribe(function (data) {
            console.log(data[0].comp);
            _this.selectedNavItem = data[0].comp;
        });
    }
    HomeComponent.prototype.navbarSelectionChange = function (val) {
        // console.log(val);
    };
    HomeComponent.prototype.onAlertClick = function ($event) {
        this.openRightDraw = !this.openRightDraw;
    };
    HomeComponent.prototype.onLogout = function (event) {
        localStorage.clear();
        window.location.href = '/index.html';
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home-comp',
            template: __webpack_require__(889),
            styles: [__webpack_require__(877)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/mrin/Perforce/mmajumdar_mac/users/EmailSecurity/mmajumdar/casb/cui/src/home.component.js.map

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(129);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            // Login token present (but try to validate the token with the server )
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['login']);
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());
//# sourceMappingURL=/Users/mrin/Perforce/mmajumdar_mac/users/EmailSecurity/mmajumdar/casb/cui/src/auth.guard.js.map

/***/ },

/***/ 531:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 531;


/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(697);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/mrin/Perforce/mmajumdar_mac/users/EmailSecurity/mmajumdar/casb/cui/src/main.js.map

/***/ },

/***/ 695:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_pages_login_login_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_pages_dashboard_dashboard_component__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_pages_policy_policy_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_pages_incidents_incidents_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_pages_settings_settings_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_pages_signup_signup_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routing_guards_auth_guard__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_pages_404_page_not_found_component__ = __webpack_require__(701);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var routes = [
    //Important: The sequence of path is important as the router go over then in sequential manner
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_pages_login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_8__components_pages_signup_signup_component__["a" /* SignupComponent */] },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__routing_guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            {
                path: '',
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_pages_dashboard_dashboard_component__["a" /* DashboardComponent */] },
                    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__components_pages_dashboard_dashboard_component__["a" /* DashboardComponent */], data: [{ comp: 'dashboard' }] },
                    { path: 'policy', component: __WEBPACK_IMPORTED_MODULE_5__components_pages_policy_policy_component__["a" /* PolicyComponent */], data: [{ comp: 'policy' }] },
                    { path: 'incidents', component: __WEBPACK_IMPORTED_MODULE_6__components_pages_incidents_incidents_component__["a" /* IncidentsComponent */], data: [{ comp: 'incidents' }] },
                    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_7__components_pages_settings_settings_component__["a" /* SettingsComponent */], data: [{ comp: 'settings' }] }
                ]
            }
        ]
    },
    { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_10__components_pages_404_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_10__components_pages_404_page_not_found_component__["a" /* PageNotFoundComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/Users/mrin/Perforce/mmajumdar_mac/users/EmailSecurity/mmajumdar/casb/cui/src/app-routing.module.js.map

/***/ },

/***/ 696:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.isLoggedOut = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('currentUser')) {
            // This indicates the username and token exist in the local
            // try to validate a token to ensure it is not expired on the server
            this.isLoggedOut = false;
            return true;
        }
        else {
            this.isLoggedOut = true;
        }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            styles: [__webpack_require__(878)],
            template: "\n   <router-outlet></router-outlet>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/mrin/Perforce/mmajumdar_mac/users/EmailSecurity/mmajumdar/casb/cui/src/app.component.js.map

/***/ },

/***/ 697:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_clarity_angular__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_clarity_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_clarity_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vendor_modules_chartjs_chart_module__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_pill_pill_component__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_hnav_hnav_component__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_sidebar_sidebar_component__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_logo_logo_component__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_app_footer_app_footer_component__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_pages_login_login_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_pages_alerts_alerts_component__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_pages_dashboard_dashboard_component__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_pages_policy_policy_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_pages_incidents_incidents_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_pages_settings_settings_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_pages_signup_signup_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__api_login_service__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__routing_guards_auth_guard__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_hammerjs__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_hammerjs__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["MaterialModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_clarity_angular__["ClarityModule"].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__vendor_modules_chartjs_chart_module__["a" /* ChartsModule */] // local module
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_pill_pill_component__["a" /* PillComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_hnav_hnav_component__["a" /* HnavComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_pages_alerts_alerts_component__["a" /* AlertsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_logo_logo_component__["a" /* LogoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_app_footer_app_footer_component__["a" /* AppFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_pages_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_pages_policy_policy_component__["a" /* PolicyComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_pages_incidents_incidents_component__["a" /* IncidentsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_pages_settings_settings_component__["a" /* SettingsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__routing_guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_22__api_login_service__["a" /* LoginService */],
                { provide: 'api', useValue: 'http://' + window.location.hostname + ':9119/' }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/mrin/Perforce/mmajumdar_mac/users/EmailSecurity/mmajumdar/casb/cui/src/app.module.js.map

/***/ },

/***/ 698:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppFooterComponent = (function () {
    function AppFooterComponent() {
    }
    AppFooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-app-footer',
            template: __webpack_require__(879),
            styles: [__webpack_require__(865)],
        }), 
        __metadata('design:paramtypes', [])
    ], AppFooterComponent);
    return AppFooterComponent;
}());
//# sourceMappingURL=/Users/mrin/Perforce/mmajumdar_mac/users/EmailSecurity/mmajumdar/casb/cui/src/app-footer.component.js.map

/***/ },

/***/ 699:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HnavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HnavComponent = (function () {
    function HnavComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.selectionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    HnavComponent.prototype.ngOnChanges = function (changes) {
        var log = [];
        for (var propName in changes) {
            if (propName === "selected") {
                var changedProp = changes[propName];
                this.setSelection(changedProp.currentValue);
                break;
            }
        }
    };
    /*
      @HostListener('click', ['$event'])
      onClick(event) {
        if(event.target.matches("div.s-nav-label")){
          this.setInkBarPosition(event.target);
        }
      }
    */
    HnavComponent.prototype.setSelection = function (navDatasetItemId) {
        if (navDatasetItemId) {
            var elSelector = ".s-nav-label[data-itemid=" + navDatasetItemId + "]";
            var navItemEl = this.el.nativeElement.querySelector(elSelector);
            if (navItemEl) {
                this.setInkBarPosition(navItemEl);
            }
        }
    };
    HnavComponent.prototype.setInkBarPosition = function (navItemEl) {
        this.renderer.setElementStyle(this.inkBar.nativeElement, 'left', navItemEl.offsetLeft + "px");
        this.renderer.setElementStyle(this.inkBar.nativeElement, 'width', navItemEl.offsetWidth + "px");
        this.selected = navItemEl.dataset.itemid;
        this.selectionChange.emit(this.selected);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], HnavComponent.prototype, "navItems", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], HnavComponent.prototype, "selected", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], HnavComponent.prototype, "selectionChange", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inkbar'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object)
    ], HnavComponent.prototype, "inkBar", void 0);
    HnavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-hnav',
            styles: [__webpack_require__(866)],
            template: "\n  <div class=\"s-hnav\">\n    <div class=\"s-hnav-wrap\">\n      <span class=\"s-nav-item\" *ngFor=\"let navItem of navItems\">\n        <!-- div class=\"s-nav-label s-f-small\" routerLink=\"{{navItem.itemId}}\" attr.data-itemid=\"{{navItem.itemId}}\" >{{navItem.itemDescr}}</div -->\n        <h4 class=\"s-nav-label\" routerLink=\"{{navItem.itemId}}\" attr.data-itemid=\"{{navItem.itemId}}\" >{{navItem.itemDescr}}</h4>\n      </span>\n    </div>\n    <div #inkbar class=\"s-hnav-inkbar\"></div>\n  </div>\n"
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _c) || Object])
    ], HnavComponent);
    return HnavComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/mrin/Perforce/mmajumdar_mac/users/EmailSecurity/mmajumdar/casb/cui/src/hnav.component.js.map

/***/ },

/***/ 700:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LogoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoComponent = (function () {
    function LogoComponent() {
        this.fontColor = "#63666A";
        this.iconColor = "#E3642B";
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], LogoComponent.prototype, "fontColor", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], LogoComponent.prototype, "iconColor", void 0);
    LogoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-logo',
            template: __webpack_require__(880)
        }), 
        __metadata('design:paramtypes', [])
    ], LogoComponent);
    return LogoComponent;
}());
//# sourceMappingURL=/Users/mrin/Perforce/mmajumdar_mac/users/EmailSecurity/mmajumdar/casb/cui/src/logo.component.js.map

/***/ },

/***/ 701:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-not-found',
            template: __webpack_require__(881),
            styles: [__webpack_require__(867)],
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
//# sourceMappingURL=/Users/mrin/Perforce/mmajumdar_mac/users/EmailSecurity/mmajumdar/casb/cui/src/page-not-found.component.js.map

/***/ },

/***/ 702:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AlertsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertsComponent = (function () {
    function AlertsComponent() {
        this.width = 300;
        this.showHeader = true;
        this.showFooter = false;
        this.headerText = "Alerts";
        this.footerText = "";
        this.headerLeftIconWidth = 0;
        this.headerRightIconWidth = 25;
        this.footerLeftIconWidth = 0;
        this.footerRightIconWidth = 0;
        this.page1Left = "0";
        this.page2Left = (this.width * -1) + "px";
        this.page2Width = this.width + "px";
    }
    AlertsComponent.prototype.ngOnInit = function () {
    };
    AlertsComponent.prototype.leftIconClick = function () {
        this.headerText = "Alerts";
        this.headerLeftIconWidth = 0;
        this.headerRightIconWidth = 25;
        this.page2Left = (this.width) + "px";
    };
    AlertsComponent.prototype.rightIconClick = function () {
        this.headerLeftIconWidth = 25;
        this.headerRightIconWidth = 0;
        this.page2Left = "0";
        this.headerText = "Notification Preferences";
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], AlertsComponent.prototype, "width", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], AlertsComponent.prototype, "showHeader", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], AlertsComponent.prototype, "showFooter", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], AlertsComponent.prototype, "headerText", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], AlertsComponent.prototype, "footerText", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], AlertsComponent.prototype, "headerLeftIconWidth", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], AlertsComponent.prototype, "headerRightIconWidth", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], AlertsComponent.prototype, "footerLeftIconWidth", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], AlertsComponent.prototype, "footerRightIconWidth", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], AlertsComponent.prototype, "page1Left", void 0);
    AlertsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-alerts',
            template: __webpack_require__(882),
            styles: [__webpack_require__(868)],
        }), 
        __metadata('design:paramtypes', [])
    ], AlertsComponent);
    return AlertsComponent;
}());
//# sourceMappingURL=/Users/mrin/Perforce/mmajumdar_mac/users/EmailSecurity/mmajumdar/casb/cui/src/alerts.component.js.map

/***/ },

/***/ 703:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PillComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PillComponent = (function () {
    function PillComponent() {
        this.changeLog = [];
    }
    PillComponent.prototype.ngOnChanges = function (changes) {
        var me = this;
        for (var propName in changes) {
            var chng = changes[propName];
            var cur = JSON.stringify(chng.currentValue);
            var prev = JSON.stringify(chng.previousValue);
            this.changeLog.push(propName + ": currentValue = " + cur + ", previousValue = " + prev);
        }
        if (changes['size'].currentValue) {
            me.setSize(changes['size'].currentValue.trim(), changes['rounded'].currentValue.trim());
        }
    };
    PillComponent.prototype.setSize = function (size, rounded) {
        var me = this;
        //debugger;
        switch (size) {
            case "small":
                me.pillHeight = 18;
                me.wrapPadding = 1;
                me.fontSize = "10px";
                me.iconMargin = 0;
                break;
            case "medium":
                me.pillHeight = 28;
                me.wrapPadding = 2;
                me.fontSize = "12px";
                me.iconMargin = 0;
                break;
            case "large":
                me.pillHeight = 36;
                me.fontSize = "24px";
                me.iconMargin = 0;
                me.wrapPadding = 2;
                break;
            default:
                me.pillHeight = 24;
                me.fontSize = "12px";
                me.iconMargin = 0;
                me.wrapPadding = 2;
        }
        me.pillInnerHeight = me.pillHeight - (me.wrapPadding * 2);
        if (rounded === "true") {
            me.borderRadius = me.pillHeight / 2;
            me.iconRadius = me.pillInnerHeight / 2;
        }
        else if (typeof parseInt(rounded, 10) === "number") {
            me.borderRadius = parseInt(rounded, 10);
            me.iconRadius = parseInt(rounded, 10);
        }
        else {
            me.borderRadius = 0;
            me.iconRadius = 0;
        }
    };
    PillComponent.prototype.onPillClick = function (event) {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], PillComponent.prototype, "size", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], PillComponent.prototype, "text", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], PillComponent.prototype, "iconCls", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], PillComponent.prototype, "iconAlign", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], PillComponent.prototype, "color", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], PillComponent.prototype, "hideIcon", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], PillComponent.prototype, "hideText", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], PillComponent.prototype, "spread", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], PillComponent.prototype, "rounded", void 0);
    PillComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 's-pill',
            styles: [__webpack_require__(875)],
            template: "\n    <div class=\"s-pill-wrap\"\n        [ngStyle]=\"{\n        'border-radius':borderRadius+'px',\n        'padding': wrapPadding+'px',\n        'box-shadow':(spread?'0px 0px 0px 6px rgba(0,0,0,0.1)':'none'),\n        'font-size':fontSize,\n        'flex-direction':(iconAlign=='right'?'row-reverse':'row'),\n        'line-height':(pillInnerHeight-2)+'px'\n    }\">\n        <div class=\"s-pill-icon {{iconCls}}\"\n            (click)=\"onPillClick($event)\"\n            style=\"background-size:contain; text-align:center; vertical-align:middle; \"\n            [ngStyle]=\"{\n            'margin':iconMargin+'px',\n            'width':pillInnerHeight  +'px',\n            'height':pillInnerHeight +'px',\n            'border-radius': iconRadius+'px',\n            'line-height':pillInnerHeight+'px',\n            'background-color':color\n        }\"></div>\n\n        <div class=\"s-pill-text\"\n            style=\"padding:0 10px; text-align:center; vertical-align:middle; \"\n            [ngStyle]=\"{'color':color, 'display':hideText?'none':'inline-block', 'font-size':fontSize, 'line-height':pillSize+'px'\n        }\"> {{text}} </div>\n   </div>\n   "
        }), 
        __metadata('design:paramtypes', [])
    ], PillComponent);
    return PillComponent;
}());
//# sourceMappingURL=/Users/mrin/Perforce/mmajumdar_mac/users/EmailSecurity/mmajumdar/casb/cui/src/pill.component.js.map

/***/ },

/***/ 704:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CloseSidebar; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CloseSidebar = (function () {
    function CloseSidebar() {
        this.clicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CloseSidebar.prototype._onClick = function () {
        this.clicked.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], CloseSidebar.prototype, "clicked", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], CloseSidebar.prototype, "_onClick", null);
    CloseSidebar = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[closeSidebar]' }), 
        __metadata('design:paramtypes', [])
    ], CloseSidebar);
    return CloseSidebar;
    var _a;
}());
//# sourceMappingURL=/Users/mrin/Perforce/mmajumdar_mac/users/EmailSecurity/mmajumdar/casb/cui/src/close.directive.js.map

/***/ },

/***/ 705:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__close_directive__ = __webpack_require__(704);
/* unused harmony export POS */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



//import CloseSidebar from './close.directive';
var POS = {
    Left: 'left',
    Right: 'right',
    Top: 'top',
    Bottom: 'bottom'
};
var SidebarComponent = (function () {
    function SidebarComponent(_document) {
        this._document = _document;
        // `openChange` allows for 2-way data binding
        this.open = false;
        this.openChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.position = POS.Left;
        this.closeOnClickOutside = false;
        this.showOverlay = true;
        this.defaultStyles = false;
        this.onOpen = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._onClickOutsideAttached = true;
        this._focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), ' +
            'textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]';
        this._trapFocus = this._trapFocus.bind(this);
        this._onClickOutside = this._onClickOutside.bind(this);
    }
    SidebarComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this._closeDirectives) {
            this._closeDirectives.forEach(function (dir) {
                dir.clicked.subscribe(_this._manualClose);
            });
        }
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        this._destroyCloseOnClickOutside();
    };
    SidebarComponent.prototype.ngOnChanges = function (changes) {
        if (changes['open']) {
            if (this.open) {
                this._open();
            }
            else {
                this._close();
            }
            this._setvisibleSidebarState();
        }
        if (changes['closeOnClickOutside']) {
            this._initCloseOnClickOutside();
        }
        if (changes['position']) {
            this._setvisibleSidebarState();
        }
    };
    SidebarComponent.prototype._setvisibleSidebarState = function () {
        this._visibleSidebarState = this.open ? 'expanded' : "collapsed--" + this.position;
    };
    SidebarComponent.prototype._open = function () {
        this._setFocused(true);
        this._initCloseOnClickOutside();
        this.onOpen.emit(null);
    };
    SidebarComponent.prototype._close = function () {
        this._setFocused(false);
        this._destroyCloseOnClickOutside();
        this.onClose.emit(null);
    };
    SidebarComponent.prototype._manualClose = function () {
        this.open = false;
        this.openChange.emit(false);
        this._close();
    };
    // Focus on open/close
    // ==============================================================================================
    SidebarComponent.prototype._getFocusableElements = function () {
        this._focusableElements = Array.from(this._elSidebar.nativeElement.querySelectorAll(this._focusableElementsString));
    };
    SidebarComponent.prototype._setFocusToFirstItem = function () {
        if (this._focusableElements && this._focusableElements.length) {
            this._focusableElements[0].focus();
        }
    };
    SidebarComponent.prototype._trapFocus = function (e) {
        if (this.open && !this._elSidebar.nativeElement.contains(e.target)) {
            this._setFocusToFirstItem();
        }
    };
    // Handles the ability to focus sidebar elements when it's open/closed'
    SidebarComponent.prototype._setFocused = function (open) {
        this._getFocusableElements();
        if (open) {
            this._focusedBeforeOpen = this._document.activeElement;
            // Restore focusability, with previous tabIndex attributes
            for (var _i = 0, _a = this._focusableElements; _i < _a.length; _i++) {
                var el = _a[_i];
                var prevTabIndex = el.getAttribute('__tabindex__');
                if (prevTabIndex !== null) {
                    el.setAttribute('tabindex', prevTabIndex);
                    el.removeAttribute('__tabindex__');
                }
                else {
                    el.removeAttribute('tabindex');
                }
            }
            this._setFocusToFirstItem();
            this._document.body.addEventListener('focus', this._trapFocus, true);
        }
        else {
            // Manually make all focusable elements unfocusable, saving existing tabIndex attributes
            for (var _b = 0, _c = this._focusableElements; _b < _c.length; _b++) {
                var el = _c[_b];
                var existingTabIndex = el.getAttribute('tabindex');
                if (existingTabIndex !== null) {
                    el.setAttribute('__tabindex__', existingTabIndex);
                }
                el.setAttribute('tabindex', '-1');
            }
            if (this._focusedBeforeOpen) {
                this._focusedBeforeOpen.focus();
            }
            this._document.body.removeEventListener('focus', this._trapFocus, true);
        }
    };
    // On click outside
    // ==============================================================================================
    SidebarComponent.prototype._initCloseOnClickOutside = function () {
        var _this = this;
        if (this.open && this.closeOnClickOutside && !this._onClickOutsideAttached) {
            // In a timeout so that things render first
            console.log("Attaching CLick outside");
            setTimeout(function () {
                console.log("Attaching CLick outside - in Timeout");
                _this._document.body.addEventListener('click', _this._onClickOutside);
                _this._onClickOutsideAttached = true;
            }, 0);
        }
    };
    SidebarComponent.prototype._destroyCloseOnClickOutside = function () {
        if (this._onClickOutsideAttached) {
            this._document.body.removeEventListener('click', this._onClickOutside);
            this._onClickOutsideAttached = false;
        }
    };
    SidebarComponent.prototype._onClickOutside = function (e) {
        console.log("CLick outside");
        if (this._onClickOutsideAttached && this._elSidebar && !this._elSidebar.nativeElement.contains(e.target)) {
            this._manualClose();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], SidebarComponent.prototype, "open", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], SidebarComponent.prototype, "openChange", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], SidebarComponent.prototype, "position", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], SidebarComponent.prototype, "closeOnClickOutside", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], SidebarComponent.prototype, "showOverlay", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], SidebarComponent.prototype, "defaultStyles", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], SidebarComponent.prototype, "sidebarClass", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], SidebarComponent.prototype, "overlayClass", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], SidebarComponent.prototype, "ariaLabel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], SidebarComponent.prototype, "onOpen", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _c) || Object)
    ], SidebarComponent.prototype, "onClose", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidebar'), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _d) || Object)
    ], SidebarComponent.prototype, "_elSidebar", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_2__close_directive__["a" /* CloseSidebar */]), 
        __metadata('design:type', (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _e) || Object)
    ], SidebarComponent.prototype, "_closeDirectives", void 0);
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ng2-sidebar',
            styles: [__webpack_require__(876)],
            template: "\n    <aside #sidebar\n      [@visibleSidebarState]=\"_visibleSidebarState\"\n      role=\"complementary\"\n      [attr.aria-hidden]=\"!open\"\n      [attr.aria-label]=\"ariaLabel\"\n      class=\"s-sidebar s-sidebar--{{position}} s-shadow-1\"\n      [class.s-sidebar--style]=\"defaultStyles\"\n      [ngClass]=\"sidebarClass\">\n      <ng-content></ng-content>\n    </aside>\n    <div *ngIf=\"showOverlay\"\n      aria-hidden=\"true\"\n      class=\"s-sidebar__overlay\"\n      [class.s-sidebar__overlay--style]=\"open && defaultStyles\"\n      [ngClass]=\"overlayClass\"></div>\n  ",
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('visibleSidebarState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('expanded', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'none', pointerEvents: 'auto', willChange: 'initial' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('collapsed--left', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(-110%)' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('collapsed--right', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(110%)' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('collapsed--top', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateY(-110%)' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('collapsed--bottom', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateY(110%)' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => *', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.3s cubic-bezier(0, 0, 0.3, 1)'))
                ])
            ]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DOCUMENT"])), 
        __metadata('design:paramtypes', [Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/mrin/Perforce/mmajumdar_mac/users/EmailSecurity/mmajumdar/casb/cui/src/sidebar.component.js.map

/***/ },

/***/ 706:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export BaseChartDirective */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChartsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaseChartDirective = (function () {
    function BaseChartDirective(element) {
        this.labels = [];
        this.options = {};
        this.chartClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.chartHover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.initFlag = false;
        this.element = element;
    }
    BaseChartDirective.prototype.ngOnInit = function () {
        this.ctx = this.element.nativeElement.getContext('2d');
        this.cvs = this.element.nativeElement;
        this.initFlag = true;
        if (this.data || this.datasets) {
            this.refresh();
        }
    };
    BaseChartDirective.prototype.ngOnChanges = function (changes) {
        if (this.initFlag) {
            // Check if the changes are in the data or datasets
            if (changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets') || changes.hasOwnProperty('labels')) {
                this.chart.data.datasets = this.getDatasets();
                this.chart.data.labels = this.labels;
                this.chart.update();
            }
            else {
                this.refresh();
            }
        }
    };
    BaseChartDirective.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    };
    BaseChartDirective.prototype.getChartBuilder = function (ctx /*, data:Array<any>, options:any*/) {
        var _this = this;
        var datasets = this.getDatasets();
        var options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = function (active) {
                if (active && !active.length) {
                    return;
                }
                _this.chartHover.emit({ active: active });
            };
        }
        if (!options.onClick) {
            options.onClick = function (event, active) {
                _this.chartClick.emit({ event: event, active: active });
            };
        }
        var opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets
            },
            options: options
        };
        if (typeof Chart === 'undefined') {
            throw new Error('ng2-charts configuration issue: Embedding Chart.js lib is mandatory');
        }
        return new Chart(ctx, opts);
    };
    BaseChartDirective.prototype.getDatasets = function () {
        var _this = this;
        var datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || !this.datasets.length && (this.data && this.data.length)) {
            if (Array.isArray(this.data[0])) {
                datasets = this.data.map(function (data, index) {
                    return { data: data, label: _this.labels[index] || "Label " + index };
                });
            }
            else {
                datasets = [{ data: this.data, label: "Label 0" }];
            }
        }
        if (this.datasets && this.datasets.length ||
            (datasets && datasets.length)) {
            datasets = (this.datasets || datasets)
                .map(function (elm, index) {
                var newElm = Object.assign({}, elm);
                if (_this.colors && _this.colors.length) {
                    Object.assign(newElm, _this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error("ng-charts configuration error,\n      data or datasets field are required to render char " + this.chartType);
        }
        return datasets;
    };
    BaseChartDirective.prototype.refresh = function () {
        // if (this.options && this.options.responsive) {
        //   setTimeout(() => this.refresh(), 50);
        // }
        // todo: remove this line, it is producing flickering
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx /*, data, this.options*/);
    };
    BaseChartDirective.defaultColors = [
        [255, 99, 132],
        [54, 162, 235],
        [255, 206, 86],
        [231, 233, 237],
        [75, 192, 192],
        [151, 187, 205],
        [220, 220, 220],
        [247, 70, 74],
        [70, 191, 189],
        [253, 180, 92],
        [148, 159, 177],
        [77, 83, 96]
    ];
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], BaseChartDirective.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], BaseChartDirective.prototype, "datasets", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], BaseChartDirective.prototype, "labels", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], BaseChartDirective.prototype, "options", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], BaseChartDirective.prototype, "chartType", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], BaseChartDirective.prototype, "colors", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], BaseChartDirective.prototype, "legend", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], BaseChartDirective.prototype, "chartClick", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], BaseChartDirective.prototype, "chartHover", void 0);
    BaseChartDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: 'canvas[baseChart]', exportAs: 'base-chart' }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _c) || Object])
    ], BaseChartDirective);
    return BaseChartDirective;
    var _a, _b, _c;
}());
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8)
    };
}
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1)
    };
}
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function () { return '#fff'; }),
        pointBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointBorderColor: colors.map(function () { return '#fff'; }),
        pointHoverBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointHoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function (color) { return rgba(color, 1); }),
        hoverBackgroundColor: colors.map(function (color) { return rgba(color, 0.8); }),
        hoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 * @param index
 * @returns {number[]|Color}
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 * @param count
 * @returns {Colors}
 */
function generateColors(count) {
    var colorsArr = new Array(count);
    for (var i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 * @param chartType
 * @param index
 * @param count
 * @returns {Color}
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}
var ChartsModule = (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                BaseChartDirective
            ],
            exports: [
                BaseChartDirective
            ],
            imports: []
        }), 
        __metadata('design:paramtypes', [])
    ], ChartsModule);
    return ChartsModule;
}());
//# sourceMappingURL=/Users/mrin/Perforce/mmajumdar_mac/users/EmailSecurity/mmajumdar/casb/cui/src/chart.module.js.map

/***/ },

/***/ 707:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/mrin/Perforce/mmajumdar_mac/users/EmailSecurity/mmajumdar/casb/cui/src/environment.js.map

/***/ },

/***/ 708:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/mrin/Perforce/mmajumdar_mac/users/EmailSecurity/mmajumdar/casb/cui/src/polyfills.js.map

/***/ },

/***/ 865:
/***/ function(module, exports) {

module.exports = ".s-app-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  height: 30px;\n  width: 100%;\n  background-color: whitesmoke;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0 10px; }\n  .s-app-footer span {\n    margin: 0 25px 0 0; }\n"

/***/ },

/***/ 866:
/***/ function(module, exports) {

module.exports = ".s-hnav {\n  height: 100%;\n  position: relative; }\n  .s-hnav .s-hnav-wrap {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%; }\n    .s-hnav .s-hnav-wrap .s-nav-item {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding: 0 5px; }\n      .s-hnav .s-hnav-wrap .s-nav-item .s-nav-label {\n        -ms-flex-item-align: end;\n            align-self: flex-end;\n        padding: 10px 5px;\n        cursor: pointer; }\n  .s-hnav .s-hnav-inkbar {\n    position: absolute;\n    border: 1px solid #E3642B;\n    background-color: #E3642B;\n    height: 1px;\n    bottom: 0;\n    -webkit-transition: width 0.3s, left 0.3s;\n    transition: width 0.3s, left 0.3s; }\n\n.s-new-flex-row {\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap; }\n"

/***/ },

/***/ 867:
/***/ function(module, exports) {

module.exports = ".s-page-not-found {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 60px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 15px;\n  background-color: #E3642B;\n  color: #ffffff;\n  font-size: 24px; }\n"

/***/ },

/***/ 868:
/***/ function(module, exports) {

module.exports = ".s-alerts {\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  overflow: hidden; }\n  .s-alerts .s-alerts-hbar, .s-alerts .s-alerts-fbar {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    border: 1px solid black;\n    background: #333;\n    color: #fff;\n    height: 64px; }\n  .s-alerts .s-alerts-left-icon, .s-alerts .s-alerts-right-icon {\n    margin: 5px 10px;\n    overflow: hidden;\n    cursor: pointer;\n    -webkit-transition: width 0.3s;\n    transition: width 0.3s; }\n  .s-alerts .s-alerts-head-text {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    line-height: 40px;\n    overflow: hidden; }\n  .s-alerts .s-alerts-body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    position: relative;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    -webkit-box-pack: stretch;\n        -ms-flex-pack: stretch;\n            justify-content: stretch; }\n  .s-alerts .s-alerts-page1, .s-alerts .s-alerts-page2 {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 16px;\n    background-color: whitesmoke;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    overflow: hidden;\n    -webkit-transition: left 0.3s;\n    transition: left 0.3s; }\n  .s-alerts .s-section-head {\n    margin: 16px 0 4px 0;\n    color: #f25312;\n    font-size: 16px; }\n  .s-alerts .md-slide-toggle {\n    margin: 8px 0; }\n"

/***/ },

/***/ 869:
/***/ function(module, exports) {

module.exports = ".s-dashboard-pg {\n  margin: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: whitesmoke; }\n  .s-dashboard-pg .s-head {\n    height: 100px;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 24px;\n    padding-left: 20px;\n    color: whitesmoke; }\n  .s-dashboard-pg .s-body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    padding: 16px;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch; }\n    .s-dashboard-pg .s-body .s-content {\n      padding: 0 0 0 16px; }\n"

/***/ },

/***/ 870:
/***/ function(module, exports) {

module.exports = ".s-incidents-pg {\n  margin: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: whitesmoke; }\n  .s-incidents-pg .s-head {\n    height: 100px;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 24px;\n    padding-left: 20px;\n    color: whitesmoke; }\n  .s-incidents-pg .s-body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    padding: 16px;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch; }\n    .s-incidents-pg .s-body .s-content {\n      padding: 0 0 0 16px; }\n"

/***/ },

/***/ 871:
/***/ function(module, exports) {

module.exports = ".s-login-pg {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  border-width: 3px 0 0 0;\n  border-style: solid;\n  border-color: #E3642B;\n  background-color: #ffffff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .s-login-pg .s-login-pg-form {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 300px; }\n    .s-login-pg .s-login-pg-form .s-login-pg-logo {\n      width: 300px;\n      padding-bottom: 50px; }\n    .s-login-pg .s-login-pg-form .s-login-pg-form-inputs {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      width: 100%;\n      font-size: 14px;\n      color: #63666A;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n  .s-login-pg .s-err-msg {\n    color: #CE1126; }\n"

/***/ },

/***/ 872:
/***/ function(module, exports) {

module.exports = ".s-policy-pg {\n  margin: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: whitesmoke; }\n  .s-policy-pg .s-head {\n    height: 100px;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 24px;\n    padding-left: 20px;\n    color: whitesmoke; }\n  .s-policy-pg .s-body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    padding: 16px;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch; }\n    .s-policy-pg .s-body .s-content {\n      padding: 0 0 0 16px; }\n"

/***/ },

/***/ 873:
/***/ function(module, exports) {

module.exports = ".s-settings-pg {\n  margin: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: whitesmoke; }\n  .s-settings-pg .s-head {\n    height: 100px;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 24px;\n    padding-left: 20px;\n    color: whitesmoke; }\n  .s-settings-pg .s-body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    padding: 16px;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch; }\n    .s-settings-pg .s-body .s-content {\n      padding: 0 0 0 16px; }\n"

/***/ },

/***/ 874:
/***/ function(module, exports) {

module.exports = ".s-signup-pg {\n  width: 100%;\n  background-color: #ffffff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  overflow: auto; }\n  .s-signup-pg .s-signup-pg-top-bar {\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    border-width: 3px 0 0 0;\n    border-style: solid;\n    border-color: #E3642B;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%;\n    height: 30px;\n    color: #63666A;\n    margin: 0;\n    padding: 16px; }\n    .s-signup-pg .s-signup-pg-top-bar .s-signup-back-btn {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .s-signup-pg .s-signup-pg-top-bar .s-signup-back-btn:hover {\n      cursor: pointer;\n      color: #333; }\n  .s-signup-pg .s-signuo-pg-logo {\n    width: 300px;\n    margin-top: 100px;\n    padding-bottom: 50px; }\n  @media (min-width: 320px) {\n    .s-signup-pg .s-step-row {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      position: relative;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      margin-top: 30px;\n      width: 288px; }\n    .s-signup-pg .s-step.s-step-first {\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n    .s-signup-pg .s-step.s-step-last {\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n    .s-signup-pg .s-main-content-box {\n      width: 288px;\n      margin: 8px 0 32px 0; }\n    .s-signup-pg .s-slider-label {\n      max-width: 230px; } }\n  @media (min-width: 481px) {\n    .s-signup-pg .s-step-row {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      position: relative;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      margin-top: 30px;\n      width: 448px; }\n    .s-signup-pg .s-step.s-step-first {\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start; }\n    .s-signup-pg .s-step.s-step-last {\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n    .s-signup-pg .s-main-content-box {\n      width: 400px;\n      margin: 8px 0 40px 0; }\n    .s-signup-pg .s-slider-label {\n      max-width: 320px; } }\n  .s-signup-pg .s-step {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    z-index: 1;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .s-signup-pg .s-step .s-step-circle {\n      width: 32px;\n      height: 32px;\n      border-radius: 16px;\n      background-color: #005d84;\n      color: #ffffff;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      margin: 5px; }\n    .s-signup-pg .s-step.s-step-done .s-step-circle {\n      background-color: #005d84; }\n    .s-signup-pg .s-step.s-step-active .s-step-circle {\n      background-color: #005d84; }\n    .s-signup-pg .s-step.s-step-pending .s-step-circle {\n      background-color: #AAAAAA; }\n  .s-signup-pg .s-step-line {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    height: 0;\n    border: 1px solid #AAAAAA;\n    z-index: 0;\n    margin: 0 5px; }\n  .s-signup-pg .s-signup-inputs md-input {\n    width: 100%;\n    margin-top: 20px; }\n  .s-signup-pg .s-hbox-align-right {\n    margin-top: 60px; }\n  .s-signup-pg .s-form-sub-section {\n    color: #E3642B;\n    margin: 40px 0 0 0; }\n  .s-signup-pg .side-by-side {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n"

/***/ },

/***/ 875:
/***/ function(module, exports) {

module.exports = ".s-pill-wrap {\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 0 7px;\n  color: #ffffff;\n  background-color: whitesmoke; }\n\n.s-pill-icon {\n  cursor: pointer; }\n"

/***/ },

/***/ 876:
/***/ function(module, exports) {

module.exports = ".s-sidebar {\n  overflow: auto;\n  pointer-events: none;\n  position: fixed;\n  z-index: 99999999;\n  background: whitesmoke; }\n\n.s-sidebar--left {\n  bottom: 0;\n  left: 0;\n  top: 0; }\n\n.s-sidebar--right {\n  bottom: 0;\n  right: 0;\n  top: 0; }\n\n.s-sidebar--top {\n  left: 0;\n  right: 0;\n  top: 0; }\n\n.s-sidebar--bottom {\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.s-sidebar--style {\n  background: #fff;\n  box-shadow: 0 0 2.5em rgba(85, 85, 85, 0.5); }\n\n.s-sidebar__overlay {\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  pointer-events: none;\n  z-index: 99999998; }\n\n.s-sidebar__overlay--style {\n  background: #000;\n  opacity: 0.75; }\n"

/***/ },

/***/ 877:
/***/ function(module, exports) {

module.exports = ".s-home-pg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.s-home-pg-logo {\n  width: 170px;\n  padding: 15px 30px 0 10px; }\n\n#s-main-toolbar {\n  background-color: white; }\n"

/***/ },

/***/ 878:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 879:
/***/ function(module, exports) {

module.exports = "<div class=\"s-app-footer\">\n    <s-logo style=\"width:80px; padding-top:5px;\"></s-logo>\n    <span style=\"flex:1\"> </span>\n    <span> TOS </span>\n    <span> Privacy </span>\n    <span> Feedback </span>\n    <span> Demos </span>\n    <span> Documents </span>\n    <span> SonicAlerts </span>\n</div>\n"

/***/ },

/***/ 880:
/***/ function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 210 36\">\n  <title>SonicWall_Logo</title>\n  <desc>Logo for SonicWall</desc>\n    <title>background</title>\n    <rect x=\"-1\" y=\"-1\" width=\"212\" height=\"38\" fill=\"none\"/>\n    <title>Layer 1</title>\n    <g fill=\"none\">\n      <a xlink:href=\"/\">\n        <path d=\"m33.9 2.5c-1.8 0-3.4 0.5-5 1.4 -1.5 0.9-2.7 2.1-3.6 3.6 -0.9 1.5-1.3 3.2-1.3 5.1 0 2.8 1 5.1 2.9 7.1 1.9 1.9 4.2 2.8 7 2.8 1.8 0 3.4-0.4 5-1.3 1.5-0.9 2.7-2.1 3.6-3.6 0.9-1.5 1.3-3.2 1.3-5.1 0-1.8-0.4-3.5-1.3-5 -0.9-1.5-2.1-2.7-3.6-3.6 -1.6-0.9-3.3-1.4-5-1.4l0 0zm-0.2-2.3c3.6 0 6.6 1.2 8.9 3.6 2.4 2.4 3.6 5.3 3.6 8.7 0 3.4-1.2 6.3-3.6 8.7 -2.3 2.4-5.2 3.6-8.7 3.6 -3.4 0-6.4-1.2-8.7-3.6 -2.4-2.3-3.6-5.2-3.6-8.6 0-2.2 0.5-4.3 1.6-6.2 1.1-1.9 2.6-3.4 4.5-4.5 1.8-1.1 3.9-1.7 6-1.7l0 0z\" [style.fill]=\"fontColor\"/>\n        <polyline points=\"52.6 25 52.6 0.2 53.1 0.2 69.6 19.2 69.6 0.2 72.1 0.2 72.1 25 71.5 25 55.1 6.2 55.1 25 52.6 25 \" [style.fill]=\"fontColor\"/>\n        <polygon points=\"78.8 25 81.1 25 81.1 0.1 78.8 0.1 \" [style.fill]=\"fontColor\"/>\n        <path d=\"m157.2 15.2l3.3-8.5 3.3 8.5 -6.6 0 0 0zm5.7-15l-4.8 0 -6.7 17.9 13.5 0 2.6 6.8 4.9 0 -9.5-24.7 0 0z\" [style.fill]=\"fontColor\"/>\n        <polyline points=\"177.4 0.2 182.1 0.2 182.1 20.3 191.5 20.3 191.5 24.8 177.4 24.8 177.4 0.2 \" [style.fill]=\"fontColor\"/>\n        <polyline points=\"196.5 0.2 201.2 0.2 201.2 20.3 210.5 20.3 210.5 24.8 196.5 24.8 196.5 0.2 \" [style.fill]=\"fontColor\"/>\n        <path d=\"m144.7 24.2c-2.8-7.7 7.7-9.4 18.4-9.1 5.8 0.2 12.9 1 12.9 1 0 0-16.7 2.2-22.8 7 -5.9 4.8 5.5 12.2 5.5 12.2 0 0-11.5-4.2-14-11.1z\" [style.fill]=\"iconColor\"/>\n        <path d=\"m100.7 22.7c-3 0-5.5-1-7.4-2.9 -2-1.9-3-4.3-3-7.2 0-1.9 0.5-3.6 1.3-5.1 0.9-1.5 2.2-2.7 3.8-3.6 1.5-0.9 3.3-1.4 5.2-1.4 1.7 0 3.3 0.4 4.7 1.1 1.4 0.6 2.5 1.6 3.5 2.8l0-3.2c-0.7-0.5-1.5-1.3-2.3-1.7 -1.8-0.8-3.8-1.3-6-1.3 -3.6 0-6.6 1.2-9 3.5 -2.5 2.4-3.7 5.3-3.7 8.7 0 3.3 1 6.1 3 8.4 2.4 2.7 5.6 4.1 9.8 4.1 2.1 0 4.1-0.4 5.8-1.2 0.9-0.4 1.7-1.1 2.4-1.7l0-3c-2.2 2.4-4.9 3.7-8.1 3.7z\" [style.fill]=\"fontColor\"/>\n        <path d=\"m8.9 11.4c-5.6-1.2-6.7-2.6-6.7-4.9l0-0.1c0-2.4 2.4-4.2 5.5-4.2 2.7 0 4.8 0.8 6.9 2.6l0.2 0.2 0.1-0.1 0-2.7c-2.2-1.4-4.3-2-7.1-2 -4.4 0-7.8 2.7-7.8 6.4l0 0.1c0 3.7 2.4 5.7 8.1 6.8 5.5 1.1 6.5 2.5 6.5 4.8l0 0.1c0 2.6-2.4 4.4-5.7 4.4 -3.3 0-5.6-1-8.3-3.4l-0.2-0.2 0 0 0 2.9c2.6 1.9 5.2 2.8 8.4 2.8 4.7 0 8-2.8 8-6.7l0-0.1c0-3.6-2.3-5.6-7.9-6.7\" [style.fill]=\"fontColor\"/>\n        <polyline points=\"144.3 0.2 138.6 17.3 132.9 0.1 128.4 0.1 122.8 16.9 122.7 17.3 116.9 0.2 111.3 0.2 120.3 24.9 124.8 24.9 130.4 8.8 130.6 8.4 130.7 8.8 136.3 24.9 140.9 24.9 149.8 0.2 144.3 0.2 \" [style.fill]=\"fontColor\"/>\n      </a>\n    </g>\n</svg>\n\n"

/***/ },

/***/ 881:
/***/ function(module, exports) {

module.exports = "<div class=\"s-page-not-found\"> 404 Page Not Found </div>\n"

/***/ },

/***/ 882:
/***/ function(module, exports) {

module.exports = "<div class=\"s-alerts\"\n     [ngStyle]=\"{\n        'width':width+'px'\n     }\"\n>\n  <div *ngIf=\"showHeader\" class=\"s-alerts-hbar\">\n    <span class=\"s-alerts-left-icon fa fa-chevron-left s-f-medium\"\n      (click)=\"leftIconClick()\"\n      [ngStyle]=\"{\n          'width':headerLeftIconWidth+'px'\n      }\"\n    > </span>\n    <span class=\"s-alerts-head-text s-f-small\"> {{headerText}}  </span>\n    <span class=\"s-alerts-right-icon fa fa-gear s-f-medium\"\n     (click)=\"rightIconClick()\"\n     [ngStyle]=\"{\n        'width':headerRightIconWidth+'px'\n     }\"\n     > </span>\n  </div>\n\n  <div class=\"s-alerts-body\">\n\n    <div class=\"s-alerts-page1\">\n      <h1> There are no alerts </h1>\n    </div>\n    <!-- PAGE 2 -->\n    <div class=\"s-alerts-page2\" [ngStyle]=\"{'left':page2Left, 'width':page2Width}\" >\n      <div class=\"s-section-head\">\n        All SonicWALL Products\n      </div>\n      <div class=\"s-section-body\">\n        <table class=\"s-alert-opions\">\n          <tr> <th style=\"width:160px\">    </th> <th style=\"width:35px;\">email </th> <th style=\"width:35px;\">in-app </th> </tr>\n          <tr>\n            <td>New upgrades available </td>\n            <td>  <md-slide-toggle color=\"primary\" [checked]=\"true\"></md-slide-toggle> </td>\n            <td>  <md-slide-toggle color=\"primary\" [checked]=\"true\"></md-slide-toggle> </td>\n          </tr>\n          <tr> <td>New products & features </td>\n            <td>  <md-slide-toggle color=\"primary\" [checked]=\"true\"></md-slide-toggle> </td>\n            <td>  <md-slide-toggle color=\"primary\" [checked]=\"true\"></md-slide-toggle> </td>\n          </tr>\n        </table>\n      </div>\n\n\n      <div class=\"s-section-head\">\n        Maintainance\n      </div>\n      <div class=\"s-section-body\">\n        <table class=\"s-alert-opions\">\n          <tr> <th style=\"width:160px\">    </th> <th style=\"width:35px;\"> </th> <th style=\"width:35px;\"> </th> </tr>\n          <tr>\n            <td>Infrastructure Updates </td>\n            <td>  <md-slide-toggle color=\"primary\" [checked]=\"true\"></md-slide-toggle> </td>\n            <td>  <md-slide-toggle color=\"primary\" [checked]=\"true\"></md-slide-toggle> </td>\n          </tr>\n          <tr> <td>Vulnerabilities and Issues </td>\n            <td>  <md-slide-toggle color=\"primary\" [checked]=\"true\"></md-slide-toggle> </td>\n            <td>  <md-slide-toggle color=\"primary\"></md-slide-toggle> </td>\n          </tr>\n        </table>\n      </div>\n\n\n      <div class=\"s-section-head\">\n        Security blogs\n      </div>\n      <div class=\"s-section-body\">\n        <table class=\"s-alert-opions\">\n          <tr> <th style=\"width:160px\">    </th> <th style=\"width:35px;\"> </th> <th style=\"width:35px;\"> </th> </tr>\n          <tr>\n            <td>Security Center </td>\n            <td>  <md-slide-toggle color=\"primary\" [checked]=\"true\"></md-slide-toggle> </td>\n            <td>  <md-slide-toggle color=\"primary\"></md-slide-toggle> </td>\n          </tr>\n          <tr>\n            <td>Security Community</td>\n            <td>  <md-slide-toggle color=\"primary\" [checked]=\"true\"></md-slide-toggle> </td>\n            <td>  <md-slide-toggle color=\"primary\"></md-slide-toggle> </td>\n          </tr>\n          <tr>\n            <td>Threat Protection</td>\n            <td>  <md-slide-toggle color=\"primary\" [checked]=\"true\"></md-slide-toggle> </td>\n            <td>  <md-slide-toggle color=\"primary\"></md-slide-toggle> </td>\n          </tr>\n        </table>\n      </div>\n\n\n\n    </div>\n  </div>\n\n  <div *ngIf=\"showFooter\" class=\"s-alerts-fbar\">\n    <span class=\"s-alerts-left-icon\"> </span>\n    <span class=\"s-alerts-text s-f-small\">{{footerText}}  </span>\n    <span class=\"s-alerts-right-icon\"> </span>\n  </div>\n</div>\n"

/***/ },

/***/ 883:
/***/ function(module, exports) {

module.exports = "<div class=\"s-dashboard-pg\">\n<div class=\"s-head\" > <span>Products</span> </div>\n<div class=\"s-body\" >\n    <div class=\"s-left\"></div>\n    <div class=\"s-content\">\n\n      <div style=\"display: block\">\n        <canvas width=\"300\" height=\"300\" baseChart\n            [data]=\"incidentChartData\"\n            [labels]=\"incidentChartLabels\"\n            [chartType]=\"incidentChartType\"\n            (chartHover)=\"incidentChartHovered($event)\"\n            (chartClick)=\"incidentChartClicked($event)\">\n        </canvas>\n      </div>\n\n    </div>\n\n</div>\n\n\n\n</div>\n"

/***/ },

/***/ 884:
/***/ function(module, exports) {

module.exports = "<div class=\"s-incidents-pg\">\n<div class=\"s-head\" > <span>Incidents</span> </div>\n<div class=\"s-body\" >\n    <div class=\"s-left\">\n\n    </div>\n\n    <div class=\"s-content\">\n      <md-card>\n        policy List\n      </md-card>\n    </div>\n</div>\n\n\n\n</div>\n"

/***/ },

/***/ 885:
/***/ function(module, exports) {

module.exports = "<div class=\"s-login-pg\">\n    <form class=\"s-login-pg-form\" name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n        <s-logo class=\"s-login-pg-logo\"></s-logo>\n        <div class=\"s-login-pg-form-inputs\">\n          <label> Please login to access the page you requested </label>\n          <br/>\n          <md-input-container>\n            <input md-input placeholder=\"Username (demo)\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required/>\n            <md-hint *ngIf=\"f.submitted && !username.valid\" class=\"s-err-msg\" align=\"start\">Username is required</md-hint>\n          </md-input-container>\n          <br/>\n          <md-input-container>\n            <input md-input type=\"password\" placeholder=\"Password (demo)\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required/>\n            <md-hint *ngIf=\"f.submitted && !password.valid\" class=\"s-err-msg\" align=\"start\">Password is required</md-hint>\n          </md-input-container>\n          <br/>\n        </div>\n        <div class=\"s-hbox-align-right s-child-items-left-m-16\">\n          <!--\n            <button type=\"button\" md-button (click)=\"onSignUp()\">SIGN UP</button>\n            <button md-raised-button color=\"primary\">LOG IN</button>\n            -->\n            <button type=\"button\" class=\"btn btn-link\" (click)=\"onSignUp()\">SIGN UP</button>\n            <button type=\"submit\" class=\"btn btn-primary\">LOG IN</button>\n\n        </div>\n        <div *ngIf=\"errMsg\" class=\"alert alert-danger\">{{errMsg}}</div>\n    </form>\n    <s-app-footer></s-app-footer>\n</div>\n"

/***/ },

/***/ 886:
/***/ function(module, exports) {

module.exports = "<div class=\"s-policy-pg\">\n<div class=\"s-head\" > <span>policy</span> </div>\n<div class=\"s-body\" >\n    <div class=\"s-left\">\n\n    </div>\n\n    <div class=\"s-content\">\n      <md-card>\n        policy List\n      </md-card>\n    </div>\n</div>\n\n\n\n</div>\n"

/***/ },

/***/ 887:
/***/ function(module, exports) {

module.exports = "<div class=\"s-settings-pg\">\n<div class=\"s-head\" > <span>Settings</span> </div>\n<div class=\"s-body\" >\n    <div class=\"s-left\">\n\n      <md-card>\n        Settings Menu\n      </md-card>\n\n    </div>\n\n    <div class=\"s-content\">\n      <md-card>\n        Settings List\n      </md-card>\n    </div>\n</div>\n\n\n\n</div>\n"

/***/ },

/***/ 888:
/***/ function(module, exports) {

module.exports = "<div class=\"s-signup-pg\">\n  <div class=\"s-signup-pg-top-bar\">\n    <div class=\"s-signup-back-btn\" (click)=\"onBack()\"> <md-icon>arrow_back </md-icon> BACK TO LOG IN </div>\n  </div>\n  <div style=\"height:100px; width:100%;\"></div>\n  <s-logo style=\"width:300px\" class=\"s-signup-pg-logo\"></s-logo>\n  <div class=\"s-step-row\">\n    <ng-container *ngFor=\"let idx = index; let isFirst = first; let isLast = last; let step of wizSteps\">\n        <div class=\"s-step\"\n            [class.s-step-first]=\"isFirst\"\n            [class.s-step-last]=\"isLast\"\n            [class.s-step-done]=\"step.status=='done'\"\n            [class.s-step-active]=\"step.status=='active'\"\n            [class.s-step-pending]=\"step.status=='pending'\"\n        >\n          <div class=\"s-step-circle\">\n            <md-icon *ngIf=\"step.status =='done'\">done</md-icon>\n            <div *ngIf=\"step.status !='done'\">{{idx+1}}</div>\n          </div>\n          <div class=\"s-step-text\"> {{step.itemDescr}} </div>\n        </div>\n        <div *ngIf=\"isLast == false\" class=\"s-step-line\"> </div>\n    </ng-container>\n  </div>\n\n  <!--\n  <div class=\"s-step-row\">\n      <div class=\"s-step s-step-first s-step-done\">\n        <div class=\"s-step-circle\"> <md-icon>done</md-icon> </div>\n        <div class=\"s-step-text\"> Company Info </div>\n      </div>\n      <div class=\"s-step-line\"> </div>\n      <div class=\"s-step s-step-active\">\n        <div class=\"s-step-circle\"> 2 </div>\n        <div class=\"s-step-text\"> Your Account</div>\n      </div>\n      <div class=\"s-step-line\"> </div>\n      <div class=\"s-step s-step-last s-step-pending\">\n        <div class=\"s-step-circle\"> 3 </div>\n        <div class=\"s-step-text\"> Verify </div>\n      </div>\n  </div>\n  -->\n  <form class=\"s-main-content-box\" [formGroup]=\"frmSignUp\" (ngSubmit)=\"submitSignUpForm()\" novalidate>\n\n    <!-- PAGE1 -->\n    <div *ngIf=\"wizSteps[0].status=='active'\" class=\"s-signup-pg1\">\n        <h2> {{invitedByCompanyName}} </h2>\n        <div *ngIf=\"acceptInvite==false\">\n          <p>would like to grant you access to their account. If you have questions you may reach them at {{invitedByCompanyPhone}}. </p>\n          <p>Please fill the company contact information below to begin the process.</p>\n        </div>\n\n        <div *ngIf=\"acceptInvite==true\">\n          <p>has invited you to create an account. If you have questions you may reach them at {{invitedByCompanyPhone}}.</p>\n          <p>Please fill the company contact information below to begin the process.</p>\n        </div>\n\n        <div class=\"s-signup-inputs\">\n          <ng-container *ngIf=\"acceptInvite==false\">\n            <div class=\"s-hbox-align-right s-child-items-left-m-16\">\n              <button type=\"button\" md-button (click)=\"onDeclineAccess()\">DECLINE</button>\n              <button type=\"button\" md-raised-button color=\"primary\" (click)=\"onAcceptAccess()\">ACCEPT ACCESS</button>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"acceptInvite\">\n            <fieldset formGroupName=\"frmCompany\">\n              <md-input-container style=\"width:100%\">\n                <input md-input placeholder=\"Company Name\" formControlName=\"company\" required/>\n                <md-hint *ngIf=\"(frmSignUp.controls.frmCompany.controls.company.touched && frmSignUp.controls.frmCompany.controls.company.valid==false)\" class=\"s-err-msg\" align=\"start\">Company name is required</md-hint>\n              </md-input-container>\n\n              <md-input-container  style=\"width:100%\">\n                <input md-input placeholder=\"Phone number\" formControlName=\"phone\" required/>\n                <md-hint *ngIf=\"(frmSignUp.controls.frmCompany.controls.phone.touched && frmSignUp.controls.frmCompany.controls.phone.valid==false)\" class=\"s-err-msg\" align=\"start\">Phone number is required</md-hint>\n              </md-input-container>\n\n              <md-input-container  style=\"width:100%\">\n                <input md-input placeholder=\"Address\" formControlName=\"address1\" required/>\n                <md-hint *ngIf=\"(frmSignUp.controls.frmCompany.controls.address1.touched && frmSignUp.controls.frmCompany.controls.address1.valid==false)\" class=\"s-err-msg\" align=\"start\">Address number is required</md-hint>\n              </md-input-container>\n\n              <md-input-container style=\"width:100%\">\n                <input md-input placeholder=\"Address Line 2\" formControlName=\"address2\"/>\n                <md-hint *ngIf=\"(frmSignUp.controls.frmCompany.controls.address1.touched && frmSignUp.controls.frmCompany.controls.address1.valid==false)\" class=\"s-err-msg\" align=\"start\">Address number is required</md-hint>\n              </md-input-container>\n\n              <md-input-container style=\"width:100%\">\n                <input md-input placeholder=\"Country\" formControlName=\"country\"/>\n                <md-hint *ngIf=\"(frmSignUp.controls.frmCompany.controls.country.touched && frmSignUp.controls.frmCompany.controls.country.valid==false)\" class=\"s-err-msg\" align=\"start\">Country is required</md-hint>\n              </md-input-container>\n\n              <md-input-container style=\"width:100%\">\n                <input md-input placeholder=\"Postal code\" formControlName=\"postal\" required/>\n                <md-hint *ngIf=\"(frmSignUp.controls.frmCompany.controls.postal.touched && frmSignUp.controls.frmCompany.controls.postal.valid==false)\" class=\"s-err-msg\" align=\"start\">Postal code number is required</md-hint>\n              </md-input-container>\n\n              <div class=\"s-hbox-align-right\">\n                <!--button type=\"button\" md-raised-button color=\"primary\" (click)=\"gotoPage2()\" [disabled]=\"(frmSignUp.controls.frmCompany.valid==false)\">CONTINUE</button -->\n                <button type=\"button\" md-raised-button color=\"primary\" (click)=\"gotoPage2()\">CONTINUE</button>\n              </div>\n            </fieldset>\n          </ng-container>\n        </div>\n    </div>\n\n    <!--PAGE2 -->\n    <div *ngIf=\"wizSteps[1].status=='active'\" class=\"s-signup-pg2\">\n      <fieldset class=\"s-signup-inputs\" formGroupName=\"frmPersonalInfo\" >\n\n        <md-input-container style=\"width:100%\">\n          <input md-input placeholder=\"First Name\" formControlName=\"firstName\" required/>\n          <md-hint *ngIf=\"(frmSignUp.controls.frmPersonalInfo.controls.firstName.touched && frmSignUp.controls.frmPersonalInfo.controls.firstName.valid==false)\" class=\"s-err-msg\" align=\"start\">First name is required</md-hint>\n        </md-input-container>\n\n        <md-input-container style=\"width:100%\">\n          <input md-input placeholder=\"Last Name\" formControlName=\"lastName\" required/>\n          <md-hint *ngIf=\"(frmSignUp.controls.frmPersonalInfo.controls.lastName.touched && frmSignUp.controls.frmPersonalInfo.controls.lastName.valid==false)\" class=\"s-err-msg\" align=\"start\">Last name is required</md-hint>\n        </md-input-container>\n\n        <md-input-container style=\"width:100%\">\n          <input md-input placeholder=\"Title\" formControlName=\"title\"/>\n        </md-input-container>\n\n        <div class=\"s-form-sub-section\">Login Information</div>\n        <md-input-container style=\"width:100%\">\n          <input md-input placeholder=\"Email\" formControlName=\"email\" required/>\n          <md-hint  *ngIf=\"(frmSignUp.controls.frmPersonalInfo.controls.email.touched && frmSignUp.controls.frmPersonalInfo.controls.email.valid==false)\" class=\"s-err-msg\" align=\"start\">Email is required</md-hint>\n        </md-input-container>\n\n        <md-input-container style=\"width:100%\">\n          <input md-input placeholder=\"Password\" formControlName=\"password\" required/>\n          <md-hint align=\"start\">AT least 8 charecters, and no more than 30</md-hint>\n          <md-hint *ngIf=\"(frmSignUp.controls.frmPersonalInfo.controls.password.touched && frmSignUp.controls.frmPersonalInfo.controls.password.valid==false)\" class=\"s-err-msg\" align=\"start\">Password is required  and must be between 8 and 30 charecters in length</md-hint>\n        </md-input-container>\n\n        <div class=\"s-form-sub-section\">Secret question, for password recovery</div>\n        <md-input-container style=\"width:100%\">\n          <input md-input placeholder=\"Your question\" formControlName=\"secretQuestion\" required/>\n          <md-hint *ngIf=\"(frmSignUp.controls.frmPersonalInfo.controls.secretQuestion.touched && frmSignUp.controls.frmPersonalInfo.controls.secretQuestion.valid==false)\" class=\"s-err-msg\" align=\"start\">Secret question is required</md-hint>\n        </md-input-container>\n\n        <md-input-container style=\"width:100%\">\n          <input md-input placeholder=\"Your answer\" formControlName=\"secretAnswer\" required/>\n          <md-hint *ngIf=\"(frmSignUp.controls.frmPersonalInfo.controls.secretAnswer.touched && frmSignUp.controls.frmPersonalInfo.controls.secretAnswer.valid==false)\" class=\"s-err-msg\" align=\"start\">Secret answer is required</md-hint>\n        </md-input-container>\n\n        <div class=\"side-by-side\">\n          <label class=\"s-slider-label\">I'm interested in beta testing new products</label>\n          <md-slide-toggle color=\"primary\" formControlName=\"enableBetaTesting\"></md-slide-toggle>\n        </div>\n        <div class=\"side-by-side\">\n          <label class=\"s-slider-label\">Email me security renewal notice</label>\n          <md-slide-toggle color=\"primary\" formControlName=\"enableRenewal\" ></md-slide-toggle>\n        </div>\n\n        <p>By clicking continue, you acknowledge and agree that you have read and accepted the <span style=\"\">End User Product Agreementand</span> the conditions for use</p>\n\n        <div class=\"s-hbox-align-right s-child-items-left-m-16\">\n          <button type=\"button\" md-button (click)=\"gotoPage1()\">BACK</button>\n          <button type=\"button\" [disabled]=\"frmSignUp.controls.frmPersonalInfo.valid==false\"\n                  md-raised-button color=\"primary\" (click)=\"gotoPage3()\">CONTINUE</button>\n        </div>\n      </fieldset>\n    </div>\n  </form>\n\n  <!--PAGE3 -->\n  <div *ngIf=\"wizSteps[2].status=='active'\" class=\"s-signup-pg3\">\n    <div class=\"s-main-content-box s-signup-inputs\">\n      <!-- Before Email Verification -->\n      <ng-container *ngIf=\"emailVerified==false\">\n        <h2>Check your email </h2>\n        <p>An email has been sent to <span style=\"font-weight:bold\">{{frmSignUp.email}}</span>. Please check the verification link, or paste the verification code below.</p>\n        <p>If you did not receive a verification email, please contact support</p>\n\n        <md-input-container style=\"width:100%\">\n          <input md-input placeholder=\"Verification code\" name=\"verificationCode\" [(ngModel)]=\"frmSignUp.verificationCode\" #verificationCode=\"ngModel\" required/>\n          <!-- md-hint *ngIf=\"f.submitted && !verificationCode.valid\" class=\"s-err-msg\" align=\"start\">Verification code is required</md-hint -->\n        </md-input-container>\n\n        <div class=\"s-hbox-align-right s-child-items-left-m-16\">\n          <button type=\"button\" md-button (click)=\"gotoPage2()\">BACK</button>\n          <button type=\"button\" md-raised-button color=\"primary\" (click)=\"finish()\">DONE</button>\n        </div>\n      </ng-container>\n\n      <!-- After Email Verification -->\n      <ng-container *ngIf=\"emailVerified==true\">\n        <h2 class=\"s-hbox-align-center\">Thank you </h2>\n        <p class=\"s-hbox-align-center\">Your email is verified. You may now log into your account.</p>\n        <div class=\"s-hbox-align-center\">\n          <button type=\"button\" md-raised-button  (click)=\"gotoLogin()\">LOG IN NOW</button>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n\n  <s-app-footer style=\"z-index:1\"></s-app-footer>\n\n</div>\n"

/***/ },

/***/ 889:
/***/ function(module, exports) {

module.exports = "<div class=\"s-home-pg\">\n  <md-toolbar id=\"s-main-toolbar\" class=\"s-shadow-1\">\n    <s-logo class=\"s-home-pg-logo\"></s-logo>\n    <!-- img class=\"s-home-pg-logo\" src=\"/assets/images/swlogo.png\" alt=\"Sonicwall Logo\" / -->\n    <s-hnav #appNav style=\"height:100%;\" [navItems]=\"toolbarNavItems\" [selected]=\"selectedNavItem\"  (selectionChange)=\"navbarSelectionChange($event);\" ></s-hnav>\n\n    <span style=\"flex:1\"></span>\n\n    <s-pill [size]=\"'medium'\" [text]=\"Test\"   [iconAlign]=\"'left'\" [color]=\"'#63666A'\" [hideText]=\"true\"  [spread]=\"false\" [rounded]=\"'true'\" [iconCls]=\"'fa fa-question fa-lg'\"></s-pill>\n    <s-pill [size]=\"'medium'\" [text]=\"Test\"   [iconAlign]=\"'left'\" [color]=\"'#63666A'\" [hideText]=\"true\"  [spread]=\"false\" [rounded]=\"'true'\" [iconCls]=\"'fa fa-bell fa-lg'\" (click)=\"onAlertClick($event)\"  md-tooltip=\"Alerts\" tooltip-position=\"below\" ></s-pill>\n    <s-pill [size]=\"'medium'\" [text]=\"Test\"   [iconAlign]=\"'left'\" [color]=\"'#63666A'\" [hideText]=\"true\"  [spread]=\"false\" [rounded]=\"'true'\" [iconCls]=\"'fa fa-power-off fa-lg'\" (click)=\"onLogout($event)\" md-tooltip=\"Logout\" tooltip-position=\"below\"> </s-pill>\n    <s-pill [size]=\"'medium'\" [text]=\"'Mrin'\" [iconAlign]=\"'right'\" [color]=\"'#63666A'\" [hideText]=\"false\" [spread]=\"false\" [rounded]=\"'true'\" [iconCls]=\"'fa fa-user fa-lg'\"></s-pill>\n  </md-toolbar>\n  <router-outlet></router-outlet>\n\n</div>\n\n<!-- Side Bars -->\n<ng2-sidebar [(open)]=\"openRightDraw\" [closeOnClickOutside]=\"true\" [position]=\"'right'\" [showOverlay]=\"true\" >\n    <s-alerts [width]=\"300\" [showHeader]=\"true\" [showFooter]=\"false\"></s-alerts>\n</ng2-sidebar>\n"

/***/ }

},[1145]);
//# sourceMappingURL=main.bundle.map