Ext.define('MyApp.view.MainView', {
    extend: 'Ext.Panel',
    alias: 'widget.mainview',


    requires: [
        'Ext.Button'
    ],


    config: {
        itemId: 'mainView',
        padding: 10,
        items: [
            {
                xtype: 'button',
                itemId: 'runButton',
                text: 'Load new Data'
            }
        ]
    }


});