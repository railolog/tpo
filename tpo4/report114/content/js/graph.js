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
        data: {"result": {"minY": 404.0, "minX": 0.0, "maxY": 3905.0, "series": [{"data": [[0.0, 404.0], [0.1, 404.0], [0.2, 408.0], [0.3, 408.0], [0.4, 408.0], [0.5, 408.0], [0.6, 408.0], [0.7, 409.0], [0.8, 410.0], [0.9, 410.0], [1.0, 438.0], [1.1, 439.0], [1.2, 439.0], [1.3, 439.0], [1.4, 440.0], [1.5, 440.0], [1.6, 442.0], [1.7, 446.0], [1.8, 446.0], [1.9, 482.0], [2.0, 483.0], [2.1, 483.0], [2.2, 483.0], [2.3, 539.0], [2.4, 547.0], [2.5, 551.0], [2.6, 551.0], [2.7, 556.0], [2.8, 590.0], [2.9, 590.0], [3.0, 593.0], [3.1, 593.0], [3.2, 605.0], [3.3, 612.0], [3.4, 616.0], [3.5, 616.0], [3.6, 617.0], [3.7, 617.0], [3.8, 617.0], [3.9, 617.0], [4.0, 617.0], [4.1, 617.0], [4.2, 617.0], [4.3, 617.0], [4.4, 618.0], [4.5, 618.0], [4.6, 618.0], [4.7, 618.0], [4.8, 618.0], [4.9, 618.0], [5.0, 618.0], [5.1, 618.0], [5.2, 618.0], [5.3, 618.0], [5.4, 618.0], [5.5, 618.0], [5.6, 618.0], [5.7, 618.0], [5.8, 619.0], [5.9, 619.0], [6.0, 619.0], [6.1, 619.0], [6.2, 619.0], [6.3, 619.0], [6.4, 619.0], [6.5, 619.0], [6.6, 619.0], [6.7, 619.0], [6.8, 619.0], [6.9, 619.0], [7.0, 622.0], [7.1, 622.0], [7.2, 645.0], [7.3, 645.0], [7.4, 645.0], [7.5, 646.0], [7.6, 646.0], [7.7, 646.0], [7.8, 646.0], [7.9, 658.0], [8.0, 681.0], [8.1, 683.0], [8.2, 683.0], [8.3, 685.0], [8.4, 686.0], [8.5, 686.0], [8.6, 686.0], [8.7, 695.0], [8.8, 802.0], [8.9, 802.0], [9.0, 804.0], [9.1, 804.0], [9.2, 805.0], [9.3, 805.0], [9.4, 805.0], [9.5, 805.0], [9.6, 805.0], [9.7, 805.0], [9.8, 805.0], [9.9, 805.0], [10.0, 805.0], [10.1, 805.0], [10.2, 805.0], [10.3, 805.0], [10.4, 805.0], [10.5, 805.0], [10.6, 805.0], [10.7, 805.0], [10.8, 805.0], [10.9, 805.0], [11.0, 805.0], [11.1, 805.0], [11.2, 805.0], [11.3, 805.0], [11.4, 805.0], [11.5, 806.0], [11.6, 806.0], [11.7, 806.0], [11.8, 806.0], [11.9, 807.0], [12.0, 807.0], [12.1, 807.0], [12.2, 807.0], [12.3, 828.0], [12.4, 829.0], [12.5, 829.0], [12.6, 830.0], [12.7, 830.0], [12.8, 839.0], [12.9, 839.0], [13.0, 855.0], [13.1, 856.0], [13.2, 858.0], [13.3, 858.0], [13.4, 858.0], [13.5, 858.0], [13.6, 858.0], [13.7, 858.0], [13.8, 858.0], [13.9, 858.0], [14.0, 858.0], [14.1, 858.0], [14.2, 858.0], [14.3, 858.0], [14.4, 858.0], [14.5, 858.0], [14.6, 858.0], [14.7, 858.0], [14.8, 858.0], [14.9, 876.0], [15.0, 878.0], [15.1, 878.0], [15.2, 879.0], [15.3, 880.0], [15.4, 880.0], [15.5, 880.0], [15.6, 880.0], [15.7, 889.0], [15.8, 889.0], [15.9, 889.0], [16.0, 889.0], [16.1, 890.0], [16.2, 890.0], [16.3, 890.0], [16.4, 890.0], [16.5, 890.0], [16.6, 890.0], [16.7, 890.0], [16.8, 890.0], [16.9, 890.0], [17.0, 890.0], [17.1, 890.0], [17.2, 890.0], [17.3, 890.0], [17.4, 890.0], [17.5, 890.0], [17.6, 890.0], [17.7, 890.0], [17.8, 891.0], [17.9, 891.0], [18.0, 891.0], [18.1, 891.0], [18.2, 891.0], [18.3, 901.0], [18.4, 901.0], [18.5, 901.0], [18.6, 903.0], [18.7, 910.0], [18.8, 919.0], [18.9, 919.0], [19.0, 926.0], [19.1, 926.0], [19.2, 926.0], [19.3, 926.0], [19.4, 926.0], [19.5, 926.0], [19.6, 926.0], [19.7, 926.0], [19.8, 926.0], [19.9, 926.0], [20.0, 926.0], [20.1, 926.0], [20.2, 926.0], [20.3, 926.0], [20.4, 926.0], [20.5, 927.0], [20.6, 927.0], [20.7, 927.0], [20.8, 927.0], [20.9, 927.0], [21.0, 927.0], [21.1, 927.0], [21.2, 927.0], [21.3, 927.0], [21.4, 927.0], [21.5, 927.0], [21.6, 928.0], [21.7, 962.0], [21.8, 962.0], [21.9, 962.0], [22.0, 962.0], [22.1, 962.0], [22.2, 963.0], [22.3, 963.0], [22.4, 963.0], [22.5, 963.0], [22.6, 963.0], [22.7, 963.0], [22.8, 963.0], [22.9, 978.0], [23.0, 979.0], [23.1, 980.0], [23.2, 980.0], [23.3, 993.0], [23.4, 993.0], [23.5, 993.0], [23.6, 994.0], [23.7, 994.0], [23.8, 994.0], [23.9, 994.0], [24.0, 994.0], [24.1, 994.0], [24.2, 994.0], [24.3, 994.0], [24.4, 994.0], [24.5, 994.0], [24.6, 995.0], [24.7, 995.0], [24.8, 995.0], [24.9, 995.0], [25.0, 995.0], [25.1, 995.0], [25.2, 995.0], [25.3, 995.0], [25.4, 995.0], [25.5, 995.0], [25.6, 995.0], [25.7, 995.0], [25.8, 995.0], [25.9, 995.0], [26.0, 995.0], [26.1, 996.0], [26.2, 996.0], [26.3, 996.0], [26.4, 1071.0], [26.5, 1072.0], [26.6, 1072.0], [26.7, 1072.0], [26.8, 1072.0], [26.9, 1072.0], [27.0, 1073.0], [27.1, 1073.0], [27.2, 1073.0], [27.3, 1073.0], [27.4, 1073.0], [27.5, 1073.0], [27.6, 1114.0], [27.7, 1118.0], [27.8, 1124.0], [27.9, 1124.0], [28.0, 1124.0], [28.1, 1124.0], [28.2, 1124.0], [28.3, 1124.0], [28.4, 1124.0], [28.5, 1124.0], [28.6, 1124.0], [28.7, 1124.0], [28.8, 1124.0], [28.9, 1124.0], [29.0, 1124.0], [29.1, 1124.0], [29.2, 1124.0], [29.3, 1124.0], [29.4, 1124.0], [29.5, 1124.0], [29.6, 1124.0], [29.7, 1124.0], [29.8, 1124.0], [29.9, 1125.0], [30.0, 1125.0], [30.1, 1125.0], [30.2, 1125.0], [30.3, 1125.0], [30.4, 1126.0], [30.5, 1126.0], [30.6, 1145.0], [30.7, 1146.0], [30.8, 1146.0], [30.9, 1147.0], [31.0, 1147.0], [31.1, 1147.0], [31.2, 1147.0], [31.3, 1147.0], [31.4, 1147.0], [31.5, 1147.0], [31.6, 1147.0], [31.7, 1147.0], [31.8, 1147.0], [31.9, 1147.0], [32.0, 1147.0], [32.1, 1148.0], [32.2, 1148.0], [32.3, 1148.0], [32.4, 1148.0], [32.5, 1177.0], [32.6, 1177.0], [32.7, 1177.0], [32.8, 1177.0], [32.9, 1178.0], [33.0, 1178.0], [33.1, 1178.0], [33.2, 1178.0], [33.3, 1178.0], [33.4, 1180.0], [33.5, 1180.0], [33.6, 1180.0], [33.7, 1180.0], [33.8, 1180.0], [33.9, 1181.0], [34.0, 1181.0], [34.1, 1181.0], [34.2, 1181.0], [34.3, 1226.0], [34.4, 1226.0], [34.5, 1227.0], [34.6, 1228.0], [34.7, 1228.0], [34.8, 1228.0], [34.9, 1228.0], [35.0, 1228.0], [35.1, 1228.0], [35.2, 1228.0], [35.3, 1228.0], [35.4, 1228.0], [35.5, 1251.0], [35.6, 1252.0], [35.7, 1252.0], [35.8, 1252.0], [35.9, 1252.0], [36.0, 1252.0], [36.1, 1252.0], [36.2, 1252.0], [36.3, 1252.0], [36.4, 1253.0], [36.5, 1253.0], [36.6, 1253.0], [36.7, 1275.0], [36.8, 1276.0], [36.9, 1276.0], [37.0, 1276.0], [37.1, 1276.0], [37.2, 1277.0], [37.3, 1277.0], [37.4, 1277.0], [37.5, 1277.0], [37.6, 1281.0], [37.7, 1282.0], [37.8, 1282.0], [37.9, 1282.0], [38.0, 1282.0], [38.1, 1282.0], [38.2, 1282.0], [38.3, 1282.0], [38.4, 1282.0], [38.5, 1282.0], [38.6, 1282.0], [38.7, 1282.0], [38.8, 1282.0], [38.9, 1283.0], [39.0, 1283.0], [39.1, 1283.0], [39.2, 1283.0], [39.3, 1283.0], [39.4, 1283.0], [39.5, 1283.0], [39.6, 1283.0], [39.7, 1284.0], [39.8, 1284.0], [39.9, 1284.0], [40.0, 1284.0], [40.1, 1292.0], [40.2, 1301.0], [40.3, 1301.0], [40.4, 1301.0], [40.5, 1301.0], [40.6, 1305.0], [40.7, 1305.0], [40.8, 1305.0], [40.9, 1305.0], [41.0, 1305.0], [41.1, 1306.0], [41.2, 1306.0], [41.3, 1306.0], [41.4, 1307.0], [41.5, 1317.0], [41.6, 1318.0], [41.7, 1318.0], [41.8, 1318.0], [41.9, 1318.0], [42.0, 1318.0], [42.1, 1318.0], [42.2, 1319.0], [42.3, 1319.0], [42.4, 1325.0], [42.5, 1325.0], [42.6, 1325.0], [42.7, 1325.0], [42.8, 1326.0], [42.9, 1326.0], [43.0, 1326.0], [43.1, 1327.0], [43.2, 1328.0], [43.3, 1328.0], [43.4, 1328.0], [43.5, 1329.0], [43.6, 1329.0], [43.7, 1329.0], [43.8, 1329.0], [43.9, 1329.0], [44.0, 1329.0], [44.1, 1330.0], [44.2, 1330.0], [44.3, 1330.0], [44.4, 1332.0], [44.5, 1332.0], [44.6, 1332.0], [44.7, 1332.0], [44.8, 1332.0], [44.9, 1333.0], [45.0, 1333.0], [45.1, 1333.0], [45.2, 1333.0], [45.3, 1333.0], [45.4, 1334.0], [45.5, 1334.0], [45.6, 1353.0], [45.7, 1354.0], [45.8, 1354.0], [45.9, 1355.0], [46.0, 1355.0], [46.1, 1355.0], [46.2, 1355.0], [46.3, 1355.0], [46.4, 1355.0], [46.5, 1356.0], [46.6, 1356.0], [46.7, 1390.0], [46.8, 1390.0], [46.9, 1390.0], [47.0, 1390.0], [47.1, 1391.0], [47.2, 1391.0], [47.3, 1391.0], [47.4, 1391.0], [47.5, 1392.0], [47.6, 1401.0], [47.7, 1401.0], [47.8, 1420.0], [47.9, 1421.0], [48.0, 1421.0], [48.1, 1421.0], [48.2, 1421.0], [48.3, 1421.0], [48.4, 1429.0], [48.5, 1429.0], [48.6, 1430.0], [48.7, 1430.0], [48.8, 1430.0], [48.9, 1430.0], [49.0, 1430.0], [49.1, 1430.0], [49.2, 1430.0], [49.3, 1431.0], [49.4, 1431.0], [49.5, 1431.0], [49.6, 1431.0], [49.7, 1431.0], [49.8, 1431.0], [49.9, 1431.0], [50.0, 1435.0], [50.1, 1435.0], [50.2, 1435.0], [50.3, 1435.0], [50.4, 1436.0], [50.5, 1436.0], [50.6, 1436.0], [50.7, 1436.0], [50.8, 1436.0], [50.9, 1436.0], [51.0, 1436.0], [51.1, 1436.0], [51.2, 1439.0], [51.3, 1440.0], [51.4, 1440.0], [51.5, 1440.0], [51.6, 1440.0], [51.7, 1440.0], [51.8, 1447.0], [51.9, 1447.0], [52.0, 1447.0], [52.1, 1448.0], [52.2, 1448.0], [52.3, 1448.0], [52.4, 1448.0], [52.5, 1448.0], [52.6, 1449.0], [52.7, 1455.0], [52.8, 1455.0], [52.9, 1465.0], [53.0, 1466.0], [53.1, 1466.0], [53.2, 1467.0], [53.3, 1467.0], [53.4, 1467.0], [53.5, 1467.0], [53.6, 1467.0], [53.7, 1467.0], [53.8, 1487.0], [53.9, 1510.0], [54.0, 1510.0], [54.1, 1510.0], [54.2, 1510.0], [54.3, 1510.0], [54.4, 1511.0], [54.5, 1514.0], [54.6, 1514.0], [54.7, 1526.0], [54.8, 1528.0], [54.9, 1528.0], [55.0, 1528.0], [55.1, 1529.0], [55.2, 1529.0], [55.3, 1529.0], [55.4, 1529.0], [55.5, 1529.0], [55.6, 1529.0], [55.7, 1529.0], [55.8, 1529.0], [55.9, 1530.0], [56.0, 1530.0], [56.1, 1530.0], [56.2, 1530.0], [56.3, 1530.0], [56.4, 1540.0], [56.5, 1541.0], [56.6, 1541.0], [56.7, 1541.0], [56.8, 1541.0], [56.9, 1541.0], [57.0, 1541.0], [57.1, 1541.0], [57.2, 1542.0], [57.3, 1544.0], [57.4, 1545.0], [57.5, 1545.0], [57.6, 1545.0], [57.7, 1545.0], [57.8, 1545.0], [57.9, 1552.0], [58.0, 1552.0], [58.1, 1552.0], [58.2, 1553.0], [58.3, 1553.0], [58.4, 1553.0], [58.5, 1553.0], [58.6, 1553.0], [58.7, 1553.0], [58.8, 1553.0], [58.9, 1560.0], [59.0, 1560.0], [59.1, 1560.0], [59.2, 1560.0], [59.3, 1560.0], [59.4, 1560.0], [59.5, 1560.0], [59.6, 1560.0], [59.7, 1560.0], [59.8, 1561.0], [59.9, 1561.0], [60.0, 1562.0], [60.1, 1562.0], [60.2, 1563.0], [60.3, 1563.0], [60.4, 1563.0], [60.5, 1563.0], [60.6, 1563.0], [60.7, 1565.0], [60.8, 1565.0], [60.9, 1565.0], [61.0, 1565.0], [61.1, 1566.0], [61.2, 1566.0], [61.3, 1567.0], [61.4, 1567.0], [61.5, 1570.0], [61.6, 1596.0], [61.7, 1606.0], [61.8, 1607.0], [61.9, 1607.0], [62.0, 1607.0], [62.1, 1607.0], [62.2, 1607.0], [62.3, 1607.0], [62.4, 1607.0], [62.5, 1607.0], [62.6, 1608.0], [62.7, 1608.0], [62.8, 1608.0], [62.9, 1618.0], [63.0, 1621.0], [63.1, 1621.0], [63.2, 1621.0], [63.3, 1621.0], [63.4, 1622.0], [63.5, 1622.0], [63.6, 1622.0], [63.7, 1628.0], [63.8, 1636.0], [63.9, 1636.0], [64.0, 1636.0], [64.1, 1636.0], [64.2, 1636.0], [64.3, 1636.0], [64.4, 1636.0], [64.5, 1637.0], [64.6, 1637.0], [64.7, 1637.0], [64.8, 1637.0], [64.9, 1637.0], [65.0, 1638.0], [65.1, 1638.0], [65.2, 1638.0], [65.3, 1638.0], [65.4, 1639.0], [65.5, 1639.0], [65.6, 1639.0], [65.7, 1639.0], [65.8, 1639.0], [65.9, 1649.0], [66.0, 1650.0], [66.1, 1650.0], [66.2, 1650.0], [66.3, 1650.0], [66.4, 1651.0], [66.5, 1672.0], [66.6, 1672.0], [66.7, 1681.0], [66.8, 1688.0], [66.9, 1688.0], [67.0, 1688.0], [67.1, 1688.0], [67.2, 1688.0], [67.3, 1689.0], [67.4, 1689.0], [67.5, 1696.0], [67.6, 1696.0], [67.7, 1697.0], [67.8, 1697.0], [67.9, 1697.0], [68.0, 1697.0], [68.1, 1697.0], [68.2, 1712.0], [68.3, 1712.0], [68.4, 1713.0], [68.5, 1713.0], [68.6, 1713.0], [68.7, 1713.0], [68.8, 1713.0], [68.9, 1714.0], [69.0, 1717.0], [69.1, 1717.0], [69.2, 1717.0], [69.3, 1717.0], [69.4, 1717.0], [69.5, 1717.0], [69.6, 1717.0], [69.7, 1731.0], [69.8, 1732.0], [69.9, 1732.0], [70.0, 1732.0], [70.1, 1732.0], [70.2, 1732.0], [70.3, 1740.0], [70.4, 1740.0], [70.5, 1741.0], [70.6, 1742.0], [70.7, 1742.0], [70.8, 1742.0], [70.9, 1742.0], [71.0, 1754.0], [71.1, 1755.0], [71.2, 1755.0], [71.3, 1755.0], [71.4, 1755.0], [71.5, 1755.0], [71.6, 1756.0], [71.7, 1756.0], [71.8, 1774.0], [71.9, 1774.0], [72.0, 1775.0], [72.1, 1776.0], [72.2, 1776.0], [72.3, 1776.0], [72.4, 1783.0], [72.5, 1783.0], [72.6, 1783.0], [72.7, 1807.0], [72.8, 1808.0], [72.9, 1808.0], [73.0, 1808.0], [73.1, 1808.0], [73.2, 1809.0], [73.3, 1809.0], [73.4, 1809.0], [73.5, 1809.0], [73.6, 1810.0], [73.7, 1815.0], [73.8, 1819.0], [73.9, 1819.0], [74.0, 1819.0], [74.1, 1820.0], [74.2, 1820.0], [74.3, 1820.0], [74.4, 1820.0], [74.5, 1820.0], [74.6, 1820.0], [74.7, 1820.0], [74.8, 1822.0], [74.9, 1824.0], [75.0, 1826.0], [75.1, 1833.0], [75.2, 1833.0], [75.3, 1835.0], [75.4, 1835.0], [75.5, 1836.0], [75.6, 1836.0], [75.7, 1836.0], [75.8, 1842.0], [75.9, 1842.0], [76.0, 1842.0], [76.1, 1842.0], [76.2, 1842.0], [76.3, 1842.0], [76.4, 1842.0], [76.5, 1842.0], [76.6, 1842.0], [76.7, 1843.0], [76.8, 1843.0], [76.9, 1843.0], [77.0, 1848.0], [77.1, 1860.0], [77.2, 1867.0], [77.3, 1867.0], [77.4, 1867.0], [77.5, 1868.0], [77.6, 1868.0], [77.7, 1868.0], [77.8, 1869.0], [77.9, 1882.0], [78.0, 1883.0], [78.1, 1887.0], [78.2, 1887.0], [78.3, 1896.0], [78.4, 1897.0], [78.5, 1898.0], [78.6, 1898.0], [78.7, 1898.0], [78.8, 1898.0], [78.9, 1899.0], [79.0, 1899.0], [79.1, 1919.0], [79.2, 1921.0], [79.3, 1942.0], [79.4, 1942.0], [79.5, 1942.0], [79.6, 1942.0], [79.7, 1942.0], [79.8, 1942.0], [79.9, 1942.0], [80.0, 1958.0], [80.1, 1958.0], [80.2, 1959.0], [80.3, 1959.0], [80.4, 1959.0], [80.5, 1959.0], [80.6, 1966.0], [80.7, 1966.0], [80.8, 2008.0], [80.9, 2009.0], [81.0, 2009.0], [81.1, 2009.0], [81.2, 2009.0], [81.3, 2009.0], [81.4, 2080.0], [81.5, 2081.0], [81.6, 2081.0], [81.7, 2081.0], [81.8, 2094.0], [81.9, 2094.0], [82.0, 2094.0], [82.1, 2095.0], [82.2, 2095.0], [82.3, 2095.0], [82.4, 2148.0], [82.5, 2148.0], [82.6, 2148.0], [82.7, 2148.0], [82.8, 2148.0], [82.9, 2148.0], [83.0, 2149.0], [83.1, 2151.0], [83.2, 2152.0], [83.3, 2152.0], [83.4, 2152.0], [83.5, 2152.0], [83.6, 2153.0], [83.7, 2153.0], [83.8, 2188.0], [83.9, 2188.0], [84.0, 2188.0], [84.1, 2188.0], [84.2, 2188.0], [84.3, 2188.0], [84.4, 2188.0], [84.5, 2189.0], [84.6, 2189.0], [84.7, 2189.0], [84.8, 2189.0], [84.9, 2260.0], [85.0, 2260.0], [85.1, 2261.0], [85.2, 2262.0], [85.3, 2264.0], [85.4, 2264.0], [85.5, 2264.0], [85.6, 2264.0], [85.7, 2264.0], [85.8, 2298.0], [85.9, 2298.0], [86.0, 2298.0], [86.1, 2299.0], [86.2, 2299.0], [86.3, 2299.0], [86.4, 2299.0], [86.5, 2380.0], [86.6, 2380.0], [86.7, 2380.0], [86.8, 2535.0], [86.9, 2535.0], [87.0, 2535.0], [87.1, 2535.0], [87.2, 2535.0], [87.3, 2536.0], [87.4, 2562.0], [87.5, 2562.0], [87.6, 2562.0], [87.7, 2563.0], [87.8, 2563.0], [87.9, 2563.0], [88.0, 2563.0], [88.1, 2563.0], [88.2, 2563.0], [88.3, 2563.0], [88.4, 2563.0], [88.5, 2563.0], [88.6, 2567.0], [88.7, 2568.0], [88.8, 2568.0], [88.9, 2568.0], [89.0, 2568.0], [89.1, 2569.0], [89.2, 2569.0], [89.3, 2569.0], [89.4, 2663.0], [89.5, 2663.0], [89.6, 2664.0], [89.7, 2664.0], [89.8, 2665.0], [89.9, 2666.0], [90.0, 2684.0], [90.1, 2684.0], [90.2, 2684.0], [90.3, 2685.0], [90.4, 2685.0], [90.5, 2685.0], [90.6, 2685.0], [90.7, 2712.0], [90.8, 2713.0], [90.9, 2713.0], [91.0, 2713.0], [91.1, 2713.0], [91.2, 2713.0], [91.3, 2713.0], [91.4, 2713.0], [91.5, 2713.0], [91.6, 2714.0], [91.7, 2714.0], [91.8, 2717.0], [91.9, 2717.0], [92.0, 2717.0], [92.1, 2717.0], [92.2, 2717.0], [92.3, 2717.0], [92.4, 2717.0], [92.5, 2718.0], [92.6, 2719.0], [92.7, 2790.0], [92.8, 2790.0], [92.9, 2790.0], [93.0, 2792.0], [93.1, 2792.0], [93.2, 2792.0], [93.3, 2991.0], [93.4, 2991.0], [93.5, 2992.0], [93.6, 2992.0], [93.7, 2992.0], [93.8, 2992.0], [93.9, 2992.0], [94.0, 2992.0], [94.1, 2993.0], [94.2, 3162.0], [94.3, 3165.0], [94.4, 3165.0], [94.5, 3165.0], [94.6, 3165.0], [94.7, 3166.0], [94.8, 3166.0], [94.9, 3166.0], [95.0, 3166.0], [95.1, 3172.0], [95.2, 3173.0], [95.3, 3173.0], [95.4, 3174.0], [95.5, 3175.0], [95.6, 3175.0], [95.7, 3175.0], [95.8, 3175.0], [95.9, 3175.0], [96.0, 3175.0], [96.1, 3175.0], [96.2, 3175.0], [96.3, 3175.0], [96.4, 3279.0], [96.5, 3279.0], [96.6, 3279.0], [96.7, 3280.0], [96.8, 3280.0], [96.9, 3280.0], [97.0, 3280.0], [97.1, 3396.0], [97.2, 3403.0], [97.3, 3403.0], [97.4, 3403.0], [97.5, 3403.0], [97.6, 3405.0], [97.7, 3405.0], [97.8, 3428.0], [97.9, 3428.0], [98.0, 3428.0], [98.1, 3429.0], [98.2, 3430.0], [98.3, 3430.0], [98.4, 3430.0], [98.5, 3640.0], [98.6, 3641.0], [98.7, 3641.0], [98.8, 3641.0], [98.9, 3641.0], [99.0, 3643.0], [99.1, 3891.0], [99.2, 3891.0], [99.3, 3891.0], [99.4, 3902.0], [99.5, 3903.0], [99.6, 3903.0], [99.7, 3903.0], [99.8, 3904.0], [99.9, 3905.0]], "isOverall": false, "label": "config 3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 73.0, "series": [{"data": [[600.0, 43.0], [800.0, 73.0], [900.0, 62.0], [1000.0, 9.0], [1100.0, 52.0], [1200.0, 45.0], [1300.0, 57.0], [1400.0, 48.0], [1500.0, 60.0], [1600.0, 50.0], [1700.0, 34.0], [1800.0, 49.0], [1900.0, 13.0], [2000.0, 13.0], [2100.0, 19.0], [2200.0, 12.0], [2300.0, 2.0], [2500.0, 20.0], [2600.0, 10.0], [2700.0, 20.0], [2900.0, 7.0], [3100.0, 17.0], [3200.0, 5.0], [3300.0, 1.0], [3400.0, 10.0], [3600.0, 5.0], [3800.0, 2.0], [3900.0, 5.0], [400.0, 17.0], [500.0, 7.0]], "isOverall": false, "label": "config 3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 17.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 396.0, "series": [{"data": [[0.0, 17.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 396.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 354.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 53.38734177215191, "minX": 1.71702072E12, "maxY": 57.0, "series": [{"data": [[1.71702078E12, 53.38734177215191], [1.71702072E12, 57.0]], "isOverall": false, "label": "config 3 ($ 5000)", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71702078E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1439.0, "minX": 1.0, "maxY": 1966.0, "series": [{"data": [[2.0, 1921.0], [43.0, 1939.1538461538464], [3.0, 1887.0], [57.0, 1534.377071823203], [4.0, 1822.0], [5.0, 1783.0], [6.0, 1714.0], [7.0, 1672.0], [8.0, 1638.0], [9.0, 1596.0], [10.0, 1567.0], [11.0, 1526.0], [12.0, 1919.0], [13.0, 1896.0], [14.0, 1487.0], [15.0, 1882.0], [16.0, 1848.0], [1.0, 1966.0], [17.0, 1824.0], [18.0, 1783.0], [19.0, 1697.0], [20.0, 1681.0], [21.0, 1628.0], [22.0, 1618.0], [23.0, 1570.0], [24.0, 1514.0], [25.0, 1883.0], [26.0, 1860.0], [27.0, 1455.0], [28.0, 1439.0], [29.0, 1826.0], [30.0, 1815.0]], "isOverall": false, "label": "config 3", "isController": false}, {"data": [[55.13950456323337, 1548.650586701433]], "isOverall": false, "label": "config 3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 57.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 979.6, "minX": 1.71702072E12, "maxY": 1520.75, "series": [{"data": [[1.71702078E12, 1520.75], [1.71702072E12, 1432.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71702078E12, 1040.1666666666667], [1.71702072E12, 979.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71702078E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1179.6908602150538, "minX": 1.71702072E12, "maxY": 1896.1265822784824, "series": [{"data": [[1.71702078E12, 1896.1265822784824], [1.71702072E12, 1179.6908602150538]], "isOverall": false, "label": "config 3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71702078E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1179.6801075268827, "minX": 1.71702072E12, "maxY": 1896.1240506329123, "series": [{"data": [[1.71702078E12, 1896.1240506329123], [1.71702072E12, 1179.6801075268827]], "isOverall": false, "label": "config 3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71702078E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.71702072E12, "maxY": 0.0779569892473117, "series": [{"data": [[1.71702078E12, 0.0], [1.71702072E12, 0.0779569892473117]], "isOverall": false, "label": "config 3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71702078E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 404.0, "minX": 1.71702072E12, "maxY": 3905.0, "series": [{"data": [[1.71702078E12, 3905.0], [1.71702072E12, 2666.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71702078E12, 3166.0], [1.71702072E12, 2009.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71702078E12, 3903.0], [1.71702072E12, 2663.27]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71702078E12, 3403.4], [1.71702072E12, 2264.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71702078E12, 1071.0], [1.71702072E12, 404.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71702078E12, 1637.0], [1.71702072E12, 994.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71702078E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 618.0, "minX": 12.0, "maxY": 2718.5, "series": [{"data": [[32.0, 618.0], [33.0, 1282.5], [69.0, 805.0], [38.0, 1560.0], [82.0, 890.0], [40.0, 1327.5], [12.0, 2718.5], [24.0, 1705.5], [26.0, 2009.0], [52.0, 1332.0], [14.0, 2713.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 82.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 618.0, "minX": 12.0, "maxY": 2718.5, "series": [{"data": [[32.0, 618.0], [33.0, 1282.5], [69.0, 805.0], [38.0, 1560.0], [82.0, 890.0], [40.0, 1327.5], [12.0, 2718.5], [24.0, 1705.5], [26.0, 2009.0], [52.0, 1332.0], [14.0, 2713.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 82.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.633333333333334, "minX": 1.71702072E12, "maxY": 7.15, "series": [{"data": [[1.71702078E12, 5.633333333333334], [1.71702072E12, 7.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71702078E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.2, "minX": 1.71702072E12, "maxY": 6.583333333333333, "series": [{"data": [[1.71702078E12, 6.583333333333333], [1.71702072E12, 6.2]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71702078E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.2, "minX": 1.71702072E12, "maxY": 6.583333333333333, "series": [{"data": [[1.71702078E12, 6.583333333333333], [1.71702072E12, 6.2]], "isOverall": false, "label": "config 3-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71702078E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.2, "minX": 1.71702072E12, "maxY": 6.583333333333333, "series": [{"data": [[1.71702078E12, 6.583333333333333], [1.71702072E12, 6.2]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71702078E12, "title": "Total Transactions Per Second"}},
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

