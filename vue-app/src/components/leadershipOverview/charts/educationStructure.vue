<template>
	<div>
		<div class="chart">
			<label>{{title}}</label>
			<IEcharts :option="pie" :loading="loadingFlag" @ready="onReady"></IEcharts>
		</div>
	</div>
</template>
<script>
    import IEcharts from 'vue-echarts-v3/src/full.vue';


    export default {
        components: {
            IEcharts
        },
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
                            radius: ['45%', '60%'],
                            bottom: 20,
                            avoidLabelOverlap: false,
	                        itemStyle:{
                                normal:{
                                    label: {
                                        show: true,
//                                        borderWidth: '#fff',
//	                                    borderWidth: 3,
	                                    fontSize:14,
                                        formatter(data){
                                            return `${data.value}人`
                                        },
	                                    color:'#999'
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
                    color: ['#fad000','#b0dd08','#f94701','#f29200']
                },
            }
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