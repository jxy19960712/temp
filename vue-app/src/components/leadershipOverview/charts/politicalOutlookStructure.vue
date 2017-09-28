<template>
	<div class="chart">
		<label>{{title}}</label>
		<IEcharts :option="pie" :loading="loadingFlag" @ready="onReady"></IEcharts>
	</div>
</template>
<script>
    import IEcharts from 'vue-echarts-v3/src/full.vue';

    export default {
        props: ['title', 'chartData'],
        data() {
            return {
                loadingFlag: true,
                pie: {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'horizontal',
                        bottom: 0,
                        data: this.getLegendData(),
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    series: [
                        {
                            name: this.title,
                            type: 'pie',
                            radius: ['45%', '70%'],
                            avoidLabelOverlap: true,
                            itemStyle:{
                                normal:{
                                    label: {
                                        show: true,
                                        color:'#999',
                                        formatter(data){
                                            return `${data.value}人`
                                        },
                                    },
                                    labelLine: {
                                        show: true,
	                                    lineStyle:{
                                            color:'#999'
	                                    }
                                    },
                                }
                            },
                            data: this.chartData
                        }
                    ],
                    color: ['#01c6fd','#f868ae']
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
            getLegendData() {
                let result = [];
                for (let item in this.chartData) {
                    result.push(this.chartData[item].name);
                }
                return result
            }
        }
    }
</script>