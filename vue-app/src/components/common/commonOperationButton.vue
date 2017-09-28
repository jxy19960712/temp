<template>
	<div :class="'common-operationbutton-item '+className">
		<a>
			<span :class="'icon '+icon"></span>
			<label>{{title}}</label>
		</a>
		<span class="underline">
			<i v-for="item in underlineSegments" :style="{backgroundColor:item.backgroundColor,transform:transform}"></i>
		</span>
	</div>
</template>

<script>
    export default {
        props: ['className', 'icon', 'title', 'transform'],
        data() {
            return {}
        },
        computed: {
            underlineSegments() {
                let segments = [{
                    backgroundColor: '#052232',
                }, {
                    backgroundColor: '#044057',
                }, {
                    backgroundColor: '#037b9f',
                }, {
                    backgroundColor: '#00cbff',
                }]
                return segments;
            }
        }
    }
</script>
<style lang="scss">
	@import "src/css/common.scss";
</style>