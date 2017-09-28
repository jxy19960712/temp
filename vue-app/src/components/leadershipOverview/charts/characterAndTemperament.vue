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
                    timeline: {
                        axisType: 'category',
                        orient: 'vertical',
                        autoPlay: true,
                        inverse: true,
                        playInterval: 1000,
                        left: null,
                        right: 0,
                        top: 20,
                        bottom: 20,
                        width: 55,
                        height: null,
                        label: {
                            normal: {
                                textStyle: {
                                    color: '#999'
                                }
                            },
                            emphasis: {
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        symbol: 'none',
                        lineStyle: {
                            color: '#555'
                        },
                        checkpointStyle: {
                            color: '#bbb',
                            borderColor: '#777',
                            borderWidth: 2
                        },
                        controlStyle: {
                            showNextBtn: false,
                            showPrevBtn: false,
                            normal: {
                                color: '#666',
                                borderColor: '#666'
                            },
                            emphasis: {
                                color: '#aaa',
                                borderColor: '#aaa'
                            }
                        },
                        data: []
                    },
                    backgroundColor: '#404a59',
                    xAxis: {
                        type: 'log',
                        name: '人均收入',
                        max: 100000,
                        min: 300,
                        nameGap: 25,
                        nameLocation: 'middle',
                        nameTextStyle: {
                            fontSize: 18
                        },
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#ccc'
                            }
                        },
                        axisLabel: {
                            formatter: '{value} $'
                        }
                    },
                    yAxis: {
                        type: 'value',
                        name: '平均寿命',
                        max: 100,
                        nameTextStyle: {
                            color: '#ccc',
                            fontSize: 18
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#ccc'
                            }
                        },
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            formatter: '{value} 岁'
                        }
                    },
                    visualMap: [
                        {
                            show: false,
                            dimension: 3,
                            categories: data.counties,
                            calculable: true,
                            precision: 0.1,
                            textGap: 30,
                            textStyle: {
                                color: '#ccc'
                            },
                            inRange: {
                                color: (function () {
                                    var colors = ['#bcd3bb', '#e88f70', '#edc1a5', '#9dc5c8', '#e1e8c8', '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8', '#bda29a'];
                                    return colors.concat(colors);
                                })()
                            }
                        }
                    ],
                    series: [
                        {
                            type: 'scatter',
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
            },
        }
    }
</script>