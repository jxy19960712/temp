<template>
    <div class="chart">
        <div class="common-legend-wrapper">
            <ul>
                <li v-for="item in legendTitleList">
                    <span :style="{backgroundColor:item.legendColor}"></span>
                    <label>{{item.legendTitle}}</label>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import data from './life-expectancy.json';
    import * as d3 from '../../../assets/js/d3.min.js';
    //模拟数据
    const charistic = {
        children: [{
            name: '多血质200',
            value: 200
        }, {
            name: '多血质100',
            value: 100
        }, {
            name: '多血质150',
            value: 150
        }, {
            name: '多血质50',
            value: 50
        }]
    }
    export default {
        props: ['title', 'chartData'],
        data() {
            return {
                legendTitleList: [],
                legendTitle: '',
                loadingFlag: true,
            }
        },
        mounted() {
            this.makeBubbles();
        },
        methods: {
            makeBubbles(){
                var that = this,
                    width = 200,
                    height = 200,
                    svg = d3.select('.overview-nationstructure-item .chart').append('svg').attr('width', width).attr('height', height),
                    pack = d3.layout.pack().size([width, height]),
                    color = d3.scale.category20();

                svg.selectAll('circle').data(pack.nodes(charistic)).enter().append('circle')
                    .attr('cx', function (d) {
                        console.log(d)
                        return d.x;
                    }).attr('cy', function (d) {
                    return d.y;
                }).attr('r', function (d) {
                    return d.r;
                }).attr('fill', function (d, i) {
                    that.legendTitleList.push({
                        legendColor: color(i),
                        legendTitle: ''
                    })
                    return color(i);
                }).append('title').text(d => {
                    return d.value
                })

                for (var index in charistic.children+1) {
//                    alert(charistic.children.length-index)
                    if(index==0){
                        continue;
                    }else{
                        this.legendTitleList[index].legendTitle = charistic.children[charistic.children.length-index].name
                    }
//                    this.legendTitleList[index].legendTitle = charistic.children[charistic.children.length-index-1].name

                }

            }
        }
    }
</script>