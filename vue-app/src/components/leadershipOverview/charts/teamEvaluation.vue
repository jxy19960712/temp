<template>
	<div class="chart">
		<IEcharts :option="pieOptionArray[0]" :loading="loadingFlag" @ready="onReady"></IEcharts>
		<IEcharts :option="pieOptionArray[1]" :loading="loadingFlag" @ready="onReady"></IEcharts>
		<IEcharts :option="pieOptionArray[2]" :loading="loadingFlag" @ready="onReady"></IEcharts>
		<IEcharts :option="pieOptionArray[3]" :loading="loadingFlag" @ready="onReady"></IEcharts>
	</div>
</template>
<script>
    import IEcharts from 'vue-echarts-v3/src/full.vue';

    //模拟数据
    const mockData = [{
        text: 'aaa',
        value: 555
    }, {
        text: 'bbb',
        value: 666
    }, {
        text: 'ccc',
        value: 777
    }, {
        text: 'ddd',
        value: 888
    }]
    export default {
        props: ['title', 'chartData'],
        data() {
            return {
                loadingFlag: true,
                pieOptionArray: [{
                    title: '222',
                    series: [],
                    color: ['#837ce6']
                }, {
                    title: '222',
                    series: [],
                    color: ['#ee4e40']
                }, {
                    title: '222',
                    series: [],
                    color: ['#f29200']
                }, {
                    title: '222',
                    series: [],
                    color: ['#00aed0']
                }],
            }
        },
        components: {
            IEcharts
        },
        mounted() {
            for (let index in this.pieOptionArray) {
                this.pieOptionArray[index].title = this.titleOptions(mockData[index].text)
                this.pieOptionArray[index].series = this.chartSeriesData(mockData[index].value)
            }
        },
        methods: {
            onReady(instance) {
                this.loadingFlag = false;
            },
            chartSeriesData(data) {
                return [{
                    name: 'dsds',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    avoidLabelOverlap: true,
                    label: {
                        normal: {
                            show: true,
                            fontSize: '20',
                            position: 'center',
                            color: '#fff',
                            formatter(data) {
                                return `${data.value}`
                            }
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                        value: data
                    }]
                }]
            },
            titleOptions(text) {
                return {
                    text: text,
                    left: 'center',
                    bottom: 0,
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
        }
    }
</script>