<!DOCTYPE HTML>
<html>
<head>
	<tittle> Zegar </tittle>
	<script type="text/javascript">
	function odliczanie()
	{

		var czas = new Date();

		var dzien = czas.getDate();
		var miesiac = czas.getMonth()+1;
		var rok = czas.getFullYear();

		var godzina = czas.getHours();
		if(godzina<10)godzina="0"+godzina;
		var minuta = czas.getMinutes();
		if(minuta<10)minuta="0"+minuta
		var sekunda = czas.getSeconds();
		if(sekunda<10)sekunda="0"+sekunda

		document.getElementById("zegar").innerHTML = 
		dzien+"/"+miesiac+"/"+rok+"||"+godzina+":"+minuta+":"+sekunda;

		setTimeout("odliczanie()",1000);
	}

	</script>
</head>

<body onload="odliczanie();">
<div id="zegar"></div>
		

 	</script>

</body>
</html>
