/**
 * Demonstrates a very simple tab panel with 3 tabs
 */
Ext.define('SimpleLogin.view.Tabs', {
    extend: 'Ext.tab.Panel',

    config: {
        ui: 'dark',
        tabBar: {
            ui: 'dark',
            layout: {
                pack: Ext.filterPlatform('ie10') ? 'start' : 'center'
            }
        },
        activeTab: 1,
        defaults: {
            scrollable: true
        },
        items: [
            {
                text : 'home', 
                cls: 'aswaq-tab tab',
                iconCls:  'home'
            },

            {

                cls: 'aswaq-tab tab',
                iconCls: 'categories'
            },

            {

                cls: 'aswaq-tab tab',
                iconCls: 'camera'
            },

            {

                cls: 'aswaq-tab tab',
                iconCls: 'settings'
            }
        ]
    }
});
