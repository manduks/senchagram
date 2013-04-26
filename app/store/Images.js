/**
 * @class Senchagram.store.Images
 * @extends Core.data.Store
 * This is the store for the Images
 */
Ext.define('Senchagram.store.Images', {
    extend: 'Ext.data.Store',
    requires:['Senchagram.model.Image'],
    config:{
		model:'Senchagram.model.Image'
    }
});