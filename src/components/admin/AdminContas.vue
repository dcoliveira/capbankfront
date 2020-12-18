<template>
    <div class="admin_contas">
        <PageTitle icon="fa fa-home" main="Administração de contas"
            sub="Tudo" />
    </div>
</template>

<script>
import PageTitle from '@/components/template/PageTitle'

export default{
    name:'AdminContas',
    components: {PageTitle}

}
</script>

<style>
    .content {
        grid-area: content;
        background-color: #efefef;
    }

</style>