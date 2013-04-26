/**
 * @class Senchagram.model.Image
 * @extends Ext.data.Model
 * Description
 */
Ext.define('Senchagram.model.Image', {
    extend: 'Ext.data.Model',

    config: {
        fields: [{
            name: 'id',
            type: 'int'
        }, {
            name: 'author',
            type: 'string'
        }, {
            name: 'src',
            type: 'string'
        }, {
            name: 'description',
            type: 'string'
        } ],
        proxy: {
            type: 'jsonp',
            url: 'server/images.json',
            reader: {
                type: 'json',
                rootProperty: 'images'
            }
        }
    }
});