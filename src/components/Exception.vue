<template>
    <div>
        {{exception}}<br>
        <label v-for="letter in alphabet" :key="letter">
            {{letter}}
            <input v-model="exception" :value="letter" type="checkbox"/>
        </label>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    props:{
        exception: {}
    },
    setup(props){
        const exception = ref(props.exception)
        const alphabet = [
            'a', 'б', 'в', 'г', 
            'д', 'е', 'ж', 'з', 
            'и', 'й', 'к', 'л', 
            'м', 'н', 'о', 'п', 
            'р', 'с', 'т', 'у', 
            'ф', 'х', 'ц', 'ч', 
            'ш', 'щ', 'ъ', 'ы', 
            'ь', 'э', 'ю', 'я'
        ]

        return {
            alphabet,
            exception
        }
    }
}
</script>