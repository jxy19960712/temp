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
                            radius: ['25%', '50%'],
                            avoidLabelOverlap: true,
                            label: {
                                normal: {
                                    show: true,
                                    color: '#aaa',
                                    fontSize: '12',
                                    distance: 0,
                                    formatter: function (data) {
                                        return data.value + '%';
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
                    legend: {
                        orient: 'horizontal',
                        bottom: 30,
                        padding: 0,
                        itemWidth: 20,
                        itemHeight: 20,
                        borderRadius: 150,
                        data: this.getLegendData(),
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    color: ['#ed4e3f','#a85851']
                }

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