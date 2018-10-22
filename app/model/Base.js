Ext.define('ApplicationApp.model.Base', {
    extend: 'Ext.data.Model',

    schema: {
        namespace: 'ApplicationApp.model'
    },
    fields: [
        {name:"fName", type:'int'},
        {name:"lName", type:"int"},
        //{name:"", type:"string"}
    ]
});

