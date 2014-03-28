
Ext.define('SimpleLogin.view.Dashboard', {
	  extend: 'Ext.tab.Panel',
	  
	  
	
    requires: ['Ext.TitleBar','Ext.TitleBar','Ext.layout.VBox', 'Ext.field.Search'],
    
    config: {
        tabBarPosition: 'bottom',
        
        items: [
            {
               
               
                
                iconCls: 'home',

         

                styleHtmlContent: true,
                scrollable: true,

             items:[
				
		
		    
                {
				
                        html:'<div class="simple-login-logo">Classified</div>'
						
						
				},
			{
						html:'<hr>'
			},
			{
						html:'<center><h1>Recentaly addes items</h1></center>'
			},
						
                      { html: '<div class="recent_item"><ul><li><img src="resources/images/download.jpg"><h2>Electronics / computers and software</h2></li><li><img src="resources/images/download.jpg"><h2>Electronics / computers and software</h2></li></ul></div>'
					  },
					  {
               
                xtype: 'toolbar',
                items: [
                    {
                        xtype: 'searchfield',
                        placeHolder: 'Search',
                        name: 'searchfield'
                    }
                ]
            }, 
					   {
			 xtype : 'button',
			
                        cls   : 'aswaq-button',
                        text  : 'Reminder',
                     iconCls: 'reminders',
                        flex  : 2
		},
		{
			 xtype : 'button',
                        cls   : 'aswaq-button',
                        text  : 'Messages',
                        iconCls : 'messages',
                        flex  : 2
		},
		{
			 xtype : 'button',
                        cls   : 'aswaq-button',
                        text  : 'My Favorites',
                       iconCls: 'favorites',
                        flex  : 2
		},
				 {
			 xtype : 'button',
                        cls   : 'aswaq-button green',
                        text  : 'Sell your item now',
                        iconCls : 'add',
                        flex  : 2
		 
		},
            		
                       
				]
					
				  
				
			
            },
           
		
		 
		

           
			{
                iconCls: 'categories'

            },

            {
                 iconCls: 'camera'

            },

            {
                iconCls: 'settings'
            }
	
        ]
		
    }
});