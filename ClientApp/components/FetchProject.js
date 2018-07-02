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
var FetchProject = /** @class */ (function (_super) {
    __extends(FetchProject, _super);
    function FetchProject() {
        var _this = _super.call(this) || this;
        _this.state = { projList: [], loading: true };
        fetch('api/Project/Index')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ projList: data, loading: false });
        });
        return _this;
    }
    FetchProject.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderProjectTable(this.state.projList);
        return React.createElement("div", null,
            React.createElement("h1", null, "Project Data"),
            React.createElement("p", null, "This is the project data"),
            contents);
    };
    //Return HTML table to render() method.
    FetchProject.prototype.renderProjectTable = function (projList) {
        return React.createElement("table", { className: 'table' },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null),
                    React.createElement("th", null, "Name"),
                    React.createElement("th", null, "Description"))),
            React.createElement("tbody", null, projList.map(function (proj) {
                return React.createElement("tr", { key: proj.Id },
                    React.createElement("td", null, proj.Id),
                    React.createElement("td", null, proj.name),
                    React.createElement("td", null, proj.description));
            })));
    };
    return FetchProject;
}(React.Component));
export { FetchProject };
var ProjectData = /** @class */ (function () {
    function ProjectData() {
        this.Id = 0;
        this.name = "";
        this.description = "";
    }
    return ProjectData;
}());
export { ProjectData };
//# sourceMappingURL=FetchProject.js.map