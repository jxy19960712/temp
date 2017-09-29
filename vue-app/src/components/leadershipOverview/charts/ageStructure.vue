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
                        bottom: 10,
                        data: this.getLegendData(),
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    series: [
                        {
                            name: this.title,
                            type: 'pie',
                            radius: ['0%', '70%'],
                            avoidLabelOverlap: true,
                            label: {
                                normal: {
                                    show: true,
                                    color: '#aaa',
                                    fontSize: '14',
	                                formatter(data){
		                                return `${data.value}人`
	                                }
                                },
                            },
                            labelLine: {
                                normal: {
                                    show: true,
	                                lineStyle:{
                                        color:'#ccc'
	                                }
                                }
                            },
                            data: this.chartData
                        }
                    ],
                    color: ['#fc8a4f','#01caec','#fbc400','#2ba4a3','#fa9271','#1b649b','#96b7b6','#8a8b9b']
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