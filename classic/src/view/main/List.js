/**
 * This view is an auditor register form
 */
Ext.define('ApplicationApp.view.main.List', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mainview',
    xtype: 'mainlist',
    itemId:'forms',
    viewModel:'main',

    requires: [
        'ApplicationApp.store.Personnel',
        'ApplicationApp.model.Base'
        
    ],
    controller:'main',

    title: 'Register',            
            items: [
                 {
                     xtype:'textfield',
                     fieldLabel:'First Name',
                     name:'fName'
                    
                 },
                 {
                     xtype:'textfield',
                     fieldLabel:'Last Name',
                     name:' lName',
                    
                 },
                 {
                     xtype:'datefield',
                     fieldLabel:'Date of Birth',
                     name:'dob'

                 },
                 {           
                     xtype: 'combobox',
                     fieldLabel:'Country',
                     editable:'false',
                     store:{
                        type:'personnel'
                    },
                     layout: 'vbox',
                     displayField:'country'
                 },
                
                 {   
                    xtype      : 'fieldcontainer',
                    fieldLabel : 'Gender',
                    defaultType: 'radiofield',
                    layout: 'hbox',
                    items: [
                        {
                            boxLabel  : 'Male',
                            name      : 'gender'
                        }, {
                            boxLabel  : 'Female',
                            name      : 'gender' 
                        }
                    ]
                },
                {
                    xtype:'button',
                    text:'Reset',
                    handler:function(){
                        this.up('form').getForm().reset();  
                                }

                },
                
                {
                   xtype:'button',
                    text:'Save',
                    style: 'position:absolute; left:200px;'


                 },
                 {
                     xtype:'button',
                     text:'Add',
                     style:'position:absolute; left:100px;'
                 }


                
                

            ],
        
    
    
           
                    
                
                 
    

                
            });
        