module visuals{
    export interface IVisualCapabilities {
        supportsTouch: boolean
    }

    export interface IVisual{
        init(): void;
        update(data: string): void;
    }

    export interface IVisualPlugin{
        create : ()=> IVisual;
        capabilities: IVisualCapabilities;
    }
}