<template>
    <div></div>
</template>

<style scoped>
    div {
        margin: 0 auto;
        height : 120px;
        width: 120px;
        border-radius: 50%;
        border-top: 5px solid rgb(234 88 12);
        border-right: 5px solid rgb(234 88 12);
        border-left: 5px solid rgb(234 88 12);
        border-bottom: 5px solid transparent;
        animation: loading 1.8s linear 0s infinite;
    }

    @keyframes loading {
        from {
            transform: rotate(0);
        }
        to {
            transform : rotate(360deg);
        }
    }
</style>