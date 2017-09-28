<template>
	<div>
		<div class="chart">
			<label>{{title}}</label>
			<IEcharts :option="bar" :loading="loadingFlag" @ready="onReady"></IEcharts>
		</div>
	</div>
</template>
<script>
    import IEcharts from 'vue-echarts-v3/src/full.vue';

    
    var dataAxis = ['村级领导', '乡级领导', '县级领导', '市级领导', '省级领导'];
    var data = [1, 3, 5, 7, 9];
    var yMax = 500;
    var dataShadow = [];
    export default {
        props: ['title', 'chartData'],
        data() {
            return {
                loadingFlag: true,
                bar: {
                    xAxis: {
                        data: dataAxis,
                        axisLabel: {
                            inside: false,
                            textStyle: {
                                color: '#fff',
                                fontSize:'10px'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        z: 10
                    },
                    yAxis: {
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#999'
                            }
                        }
                    },
                    dataZoom: [
                        {
                            type: 'inside'
                        }
                    ],
                    series: [
                        {
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: '#fff',

                                },
                                emphasis: {
                                    color: '#fff'
                                }
                            },
	                        label:{
                                normal:{
                                    fontWeight:'bolder',
                                    fontSize:233
                                }
	                        },
                            barWidth:10,
                            data: data
                        }
                    ]
                },
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

                console.log(instance);
            },
        }
    }
</script>