<!-- Begin

document.write('<p class="copyright">Copyright &copy; ');

	var mydate=new Date()  
	var year=mydate.getYear() 
	if (year < 1000) year+=1900  
	var daym=mydate.getDate() 
	if (daym<10) daym="0"+daym  
	document.write(""+year+"") 
	
document.write(' by Kate Montressor. This site developed and maintained by Kate Montressor. All rights reserved.</p>');


//  End -->

