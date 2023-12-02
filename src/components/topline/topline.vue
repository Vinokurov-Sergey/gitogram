<template>
    <div class="c-topline">
        <div class="x-container">
            <div class="headline">
                <slot name="headline" />
            </div>
            <div class="content" v-if="$slots.content">
                <slot name="content" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.c-topline {
    background: #F1F1F1;
    border-bottom: 1px solid #C6C6C8;
    padding: 42px 0 32px;
}

.content {
    margin-top: 37px;
}
</style>
