<template>
	<div class="common-title-container">
		<div :class="'title '+titleStyle">
			<span></span>
			<label>{{title}}</label>
		</div>
		<div class="desc">
			<span></span>
			<label>{{desc}}</label>
		</div>
	</div>
</template>

<script>
    export default {
        props: {
            icon: String,
            title: String,
            titleStyle: {
                type: String,
                default: '',
                required: false
            }
        },
        data() {
            return {
                desc: '干部大数据可视化',

            }
        }
    }
</script>
<style lang="scss">
	@import "src/css/common.scss";
</style>