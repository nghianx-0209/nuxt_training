<template>
    <div class="fixed footer flex item-center">
        <Button :title="test" />
    </div>
</template>

<style lang="scss">
    .footer {
        width: 100%;
        bottom: 0;
        padding: 8px 48px;
        height: 52px;
        border-top: 1px solid $neutral-color-200;
        box-sizing: border-box;
        justify-content: space-between;
    }
</style>