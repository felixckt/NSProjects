"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_property_decorator_1 = require("../shared/observable-property-decorator");
var AppRootViewModel = /** @class */ (function (_super) {
    __extends(AppRootViewModel, _super);
    function AppRootViewModel(selectedPage) {
        var _this = _super.call(this) || this;
        _this.selectedPage = selectedPage;
        return _this;
    }
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", String)
    ], AppRootViewModel.prototype, "selectedPage", void 0);
    return AppRootViewModel;
}(observable_1.Observable));
exports.AppRootViewModel = AppRootViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvb3Qtdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC1yb290LXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBNkM7QUFFN0MseUZBQTZFO0FBRTdFO0lBQXNDLG9DQUFVO0lBRzVDLDBCQUFZLFlBQW9CO1FBQWhDLFlBQ0ksaUJBQU8sU0FHVjtRQURHLEtBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDOztJQUNyQyxDQUFDO0lBTnFCO1FBQXJCLGtEQUFrQixFQUFFOzswREFBc0I7SUFPL0MsdUJBQUM7Q0FBQSxBQVJELENBQXNDLHVCQUFVLEdBUS9DO0FBUlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGVQcm9wZXJ0eSB9IGZyb20gXCIuLi9zaGFyZWQvb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBSb290Vmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XHJcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgc2VsZWN0ZWRQYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0ZWRQYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkUGFnZSA9IHNlbGVjdGVkUGFnZTtcclxuICAgIH1cclxufVxyXG4iXX0=