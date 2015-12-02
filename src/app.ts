/// <reference path="plugin.ts"/>

namespace visuals{
    for(let p in plugins){
        let v: IVisual = plugins[p].create();
        v.init();
        v.update('Funny');
    }
}