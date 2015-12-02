module visuals{
    export class Manchester implements IVisual{
        public init(){
            console.log('init');
        }

        public update(data){
            console.log('update')
        }
    }
}