Ext.define('model.cliente', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id_cliente', type: 'int'},
        {name: 'cli_name', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'c_name', type: 'string'},
    ],
    idProperty: 'id_cliente'
})