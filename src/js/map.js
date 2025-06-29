ymaps.ready(function () {
    const map = new ymaps.Map("map", {
        center: [53.195878, 50.100202],
        zoom: 6
    });

    const placemarks = [
        {
            coords: [55.755864, 37.617698],
            hint: 'Москва'
        },
        {
            coords: [48.707067, 44.516975],
            hint: 'Волгоград'
        },
        {
            coords: [51.660781, 39.200296],
            hint: 'Воронеж'
        },
        {
            coords: [45.035470, 38.975313],
            hint: 'Краснодар'
        },
        {
            coords: [51.533338, 46.034176],
            hint: 'Саратов'
        },
        {
            coords: [55.030204, 82.920430],
            hint: 'Новосибирск'
        },
        {
            coords: [53.195878, 50.100202],
            hint: 'Самара'
        },
        {
            coords: [55.753321, 49.650829],
            hint: 'Пестрецы'
        }
    ];

    placemarks.forEach(({ coords, hint }) => {
        const placemark = new ymaps.Placemark(coords, {
            hintContent: hint
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'icons/pin.svg',
            iconImageSize: [36, 40],
            iconImageOffset: [0, 0]
        });

        map.geoObjects.add(placemark);
    });


    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');
    map.behaviors.disable('scrollZoom');


})