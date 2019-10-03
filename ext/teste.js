Ext.namespace('ext');
ext.teste = function(config) {
	Ext.applyIf(this, config);
	this.initUIComponents();
	ext.teste.superclass.constructor.call(this);
};
Ext.extend(ext.teste, Ext.Panel, {
	initUIComponents : function() {
		// BEGIN OF CODE GENERATION PARTS, DON'T DELETE CODE BELOW
		Ext.apply(this, {});
		// END OF CODE GENERATION PARTS, DON'T DELETE CODE ABOVE
	}
});
