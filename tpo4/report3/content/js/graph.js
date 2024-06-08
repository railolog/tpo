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
        data: {"result": {"minY": 339.0, "minX": 0.0, "maxY": 11001.0, "series": [{"data": [[0.0, 339.0], [0.1, 341.0], [0.2, 346.0], [0.3, 348.0], [0.4, 349.0], [0.5, 352.0], [0.6, 354.0], [0.7, 355.0], [0.8, 357.0], [0.9, 358.0], [1.0, 361.0], [1.1, 364.0], [1.2, 370.0], [1.3, 370.0], [1.4, 371.0], [1.5, 371.0], [1.6, 372.0], [1.7, 374.0], [1.8, 374.0], [1.9, 377.0], [2.0, 378.0], [2.1, 381.0], [2.2, 382.0], [2.3, 383.0], [2.4, 383.0], [2.5, 386.0], [2.6, 390.0], [2.7, 390.0], [2.8, 391.0], [2.9, 393.0], [3.0, 393.0], [3.1, 395.0], [3.2, 395.0], [3.3, 396.0], [3.4, 398.0], [3.5, 399.0], [3.6, 401.0], [3.7, 402.0], [3.8, 402.0], [3.9, 404.0], [4.0, 404.0], [4.1, 404.0], [4.2, 405.0], [4.3, 408.0], [4.4, 408.0], [4.5, 409.0], [4.6, 410.0], [4.7, 412.0], [4.8, 413.0], [4.9, 414.0], [5.0, 415.0], [5.1, 420.0], [5.2, 420.0], [5.3, 422.0], [5.4, 422.0], [5.5, 423.0], [5.6, 424.0], [5.7, 429.0], [5.8, 430.0], [5.9, 431.0], [6.0, 432.0], [6.1, 434.0], [6.2, 434.0], [6.3, 438.0], [6.4, 439.0], [6.5, 441.0], [6.6, 443.0], [6.7, 447.0], [6.8, 450.0], [6.9, 451.0], [7.0, 451.0], [7.1, 453.0], [7.2, 454.0], [7.3, 457.0], [7.4, 459.0], [7.5, 459.0], [7.6, 462.0], [7.7, 463.0], [7.8, 466.0], [7.9, 468.0], [8.0, 469.0], [8.1, 473.0], [8.2, 477.0], [8.3, 479.0], [8.4, 480.0], [8.5, 485.0], [8.6, 485.0], [8.7, 490.0], [8.8, 490.0], [8.9, 493.0], [9.0, 495.0], [9.1, 497.0], [9.2, 498.0], [9.3, 502.0], [9.4, 505.0], [9.5, 507.0], [9.6, 507.0], [9.7, 514.0], [9.8, 515.0], [9.9, 515.0], [10.0, 518.0], [10.1, 521.0], [10.2, 523.0], [10.3, 527.0], [10.4, 530.0], [10.5, 537.0], [10.6, 538.0], [10.7, 538.0], [10.8, 544.0], [10.9, 548.0], [11.0, 550.0], [11.1, 551.0], [11.2, 560.0], [11.3, 565.0], [11.4, 568.0], [11.5, 572.0], [11.6, 577.0], [11.7, 580.0], [11.8, 581.0], [11.9, 582.0], [12.0, 585.0], [12.1, 590.0], [12.2, 591.0], [12.3, 593.0], [12.4, 595.0], [12.5, 603.0], [12.6, 604.0], [12.7, 606.0], [12.8, 612.0], [12.9, 613.0], [13.0, 620.0], [13.1, 621.0], [13.2, 629.0], [13.3, 634.0], [13.4, 637.0], [13.5, 646.0], [13.6, 649.0], [13.7, 660.0], [13.8, 663.0], [13.9, 663.0], [14.0, 669.0], [14.1, 670.0], [14.2, 674.0], [14.3, 674.0], [14.4, 688.0], [14.5, 689.0], [14.6, 690.0], [14.7, 692.0], [14.8, 707.0], [14.9, 710.0], [15.0, 713.0], [15.1, 719.0], [15.2, 726.0], [15.3, 728.0], [15.4, 730.0], [15.5, 730.0], [15.6, 738.0], [15.7, 738.0], [15.8, 748.0], [15.9, 766.0], [16.0, 774.0], [16.1, 795.0], [16.2, 801.0], [16.3, 801.0], [16.4, 804.0], [16.5, 812.0], [16.6, 827.0], [16.7, 827.0], [16.8, 847.0], [16.9, 866.0], [17.0, 884.0], [17.1, 888.0], [17.2, 894.0], [17.3, 898.0], [17.4, 898.0], [17.5, 907.0], [17.6, 918.0], [17.7, 921.0], [17.8, 925.0], [17.9, 927.0], [18.0, 949.0], [18.1, 977.0], [18.2, 1001.0], [18.3, 1026.0], [18.4, 1027.0], [18.5, 1031.0], [18.6, 1031.0], [18.7, 1035.0], [18.8, 1060.0], [18.9, 1060.0], [19.0, 1136.0], [19.1, 1138.0], [19.2, 1148.0], [19.3, 1148.0], [19.4, 1150.0], [19.5, 1150.0], [19.6, 1186.0], [19.7, 1187.0], [19.8, 1207.0], [19.9, 1209.0], [20.0, 1274.0], [20.1, 1275.0], [20.2, 1275.0], [20.3, 1280.0], [20.4, 1281.0], [20.5, 1331.0], [20.6, 1372.0], [20.7, 1372.0], [20.8, 1379.0], [20.9, 1379.0], [21.0, 1402.0], [21.1, 1402.0], [21.2, 1402.0], [21.3, 1402.0], [21.4, 1431.0], [21.5, 1454.0], [21.6, 1546.0], [21.7, 1553.0], [21.8, 1554.0], [21.9, 1554.0], [22.0, 1555.0], [22.1, 1571.0], [22.2, 1577.0], [22.3, 1577.0], [22.4, 1577.0], [22.5, 1578.0], [22.6, 1634.0], [22.7, 1635.0], [22.8, 1653.0], [22.9, 1665.0], [23.0, 1707.0], [23.1, 1709.0], [23.2, 1712.0], [23.3, 1712.0], [23.4, 1785.0], [23.5, 1786.0], [23.6, 1787.0], [23.7, 1787.0], [23.8, 1828.0], [23.9, 1829.0], [24.0, 1841.0], [24.1, 1865.0], [24.2, 1896.0], [24.3, 1898.0], [24.4, 1898.0], [24.5, 1899.0], [24.6, 1899.0], [24.7, 1900.0], [24.8, 1909.0], [24.9, 1910.0], [25.0, 1910.0], [25.1, 1912.0], [25.2, 1912.0], [25.3, 2047.0], [25.4, 2062.0], [25.5, 2131.0], [25.6, 2132.0], [25.7, 2186.0], [25.8, 2187.0], [25.9, 2188.0], [26.0, 2189.0], [26.1, 2189.0], [26.2, 2189.0], [26.3, 2190.0], [26.4, 2190.0], [26.5, 2190.0], [26.6, 2190.0], [26.7, 2242.0], [26.8, 2246.0], [26.9, 2338.0], [27.0, 2341.0], [27.1, 2342.0], [27.2, 2384.0], [27.3, 2415.0], [27.4, 2415.0], [27.5, 2415.0], [27.6, 2415.0], [27.7, 2415.0], [27.8, 2415.0], [27.9, 2444.0], [28.0, 2445.0], [28.1, 2475.0], [28.2, 2476.0], [28.3, 2477.0], [28.4, 2477.0], [28.5, 2477.0], [28.6, 2478.0], [28.7, 2478.0], [28.8, 2478.0], [28.9, 2478.0], [29.0, 2478.0], [29.1, 2479.0], [29.2, 2479.0], [29.3, 2479.0], [29.4, 2479.0], [29.5, 2479.0], [29.6, 2479.0], [29.7, 2479.0], [29.8, 2480.0], [29.9, 2480.0], [30.0, 2480.0], [30.1, 2483.0], [30.2, 2483.0], [30.3, 2483.0], [30.4, 2483.0], [30.5, 2483.0], [30.6, 2483.0], [30.7, 2483.0], [30.8, 2483.0], [30.9, 2483.0], [31.0, 2483.0], [31.1, 2494.0], [31.2, 2494.0], [31.3, 2494.0], [31.4, 2495.0], [31.5, 2495.0], [31.6, 2496.0], [31.7, 2505.0], [31.8, 2505.0], [31.9, 2506.0], [32.0, 2506.0], [32.1, 2506.0], [32.2, 2506.0], [32.3, 2507.0], [32.4, 2507.0], [32.5, 2507.0], [32.6, 2507.0], [32.7, 2507.0], [32.8, 2507.0], [32.9, 2508.0], [33.0, 2508.0], [33.1, 2508.0], [33.2, 2508.0], [33.3, 2523.0], [33.4, 2537.0], [33.5, 2550.0], [33.6, 2550.0], [33.7, 2552.0], [33.8, 2580.0], [33.9, 2594.0], [34.0, 2594.0], [34.1, 2597.0], [34.2, 2597.0], [34.3, 2598.0], [34.4, 2598.0], [34.5, 2598.0], [34.6, 2598.0], [34.7, 2598.0], [34.8, 2598.0], [34.9, 2600.0], [35.0, 2600.0], [35.1, 2611.0], [35.2, 2611.0], [35.3, 2612.0], [35.4, 2612.0], [35.5, 2612.0], [35.6, 2612.0], [35.7, 2612.0], [35.8, 2613.0], [35.9, 2613.0], [36.0, 2613.0], [36.1, 2613.0], [36.2, 2613.0], [36.3, 2614.0], [36.4, 2614.0], [36.5, 2614.0], [36.6, 2614.0], [36.7, 2615.0], [36.8, 2615.0], [36.9, 2616.0], [37.0, 2616.0], [37.1, 2616.0], [37.2, 2616.0], [37.3, 2617.0], [37.4, 2624.0], [37.5, 2624.0], [37.6, 2625.0], [37.7, 2626.0], [37.8, 2626.0], [37.9, 2626.0], [38.0, 2626.0], [38.1, 2626.0], [38.2, 2629.0], [38.3, 2636.0], [38.4, 2638.0], [38.5, 2638.0], [38.6, 2639.0], [38.7, 2639.0], [38.8, 2639.0], [38.9, 2639.0], [39.0, 2639.0], [39.1, 2639.0], [39.2, 2640.0], [39.3, 2640.0], [39.4, 2640.0], [39.5, 2640.0], [39.6, 2640.0], [39.7, 2649.0], [39.8, 2656.0], [39.9, 2723.0], [40.0, 2749.0], [40.1, 2780.0], [40.2, 2783.0], [40.3, 2783.0], [40.4, 2783.0], [40.5, 2784.0], [40.6, 2784.0], [40.7, 2784.0], [40.8, 2784.0], [40.9, 2784.0], [41.0, 2785.0], [41.1, 2785.0], [41.2, 2785.0], [41.3, 2786.0], [41.4, 2787.0], [41.5, 2789.0], [41.6, 2789.0], [41.7, 2789.0], [41.8, 2790.0], [41.9, 2790.0], [42.0, 2826.0], [42.1, 2829.0], [42.2, 2855.0], [42.3, 2857.0], [42.4, 2915.0], [42.5, 2915.0], [42.6, 2915.0], [42.7, 2915.0], [42.8, 2916.0], [42.9, 2917.0], [43.0, 2917.0], [43.1, 2917.0], [43.2, 2938.0], [43.3, 2947.0], [43.4, 2989.0], [43.5, 3015.0], [43.6, 3027.0], [43.7, 3030.0], [43.8, 3044.0], [43.9, 3054.0], [44.0, 3076.0], [44.1, 3077.0], [44.2, 3077.0], [44.3, 3077.0], [44.4, 3077.0], [44.5, 3077.0], [44.6, 3078.0], [44.7, 3078.0], [44.8, 3078.0], [44.9, 3135.0], [45.0, 3148.0], [45.1, 3148.0], [45.2, 3148.0], [45.3, 3148.0], [45.4, 3149.0], [45.5, 3150.0], [45.6, 3177.0], [45.7, 3178.0], [45.8, 3231.0], [45.9, 3256.0], [46.0, 3261.0], [46.1, 3261.0], [46.2, 3261.0], [46.3, 3261.0], [46.4, 3261.0], [46.5, 3261.0], [46.6, 3261.0], [46.7, 3261.0], [46.8, 3261.0], [46.9, 3261.0], [47.0, 3262.0], [47.1, 3262.0], [47.2, 3315.0], [47.3, 3315.0], [47.4, 3316.0], [47.5, 3316.0], [47.6, 3316.0], [47.7, 3316.0], [47.8, 3316.0], [47.9, 3316.0], [48.0, 3317.0], [48.1, 3317.0], [48.2, 3317.0], [48.3, 3317.0], [48.4, 3318.0], [48.5, 3318.0], [48.6, 3318.0], [48.7, 3318.0], [48.8, 3318.0], [48.9, 3319.0], [49.0, 3320.0], [49.1, 3321.0], [49.2, 3348.0], [49.3, 3378.0], [49.4, 3432.0], [49.5, 3445.0], [49.6, 3450.0], [49.7, 3450.0], [49.8, 3451.0], [49.9, 3451.0], [50.0, 3451.0], [50.1, 3451.0], [50.2, 3451.0], [50.3, 3452.0], [50.4, 3516.0], [50.5, 3534.0], [50.6, 3700.0], [50.7, 3701.0], [50.8, 3701.0], [50.9, 3701.0], [51.0, 3701.0], [51.1, 3702.0], [51.2, 3702.0], [51.3, 3702.0], [51.4, 3702.0], [51.5, 3702.0], [51.6, 3702.0], [51.7, 3702.0], [51.8, 3702.0], [51.9, 3702.0], [52.0, 3716.0], [52.1, 3735.0], [52.2, 3768.0], [52.3, 3768.0], [52.4, 3768.0], [52.5, 3769.0], [52.6, 3769.0], [52.7, 3770.0], [52.8, 3820.0], [52.9, 3919.0], [53.0, 3931.0], [53.1, 4078.0], [53.2, 4079.0], [53.3, 4079.0], [53.4, 4079.0], [53.5, 4079.0], [53.6, 4080.0], [53.7, 4080.0], [53.8, 4080.0], [53.9, 4080.0], [54.0, 4080.0], [54.1, 4080.0], [54.2, 4080.0], [54.3, 4080.0], [54.4, 4080.0], [54.5, 4080.0], [54.6, 4080.0], [54.7, 4081.0], [54.8, 4081.0], [54.9, 4122.0], [55.0, 4133.0], [55.1, 4169.0], [55.2, 4169.0], [55.3, 4169.0], [55.4, 4169.0], [55.5, 4169.0], [55.6, 4169.0], [55.7, 4169.0], [55.8, 4169.0], [55.9, 4169.0], [56.0, 4169.0], [56.1, 4169.0], [56.2, 4169.0], [56.3, 4170.0], [56.4, 4170.0], [56.5, 4170.0], [56.6, 4170.0], [56.7, 4170.0], [56.8, 4170.0], [56.9, 4171.0], [57.0, 4171.0], [57.1, 4172.0], [57.2, 4172.0], [57.3, 4172.0], [57.4, 4172.0], [57.5, 4172.0], [57.6, 4172.0], [57.7, 4173.0], [57.8, 4173.0], [57.9, 4224.0], [58.0, 4224.0], [58.1, 4224.0], [58.2, 4224.0], [58.3, 4224.0], [58.4, 4224.0], [58.5, 4224.0], [58.6, 4224.0], [58.7, 4224.0], [58.8, 4224.0], [58.9, 4224.0], [59.0, 4224.0], [59.1, 4224.0], [59.2, 4224.0], [59.3, 4225.0], [59.4, 4225.0], [59.5, 4225.0], [59.6, 4225.0], [59.7, 4225.0], [59.8, 4225.0], [59.9, 4225.0], [60.0, 4225.0], [60.1, 4226.0], [60.2, 4227.0], [60.3, 4227.0], [60.4, 4227.0], [60.5, 4227.0], [60.6, 4228.0], [60.7, 4324.0], [60.8, 4324.0], [60.9, 4324.0], [61.0, 4324.0], [61.1, 4324.0], [61.2, 4325.0], [61.3, 4325.0], [61.4, 4325.0], [61.5, 4325.0], [61.6, 4325.0], [61.7, 4325.0], [61.8, 4325.0], [61.9, 4325.0], [62.0, 4325.0], [62.1, 4326.0], [62.2, 4326.0], [62.3, 4326.0], [62.4, 4327.0], [62.5, 4328.0], [62.6, 4329.0], [62.7, 4332.0], [62.8, 4337.0], [62.9, 4337.0], [63.0, 4337.0], [63.1, 4337.0], [63.2, 4337.0], [63.3, 4338.0], [63.4, 4338.0], [63.5, 4338.0], [63.6, 4338.0], [63.7, 4338.0], [63.8, 4338.0], [63.9, 4338.0], [64.0, 4339.0], [64.1, 4339.0], [64.2, 4339.0], [64.3, 4339.0], [64.4, 4339.0], [64.5, 4339.0], [64.6, 4340.0], [64.7, 4340.0], [64.8, 4340.0], [64.9, 4348.0], [65.0, 4348.0], [65.1, 4392.0], [65.2, 4518.0], [65.3, 4527.0], [65.4, 4592.0], [65.5, 4622.0], [65.6, 4665.0], [65.7, 4665.0], [65.8, 4666.0], [65.9, 4667.0], [66.0, 4667.0], [66.1, 4667.0], [66.2, 4667.0], [66.3, 4668.0], [66.4, 4668.0], [66.5, 4668.0], [66.6, 4668.0], [66.7, 4668.0], [66.8, 4668.0], [66.9, 4669.0], [67.0, 4669.0], [67.1, 4669.0], [67.2, 4723.0], [67.3, 4723.0], [67.4, 4723.0], [67.5, 4723.0], [67.6, 4723.0], [67.7, 4723.0], [67.8, 4723.0], [67.9, 4723.0], [68.0, 4723.0], [68.1, 4723.0], [68.2, 4723.0], [68.3, 4723.0], [68.4, 4724.0], [68.5, 4724.0], [68.6, 4724.0], [68.7, 4725.0], [68.8, 4725.0], [68.9, 4725.0], [69.0, 4725.0], [69.1, 4725.0], [69.2, 4725.0], [69.3, 4725.0], [69.4, 4725.0], [69.5, 4725.0], [69.6, 4725.0], [69.7, 4725.0], [69.8, 4725.0], [69.9, 4725.0], [70.0, 4726.0], [70.1, 4726.0], [70.2, 4726.0], [70.3, 4726.0], [70.4, 4727.0], [70.5, 4727.0], [70.6, 4732.0], [70.7, 4786.0], [70.8, 4824.0], [70.9, 4882.0], [71.0, 4930.0], [71.1, 4996.0], [71.2, 5094.0], [71.3, 5094.0], [71.4, 5094.0], [71.5, 5094.0], [71.6, 5095.0], [71.7, 5095.0], [71.8, 5126.0], [71.9, 5131.0], [72.0, 5193.0], [72.1, 5222.0], [72.2, 5334.0], [72.3, 5364.0], [72.4, 5365.0], [72.5, 5365.0], [72.6, 5365.0], [72.7, 5365.0], [72.8, 5365.0], [72.9, 5365.0], [73.0, 5366.0], [73.1, 5366.0], [73.2, 5366.0], [73.3, 5366.0], [73.4, 5366.0], [73.5, 5366.0], [73.6, 5366.0], [73.7, 5366.0], [73.8, 5388.0], [73.9, 5394.0], [74.0, 5533.0], [74.1, 5586.0], [74.2, 5727.0], [74.3, 5732.0], [74.4, 5792.0], [74.5, 5799.0], [74.6, 5801.0], [74.7, 5801.0], [74.8, 5801.0], [74.9, 5801.0], [75.0, 5801.0], [75.1, 5801.0], [75.2, 5801.0], [75.3, 5801.0], [75.4, 5801.0], [75.5, 5801.0], [75.6, 5801.0], [75.7, 5801.0], [75.8, 5801.0], [75.9, 5801.0], [76.0, 5801.0], [76.1, 5801.0], [76.2, 5802.0], [76.3, 5802.0], [76.4, 5802.0], [76.5, 5802.0], [76.6, 5802.0], [76.7, 5802.0], [76.8, 5802.0], [76.9, 5802.0], [77.0, 5802.0], [77.1, 5802.0], [77.2, 5802.0], [77.3, 5802.0], [77.4, 5802.0], [77.5, 5802.0], [77.6, 5802.0], [77.7, 5803.0], [77.8, 5803.0], [77.9, 5803.0], [78.0, 5803.0], [78.1, 5803.0], [78.2, 5803.0], [78.3, 5803.0], [78.4, 5803.0], [78.5, 5805.0], [78.6, 5805.0], [78.7, 5914.0], [78.8, 5914.0], [78.9, 5915.0], [79.0, 5915.0], [79.1, 5916.0], [79.2, 5916.0], [79.3, 5917.0], [79.4, 5917.0], [79.5, 5917.0], [79.6, 5917.0], [79.7, 5917.0], [79.8, 5917.0], [79.9, 5917.0], [80.0, 5918.0], [80.1, 5981.0], [80.2, 5992.0], [80.3, 6126.0], [80.4, 6185.0], [80.5, 6213.0], [80.6, 6267.0], [80.7, 6285.0], [80.8, 6285.0], [80.9, 6286.0], [81.0, 6286.0], [81.1, 6286.0], [81.2, 6286.0], [81.3, 6325.0], [81.4, 6362.0], [81.5, 6382.0], [81.6, 6383.0], [81.7, 6383.0], [81.8, 6383.0], [81.9, 6383.0], [82.0, 6383.0], [82.1, 6386.0], [82.2, 6390.0], [82.3, 6435.0], [82.4, 6438.0], [82.5, 6438.0], [82.6, 6438.0], [82.7, 6438.0], [82.8, 6438.0], [82.9, 6438.0], [83.0, 6439.0], [83.1, 6439.0], [83.2, 6439.0], [83.3, 6439.0], [83.4, 6440.0], [83.5, 6440.0], [83.6, 6440.0], [83.7, 6440.0], [83.8, 6440.0], [83.9, 6441.0], [84.0, 6441.0], [84.1, 6441.0], [84.2, 6441.0], [84.3, 6441.0], [84.4, 6441.0], [84.5, 6441.0], [84.6, 6441.0], [84.7, 6441.0], [84.8, 6441.0], [84.9, 6443.0], [85.0, 6444.0], [85.1, 6447.0], [85.2, 6448.0], [85.3, 6448.0], [85.4, 6449.0], [85.5, 6449.0], [85.6, 6449.0], [85.7, 6449.0], [85.8, 6449.0], [85.9, 6449.0], [86.0, 6449.0], [86.1, 6449.0], [86.2, 6449.0], [86.3, 6449.0], [86.4, 6449.0], [86.5, 6449.0], [86.6, 6449.0], [86.7, 6450.0], [86.8, 6450.0], [86.9, 6450.0], [87.0, 6450.0], [87.1, 6450.0], [87.2, 6450.0], [87.3, 6464.0], [87.4, 6464.0], [87.5, 6479.0], [87.6, 6479.0], [87.7, 6479.0], [87.8, 6509.0], [87.9, 6533.0], [88.0, 6579.0], [88.1, 6584.0], [88.2, 6595.0], [88.3, 6612.0], [88.4, 6666.0], [88.5, 6693.0], [88.6, 6738.0], [88.7, 6761.0], [88.8, 6778.0], [88.9, 6787.0], [89.0, 6795.0], [89.1, 6815.0], [89.2, 6822.0], [89.3, 6822.0], [89.4, 6823.0], [89.5, 6823.0], [89.6, 6824.0], [89.7, 6824.0], [89.8, 6825.0], [89.9, 6825.0], [90.0, 6863.0], [90.1, 6890.0], [90.2, 6926.0], [90.3, 6979.0], [90.4, 6992.0], [90.5, 7015.0], [90.6, 7053.0], [90.7, 7092.0], [90.8, 7110.0], [90.9, 7111.0], [91.0, 7111.0], [91.1, 7112.0], [91.2, 7112.0], [91.3, 7112.0], [91.4, 7145.0], [91.5, 7154.0], [91.6, 7155.0], [91.7, 7155.0], [91.8, 7155.0], [91.9, 7156.0], [92.0, 7156.0], [92.1, 7156.0], [92.2, 7156.0], [92.3, 7156.0], [92.4, 7157.0], [92.5, 7157.0], [92.6, 7157.0], [92.7, 7157.0], [92.8, 7157.0], [92.9, 7157.0], [93.0, 7157.0], [93.1, 7157.0], [93.2, 7157.0], [93.3, 7157.0], [93.4, 7157.0], [93.5, 7157.0], [93.6, 7157.0], [93.7, 7157.0], [93.8, 7158.0], [93.9, 7158.0], [94.0, 7158.0], [94.1, 7158.0], [94.2, 7158.0], [94.3, 7158.0], [94.4, 7158.0], [94.5, 7158.0], [94.6, 7158.0], [94.7, 7158.0], [94.8, 7159.0], [94.9, 7159.0], [95.0, 7201.0], [95.1, 7201.0], [95.2, 7202.0], [95.3, 7202.0], [95.4, 7202.0], [95.5, 7202.0], [95.6, 7202.0], [95.7, 7202.0], [95.8, 7290.0], [95.9, 7310.0], [96.0, 7413.0], [96.1, 7492.0], [96.2, 7612.0], [96.3, 7692.0], [96.4, 7850.0], [96.5, 7856.0], [96.6, 7859.0], [96.7, 7863.0], [96.8, 7863.0], [96.9, 7863.0], [97.0, 7863.0], [97.1, 7863.0], [97.2, 7864.0], [97.3, 7864.0], [97.4, 7865.0], [97.5, 7891.0], [97.6, 9386.0], [97.7, 9387.0], [97.8, 9387.0], [97.9, 9387.0], [98.0, 9387.0], [98.1, 9387.0], [98.2, 9588.0], [98.3, 9590.0], [98.4, 9591.0], [98.5, 9591.0], [98.6, 9591.0], [98.7, 9591.0], [98.8, 9591.0], [98.9, 9591.0], [99.0, 9592.0], [99.1, 9592.0], [99.2, 9592.0], [99.3, 9592.0], [99.4, 9600.0], [99.5, 9770.0], [99.6, 10000.0], [99.7, 10202.0], [99.8, 10601.0], [99.9, 10802.0]], "isOverall": false, "label": "config 3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 86.0, "series": [{"data": [[600.0, 34.0], [700.0, 22.0], [800.0, 19.0], [900.0, 11.0], [1000.0, 12.0], [1100.0, 11.0], [1200.0, 11.0], [1300.0, 8.0], [1400.0, 8.0], [1500.0, 15.0], [1600.0, 7.0], [1700.0, 11.0], [1800.0, 14.0], [1900.0, 8.0], [2000.0, 3.0], [2100.0, 19.0], [2300.0, 6.0], [2200.0, 2.0], [2400.0, 67.0], [2500.0, 48.0], [2600.0, 74.0], [2700.0, 32.0], [2800.0, 5.0], [2900.0, 17.0], [3000.0, 21.0], [3100.0, 13.0], [3300.0, 32.0], [3200.0, 22.0], [3400.0, 15.0], [3500.0, 3.0], [3700.0, 33.0], [3800.0, 1.0], [3900.0, 3.0], [4000.0, 27.0], [4100.0, 46.0], [4300.0, 67.0], [4200.0, 41.0], [4600.0, 25.0], [4500.0, 4.0], [4400.0, 1.0], [4700.0, 55.0], [4800.0, 2.0], [5000.0, 10.0], [5100.0, 4.0], [4900.0, 3.0], [5300.0, 27.0], [5200.0, 1.0], [5500.0, 4.0], [5700.0, 5.0], [5800.0, 62.0], [5900.0, 23.0], [6000.0, 1.0], [6100.0, 3.0], [6300.0, 14.0], [6200.0, 12.0], [6500.0, 7.0], [6400.0, 83.0], [6600.0, 5.0], [6700.0, 7.0], [6900.0, 4.0], [6800.0, 17.0], [7100.0, 64.0], [7000.0, 4.0], [7300.0, 2.0], [7400.0, 2.0], [7200.0, 13.0], [7500.0, 1.0], [7600.0, 2.0], [7800.0, 17.0], [7700.0, 1.0], [9100.0, 1.0], [9300.0, 8.0], [9600.0, 1.0], [9400.0, 1.0], [9700.0, 1.0], [9500.0, 18.0], [10200.0, 1.0], [10000.0, 1.0], [9800.0, 1.0], [10600.0, 1.0], [10400.0, 1.0], [11000.0, 1.0], [10800.0, 1.0], [300.0, 53.0], [400.0, 86.0], [500.0, 47.0]], "isOverall": false, "label": "config 3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 72.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1102.0, "series": [{"data": [[0.0, 139.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 183.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1102.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 72.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 90.07136060894378, "minX": 1.71701994E12, "maxY": 159.65393258426968, "series": [{"data": [[1.71701994E12, 90.07136060894378], [1.71702E12, 159.65393258426968]], "isOverall": false, "label": "config 3 ($ 5000)", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71702E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 385.0, "minX": 2.0, "maxY": 9783.166666666664, "series": [{"data": [[2.0, 385.0], [3.0, 390.0], [4.0, 4863.833333333333], [5.0, 2613.0], [6.0, 2612.3333333333335], [7.0, 2051.25], [8.0, 1498.0], [9.0, 1485.5], [10.0, 1491.6666666666667], [11.0, 1707.6], [12.0, 1489.3333333333335], [13.0, 1215.5], [14.0, 1479.6666666666665], [15.0, 1117.111111111111], [16.0, 1325.4285714285716], [17.0, 1050.3], [18.0, 1208.5], [19.0, 1058.6], [20.0, 1061.8], [21.0, 1011.2727272727273], [22.0, 1238.125], [23.0, 1029.181818181818], [24.0, 1041.6363636363635], [25.0, 1368.142857142857], [26.0, 974.3846153846154], [27.0, 1128.6], [28.0, 1089.909090909091], [29.0, 569.5714285714286], [30.0, 588.9000000000001], [31.0, 609.75], [32.0, 2429.153846153846], [33.0, 669.9999999999999], [34.0, 690.5555555555555], [35.0, 723.7777777777778], [36.0, 732.3333333333333], [37.0, 797.6363636363637], [38.0, 854.5], [39.0, 889.4545454545454], [40.0, 892.25], [41.0, 998.2222222222222], [42.0, 1043.4], [43.0, 1140.6666666666667], [44.0, 1090.8333333333333], [45.0, 1205.2857142857142], [46.0, 1315.1428571428573], [48.0, 1351.375], [49.0, 1462.25], [51.0, 1540.4], [53.0, 1690.6999999999998], [56.0, 1929.0000000000002], [59.0, 2102.916666666667], [62.0, 2337.9999999999995], [63.0, 9592.0], [66.0, 2878.411764705882], [67.0, 6449.0], [65.0, 6449.5], [64.0, 6449.0], [70.0, 2786.052631578947], [71.0, 6449.0], [69.0, 6450.0], [68.0, 6449.4], [74.0, 3447.6363636363644], [75.0, 9591.25], [73.0, 9591.333333333334], [72.0, 6449.5], [79.0, 4081.033333333333], [78.0, 8809.0], [83.0, 2950.923076923076], [82.0, 6449.0], [81.0, 6448.0], [80.0, 7496.0], [85.0, 7493.666666666667], [88.0, 2735.962962962963], [92.0, 2515.9655172413795], [96.0, 2459.9354838709673], [100.0, 2445.30303030303], [105.0, 2526.6486486486488], [107.0, 5593.0], [106.0, 4793.0], [110.0, 2603.2972972972975], [111.0, 6693.4], [108.0, 6391.8], [112.0, 7201.875], [117.0, 3061.829268292683], [125.0, 3742.840909090909], [133.0, 4176.019230769232], [135.0, 7158.0], [134.0, 7158.0], [143.0, 7156.0], [142.0, 7158.0], [141.0, 7155.0], [140.0, 7158.0], [139.0, 7157.0], [137.0, 7157.5], [136.0, 7157.333333333333], [144.0, 4659.8703703703695], [150.0, 7156.0], [149.0, 7156.0], [148.0, 7156.0], [147.0, 7156.0], [146.0, 7157.0], [145.0, 7157.0], [155.0, 4974.693877551021], [159.0, 7158.0], [157.0, 7157.272727272727], [164.0, 7292.181818181818], [165.0, 5328.862068965517], [166.0, 9770.0], [163.0, 7157.0], [162.0, 7155.666666666667], [160.0, 7156.0], [174.0, 7091.666666666667], [176.0, 5024.888888888889], [185.0, 6913.875], [186.0, 4672.312500000002], [184.0, 9783.166666666664], [196.0, 6381.0], [199.0, 5194.414634146343], [207.0, 5433.5], [206.0, 5131.0], [205.0, 4531.75], [204.0, 3931.0], [203.0, 3770.0], [201.0, 3770.0], [200.0, 3634.5], [211.0, 7310.0], [215.0, 6195.750000000002], [214.0, 5802.5], [212.0, 5379.666666666667], [210.0, 4785.5], [209.0, 3768.0], [208.0, 4568.6]], "isOverall": false, "label": "config 3", "isController": false}, {"data": [[110.76871657754002, 3726.3489304812815]], "isOverall": false, "label": "config 3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 215.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1171.8333333333333, "minX": 1.71701994E12, "maxY": 4046.35, "series": [{"data": [[1.71701994E12, 4046.35], [1.71702E12, 1715.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71701994E12, 2767.633333333333], [1.71702E12, 1171.8333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71702E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2685.0209324452903, "minX": 1.71701994E12, "maxY": 6185.755056179771, "series": [{"data": [[1.71701994E12, 2685.0209324452903], [1.71702E12, 6185.755056179771]], "isOverall": false, "label": "config 3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71702E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2684.997145575645, "minX": 1.71701994E12, "maxY": 6185.737078651684, "series": [{"data": [[1.71701994E12, 2684.997145575645], [1.71702E12, 6185.737078651684]], "isOverall": false, "label": "config 3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71702E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.16404494382022478, "minX": 1.71701994E12, "maxY": 0.16936251189343468, "series": [{"data": [[1.71701994E12, 0.16936251189343468], [1.71702E12, 0.16404494382022478]], "isOverall": false, "label": "config 3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71702E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 339.0, "minX": 1.71701994E12, "maxY": 11001.0, "series": [{"data": [[1.71701994E12, 7891.0], [1.71702E12, 11001.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71701994E12, 5365.0], [1.71702E12, 8663.000000000031]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71701994E12, 7233.840000000002], [1.71702E12, 10452.999999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71701994E12, 6438.0], [1.71702E12, 9591.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71701994E12, 339.0], [1.71702E12, 4169.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71701994E12, 2611.0], [1.71702E12, 6383.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71702E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 362.0, "minX": 1.0, "maxY": 9393.5, "series": [{"data": [[2.0, 387.5], [33.0, 2507.0], [35.0, 643.0], [37.0, 1418.0], [36.0, 2612.0], [41.0, 3316.0], [45.0, 515.0], [44.0, 4079.0], [47.0, 440.0], [46.0, 612.5], [48.0, 2626.0], [49.0, 4326.0], [50.0, 4591.5], [52.0, 4723.0], [63.0, 6450.0], [65.0, 6362.0], [72.0, 4225.0], [81.0, 6185.0], [98.0, 5802.0], [9.0, 6383.0], [12.0, 1899.0], [14.0, 362.0], [16.0, 2616.0], [1.0, 7310.0], [18.0, 9393.5], [19.0, 2915.0], [20.0, 2889.5], [22.0, 6840.0], [26.0, 371.5], [27.0, 2552.0], [28.0, 1402.0], [29.0, 2479.0], [31.0, 2483.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[81.0, 6980.0], [22.0, 7111.5], [98.0, 4534.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 98.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 362.0, "minX": 1.0, "maxY": 9393.5, "series": [{"data": [[2.0, 387.5], [33.0, 2507.0], [35.0, 643.0], [37.0, 1418.0], [36.0, 2612.0], [41.0, 3316.0], [45.0, 515.0], [44.0, 4079.0], [47.0, 440.0], [46.0, 612.5], [48.0, 2626.0], [49.0, 4326.0], [50.0, 4591.5], [52.0, 4723.0], [63.0, 6450.0], [65.0, 6362.0], [72.0, 4225.0], [81.0, 6185.0], [98.0, 5802.0], [9.0, 6383.0], [12.0, 1899.0], [14.0, 362.0], [16.0, 2616.0], [1.0, 7310.0], [18.0, 9393.5], [19.0, 2915.0], [20.0, 2889.5], [22.0, 6840.0], [26.0, 371.5], [27.0, 2552.0], [28.0, 1402.0], [29.0, 2479.0], [31.0, 2483.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[81.0, 6980.0], [22.0, 7111.5], [98.0, 4534.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 98.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.35, "minX": 1.71701994E12, "maxY": 20.583333333333332, "series": [{"data": [[1.71701994E12, 20.583333333333332], [1.71702E12, 4.35]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71702E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.2, "minX": 1.71701994E12, "maxY": 17.516666666666666, "series": [{"data": [[1.71701994E12, 17.516666666666666], [1.71702E12, 6.216666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71702E12, 1.2]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71702E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.2, "minX": 1.71701994E12, "maxY": 17.516666666666666, "series": [{"data": [[1.71701994E12, 17.516666666666666], [1.71702E12, 6.216666666666667]], "isOverall": false, "label": "config 3-success", "isController": false}, {"data": [[1.71702E12, 1.2]], "isOverall": false, "label": "config 3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71702E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.2, "minX": 1.71701994E12, "maxY": 17.516666666666666, "series": [{"data": [[1.71701994E12, 17.516666666666666], [1.71702E12, 6.216666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71702E12, 1.2]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71702E12, "title": "Total Transactions Per Second"}},
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

