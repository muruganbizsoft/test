{
	extend: 'print',
	autoPrint: true,
	footer: true,
	title:' Location Stock Reports',
	exportOptions: {
	columns: [0,1,2,3,4]
	},
	customize: function ( win ) {
		$(win.document.body)
		.css( 'font-size', '10pt' )
		.prepend(
		'<img src="logo1.png" style=" top:0; left:30%;width:300px;display:block;margin:0 auto" />'
		);

		$(win.document.body).find( 'table' ).css("font-size", "inherit");
		$(win.document.body).find( 'td' ).css("border", "1px solid #7367f0");
		$(win.document.body).find( 'td' ).css("background", "#fff");
		$(win.document.body).find( 'td' ).css("text-align", "center");
		$(win.document.body).find( 'th' ).css("border", "1px solid #7367f0"); 
		$(win.document.body).find( 'th' ).css("background", "#7367f0");
		$(win.document.body).find( 'th' ).css("color", "#000");
		$(win.document.body).find( 'th' ).css("text-align", "center");
		$(win.document.body).find('h1').css('text-align', 'center'); 
	}
}
