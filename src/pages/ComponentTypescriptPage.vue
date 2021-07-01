<template>
    <div>
        <h1>ComponentTypescriptPage</h1>
        <p>
            Counter's value is
            <span class="counter">{{ counter }}</span
            >.
        </p>
        <button @click="incrementCounter">Increment counter</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        incrementCounter(): void {
            this.counter += 1;
        },
    },
});
</script>
