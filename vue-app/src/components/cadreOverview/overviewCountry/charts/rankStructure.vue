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
                            radius: ['0%','70%'],
                            center: ['50%', '50%'],
	                        minAngle: 0,
                            roseType: 'radius',
                            avoidLabelOverlap: true,
                            label: {
                                normal: {
                                    show: true,
                                    color: '#aaa',
                                    fontSize: '12'
                                },
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: this.chartData.sort(function (a, b) { return a.value - b.value; })
                        }
                    ]
                },
            }
        },
        components: {
            IEcharts
        },
        mounted() {
            console.log(this.chartData)
        },
        methods: {
            onReady(instance) {
                this.loadingFlag = false;

                console.log(instance);
            },
        }
    }
</script>