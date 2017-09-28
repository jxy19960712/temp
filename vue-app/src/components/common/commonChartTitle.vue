<template>
	<div class="common-charttitle-container">
		<div :class="'title '+titleStyle">
			<span :class="icon"></span>
			<label>{{title}}</label>
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
        },
        mounted() {
            this.determineStyle()
        },
        methods: {
            determineStyle() {
                switch (this.titleStyle) {
                    case "triangle":
//                        alert('dsds')
                }
            }
        }
    }
</script>
<style lang="scss">
	@import "src/css/common.scss";
</style>