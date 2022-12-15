<template>
    <div>
        <form class="letters">
            <input 
                v-for="num in count" 
                :key="num" 
                v-model="mask[num-1]"
                class="letter" 
                type="text"
                maxlength="1"
            >
        </form>
    </div>
</template>

<script>
export default {
    props:{
        count: {},
        mask: {}
    },
    setup(props){
        const { count, mask } = props

        Array.from({length: count}, (v,k) => mask[k] = "")
        
        return {
            count,
            mask
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/base.scss';

.letters {
    display: flex;

    .letter {
        width: 30px;
        margin: 0 10px;
        padding: 5px 10px;
        border-radius: 5px;
        border: 1px solid $border_color1;
        text-align: center;
        text-transform: uppercase;
        color: $text_color1;
        font-size: 30px;
        outline: none;
    }
}
</style>