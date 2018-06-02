const HomePageViewModel = require("./HomePage-view-model");

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomePageViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
