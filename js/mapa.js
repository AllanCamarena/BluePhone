// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['mx-3622', 0],
    ['mx-bc', 8],
    ['mx-bs', 2],
    ['mx-so', 1],
    ['mx-cl', 1],
    ['mx-na', 1],
    ['mx-cm', 1],
    ['mx-qr', 1],
    ['mx-mx', 7],
    ['mx-mo', 1],
    ['mx-df', 10],
    ['mx-qt', 1],
    ['mx-tb', 1],
    ['mx-cs', 1],
    ['mx-nl', 8],
    ['mx-si', 1],
    ['mx-ch', 1],
    ['mx-ve', 1],
    ['mx-za', 1],
    ['mx-ag', 1],
    ['mx-ja', 9],
    ['mx-mi', 2],
    ['mx-oa', 2],
    ['mx-pu', 2],
    ['mx-gr', 2],
    ['mx-tl', 2],
    ['mx-tm', 1],
    ['mx-co', 2],
    ['mx-yu', 0],
    ['mx-dg', ],
    ['mx-gj', 3],
    ['mx-sl', 0],
    ['mx-hg', 1]
];

// Create the chart
Highcharts.mapChart('mapadeMexico', {
    chart: {
        map: 'countries/mx/mx-all'
    },

    title: {
        text: 'Sucursales'
    },

    subtitle: {
        text: 'Pais: <a href="http://code.highcharts.com/mapdata/countries/mx/mx-all.js">Mexico</a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: data,
        name: 'Sucursales',
        states: {
            hover: {
                color: '#FF0000 '
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});
