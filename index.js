Ext.onReady(function(){

    Ext.Loader.setConfig({
        enabled: true
    })

    var store = Ext.create('store.ClienteStore');
    store.load();

    Ext.create('view.grid',{
       renderTo: 'grid-container'
    });
    
})