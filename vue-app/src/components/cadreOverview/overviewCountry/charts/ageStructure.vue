<template>
	<div class="chart">
		<label>{{title}}</label>
		<IEcharts :option="pie" :loading="loadingFlag" @ready="onReady"></IEcharts>
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
                            label: {
                                normal: {
                                    show: true,
                                    color: '#aaa',
                                    fontSize: '12',
	                                formatter(data){
		                                return `${data.name}   ${data.value}%`
	                                }
                                },
                            },
                            labelLine: {
                                normal: {
                                    show: false
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

                console.log(instance);
            },
        }
    }
</script>