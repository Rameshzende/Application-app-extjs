/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('ApplicationApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

   // config: {
        //control: {
          //  "mainview #runButton": {
            //    tap: 'runAction'
            //}
        //}
    //},


    runAction: function(target) {
        // Get Store reference
        var theStore = Ext.getStore('formData');




        // Load new Data
        theStore.load();
    }

});
