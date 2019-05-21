  google.charts.load('current', {packages: ['corechart', 'line', 'bar']});
  google.charts.setOnLoadCallback(drawChartL);
  google.charts.setOnLoadCallback(drawChartpie_62);
  google.charts.setOnLoadCallback(drawChartpie_61);
  google.charts.setOnLoadCallback(drawChartdes_62);
  google.charts.setOnLoadCallback(drawChartdes_61);

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