/**
 * @class Senchagram.view.ImageContainer
 * @extends Ext.Container
 * This is the Image container
 * @manduks
 */
Ext.define('Senchagram.view.ImageContainer', {
    extend: 'Ext.Container',
    xtype: 'imagecontainer',
    config: {
        tpl: [
                '<div>',
                	'<img id="filter-image" src="{src}" data-caman-hidpi="{src}">',
                '</div>'
        ].join(''),
        items: [{
                xtype: 'container',
                docked: 'bottom',
                flex: 1,
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                defaults: {
                    xtype: 'button',
                    iconAlign: 'center',
                    flex: 1
                },
                items: [{
                        text: 'Vintage',
                        handler: function (btn) {
                            //utilizamos Caman para aplicar los filtros
                            Caman('#filter-image', function () {
                                this['vintage']();
                                this.render();
                            });
                        }
                    }, {
                        text: 'Sin City',
                        handler: function (btn) {
                            //utilizamos Caman para aplicar los filtros
                            Caman('#filter-image', function () {
                                this['sinCity']();
                                this.render();
                            });
                        }
                    }, {
                        text: 'Nostalgia',
                        handler: function (btn) {
                            //utilizamos Caman para aplicar los filtros
                            Caman('#filter-image', function () {
                                this['nostalgia']();
                                this.render();
                            });
                        }
                    }, {
                        text: 'Love',
                        handler: function (btn) {
                            //utilizamos Caman para aplicar los filtros
                            Caman('#filter-image', function () {
                                this['love']();
                                this.render();
                            });
                        }
                    }
                ]
            }
        ]
    }
});
/*
	normal   
	vintage   
	lomo   
	clarity   
	sinCity  
	sunrise    
	crossProcess   
	orangePeel   
	love   
	grungy   
	jarques   
	pinhole   
	oldBoot   
	glowingSun   
	hazyDays   
	herMajesty   
	nostalgia   
	hemingway   
	concentrate
 */