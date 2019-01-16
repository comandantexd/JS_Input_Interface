//some sample configuration for the interface
const INPUT_CONFIG = [{
    eventName: 'run',
    dispatcher: 'KeyL',
    action: 'keydown'
},{
    eventName: 'jump',
    dispatcher: 'KeyT',
    action: 'keydown'
}];

//declaration of the class that will handle all the events
class InputUI {
    constructor(config) {
        this.name = [];
        this.event = [];
        this.dispatcher = [];
        this.action = [];

        for (let i = 0; i < config.length; i++) {
            this.event[i] = new Event(config[i].eventName);
            this.name[i] = config[i].eventName;
            this.dispatcher[i] = config[i].dispatcher;
            this.action[i] = config[i].action;

            // window.addEventListener(this.action[i], ev => {
            //     ev.code == this.dispatcher[i] && window.dispatchEvent(this.event[i]);
            // });
        }
        window.addEventListener('keydown', ev => {
            let i = this.dispatcher.indexOf(ev.code);
            i != -1 && window.dispatchEvent(this.event[i]);
        });
    }

    //for changing the input of the event during the execution of code
    changeDispatcher(eventName, key) {
        this.dispatcher[this.name.indexOf(eventName)] = key;
    }

    //gets the key that dispathes the event by the TRANFORMED name of the event
    getDispatcher(eventName) {
        return this.dispatcher[this.name.indexOf(eventName)];
    }
}

//Assign the class to a variable and apssing the options for the events.
let inputui = new InputUI(INPUT_CONFIG);
