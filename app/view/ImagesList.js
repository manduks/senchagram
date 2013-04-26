/**
 * @class Senchagram.view.ImagesList
 * @extends Ext.List
 * Description
 */
Ext.define('Senchagram.view.ImagesList', {
    extend: 'Ext.List',
    xtype:'imageslist',

    config: {
        store: 'Images',
        masked: {
            xtype: 'loadmask',
            message: 'Cargando'
        },
        emptyText: 'No hay imagenes ...',
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        itemTpl: [
			'<div style="">',
				'<img width="300" height="100" src="{src}">',
				'<div style:"float:left">',
					'{author}',
					'<p>{description}</p>',
				'</div>',
			'</div>'].join('')
    }
});