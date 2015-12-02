/// <reference path="iVisual.ts"/>
/// <reference path="manchester.ts"/>

namespace visuals.plugins {
    export var manchesterUnited: IVisualPlugin = {
        create: () => new Manchester(),
        capabilities: {
            supportsTouch : true,
        },
    }
}