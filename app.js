/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ApplicationApp.Application',

    name: 'ApplicationApp',

    requires: [
        // This will automatically load all classes in the ApplicationApp namespace
        // so that application classes do not need to require each other.
        'ApplicationApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'ApplicationApp.view.main.Main'
});
