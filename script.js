/// geo graph
// google.charts.load('current', {
//     'packages':['geochart'],
//     // Note: you will need to get a mapsApiKey for your project.
//     // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
//     'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
//   });
//   google.charts.setOnLoadCallback(drawRegionsMap);
//   function drawRegionsMap() {
//     var data = google.visualization.arrayToDataTable([
//       ['Country', 'Popularity'],
//       ['Germany', 200],
//       ['United States', 300],
//       ['Brazil', 400],
//       ['Canada', 500],
//       ['France', 600],
//       ['RU', 700]
//     ]);

  //   var options = {};

  //   var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  //   chart.draw(data, options);
  // }

  /// line graph
  google.charts.load('current', {packages: ['corechart', 'line', 'bar']});
  // google.charts.setOnLoadCallback(drawBasic);
  google.charts.setOnLoadCallback(drawChartL);
  google.charts.setOnLoadCallback(drawChartpie_62);
  google.charts.setOnLoadCallback(drawChartpie_61);
  google.charts.setOnLoadCallback(drawChartdes_62);
  google.charts.setOnLoadCallback(drawChartdes_61);
  // google.charts.setOnLoadCallback(drawChart4);
  // google.charts.setOnLoadCallback(drawChart5);
  // google.charts.setOnLoadCallback(drawChart6);
  // google.charts.setOnLoadCallback(drawChart7);
  // google.charts.setOnLoadCallback(drawChart8);
  // google.charts.setOnLoadCallback(drawChart9);
  // google.charts.setOnLoadCallback(drawChart10);
  // google.charts.setOnLoadCallback(drawChart11);
  // google.charts.setOnLoadCallback(drawChart12);
  // google.charts.setOnLoadCallback(drawChart13);
  
  // function drawBasic() {
  
  //       var data = new google.visualization.DataTable();
  //       data.addColumn('number', 'X');
  //       data.addColumn('number', 'Dogs');
  
  //       data.addRows([
  //         [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
  //         [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
  //         [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
  //         [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
  //         [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
  //         [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
  //         [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
  //         [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
  //         [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
  //         [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
  //         [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
  //         [66, 70], [67, 72], [68, 75], [69, 80]
  //       ]);
  
  //       var options = {
  //         hAxis: {
  //           title: 'Time'
  //         },
  //         vAxis: {
  //           title: 'Popularity'
  //         }
  //       };
  
  //       var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  
  //       chart.draw(data, options);
  //     }
      function drawChartL() {
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'ปี');
        data.addColumn('number', 'รายได้รวมจากภาษีประเภทต่างๆ');
        data.addRows([
            [1998,	2294028747],
            [1999,	2167861227],
            [2000,	1644143164],
            [2001,	1816297574],
            [2002,	1958383679],
            [2003,	2504668004],
            [2004,	3397980322],
            [2005,	4131733454],
            [2006,	4786252656],
            [2007,	5185451748],
            [2008,	5762540738],
            [2009,	4032646256],
            [2010,	913410908],
            [2011,	3099017300],
            [2012,	4586476358]
        ]);
        var options = {
            chart: {
                title: 'รายได้รวมจากภาษีประเภทต่างๆของจังหวัดนครราชสีมา (ล้านบาท)',
                subtitle: 'พ.ศ. 2541 - พ.ศ. 2555'
            },
            width: 900,
            height: 500
        };
        var chart = new google.charts.Line(document.getElementById('ts'));
        chart.draw(data, google.charts.Line.convertOptions(options));
    }
     
      // function drawChart1() {
      //   var data = google.visualization.arrayToDataTable([
      //     ['หน่วยงานภาคส่วนของรัฐ', 'งบประมาณปีพ.ศ.62 (ล้านบาท)', { role: 'style' }],
      //     ['กระทรวงศึกษาธิการ',	7,856.96, 'opacity: 0.2'],
      //     ['กระทรวงเกษตรและสหกรณ์',	2,092.98, 'opacity: 0.2'],
      //     ['ระทรวงมหาดไทย',	1,501.63, 'opacity: 0.2'],
      //     ['อื่นๆ',	983.87, 'opacity: 0.2'],
      //     ['กระทรวงวิทยาศาสตร์และเทคโนโลย',	592.53, 'opacity: 0.2'],
      //     ['กระทรวงสาธารณสุข',	571.81, 'opacity: 0.2'],
      //     ['กระทรวงกลาโหม',	184.49, 'opacity: 0.2'],
      //     ['กระทรวงวัฒนธรรม',	77.83, 'opacity: 0.2'],
      //     ['กระทรวงการคลัง',	37.90, 'opacity: 0.2'],
      //     ['กระทรวงแรงงาน',	24.94, 'opacity: 0.2'],
      //     ['กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์',	21.39, 'opacity: 0.2'],
      //     ['กระทรวงยุติธรรม',	13.12, 'opacity: 0.2'],
      //     ['กระทรวงพลังงาน',	10.53, 'opacity: 0.2'],
      //     ['กระทรวงการท่องเที่ยวและกีฬา',	6.91, 'opacity: 0.2'],
      //     ['กระทรวงอุตสาหกรรม',	6.12, 'opacity: 0.2'],
      //     ['กระทรวงพาณิชย์',	0.79, 'opacity: 0.2'],
      //     ['สำนักนายกรัฐมนตรี',	0.38, 'opacity: 0.2']
      // //   ]);
  
      //   var options = {
      //     title: 'Population of Largest U.S. Cities',
      //     chartArea: {width: '50%'},
      //     hAxis: {
      //       title: 'Total Population',
      //       minValue: 0
      //     },
      //     vAxis: {
      //       title: 'City'
      //     }
      //   };
  
      //   var chart = new google.visualization.BarChart(document.getElementById('bar_1'));
      //   chart.draw(data, options);
      // }

    //   function drawChart1() {
    //     var data = google.visualization.arrayToDataTable([
    //         // ['รายจ่ายงบกลาง', 'Mean', 'Median', 'Std'],
    //         // [' ', 1.912987e+07, 1.853584e+07, 1.961329e+06]
    //         ['กระทรวง', 'งบประมาณ'],
    //         ['กระทรวงศึกษาธิการ',	7,856.96],

    //     ]);
    //     var options = {
    //         chart: {
    //             title: 'รายจ่ายงบกลาง',
    //             subtitle: 'ปี 2554-261',
    //         },
    //         bars: 'horizontal', // Required for Material Bar Charts.
    //         hAxis: { format: 'decimal' },
    //         height: 400,
    //         colors: ['#1b9e77', '#d95f02', '#7570b3']
    //     };
    //     var chart = new google.charts.Bar(document.getElementById('bar_1'));
    //     chart.draw(data, google.charts.Bar.convertOptions(options));
    // }

    function drawChartpie_62() {
      var data = google.visualization.arrayToDataTable([

          ['หน่วยงานภาคส่วนของรัฐ', 'งบประมาณปีพ.ศ.62'],
          ['กระทรวงศึกษาธิการ',	7856.96],
          ['กระทรวงเกษตรและสหกรณ์',	2092.98],
          ['ระทรวงมหาดไทย',	1501.63],
          ['อื่นๆ',	983.87],
          ['กระทรวงวิทยาศาสตร์และเทคโนโลย', 592.53],
          ['กระทรวงสาธารณสุข',	571.81],
          ['กระทรวงกลาโหม',	184.49],
          ['กระทรวงวัฒนธรรม',	77.83],
          ['กระทรวงการคลัง',	37.90],
          ['กระทรวงแรงงาน',	24.94],
          ['กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์',	21.39],
          ['กระทรวงยุติธรรม',	13.12],
          ['กระทรวงพลังงาน',	10.53],
          ['กระทรวงการท่องเที่ยวและกีฬา',	6.91],
          ['กระทรวงอุตสาหกรรม',	6.12],
          ['กระทรวงพาณิชย์',	0.79],
          ['สำนักนายกรัฐมนตรี',	0.38],
      ]);
      var options = {
          title: 'งบประมาณประจำปี พ.ศ. 62 (ล้านบาท)'
      };
      var chart = new google.visualization.PieChart(document.getElementById('pie_62'));
      chart.draw(data, options);
    }

    function drawChartpie_61() {
      var data = google.visualization.arrayToDataTable([

          ['หน่วยงานภาคส่วนของรัฐ', 'งบประมาณปีพ.ศ.61 (ล้านบาท)' ],
          ['กระทรวงพาณิชย์',	9859.98],
          ['กระทรวงศึกษาธิการ',	7250.49],
          ['กระทรวงเกษตรและสหกรณ์',	1905.89],
          ['กระทรวงสาธารณสุข',	1077.39],
          ['อื่นๆ',	995.61],
          ['กระทรวงมหาดไทย',	992.31],
          ['กระทรวงวิทยาศาสตร์และเทคโนโลย',	511.16],
          ['กระทรวงกลาโหม',	221.95],
          ['กระทรวงวัฒนธรรม',	90.08],
          ['กระทรวงยุติธรรม',	77.29],
          ['กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์',	56.65],
          ['กระทรวงการท่องเที่ยวและกีฬา',	22.41],
          ['กระทรวงแรงงาน',	14.48],
          ['กระทรวงการคลัง',	9.12],
          ['สำนักนายกรัฐมนตรี',	7.00],
          ['กระทรวงอุตสาหกรรม',	0.50],
          ['กระทรวงพลังงาน',	0.03],
      ]);
      var options = {
          title: 'งบประมาณประจำปี พ.ศ. 61'
      };
      var chart = new google.visualization.PieChart(document.getElementById('pie_61'));
      chart.draw(data, options);
    }

    function drawChartdes_62() {
      var data = google.visualization.arrayToDataTable([
          ['งบประมาณปีพ.ศ.62', 'Mean', 'Median', 'Std'],
          [' ', 1358.372764, 37.9006, 1855.880159]
      ]);
      var options = {
          chart: {
              title: 'ค่าทางสถิติ งบประมาณปีพ.ศ.62',
          },
          bars: 'horizontal', // Required for Material Bar Charts.
          hAxis: { format: 'decimal' },
          height: 400,
          colors: ['#4c91d1', '#4c91d1', '#4c91d1']
      };
      var chart = new google.charts.Bar(document.getElementById('des_62'));
        chart.draw(data, google.charts.Bar.convertOptions(options));
    }

    function drawChartdes_61() {
      var data = google.visualization.arrayToDataTable([
          ['งบประมาณปีพ.ศ.61', 'Mean', 'Median', 'Std'],
          [' ', 822.5977408, 90.0842, 2717.250102]
      ]);
      var options = {
          chart: {
              title: 'ค่าทางสถิติ งบประมาณปีพ.ศ.61',
          },
          bars: 'horizontal', // Required for Material Bar Charts.
          hAxis: { format: 'decimal' },
          height: 400,
          colors: ['#4c91d1', '#4c91d1', '#4c91d1']
      };
      var chart = new google.charts.Bar(document.getElementById('des_61'));
        chart.draw(data, google.charts.Bar.convertOptions(options));
    }