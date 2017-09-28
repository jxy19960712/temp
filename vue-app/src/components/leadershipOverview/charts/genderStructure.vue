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
                            radius: ['50%', '70%'],
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
                        bottom: 0,
                        padding: 0,
                        itemWidth: 20,
                        itemHeight: 20,
                        borderRadius: 150,
                        data: this.getLegendData(),
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    color: ['#ee4e40','#01afd2']
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