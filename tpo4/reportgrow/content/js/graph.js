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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 339.0, "minX": 0.0, "maxY": 2317.0, "series": [{"data": [[0.0, 339.0], [0.1, 340.0], [0.2, 342.0], [0.3, 342.0], [0.4, 345.0], [0.5, 346.0], [0.6, 347.0], [0.7, 350.0], [0.8, 352.0], [0.9, 355.0], [1.0, 355.0], [1.1, 357.0], [1.2, 358.0], [1.3, 359.0], [1.4, 361.0], [1.5, 363.0], [1.6, 366.0], [1.7, 366.0], [1.8, 372.0], [1.9, 374.0], [2.0, 375.0], [2.1, 379.0], [2.2, 382.0], [2.3, 383.0], [2.4, 385.0], [2.5, 385.0], [2.6, 386.0], [2.7, 389.0], [2.8, 390.0], [2.9, 391.0], [3.0, 391.0], [3.1, 391.0], [3.2, 392.0], [3.3, 393.0], [3.4, 395.0], [3.5, 397.0], [3.6, 397.0], [3.7, 398.0], [3.8, 398.0], [3.9, 398.0], [4.0, 400.0], [4.1, 401.0], [4.2, 404.0], [4.3, 407.0], [4.4, 407.0], [4.5, 407.0], [4.6, 410.0], [4.7, 410.0], [4.8, 415.0], [4.9, 419.0], [5.0, 420.0], [5.1, 421.0], [5.2, 422.0], [5.3, 429.0], [5.4, 429.0], [5.5, 429.0], [5.6, 430.0], [5.7, 430.0], [5.8, 432.0], [5.9, 438.0], [6.0, 440.0], [6.1, 442.0], [6.2, 444.0], [6.3, 445.0], [6.4, 447.0], [6.5, 449.0], [6.6, 450.0], [6.7, 452.0], [6.8, 454.0], [6.9, 455.0], [7.0, 460.0], [7.1, 463.0], [7.2, 470.0], [7.3, 472.0], [7.4, 476.0], [7.5, 478.0], [7.6, 482.0], [7.7, 483.0], [7.8, 485.0], [7.9, 492.0], [8.0, 492.0], [8.1, 500.0], [8.2, 500.0], [8.3, 503.0], [8.4, 504.0], [8.5, 508.0], [8.6, 509.0], [8.7, 511.0], [8.8, 515.0], [8.9, 517.0], [9.0, 519.0], [9.1, 520.0], [9.2, 520.0], [9.3, 521.0], [9.4, 524.0], [9.5, 528.0], [9.6, 529.0], [9.7, 531.0], [9.8, 534.0], [9.9, 534.0], [10.0, 543.0], [10.1, 544.0], [10.2, 546.0], [10.3, 548.0], [10.4, 548.0], [10.5, 549.0], [10.6, 555.0], [10.7, 560.0], [10.8, 563.0], [10.9, 564.0], [11.0, 566.0], [11.1, 568.0], [11.2, 570.0], [11.3, 571.0], [11.4, 578.0], [11.5, 579.0], [11.6, 583.0], [11.7, 586.0], [11.8, 589.0], [11.9, 591.0], [12.0, 593.0], [12.1, 593.0], [12.2, 596.0], [12.3, 597.0], [12.4, 603.0], [12.5, 604.0], [12.6, 604.0], [12.7, 609.0], [12.8, 611.0], [12.9, 611.0], [13.0, 615.0], [13.1, 618.0], [13.2, 618.0], [13.3, 627.0], [13.4, 628.0], [13.5, 629.0], [13.6, 632.0], [13.7, 632.0], [13.8, 636.0], [13.9, 639.0], [14.0, 639.0], [14.1, 641.0], [14.2, 642.0], [14.3, 645.0], [14.4, 646.0], [14.5, 647.0], [14.6, 650.0], [14.7, 652.0], [14.8, 653.0], [14.9, 654.0], [15.0, 655.0], [15.1, 655.0], [15.2, 655.0], [15.3, 657.0], [15.4, 659.0], [15.5, 660.0], [15.6, 661.0], [15.7, 662.0], [15.8, 666.0], [15.9, 668.0], [16.0, 672.0], [16.1, 674.0], [16.2, 675.0], [16.3, 677.0], [16.4, 681.0], [16.5, 682.0], [16.6, 683.0], [16.7, 685.0], [16.8, 686.0], [16.9, 687.0], [17.0, 688.0], [17.1, 689.0], [17.2, 691.0], [17.3, 692.0], [17.4, 694.0], [17.5, 695.0], [17.6, 697.0], [17.7, 697.0], [17.8, 699.0], [17.9, 700.0], [18.0, 701.0], [18.1, 702.0], [18.2, 704.0], [18.3, 705.0], [18.4, 707.0], [18.5, 708.0], [18.6, 708.0], [18.7, 709.0], [18.8, 710.0], [18.9, 710.0], [19.0, 711.0], [19.1, 713.0], [19.2, 713.0], [19.3, 716.0], [19.4, 717.0], [19.5, 718.0], [19.6, 720.0], [19.7, 722.0], [19.8, 726.0], [19.9, 728.0], [20.0, 729.0], [20.1, 729.0], [20.2, 731.0], [20.3, 731.0], [20.4, 731.0], [20.5, 732.0], [20.6, 733.0], [20.7, 733.0], [20.8, 735.0], [20.9, 735.0], [21.0, 737.0], [21.1, 737.0], [21.2, 742.0], [21.3, 742.0], [21.4, 743.0], [21.5, 745.0], [21.6, 745.0], [21.7, 747.0], [21.8, 749.0], [21.9, 750.0], [22.0, 752.0], [22.1, 753.0], [22.2, 754.0], [22.3, 756.0], [22.4, 758.0], [22.5, 758.0], [22.6, 758.0], [22.7, 759.0], [22.8, 759.0], [22.9, 762.0], [23.0, 763.0], [23.1, 765.0], [23.2, 767.0], [23.3, 767.0], [23.4, 767.0], [23.5, 768.0], [23.6, 769.0], [23.7, 773.0], [23.8, 774.0], [23.9, 776.0], [24.0, 778.0], [24.1, 779.0], [24.2, 781.0], [24.3, 782.0], [24.4, 782.0], [24.5, 783.0], [24.6, 783.0], [24.7, 785.0], [24.8, 786.0], [24.9, 786.0], [25.0, 789.0], [25.1, 790.0], [25.2, 791.0], [25.3, 792.0], [25.4, 793.0], [25.5, 793.0], [25.6, 794.0], [25.7, 797.0], [25.8, 798.0], [25.9, 800.0], [26.0, 800.0], [26.1, 803.0], [26.2, 805.0], [26.3, 810.0], [26.4, 811.0], [26.5, 811.0], [26.6, 812.0], [26.7, 812.0], [26.8, 812.0], [26.9, 813.0], [27.0, 814.0], [27.1, 816.0], [27.2, 818.0], [27.3, 820.0], [27.4, 820.0], [27.5, 822.0], [27.6, 822.0], [27.7, 823.0], [27.8, 824.0], [27.9, 825.0], [28.0, 828.0], [28.1, 830.0], [28.2, 831.0], [28.3, 832.0], [28.4, 835.0], [28.5, 836.0], [28.6, 836.0], [28.7, 836.0], [28.8, 837.0], [28.9, 838.0], [29.0, 839.0], [29.1, 839.0], [29.2, 841.0], [29.3, 841.0], [29.4, 842.0], [29.5, 843.0], [29.6, 843.0], [29.7, 845.0], [29.8, 845.0], [29.9, 848.0], [30.0, 849.0], [30.1, 851.0], [30.2, 857.0], [30.3, 858.0], [30.4, 860.0], [30.5, 860.0], [30.6, 862.0], [30.7, 864.0], [30.8, 866.0], [30.9, 866.0], [31.0, 866.0], [31.1, 867.0], [31.2, 868.0], [31.3, 869.0], [31.4, 871.0], [31.5, 871.0], [31.6, 871.0], [31.7, 872.0], [31.8, 875.0], [31.9, 878.0], [32.0, 878.0], [32.1, 879.0], [32.2, 882.0], [32.3, 882.0], [32.4, 883.0], [32.5, 884.0], [32.6, 885.0], [32.7, 888.0], [32.8, 889.0], [32.9, 891.0], [33.0, 892.0], [33.1, 893.0], [33.2, 893.0], [33.3, 894.0], [33.4, 895.0], [33.5, 897.0], [33.6, 901.0], [33.7, 901.0], [33.8, 902.0], [33.9, 903.0], [34.0, 904.0], [34.1, 907.0], [34.2, 907.0], [34.3, 908.0], [34.4, 909.0], [34.5, 910.0], [34.6, 911.0], [34.7, 913.0], [34.8, 914.0], [34.9, 915.0], [35.0, 915.0], [35.1, 917.0], [35.2, 918.0], [35.3, 919.0], [35.4, 921.0], [35.5, 925.0], [35.6, 925.0], [35.7, 927.0], [35.8, 928.0], [35.9, 929.0], [36.0, 932.0], [36.1, 932.0], [36.2, 934.0], [36.3, 934.0], [36.4, 934.0], [36.5, 936.0], [36.6, 939.0], [36.7, 939.0], [36.8, 941.0], [36.9, 941.0], [37.0, 943.0], [37.1, 945.0], [37.2, 947.0], [37.3, 949.0], [37.4, 949.0], [37.5, 952.0], [37.6, 955.0], [37.7, 955.0], [37.8, 955.0], [37.9, 957.0], [38.0, 958.0], [38.1, 958.0], [38.2, 961.0], [38.3, 961.0], [38.4, 961.0], [38.5, 962.0], [38.6, 964.0], [38.7, 964.0], [38.8, 964.0], [38.9, 966.0], [39.0, 967.0], [39.1, 967.0], [39.2, 969.0], [39.3, 970.0], [39.4, 970.0], [39.5, 971.0], [39.6, 972.0], [39.7, 972.0], [39.8, 974.0], [39.9, 974.0], [40.0, 978.0], [40.1, 982.0], [40.2, 983.0], [40.3, 986.0], [40.4, 988.0], [40.5, 988.0], [40.6, 989.0], [40.7, 990.0], [40.8, 990.0], [40.9, 992.0], [41.0, 992.0], [41.1, 993.0], [41.2, 996.0], [41.3, 996.0], [41.4, 998.0], [41.5, 999.0], [41.6, 999.0], [41.7, 1000.0], [41.8, 1000.0], [41.9, 1001.0], [42.0, 1002.0], [42.1, 1002.0], [42.2, 1004.0], [42.3, 1004.0], [42.4, 1005.0], [42.5, 1005.0], [42.6, 1006.0], [42.7, 1007.0], [42.8, 1009.0], [42.9, 1010.0], [43.0, 1011.0], [43.1, 1011.0], [43.2, 1012.0], [43.3, 1013.0], [43.4, 1016.0], [43.5, 1016.0], [43.6, 1018.0], [43.7, 1020.0], [43.8, 1020.0], [43.9, 1021.0], [44.0, 1022.0], [44.1, 1022.0], [44.2, 1025.0], [44.3, 1025.0], [44.4, 1026.0], [44.5, 1026.0], [44.6, 1026.0], [44.7, 1027.0], [44.8, 1028.0], [44.9, 1029.0], [45.0, 1032.0], [45.1, 1033.0], [45.2, 1035.0], [45.3, 1035.0], [45.4, 1036.0], [45.5, 1039.0], [45.6, 1042.0], [45.7, 1042.0], [45.8, 1043.0], [45.9, 1046.0], [46.0, 1048.0], [46.1, 1049.0], [46.2, 1050.0], [46.3, 1050.0], [46.4, 1053.0], [46.5, 1053.0], [46.6, 1057.0], [46.7, 1057.0], [46.8, 1057.0], [46.9, 1060.0], [47.0, 1062.0], [47.1, 1063.0], [47.2, 1068.0], [47.3, 1069.0], [47.4, 1069.0], [47.5, 1070.0], [47.6, 1074.0], [47.7, 1076.0], [47.8, 1079.0], [47.9, 1080.0], [48.0, 1080.0], [48.1, 1082.0], [48.2, 1085.0], [48.3, 1087.0], [48.4, 1087.0], [48.5, 1088.0], [48.6, 1088.0], [48.7, 1090.0], [48.8, 1091.0], [48.9, 1096.0], [49.0, 1098.0], [49.1, 1106.0], [49.2, 1106.0], [49.3, 1108.0], [49.4, 1110.0], [49.5, 1114.0], [49.6, 1117.0], [49.7, 1121.0], [49.8, 1121.0], [49.9, 1121.0], [50.0, 1122.0], [50.1, 1122.0], [50.2, 1127.0], [50.3, 1127.0], [50.4, 1130.0], [50.5, 1131.0], [50.6, 1131.0], [50.7, 1132.0], [50.8, 1134.0], [50.9, 1134.0], [51.0, 1137.0], [51.1, 1137.0], [51.2, 1138.0], [51.3, 1139.0], [51.4, 1140.0], [51.5, 1154.0], [51.6, 1155.0], [51.7, 1155.0], [51.8, 1157.0], [51.9, 1158.0], [52.0, 1158.0], [52.1, 1158.0], [52.2, 1158.0], [52.3, 1161.0], [52.4, 1167.0], [52.5, 1169.0], [52.6, 1171.0], [52.7, 1171.0], [52.8, 1172.0], [52.9, 1174.0], [53.0, 1182.0], [53.1, 1182.0], [53.2, 1184.0], [53.3, 1186.0], [53.4, 1192.0], [53.5, 1192.0], [53.6, 1193.0], [53.7, 1196.0], [53.8, 1201.0], [53.9, 1201.0], [54.0, 1205.0], [54.1, 1207.0], [54.2, 1208.0], [54.3, 1210.0], [54.4, 1210.0], [54.5, 1213.0], [54.6, 1215.0], [54.7, 1215.0], [54.8, 1215.0], [54.9, 1216.0], [55.0, 1216.0], [55.1, 1217.0], [55.2, 1218.0], [55.3, 1219.0], [55.4, 1222.0], [55.5, 1222.0], [55.6, 1225.0], [55.7, 1227.0], [55.8, 1227.0], [55.9, 1228.0], [56.0, 1229.0], [56.1, 1229.0], [56.2, 1231.0], [56.3, 1231.0], [56.4, 1232.0], [56.5, 1234.0], [56.6, 1235.0], [56.7, 1237.0], [56.8, 1237.0], [56.9, 1238.0], [57.0, 1239.0], [57.1, 1242.0], [57.2, 1244.0], [57.3, 1246.0], [57.4, 1248.0], [57.5, 1251.0], [57.6, 1252.0], [57.7, 1252.0], [57.8, 1252.0], [57.9, 1252.0], [58.0, 1252.0], [58.1, 1255.0], [58.2, 1255.0], [58.3, 1257.0], [58.4, 1258.0], [58.5, 1258.0], [58.6, 1258.0], [58.7, 1259.0], [58.8, 1259.0], [58.9, 1260.0], [59.0, 1272.0], [59.1, 1272.0], [59.2, 1274.0], [59.3, 1274.0], [59.4, 1279.0], [59.5, 1280.0], [59.6, 1281.0], [59.7, 1282.0], [59.8, 1282.0], [59.9, 1282.0], [60.0, 1282.0], [60.1, 1282.0], [60.2, 1284.0], [60.3, 1284.0], [60.4, 1285.0], [60.5, 1285.0], [60.6, 1289.0], [60.7, 1290.0], [60.8, 1290.0], [60.9, 1296.0], [61.0, 1297.0], [61.1, 1302.0], [61.2, 1302.0], [61.3, 1303.0], [61.4, 1303.0], [61.5, 1304.0], [61.6, 1305.0], [61.7, 1305.0], [61.8, 1305.0], [61.9, 1306.0], [62.0, 1308.0], [62.1, 1308.0], [62.2, 1310.0], [62.3, 1318.0], [62.4, 1318.0], [62.5, 1319.0], [62.6, 1319.0], [62.7, 1319.0], [62.8, 1329.0], [62.9, 1329.0], [63.0, 1330.0], [63.1, 1331.0], [63.2, 1331.0], [63.3, 1335.0], [63.4, 1336.0], [63.5, 1338.0], [63.6, 1339.0], [63.7, 1339.0], [63.8, 1340.0], [63.9, 1340.0], [64.0, 1340.0], [64.1, 1341.0], [64.2, 1344.0], [64.3, 1352.0], [64.4, 1353.0], [64.5, 1353.0], [64.6, 1358.0], [64.7, 1362.0], [64.8, 1362.0], [64.9, 1363.0], [65.0, 1363.0], [65.1, 1364.0], [65.2, 1364.0], [65.3, 1373.0], [65.4, 1373.0], [65.5, 1373.0], [65.6, 1373.0], [65.7, 1374.0], [65.8, 1375.0], [65.9, 1375.0], [66.0, 1377.0], [66.1, 1379.0], [66.2, 1380.0], [66.3, 1388.0], [66.4, 1388.0], [66.5, 1389.0], [66.6, 1389.0], [66.7, 1390.0], [66.8, 1397.0], [66.9, 1398.0], [67.0, 1403.0], [67.1, 1406.0], [67.2, 1406.0], [67.3, 1406.0], [67.4, 1408.0], [67.5, 1408.0], [67.6, 1408.0], [67.7, 1409.0], [67.8, 1409.0], [67.9, 1412.0], [68.0, 1414.0], [68.1, 1414.0], [68.2, 1415.0], [68.3, 1418.0], [68.4, 1420.0], [68.5, 1421.0], [68.6, 1422.0], [68.7, 1422.0], [68.8, 1423.0], [68.9, 1425.0], [69.0, 1432.0], [69.1, 1432.0], [69.2, 1432.0], [69.3, 1434.0], [69.4, 1434.0], [69.5, 1435.0], [69.6, 1436.0], [69.7, 1441.0], [69.8, 1442.0], [69.9, 1443.0], [70.0, 1443.0], [70.1, 1445.0], [70.2, 1446.0], [70.3, 1446.0], [70.4, 1446.0], [70.5, 1454.0], [70.6, 1455.0], [70.7, 1457.0], [70.8, 1457.0], [70.9, 1458.0], [71.0, 1459.0], [71.1, 1460.0], [71.2, 1463.0], [71.3, 1463.0], [71.4, 1463.0], [71.5, 1466.0], [71.6, 1467.0], [71.7, 1468.0], [71.8, 1469.0], [71.9, 1470.0], [72.0, 1473.0], [72.1, 1474.0], [72.2, 1475.0], [72.3, 1477.0], [72.4, 1481.0], [72.5, 1481.0], [72.6, 1481.0], [72.7, 1482.0], [72.8, 1482.0], [72.9, 1484.0], [73.0, 1485.0], [73.1, 1485.0], [73.2, 1485.0], [73.3, 1485.0], [73.4, 1500.0], [73.5, 1500.0], [73.6, 1503.0], [73.7, 1507.0], [73.8, 1508.0], [73.9, 1508.0], [74.0, 1509.0], [74.1, 1509.0], [74.2, 1510.0], [74.3, 1517.0], [74.4, 1518.0], [74.5, 1521.0], [74.6, 1525.0], [74.7, 1525.0], [74.8, 1526.0], [74.9, 1526.0], [75.0, 1527.0], [75.1, 1527.0], [75.2, 1530.0], [75.3, 1530.0], [75.4, 1531.0], [75.5, 1532.0], [75.6, 1533.0], [75.7, 1533.0], [75.8, 1534.0], [75.9, 1534.0], [76.0, 1534.0], [76.1, 1535.0], [76.2, 1535.0], [76.3, 1536.0], [76.4, 1538.0], [76.5, 1539.0], [76.6, 1539.0], [76.7, 1540.0], [76.8, 1540.0], [76.9, 1540.0], [77.0, 1542.0], [77.1, 1543.0], [77.2, 1550.0], [77.3, 1552.0], [77.4, 1553.0], [77.5, 1553.0], [77.6, 1554.0], [77.7, 1554.0], [77.8, 1555.0], [77.9, 1557.0], [78.0, 1559.0], [78.1, 1559.0], [78.2, 1560.0], [78.3, 1561.0], [78.4, 1565.0], [78.5, 1566.0], [78.6, 1566.0], [78.7, 1567.0], [78.8, 1568.0], [78.9, 1571.0], [79.0, 1572.0], [79.1, 1573.0], [79.2, 1574.0], [79.3, 1574.0], [79.4, 1574.0], [79.5, 1579.0], [79.6, 1579.0], [79.7, 1579.0], [79.8, 1579.0], [79.9, 1580.0], [80.0, 1585.0], [80.1, 1585.0], [80.2, 1587.0], [80.3, 1588.0], [80.4, 1588.0], [80.5, 1589.0], [80.6, 1589.0], [80.7, 1589.0], [80.8, 1591.0], [80.9, 1591.0], [81.0, 1591.0], [81.1, 1591.0], [81.2, 1591.0], [81.3, 1592.0], [81.4, 1593.0], [81.5, 1593.0], [81.6, 1595.0], [81.7, 1596.0], [81.8, 1596.0], [81.9, 1597.0], [82.0, 1597.0], [82.1, 1600.0], [82.2, 1603.0], [82.3, 1603.0], [82.4, 1603.0], [82.5, 1622.0], [82.6, 1632.0], [82.7, 1633.0], [82.8, 1633.0], [82.9, 1633.0], [83.0, 1634.0], [83.1, 1635.0], [83.2, 1637.0], [83.3, 1638.0], [83.4, 1638.0], [83.5, 1639.0], [83.6, 1639.0], [83.7, 1639.0], [83.8, 1639.0], [83.9, 1639.0], [84.0, 1641.0], [84.1, 1643.0], [84.2, 1643.0], [84.3, 1643.0], [84.4, 1644.0], [84.5, 1644.0], [84.6, 1646.0], [84.7, 1646.0], [84.8, 1646.0], [84.9, 1647.0], [85.0, 1647.0], [85.1, 1654.0], [85.2, 1664.0], [85.3, 1665.0], [85.4, 1666.0], [85.5, 1667.0], [85.6, 1667.0], [85.7, 1667.0], [85.8, 1668.0], [85.9, 1668.0], [86.0, 1669.0], [86.1, 1680.0], [86.2, 1683.0], [86.3, 1683.0], [86.4, 1684.0], [86.5, 1685.0], [86.6, 1689.0], [86.7, 1690.0], [86.8, 1690.0], [86.9, 1691.0], [87.0, 1693.0], [87.1, 1697.0], [87.2, 1698.0], [87.3, 1700.0], [87.4, 1700.0], [87.5, 1700.0], [87.6, 1702.0], [87.7, 1726.0], [87.8, 1727.0], [87.9, 1727.0], [88.0, 1728.0], [88.1, 1734.0], [88.2, 1735.0], [88.3, 1735.0], [88.4, 1736.0], [88.5, 1736.0], [88.6, 1749.0], [88.7, 1759.0], [88.8, 1759.0], [88.9, 1760.0], [89.0, 1760.0], [89.1, 1760.0], [89.2, 1761.0], [89.3, 1761.0], [89.4, 1761.0], [89.5, 1761.0], [89.6, 1762.0], [89.7, 1762.0], [89.8, 1762.0], [89.9, 1762.0], [90.0, 1762.0], [90.1, 1762.0], [90.2, 1763.0], [90.3, 1763.0], [90.4, 1764.0], [90.5, 1765.0], [90.6, 1765.0], [90.7, 1766.0], [90.8, 1766.0], [90.9, 1767.0], [91.0, 1767.0], [91.1, 1768.0], [91.2, 1769.0], [91.3, 1769.0], [91.4, 1774.0], [91.5, 1774.0], [91.6, 1774.0], [91.7, 1775.0], [91.8, 1782.0], [91.9, 1783.0], [92.0, 1786.0], [92.1, 1786.0], [92.2, 1787.0], [92.3, 1789.0], [92.4, 1800.0], [92.5, 1812.0], [92.6, 1813.0], [92.7, 1820.0], [92.8, 1844.0], [92.9, 1844.0], [93.0, 1845.0], [93.1, 1845.0], [93.2, 1845.0], [93.3, 1846.0], [93.4, 1846.0], [93.5, 1847.0], [93.6, 1858.0], [93.7, 1860.0], [93.8, 1861.0], [93.9, 1863.0], [94.0, 1864.0], [94.1, 1869.0], [94.2, 1870.0], [94.3, 1870.0], [94.4, 1870.0], [94.5, 1870.0], [94.6, 1884.0], [94.7, 1890.0], [94.8, 1892.0], [94.9, 1892.0], [95.0, 1905.0], [95.1, 1906.0], [95.2, 1908.0], [95.3, 1911.0], [95.4, 1931.0], [95.5, 1932.0], [95.6, 1937.0], [95.7, 1955.0], [95.8, 1983.0], [95.9, 1985.0], [96.0, 1985.0], [96.1, 1990.0], [96.2, 1995.0], [96.3, 1995.0], [96.4, 1997.0], [96.5, 1997.0], [96.6, 2030.0], [96.7, 2030.0], [96.8, 2031.0], [96.9, 2031.0], [97.0, 2032.0], [97.1, 2039.0], [97.2, 2040.0], [97.3, 2040.0], [97.4, 2047.0], [97.5, 2047.0], [97.6, 2047.0], [97.7, 2080.0], [97.8, 2081.0], [97.9, 2082.0], [98.0, 2083.0], [98.1, 2088.0], [98.2, 2093.0], [98.3, 2094.0], [98.4, 2094.0], [98.5, 2102.0], [98.6, 2102.0], [98.7, 2102.0], [98.8, 2163.0], [98.9, 2166.0], [99.0, 2167.0], [99.1, 2198.0], [99.2, 2198.0], [99.3, 2199.0], [99.4, 2248.0], [99.5, 2249.0], [99.6, 2250.0], [99.7, 2278.0], [99.8, 2278.0], [99.9, 2279.0], [100.0, 2317.0]], "isOverall": false, "label": "config 3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 141.0, "series": [{"data": [[2100.0, 14.0], [2300.0, 1.0], [2200.0, 10.0], [600.0, 90.0], [700.0, 130.0], [800.0, 127.0], [900.0, 131.0], [1000.0, 121.0], [1100.0, 78.0], [300.0, 65.0], [1200.0, 119.0], [1300.0, 96.0], [1400.0, 105.0], [1500.0, 141.0], [400.0, 67.0], [1600.0, 86.0], [1700.0, 83.0], [1800.0, 42.0], [1900.0, 27.0], [500.0, 70.0], [2000.0, 31.0]], "isOverall": false, "label": "config 3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 134.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1067.0, "series": [{"data": [[0.0, 134.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1067.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 433.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 3.0769230769230775, "minX": 1.71702108E12, "maxY": 34.603855721392954, "series": [{"data": [[1.71702108E12, 3.0769230769230775], [1.71702114E12, 34.603855721392954]], "isOverall": false, "label": "config 3 ($ 5000)", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71702114E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 466.11764705882354, "minX": 1.0, "maxY": 1829.689393939394, "series": [{"data": [[2.0, 602.0], [3.0, 514.5555555555555], [4.0, 475.75000000000006], [5.0, 476.3076923076923], [6.0, 466.11764705882354], [7.0, 470.27777777777777], [8.0, 480.2631578947369], [9.0, 495.00000000000006], [10.0, 536.3636363636363], [11.0, 575.1428571428572], [12.0, 534.1428571428572], [13.0, 667.1666666666666], [14.0, 653.875], [15.0, 674.0], [16.0, 706.5833333333334], [17.0, 730.2692307692307], [18.0, 749.2499999999999], [19.0, 760.0714285714286], [20.0, 776.3703703703702], [21.0, 793.4642857142857], [22.0, 810.655172413793], [23.0, 834.1851851851851], [24.0, 844.4666666666667], [25.0, 866.1034482758621], [26.0, 889.5172413793106], [27.0, 919.9374999999999], [28.0, 941.8666666666668], [29.0, 962.225806451613], [30.0, 982.1290322580644], [31.0, 1007.6774193548387], [32.0, 1004.2903225806451], [33.0, 1028.0666666666662], [34.0, 1054.8709677419354], [35.0, 1114.5588235294117], [36.0, 1170.4285714285716], [37.0, 1171.862068965517], [38.0, 1220.1290322580644], [39.0, 1238.0], [40.0, 1281.1481481481483], [41.0, 1355.6923076923078], [42.0, 1352.3571428571427], [43.0, 1363.2666666666664], [44.0, 1393.741935483871], [45.0, 1406.638888888889], [46.0, 1469.1666666666665], [47.0, 1514.9090909090905], [48.0, 1472.0000000000002], [49.0, 1519.6756756756754], [50.0, 1616.9032258064515], [51.0, 1635.310344827586], [52.0, 1640.2857142857142], [53.0, 1673.28125], [54.0, 1714.1315789473686], [55.0, 1773.5588235294115], [56.0, 1772.5], [57.0, 1829.689393939394], [1.0, 862.0]], "isOverall": false, "label": "config 3", "isController": false}, {"data": [[34.102203182374616, 1152.050795593636]], "isOverall": false, "label": "config 3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 57.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 68.46666666666667, "minX": 1.71702108E12, "maxY": 6190.8, "series": [{"data": [[1.71702108E12, 100.1], [1.71702114E12, 6190.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71702108E12, 68.46666666666667], [1.71702114E12, 4234.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71702114E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 357.49999999999994, "minX": 1.71702108E12, "maxY": 1164.8980099502478, "series": [{"data": [[1.71702108E12, 357.49999999999994], [1.71702114E12, 1164.8980099502478]], "isOverall": false, "label": "config 3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71702114E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 357.49999999999994, "minX": 1.71702108E12, "maxY": 1164.8886815920391, "series": [{"data": [[1.71702108E12, 357.49999999999994], [1.71702114E12, 1164.8886815920391]], "isOverall": false, "label": "config 3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71702114E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.049751243781094426, "minX": 1.71702108E12, "maxY": 0.26923076923076933, "series": [{"data": [[1.71702108E12, 0.26923076923076933], [1.71702114E12, 0.049751243781094426]], "isOverall": false, "label": "config 3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71702114E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 339.0, "minX": 1.71702108E12, "maxY": 2317.0, "series": [{"data": [[1.71702108E12, 410.0], [1.71702114E12, 2317.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71702108E12, 389.3], [1.71702114E12, 1763.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71702108E12, 410.0], [1.71702114E12, 2167.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71702108E12, 405.45], [1.71702114E12, 1907.1]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71702108E12, 339.0], [1.71702114E12, 358.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71702108E12, 352.0], [1.71702114E12, 1134.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71702114E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 342.0, "minX": 2.0, "maxY": 1762.0, "series": [{"data": [[2.0, 364.0], [32.0, 1141.0], [33.0, 1526.0], [35.0, 1591.0], [34.0, 1689.5], [38.0, 1571.5], [41.0, 1726.0], [40.0, 1643.0], [5.0, 342.0], [8.0, 346.5], [11.0, 355.0], [12.0, 365.0], [14.0, 389.0], [17.0, 395.0], [19.0, 410.0], [20.0, 470.5], [21.0, 563.5], [22.0, 975.0], [23.0, 1762.0], [24.0, 655.0], [25.0, 727.5], [26.0, 1760.0], [27.0, 1029.5], [28.0, 870.5], [29.0, 1155.0], [30.0, 1066.5], [31.0, 1131.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 41.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 342.0, "minX": 2.0, "maxY": 1762.0, "series": [{"data": [[2.0, 364.0], [32.0, 1141.0], [33.0, 1526.0], [35.0, 1591.0], [34.0, 1689.5], [38.0, 1571.5], [41.0, 1726.0], [40.0, 1643.0], [5.0, 342.0], [8.0, 346.5], [11.0, 355.0], [12.0, 365.0], [14.0, 389.0], [17.0, 395.0], [19.0, 410.0], [20.0, 470.5], [21.0, 563.5], [22.0, 975.0], [23.0, 1762.0], [24.0, 655.0], [25.0, 727.5], [26.0, 1760.0], [27.0, 1029.5], [28.0, 870.5], [29.0, 1155.0], [30.0, 1066.5], [31.0, 1131.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 41.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.5, "minX": 1.71702108E12, "maxY": 26.733333333333334, "series": [{"data": [[1.71702108E12, 0.5], [1.71702114E12, 26.733333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71702114E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.43333333333333335, "minX": 1.71702108E12, "maxY": 26.8, "series": [{"data": [[1.71702108E12, 0.43333333333333335], [1.71702114E12, 26.8]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71702114E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.43333333333333335, "minX": 1.71702108E12, "maxY": 26.8, "series": [{"data": [[1.71702108E12, 0.43333333333333335], [1.71702114E12, 26.8]], "isOverall": false, "label": "config 3-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71702114E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.43333333333333335, "minX": 1.71702108E12, "maxY": 26.8, "series": [{"data": [[1.71702108E12, 0.43333333333333335], [1.71702114E12, 26.8]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71702114E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

