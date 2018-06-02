"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("application");
var frame_1 = require("ui/frame");
var app_root_view_model_1 = require("./app-root-view-model");
function onLoaded(args) {
    var drawerComponent = args.object;
    drawerComponent.bindingContext = new app_root_view_model_1.AppRootViewModel("Home");
}
exports.onLoaded = onLoaded;
function onNavigationItemTap(args) {
    var component = args.object;
    var componentRoute = component.get("route");
    var componentTitle = component.get("title");
    var bindingContext = component.bindingContext;
    bindingContext.selectedPage = componentTitle;
    frame_1.topmost().navigate({
        moduleName: componentRoute,
        transition: {
            name: "fade"
        }
    });
    var drawerComponent = app.getRootView();
    drawerComponent.closeDrawer();
}
exports.onNavigationItemTap = onNavigationItemTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvb3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAtcm9vdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFtQztBQUduQyxrQ0FBbUM7QUFHbkMsNkRBQXlEO0FBRXpELGtCQUF5QixJQUFlO0lBQ3BDLElBQU0sZUFBZSxHQUFrQixJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ25ELGVBQWUsQ0FBQyxjQUFjLEdBQUcsSUFBSSxzQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNsRSxDQUFDO0FBSEQsNEJBR0M7QUFFRCw2QkFBb0MsSUFBZTtJQUMvQyxJQUFNLFNBQVMsR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzFDLElBQU0sY0FBYyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsSUFBTSxjQUFjLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxJQUFNLGNBQWMsR0FBcUIsU0FBUyxDQUFDLGNBQWMsQ0FBQztJQUVsRSxjQUFjLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQztJQUU3QyxlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDZixVQUFVLEVBQUUsY0FBYztRQUMxQixVQUFVLEVBQUU7WUFDUixJQUFJLEVBQUUsTUFBTTtTQUNmO0tBQ0osQ0FBQyxDQUFDO0lBRUgsSUFBTSxlQUFlLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6RCxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDbEMsQ0FBQztBQWpCRCxrREFpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCI7XHJcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xyXG5cclxuaW1wb3J0IHsgQXBwUm9vdFZpZXdNb2RlbCB9IGZyb20gXCIuL2FwcC1yb290LXZpZXctbW9kZWxcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkxvYWRlZChhcmdzOiBFdmVudERhdGEpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRyYXdlckNvbXBvbmVudCA9IDxSYWRTaWRlRHJhd2VyPmFyZ3Mub2JqZWN0O1xyXG4gICAgZHJhd2VyQ29tcG9uZW50LmJpbmRpbmdDb250ZXh0ID0gbmV3IEFwcFJvb3RWaWV3TW9kZWwoXCJIb21lXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW9uSXRlbVRhcChhcmdzOiBFdmVudERhdGEpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbXBvbmVudCA9IDxHcmlkTGF5b3V0PmFyZ3Mub2JqZWN0O1xyXG4gICAgY29uc3QgY29tcG9uZW50Um91dGUgPSBjb21wb25lbnQuZ2V0KFwicm91dGVcIik7XHJcbiAgICBjb25zdCBjb21wb25lbnRUaXRsZSA9IGNvbXBvbmVudC5nZXQoXCJ0aXRsZVwiKTtcclxuICAgIGNvbnN0IGJpbmRpbmdDb250ZXh0ID0gPEFwcFJvb3RWaWV3TW9kZWw+Y29tcG9uZW50LmJpbmRpbmdDb250ZXh0O1xyXG5cclxuICAgIGJpbmRpbmdDb250ZXh0LnNlbGVjdGVkUGFnZSA9IGNvbXBvbmVudFRpdGxlO1xyXG5cclxuICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XHJcbiAgICAgICAgbW9kdWxlTmFtZTogY29tcG9uZW50Um91dGUsXHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICBuYW1lOiBcImZhZGVcIlxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRyYXdlckNvbXBvbmVudCA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xyXG4gICAgZHJhd2VyQ29tcG9uZW50LmNsb3NlRHJhd2VyKCk7XHJcbn1cclxuIl19