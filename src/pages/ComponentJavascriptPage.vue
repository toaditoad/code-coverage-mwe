<template>
    <div>
        <h1>ComponentJavascriptPage</h1>
        <p>
            Counter's value is
            <span class="counter">{{ counter }}</span
            >.
        </p>
        <button @click="incrementCounter">Increment counter</button>
    </div>
</template>

<script>
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export default {
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        incrementCounter() {
            this.counter += 1;
        },
    },
};
</script>
