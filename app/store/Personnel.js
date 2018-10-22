Ext.define('ApplicationApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'ApplicationApp.model.Personnel',

    data: { items: [
        { country: 'India'},
        { country: 'Nepal'},    
        { country: 'Bangladesh'},  
        { country: 'SriLanka'},
        { country: 'China'},

    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
