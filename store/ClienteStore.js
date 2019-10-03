Ext.define('store.ClienteStore', {
    extend: 'Ext.data.Store',
    model: 'model.cliente',
    storeId: 'clienteStore',
    pageSize: 20,
    proxy:{
        type: 'ajax',

        api: {
            create: 'php/criaCliente.php',
            read: 'php/listaClientes.php',
            update: 'php/atualizaCliente.php',
            destroy: 'php/deletaCliente.php'
        },

        reader: {
            type: 'json',
            root: 'clientes',
        }, 
        writer: {
            type: 'json',
            root: 'clientes',
            encode: true
        }
    },
    autoLoad: false
})
