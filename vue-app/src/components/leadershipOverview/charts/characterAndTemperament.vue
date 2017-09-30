<template>
	<div class="chart">
		<!--<svg width="650" height="200" font-family="sans-serif" font-size="10" text-anchor="middle"></svg>-->
	</div>
</template>
<script>
    import data from './life-expectancy.json';
    import * as d3 from '../../../assets/js/d3.min.js';

    //模拟数据
	const charistic=[{
        name:'多血质',
        value:200
    },{
        name:'多血质',
        value:150
    },{
        name:'多血质',
        value:100
    },{
        name:'多血质',
        value:50
    }]

    export default {
        props: ['title', 'chartData'],
        data() {
            return {
                loadingFlag: true,

            }
        },
        components: {

        },
        mounted() {
			this.makebubbles();
        },
        methods: {
			makebubbles(){
			    console.log(d3)
                var svg=d3.select('.overview-characterAndTemperament-wrapper .chart').append('svg').attr('width',650).attr('height',200)
				for (var index in charistic){
			        const originCoordin=200;
                    svg.append('circle').attr('cx',charistic[index].value+'px').attr('cy',charistic[index].value+'px').attr('r',charistic[index].value/2).attr('fill','red')
				}
			}
        }
    }
</script>