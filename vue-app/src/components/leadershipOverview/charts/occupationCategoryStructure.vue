<template>
    <div class="chart">
        <label>{{title}}</label>
        <IEcharts :option="bar" :loading="loadingFlag" @ready="onReady"></IEcharts>
    </div>
</template>
<script>
    import IEcharts from 'vue-echarts-v3/src/full.vue';

    var data = {
        name: ['党政', '经济', '农业', '政法', '信访', '扶贫', '财贸'],
        value: [1, 3, 5, 7, 9, 11, 13],
    };
    export default {
        props: ['title', 'chartData'],
        data() {
            return {
                loadingFlag: true,
                bar: {}
            }
        },
        components: {
            IEcharts
        },
        mounted() {
        },
        methods: {
            onReady(instance, echarts) {
                this.loadingFlag = false;
                this.getOptions(echarts)
            },
            getOptions(echarts){
                let options = {
                    xAxis: {
                        data: data.name,
                        axisLabel: {
                            inside: false,
                            textStyle: {
                                interval: 0,
                                color: '#fff',
                                fontSize: 12
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
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#ff79db'},
                                            {offset: 1, color: '#fe2b4f'}
                                        ]
                                    )
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
                }
                this.bar = options;
                return options;
            }
        }
    }
</script>