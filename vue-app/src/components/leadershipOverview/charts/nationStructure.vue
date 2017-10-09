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
    var charistic = {
        children: [{
            name: '多血质400',
            value: 400
        }, {
            name: '多血质100',
            value: 100
        }, {
            name: '多血质20',
            value: 20
        }, {
            name: '多血质150',
            value: 150
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

                //对数据进行排序
                for(var unfix=charistic.children.length-1; unfix>0; unfix--){
                    for(var i=0; i<unfix;i++){
                        if(charistic.children[i].value>charistic.children[i+1].value){
                            var temp = charistic.children[i];
                            charistic.children.splice(i,1,charistic.children[i+1]);
                            charistic.children.splice(i+1,1,temp);
                        }
                    }
                }
                console.log(charistic.children)

                svg.selectAll('circle').data(pack.nodes(charistic)).enter().append('circle')
                    .attr('cx', function (d) {
                        return d.x;
                    }).attr('cy', function (d) {
                    return d.y;
                }).attr('r', function (d) {
                    return d.r;
                }).attr('fill', function (d, i) {
                    if(i==0){
                        return;
                    }
                    that.legendTitleList.push({
                        legendColor: color(i),
                        legendTitle: ''
                    })
                    return color(i);
                }).append('title').text(d => {
                    return d.value
                })

                for(var index=1;index<=charistic.children.length;index++){
                    this.legendTitleList[index].legendTitle = charistic.children[index-1].name
//                    if(i==0){
//                        continue;
//                    }else{
//                        debugger
//                        this.legendTitleList[index].legendTitle = charistic.children[charistic.children.length-index].name
//                    }
                }
//                console.log(this.legendTitleList)
            }
        }
    }
</script>