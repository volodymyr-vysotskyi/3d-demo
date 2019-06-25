document.onready = initialize;
function initialize() {

    var len = locations.length,maxlat=locations[0][0], minlat = locations[0][0], maxlng=locations[0][1], minlng = locations[0][1],marker, i;
    for (i = 0; i < len; i++) {
        if(maxlat<locations[i][0])
            maxlat = locations[i][0];
        if (minlat>locations[i][0])
            minlat =locations[i][0];
        if(maxlng<locations[i][1])
            maxlng = locations[i][1];
        if (minlng>locations[i][1])
            minlng =locations[i][1];
    }

    var map = new google.maps.Map(document.getElementById('map_canvas'), {
        scrollwheel: false,
        minZoom: 2,
        zoom: 2,
        center: new google.maps.LatLng((maxlat+minlat+5)/2, (maxlng+minlng)/2),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: false,
	    panControl: true,
	    mapTypeControl: false
    });

    var image = new google.maps.MarkerImage(assetBase+'/images/pin.png',
      new google.maps.Size(44, 39),
      new google.maps.Point(0,0),
      new google.maps.Point(12, 39));



    for (i = 0; i < len; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][0], locations[i][1]),
            map: map,
            icon: image,
            spn:0.000001
        });
    }

}

