<template>
    <div id="app">
        <div id="nav">
            <router-link to="/classComponentTypescriptPage"
                >ClassComponentTypescriptPage</router-link
            >
            |
            <router-link to="/classComponentJavascriptPage"
                >ClassComponentJavascriptPage</router-link
            >
            |
            <router-link to="/componentTypescriptPage"
                >ComponentTypescriptPage</router-link
            >
            |
            <router-link to="/componentJavascriptPage"
                >ComponentJavascriptPage</router-link
            >

            <br />

            <router-link to="/untouchedClassComponentTypescriptPage"
                >UntouchedClassComponentTypescriptPage</router-link
            >
            |
            <router-link to="/untouchedClassComponentJavascriptPage"
                >UntouchedClassComponentJavascriptPage</router-link
            >
            |
            <router-link to="/untouchedComponentTypescriptPage"
                >UntouchedComponentTypescriptPage</router-link
            >
            |
            <router-link to="/untouchedComponentJavascriptPage"
                >UntouchedComponentJavascriptPage</router-link
            >
        </div>
        <hr />
        <router-view />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>
