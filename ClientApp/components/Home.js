var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("h3", null, "Project Title:"),
            React.createElement("h1", null, "Music Matchup"),
            React.createElement("h3", null, "Project Description:"),
            React.createElement("p", null, "For our project, we decided to create a Music Matchup application that will allow users to keep track of individual artists, and the various bands that they have been associated with. Users would be able to register, and once registered, would be able to add/remove artists and bands, and associate which artists were ever a part of which bands."));
    };
    return Home;
}(React.Component));
export { Home };
//# sourceMappingURL=Home.js.map