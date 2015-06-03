<script src='https://maps.googleapis.com/maps/api/js?v=3.exp'></script>
<div style='overflow:hidden;height:400px;width:520px;'><div id='gmap_canvas' style='height:400px;width:520px;'></div>
<style>#gmap_canvas img{max-width:none!important;background:none!important}</style></div>
 <a href='http://www.maps-generator.com'>On the site from maps-generator</a> 
 <script type='text/javascript' src='http://embedmaps.com/google-maps-authorization/script.js?id=e1a210b515f5ccaf6655437e4f9082003fbdff99'></script>
 <script type='text/javascript'> 
 function init_map(){
var myOptions = {
zoom:12,center:new google.maps.LatLng(13.045975449262347,80.21841511226842),
mapTypeId: google.maps.MapTypeId.ROADMAP};
map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(13.045975449262347,80.21841511226842)});
infowindow = new google.maps.InfoWindow({
content:'<strong>Hamdha Fashion</strong><br>'+
'Shop No.103 Ashok Nagar Main Road, Subbarayan Nagar, Kodambakkam<br>'+
'600024 Chennai<br>'
});
google.maps.event.addListener(marker, 'click', function(){
infowindow.open(map,marker);
});
infowindow.open(map,marker);
}
google.maps.event.addDomListener(window, 'load', init_map);
</script>