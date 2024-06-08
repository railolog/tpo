/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 57.93650793650794, "KoPercent": 42.06349206349206};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.38227513227513227, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.6842105263157895, 500, 1500, "config 3"], "isController": false}, {"data": [0.1318181818181818, 500, 1500, "config 2"], "isController": false}, {"data": [0.0, 500, 1500, "config1"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 378, 159, 42.06349206349206, 814.7486772486773, 362, 1442, 721.0, 1364.1, 1399.0, 1428.21, 17.654476670870114, 3.982601670870113, 2.7240305800756617], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["config 3", 190, 0, 0.0, 534.0263157894738, 362, 721, 552.0, 651.8, 718.0, 721.0, 9.338903907594004, 2.106725393217007, 1.4409636888670436], "isController": false}, {"data": ["config 2", 110, 81, 73.63636363636364, 929.6545454545457, 755, 1139, 953.0, 1038.8, 1101.6499999999999, 1137.79, 5.374505301216592, 1.212412816973665, 0.829269372648654], "isController": false}, {"data": ["config1", 78, 78, 100.0, 1336.5128205128206, 1164, 1442, 1362.0, 1420.1, 1428.05, 1442.0, 3.6429872495446265, 0.821806693989071, 0.562101548269581], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 1,037 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,094 milliseconds, but should not have lasted longer than 840 milliseconds.", 3, 1.8867924528301887, 0.7936507936507936], "isController": false}, {"data": ["The operation lasted too long: It took 1,228 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,347 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,114 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,419 milliseconds, but should not have lasted longer than 840 milliseconds.", 3, 1.8867924528301887, 0.7936507936507936], "isController": false}, {"data": ["The operation lasted too long: It took 1,379 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,399 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 1,402 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 951 milliseconds, but should not have lasted longer than 840 milliseconds.", 3, 1.8867924528301887, 0.7936507936507936], "isController": false}, {"data": ["The operation lasted too long: It took 1,357 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 956 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 924 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,394 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 1,166 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 988 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,429 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,362 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 961 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 958 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 991 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 1,414 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 849 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 968 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,231 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,350 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 964 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 943 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 1,299 milliseconds, but should not have lasted longer than 840 milliseconds.", 3, 1.8867924528301887, 0.7936507936507936], "isController": false}, {"data": ["The operation lasted too long: It took 939 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,390 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,396 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 954 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 959 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,426 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,420 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 850 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 974 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 1,002 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,008 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,168 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 1,367 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 983 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 963 milliseconds, but should not have lasted longer than 840 milliseconds.", 3, 1.8867924528301887, 0.7936507936507936], "isController": false}, {"data": ["The operation lasted too long: It took 1,381 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 915 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 1,361 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,197 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 989 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,303 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 857 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 979 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,139 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,016 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 982 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 1,368 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,192 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 853 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 1,403 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,167 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 992 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,423 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,232 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 977 milliseconds, but should not have lasted longer than 840 milliseconds.", 3, 1.8867924528301887, 0.7936507936507936], "isController": false}, {"data": ["The operation lasted too long: It took 848 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,408 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 895 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 955 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,356 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 952 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,190 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,395 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 994 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,430 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 945 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,343 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 942 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,128 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,366 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 965 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 1,006 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 984 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 1,385 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,279 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 1,093 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 923 milliseconds, but should not have lasted longer than 840 milliseconds.", 3, 1.8867924528301887, 0.7936507936507936], "isController": false}, {"data": ["The operation lasted too long: It took 1,365 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 1,344 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 1,195 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,278 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 996 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,421 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,111 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,442 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 928 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,024 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,355 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,164 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,307 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,029 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 911 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,374 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 1,418 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,039 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,384 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 1,364 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,126 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,412 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,194 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 960 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,428 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 941 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 899 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,345 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, 1.2578616352201257, 0.5291005291005291], "isController": false}, {"data": ["The operation lasted too long: It took 976 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,229 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}, {"data": ["The operation lasted too long: It took 1,281 milliseconds, but should not have lasted longer than 840 milliseconds.", 1, 0.6289308176100629, 0.26455026455026454], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 378, 159, "The operation lasted too long: It took 1,094 milliseconds, but should not have lasted longer than 840 milliseconds.", 3, "The operation lasted too long: It took 1,419 milliseconds, but should not have lasted longer than 840 milliseconds.", 3, "The operation lasted too long: It took 951 milliseconds, but should not have lasted longer than 840 milliseconds.", 3, "The operation lasted too long: It took 1,299 milliseconds, but should not have lasted longer than 840 milliseconds.", 3, "The operation lasted too long: It took 963 milliseconds, but should not have lasted longer than 840 milliseconds.", 3], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": ["config 2", 110, 81, "The operation lasted too long: It took 1,094 milliseconds, but should not have lasted longer than 840 milliseconds.", 3, "The operation lasted too long: It took 951 milliseconds, but should not have lasted longer than 840 milliseconds.", 3, "The operation lasted too long: It took 977 milliseconds, but should not have lasted longer than 840 milliseconds.", 3, "The operation lasted too long: It took 923 milliseconds, but should not have lasted longer than 840 milliseconds.", 3, "The operation lasted too long: It took 963 milliseconds, but should not have lasted longer than 840 milliseconds.", 3], "isController": false}, {"data": ["config1", 78, 78, "The operation lasted too long: It took 1,419 milliseconds, but should not have lasted longer than 840 milliseconds.", 3, "The operation lasted too long: It took 1,299 milliseconds, but should not have lasted longer than 840 milliseconds.", 3, "The operation lasted too long: It took 1,399 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, "The operation lasted too long: It took 1,357 milliseconds, but should not have lasted longer than 840 milliseconds.", 2, "The operation lasted too long: It took 1,232 milliseconds, but should not have lasted longer than 840 milliseconds.", 2], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
