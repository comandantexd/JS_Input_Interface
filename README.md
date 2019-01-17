# JS_Input_Interface
_An easy personalizable keyboard input interface for easly managing and dispatching events in JS._

#### just an interface between the user and the JS event listeners.

It's is simple, imagine you have a **'game'** in JS where you need an event to make the player **jump**, easy, with this interface you can centralize al the events and transforming any input event you want into another ready for your **'game'** (e.g: keydowning the Space will dispatch an event of type "jump"

```
+------------------+           +--------------------+             +-------------+
| KEYBOARD / MOUSE |---------->| JS_INPUT_INTERFACE |<----------->| JAVASCRIPT  |
|      INPUT       |           |                    |             | APPLICATION |
+------------------+           +--------------------+             +-------------+
```

_FEATURES:_
-
* Change the event type
* Change the key that dispatches the event
* 3 types of listener [keydown | keyup | keypress]
* Change the key that dispatches the event during execution of the interface
* Get the key that dispatches the event from the personalized event name
* Dispatch an event directly from JS code by the name of the event
* Exportable configuration
* [Adding | deleting] events during runtime

_FUNCTIONS_
-
* getEventIndex( eventName )
```
Gets the index from the running config of the event "eventName"
```
* addEvent( Object )
```
Add a new event to the actual executing events (in the moment you add the event it can be used)
```
* dispatchEvent(eventName)
* changeDispatcher(eventName, key)
* deleteEvent(eventName)
* getConfig()
* getEventProperties(eventName)

##### IN FUTURE:
* Function for adding event listeners
* Add more types of listeners
* Key combinations (like Ctrl-C)
* Add properties to pass with the events (bubbles...)




###### [...] much more is comming
