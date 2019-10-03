//Aparecer formulario
function apareceForm(titulo){
    var win = Ext.create('view.form');
    win.setTitle(titulo);

    return win;
}

//==========================================================================
//
function editar(rec){
    var nome = (rec.get('nome'));
    var win = apareceForm("Atualizar Contato - "+ nome);

    var form = win.down('form');
    
    form.loadRecord(rec);
    
    
}

//============================================================================
//Cancela a edição
function cancelbtn(btn){
    var win = btn.up('window');

    var form = win.down('form');

    form.getForm().reset();

    win.close();
}

//=============================================================================
//Deleta cliente
function deletar(btn){
    var grid = btn.up('grid');

    var records = grid.getSelectionModel().getSelection();
    
    var store = grid.getStore();

    store.remove(records);
    store.sync();
}
//===============================================================================
//Cria cliente / Edita cliente
function saveBtn(btn){
    var win = btn.up('window');

    var form = win.down('form');

    var values = form.getValues();

    var record = form.getRecord();

    if(record){
        record.set(values);

        var grid = Ext.ComponentQuery.query('clientesgrid')[0];
        
        var store = grid.getStore();

        store.sync();
    }else{
        var cliente = Ext.create('model.cliente',{
            cli_name: values.cli_name,
            email: values.email,
            c_name: values.c_name
        });
    
        var grid = Ext.ComponentQuery.query('clientesgrid')[0];
        
        var store = grid.getStore();
    
        store.add(cliente);
        store.sync();
    };

    form.getForm().reset();

    win.close();
}