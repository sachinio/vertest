var visuals;
(function (visuals) {
    var Chelsea = (function () {
        function Chelsea() {
        }
        Chelsea.prototype.init = function () {
            console.log('init');
        };
        Chelsea.prototype.update = function (data) {
            console.log('call update');
        };
        return Chelsea;
    })();
    visuals.Chelsea = Chelsea;
})(visuals || (visuals = {}));
var visuals;
(function (visuals) {
    var plugins;
    (function (plugins) {
        plugins.chelsea = {
            create: function () { return new visuals.Chelsea(); },
            capabilities: {
                supportsTouch: false
            }
        };
    })(plugins = visuals.plugins || (visuals.plugins = {}));
})(visuals || (visuals = {}));