Ext.define('view.grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.clientesgrid',
    store: Ext.data.StoreManager.lookup('clienteStore'),
    title: 'Clientes',
    iconCls: 'grid-icon' ,

    listeners: {
        itemdblclick: function(grid, rec){
            editar(rec);
        }
    },

    columns: [
        {
            header: 'ID',
            dataIndex: 'id_cliente',
            width: 60,
        },{
            header: 'Nome',
            dataIndex: 'cli_name',
            flex: 2
        },{
            header: 'Email',
            dataIndex: 'email',
            flex: 2
        },{
            header: 'Cidade',
            dataIndex: 'c_name',
            width: 80,
            flex: 1
        }
    ],
    dockedItems:[
        {
            xtype: 'toolbar',
            dock:'top',
            items:[
                {
                    xtype: 'button',
                    text: 'Novo',
                    iconCls: 'create-icon',
                    listeners: {
                        click: function(btn) {
                            apareceForm("Novo Contato");
                        }
                    }
                },{
                    xtype: 'button',
                    text: 'excluir',
                    iconCls: 'delete-icon',
                    listeners:{
                        click: function(btn){
                            deletar(btn);



                        }
                    }
                }
            ]
        },{
            xtype: 'pagingtoolbar',
            store: Ext.data.StoreManager.lookup('clienteStore'),
            dock: 'top',
            displayInfo: true
        }
    ],
    height: 800,
    width: 1400,
})