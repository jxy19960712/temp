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


    var data = {
        name: ['党政', '经济', '农业', '政法', '信访', '扶贫', '财贸'],
        value: [1, 3, 5, 7, 9, 11, 13],
    };

    var yMax = 500;
    var dataShadow = [];
    export default {
        props: ['title', 'chartData'],
        data() {
            return {
                loadingFlag: true,
                bar: {
                    xAxis: {
                        data: data.name,
                        axisLabel: {
                            inside: false,
                            textStyle: {
                                color: '#fff',
                                fontSize: '10px'
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
                    visualMap: {
                        show: false,
                        min: 0,
                        max: 50,
                        dimension: 0,
                        inRange: {
                            color: ['#4a657a', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055']
                        }
                    },
                    series: [
                        {
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: '#fff'
                                }
                            },
                            label: {
                                normal: {
                                    fontWeight: 'bolder',
                                    fontSize: 23
                                }
                            },
                            barWidth: 20,
                            data: data.value
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
                this.echarts = instance
//				this.bar.series=Object.assign(this.bar.series[0],{
//                    itemStyle:{
//                        normal:{
//                            color: new IEcharts.graphic.LinearGradient(
//                                0, 0, 0, 1,
//                                [
//                                    {offset: 0, color: '#83bff6'},
//                                    {offset: 0.5, color: '#188df0'},
//                                    {offset: 1, color: '#188df0'}
//                                ]
//                            )
//                        }
//                    }
//				})
                console.log(instance);
            },
            getGradient(echarts){
                console.log(echarts)
                return echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#83bff6'},
                        {offset: 0.5, color: '#188df0'},
                        {offset: 1, color: '#188df0'}
                    ]
                )

            }
        }
    }
</script>