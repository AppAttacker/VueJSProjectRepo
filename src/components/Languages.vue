<template>
<div>
    <h3>Known Languages:</h3>
    <span v-text="'UserName: '+this.user.toUpperCase()"></span>
    
    <ol>
        <li>English</li>
        <li>French</li>
    </ol>
</div>
</template>

<script>
export default {
    props: ["user"]
}
</script>