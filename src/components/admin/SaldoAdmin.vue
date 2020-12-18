<template>
    <div class="saldo-admin">
        <b-form>
            
                <b-col xs="12">
                    <b-button variant="primary" @click="reset">Visualizar</b-button>
                </b-col>
        </b-form> 
        <hr>
        <h5>Extrato</h5>
        <b-table hover striped :items="depositos.historico"></b-table>
    </div>    
</template>

<script>
import {baseApiUrl,showError} from '@/global'
import axios from 'axios'

export default{
    name:'DepositoAdmin',
    data: function() {
         return {
            deposito: {},
            depositos:[]
        }
    },
    methods:{
        loadDepositos() {
           axios.get(`${baseApiUrl}/movimentacao`).then(
               //console.log(res),
                res => {
                    this.depositos = res.data
                }

            )
        },
        reset() {
            this.deposito = {}
            this.loadDepositos()
        }, 
        save() {
            if(this.deposito.id_conta!="29800" && this.deposito.id_conta!="29801"){
                alert("Verifique o número da conta");
            }else{

                this.deposito.id_tipo_movimentacao=2,
                axios['post'](`${baseApiUrl}/movimentacao`, this.deposito)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
            }       
        },      
        mounted(){
            this.loadDepositos()
        }
    },               

}
</script>

<style>


</style>