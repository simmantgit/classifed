Ext.define("SimpleLogin.view.LoginView", {
	extend: 'Ext.form.Panel',
	xtype: 'loginForm',
	id: 'loginForm',

	requires: [
		'Ext.field.Toggle'
	],

	config: {
		title: 'Log in',
		iconCls: 'user',
		items: [
			{
				html: '<div class="simple-login-logo">Classified</div>'
			},
			{
				xtype: 'fieldset',
				iconCls: 'home',
				defaults: {
					labelWidth: '40%'
				},

				items: [
					{
						xtype: 'emailfield',
						name: 'username',
						placeHolder: 'Username'
					},
					{
						xtype: 'passwordfield',
						name: 'password',
						placeHolder: 'Password'
					},
					{
						xtype: 'togglefield',
						label: 'Remember username',
						labelWidth: '60%',
						name: 'keepUser'
					}
				]

			},
			{
				xtype: 'button',
				text: 'Log in',
				ui: 'confirm'
			},
 {
html:'<br>'
},
                        {
				 xtype: 'component',
 html: '<center><a href='+'"http://abc.com"'+ '>Forgot your password?</a></center>',

			},
{
html:'<hr>'
},

{
				 xtype: 'component',
 html: '<center>Don’t have an account? </center>'
			},
{
html:'<br>'
},

    {
				xtype: 'button',
				text: 'Sign Up',
				ui: 'confirm'
			},
{
html:'<br>'
},

{
				 xtype: 'component',
 html: '<center>or Login with </center>'
			},
{
html:'<br>'
},
{
				html: '<div class="simple-facebook-logo">Classified</div>'

			},

{
				html: '<div class="simple-gmail-logo">Classified1</div>'

			},

		]
	}
});
