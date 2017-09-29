<template>
	<div class="chart">
		<IEcharts :option="scatterOption" :loading="loadingFlag" @ready="onReady"></IEcharts>
	</div>
</template>
<script>
    import IEcharts from 'vue-echarts-v3/src/full.vue';
    import data from './life-expectancy.json';

    //模拟数据
    var itemStyle = {
        normal: {
            opacity: 0.8,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    };

    var sizeFunction = function (x) {
        var y = Math.sqrt(x / 5e8) + 0.1;
        return y * 80;
    };
    // Schema:
    var schema = [
        {name: 'Income', index: 0, text: '人均收入', unit: '美元'},
        {name: 'LifeExpectancy', index: 1, text: '人均寿命', unit: '岁'},
        {name: 'Population', index: 2, text: '总人口', unit: ''},
        {name: 'Country', index: 3, text: '国家', unit: ''}
    ];
    export default {
        props: ['title', 'chartData'],
        data() {
            return {
                loadingFlag: true,
                scatterOption: {
                    series: [
                        {
                            type: 'pie',
                            itemStyle: itemStyle,
                            data: data.series[0],
                            symbolSize: function(val) {
                                return sizeFunction(val[2]);
                            }
                        }
                    ],
                    animationDurationUpdate: 1000,
                    animationEasingUpdate: 'quinticInOut'
                }
            }
        },
        components: {
            IEcharts
        },
        mounted() {

        },
        methods: {
            onReady(instance) {
                this.loadingFlag = false;
                this.makePies();
            },
			makePies(){

			}
        }
    }
</script>