Ext.define('view.form', {
    extend: 'Ext.window.Window',
    title: 'Cadastrar / Editar cliente',
    height: 200,
    width: 400,
    layout: 'fit', 
    autoShow: true,
    items: [
        {
            xtype: 'form',
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },

            items: [{
                xtype: 'hiddenfield',
                name: 'id_cliente',
            },{
                xtype: 'textfield',
                padding: 10,
                fieldLabel: 'nome',
                name: 'cli_name',
                allowBlank: false
            },{
                xtype: 'textfield',
                padding: 10,
                fieldLabel: 'Email',
                name: 'email',
                allowBlank: false
            },{
                xtype: 'textfield',
                padding: 10,
                fieldLabel: 'Cidade',
                name: 'c_name',
                allowBlank: false
            }]
        }
    ], 
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            layout: {
                type: 'hbox',
                pack: 'end'
            },
            items:[
                {
                    xtype: 'button',
                    text: 'Cancelar',
                    iconCls: 'cancel-icon',
                    itemId: 'cancel',
                    listeners: {
                        click: function(btn) {
                            saveBtn(btn);
                        }
                    }
                    
                },{
                    xtype: 'button',
                    text: 'Salvar',
                    iconCls: 'save-icon',
                    itemId: 'save',
                    listeners: {
                        click: function(btn) {
                            saveBtn(btn);
                        }
                    }
                },
            ]
        }
    ]
})
