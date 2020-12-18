<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Home"
            sub="Informações sobre suas transações " />
    
        <div class="admin-pages-tabs"> 
            <b-card no-body>
                <b-tabs card> 
                    <b-tab title="Depósito" >
                        <DepositoAdmin />
                    </b-tab>
                    <b-tab title="Saque">
                        <SaqueAdmin />
                    </b-tab>
                    <b-tab title="Extrato">
                        <SaldoAdmin />
                    </b-tab>
                </b-tabs>     
            </b-card>     
        </div>    
    </div>
</template>

<script>

import PageTitle from '@/components/template/PageTitle'
//import Stat from './Stat'
import axios from 'axios'
import {baseApiUrl} from '@/global'
import DepositoAdmin from '@/components/admin/DepositoAdmin'
import SaqueAdmin from '@/components/admin/SaqueAdmin'
import SaldoAdmin from '@/components/admin/SaldoAdmin'



export default{
    name:'Home',
    components: {PageTitle, DepositoAdmin,SaqueAdmin,SaldoAdmin},
    // data() {
    //     return {
    //         stat: {}
    //     }
    // },
    methods:{
        getStats(){
            axios.get(`${baseApiUrl}/movimentacao`).then(
                res => {
                    console.log(res);
                    this.stat = res.data
                }
            )
        }
    },
    mounted(){
        this.getStats()  
    }

}
</script>

<style>
    .infor {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap
    }    
</style>