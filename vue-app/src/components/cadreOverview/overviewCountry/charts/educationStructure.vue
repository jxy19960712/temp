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
    import commonOverviewTitle from '../../../common/commonOverviewTitle.vue'

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
                        bottom: 30,
                        data: this.getLegendData(),
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    series: [
                        {
                            name: this.title,
                            type: 'pie',
                            radius: ['30%', '50%'],
                            bottom: 50,
                            avoidLabelOverlap: false,
	                        itemStyle:{
                                normal:{
                                    label: {
                                        show: true,
                                        borderWidth: '#fff',
	                                    borderWidth: 3,
                                        formatter(data){
                                            return `${data.value}%`
                                        },
	                                    color:'#999'
                                    },
                                    labelLine: {
                                        show: false
                                    },
                                }
	                        },

                            data: this.chartData
                        }
                    ]
                }
            }
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