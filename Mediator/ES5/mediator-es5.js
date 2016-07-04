var mediator = {

    init: function() {

        console.log('mediator created')
        mediator.colleague1 = new ConcreteColleague1(mediator);
        mediator.colleague2 = new ConcreteColleague2(mediator);
    },

    colleagueChanged(colleague) {
        switch(colleague) {
            case mediator.colleague1:
                console.log('ConcreteColleague1 has Changed -> change ConcreteColleague2.feature: ');
                mediator.colleague2.setFeature('new feature 2');
                break
            case mediator.colleague2:
                console.log('ConcreteColleague2 has Changed, but do nothing');
                break
            default:
                console.log('Do nothing');
        }
    }
}

function ConcreteColleague1() {

    console.log('ConcreteColleague1 created')
    this.mediator = mediator;
    this.feature = "feature 1"
    this.setFeature = function(feature) {
        console.log('ConcreteColleague1 Feature has changed from ' + this.feature + ' to ' + feature);
        this.feature = feature;
        this.mediator.colleagueChanged(this);
    }
}

function ConcreteColleague2() {

    console.log('ConcreteColleague2 created')
    this.mediator = mediator;
    this.feature = "feature 2"
    this.setFeature = function(feature) {
        console.log('ConcreteColleague2 Feature has changed from ' + this.feature + ' to ' + feature);
        this.feature = feature;
        this.mediator.colleagueChanged(this);
    }
}

// Para testar:
function init_Mediator() {
    mediator.init();
    mediator.colleague1.setFeature("new feature 1");
}
init_Mediator();