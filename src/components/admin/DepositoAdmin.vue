<template>
    <div class="deposito-admin">
        <b-form>
            <input id="deposito-id" type="hidden" v-model="depositos.id"/>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Valor:" label-for="deposito-valor">
                        <b-form-input id="valor" type="text"
                            v-model="deposito.valor" required
                            placeholder="Digite o valor para depósito..."/>
                    </b-form-group>
                    <b-form-group label="Conta:" label-for="saque-valor">
                        <b-form-input id="id_conta"  type="text"
                            v-model="deposito.id_conta" required
                            placeholder="Digite sua conta..."/>
                    </b-form-group>
                </b-col>
            </b-row>  
            <b-row>
                <b-col xs="12">
                    <b-button variant="primary"
                        @click="save">Salvar</b-button>
                    <b-button class="ml-2" @click="reset">Cancelar</b-button>
                </b-col>
            </b-row>  
        </b-form> 
        <hr>
        <h5>Histórico</h5>
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