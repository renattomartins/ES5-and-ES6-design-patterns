// The constructor to decorate
    function component() {

        console.log('Component created');
        this.Operation = function(){ console.log('o o') };
    }

// Decorator
    function decorator( component ) {

        console.log('Decorator created');
        this.Operation = function(){ component.Operation(); }
    }

// ConcrateDecoratorA
    function decoratorA( component, sign ){

        this.addedState = sign;
        console.log('ConcreteDecoratorA created');
        this.Operation = function(){
            component.Operation();
            console.log(this.addedState);
        };
    }

// ConcrateDecoratorB
    function decoratorB( component, sign ){

        this.addedState = sign;
        console.log('ConcreteDecoratorA created');
        this.Operation = function(){
            component.Operation();
            console.log(this.addedState + this.addedState + this.addedState + this.addedState + this.addedState);
        };
        this.AddedBehavior = function(){
            this.Operation()
            console.log('|........|')
        };
    }

// Para testar:
var componentt = new component();
decorator( componentt );
decoratorA( componentt );
decoratorB( componentt );

