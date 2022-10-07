Highcharts.chart('container', {

    title: {
      text: 'Ventas de los ultimos 5 años'
    },
  
    subtitle: {
      text: 'Informacion Actualizada del dia 03/12/2021'
    },
  
    yAxis: {
      title: {
        text: 'Ventas'
      }
    },
  
    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 2015 to 2022'
      }
    },
  
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
  
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2015
      }
    },
  
    series: [{
      name: 'Celulares',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 156528]
    }, {
      name: 'Laptops',
      data: [43934, 50000, 51000, 60000, 95024, 119931, 125000, 154175]
    }, {
      name: 'Televisores',
      data: [40934, 42503, 50177, 59658, 85031, 118731, 107133, 134175]
    }, {
      name: 'Smartwatch',
      data: [null, null, 8588, 18169, 19112, 25452, 40400, 124286]
    }, {
      name: 'Tablets',
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  
  });


  