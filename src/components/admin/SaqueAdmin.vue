<template>
    <div class="saque-admin">
        <b-form>
            <input id="saque-id" type="hidden" v-model="saques.valor"/>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Valor:" label-for="saque-valor">
                        <b-form-input id="valor" type="text"
                            v-model="saque.valor" required
                            placeholder="Digite o valor para saque..."/>
                    </b-form-group>
                    <b-form-group label="Conta:" label-for="saque-valor">
                        <b-form-input id="id_conta" type="text"
                            v-model="saque.id_conta" required
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
        <b-table hover striped :items="saques.historico_saque"></b-table>
    </div>    
</template>

<script>
import {baseApiUrl, showError} from '@/global'
import axios from 'axios'

export default{
    name:'SaqueAdmin',
    data: function() {
        return {
            saque: {},
            saques:[]
        };
    },
    methods:{
        loadSaques(){
            axios.get(`${baseApiUrl}/movimentacao`).then(
                res => {
                    this.saques = res.data
                }
            )
        },
        reset() {  
                this.saque = {}  
                this.loadSaques()
        }, 
        save() {
            if(this.saque.id_conta!='29800' && this.saque.id_conta!='29801'){
                alert("Verifique o número da conta");
            }else{
                this.saque.id_tipo_movimentacao=1,
                axios['post'](`${baseApiUrl}/movimentacao`, this.saque)
                    .then(() => {
                        this.$toasted.global.defaultSuccess()
                        this.reset()
                    })
                    .catch(showError)                
            }
        },    
        mounted(){
            this.loadSaques()
        }        
    },    
}
</script>

<style>


</style>