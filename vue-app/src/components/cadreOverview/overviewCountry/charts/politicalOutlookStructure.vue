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
        props: ['title', 'chartData'],
        data() {
            return {
                loadingFlag: true,
                pie: {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    series: [
                        {
                            name: this.title,
                            type: 'pie',
                            radius: ['20%', '40%'],
                            avoidLabelOverlap: true,
                            itemStyle:{
                                normal:{
                                    label: {
                                        show: true,
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