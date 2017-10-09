<template>
    <div class="chart">
        <!--<svg width="650" height="200" font-family="sans-serif" font-size="10" text-anchor="middle"></svg>-->
    </div>
</template>
<script>
    import data from './life-expectancy.json';
    import * as d3 from '../../../assets/js/d3.min.js';

    //模拟数据
    const charistic = {
        children: [{
            name: '多血质',
            value: 650
        }, {
            name: '多血质',
            value: 600
        }, {
            name: '多血质',
            value: 450
        }, {
            name: '多血质',
            value: 400
        }, {
            name: '多血质',
            value: 350
        }, {
            name: '多血质',
            value: 300
        }, {
            name: '多血质',
            value: 250
        }, {
            name: '多血质',
            value: 200
        }, {
            name: '多血质',
            value: 150
        }, {
            name: '多血质',
            value: 100
        }, {
            name: '多血质',
            value: 50
        }]
    }

    export default {
        props: ['title', 'chartData'],
        data() {
            return {
                loadingFlag: true,

            }
        },
        components: {},
        mounted() {
            this.makeBubbles();
        },
        methods: {
            makeBubbles(){
                var width = 650,
                    height = 200,
                    svg = d3.select('.overview-characterandtemperament-wrapper .chart').append('svg').attr('width', width).attr('height', height),
                    pack = d3.layout.pack().size([width, height]),
                    color = d3.scale.category20();

                svg.selectAll('circle').data(pack.nodes(charistic)).enter().append('circle').attr('cx', d => {
                    return d.x;
                }).attr('cy', d => {
                    return d.y;
                }).attr('r', d => {
                    return d.r;
                }).attr('fill', (d, i) => {
                    return color(i);
                }).append('title').attr('class','common-packlayouttitle-item').text(d => {
                    return d.name
                })
            }
        }
    }
</script>