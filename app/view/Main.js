Ext.define('Senchagram.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Img',
        'Ext.navigation.View',
        //componentes requeridos
        'Senchagram.view.ImagesList',
        'Senchagram.view.ImageContainer'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',
                styleHtmlContent: true,
                scrollable: true,
                xtype:'navigationview',
                items:[{
                    xtype:'imageslist',
                    title:'Photos',
                    listeners:{
                        itemtap:function (list, index, target, record) {
                            list.up('navigationview').push({
                                xtype:'imagecontainer',
                                data:record.getData()
                            });
                        }
                    }
                }]
            },
            {
                title: 'Info',
                iconCls: 'info',
                layout: 'hbox',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Sencha'
                    },
                    {
                        xtype: 'image',
                        src: 'http://www.ideashub.mx/wp-content/uploads/2013/04/TALLER_sencha3.jpg',
                        flex:1
                    }
                ]
            }
        ]
    }
});
