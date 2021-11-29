<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Cadastro Crinça</ion-title>
      </ion-toolbar>
    </ion-header>
    <!-- Content -->
    <ion-content :fullscreen="true">
      <!-- Accordion -->
      <div>
        <accordion :list="section1">
            <dados-basicos />
        </accordion>
        <accordion :list="section2">
            <documentos-crianca />
        </accordion>
        <accordion :list="section3">
            <responsavel-crianca />
        </accordion>
        <accordion :list="section4">
            <endereco-crianca />
        </accordion>
        <accordion :list="section5">
            <escola-crianca />
        </accordion>
        <accordion :list="section6">
            <ocorrencia-crianca />
        </accordion>
        <accordion :list="section7">
                     <medida-crianca />

        </accordion>
      </div>
    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import { defineComponent } from "vue";
<<<<<<< HEAD
import { searchCircle, filterCircle, add } from "ionicons/icons";
import accordion from "@/components/accordion.vue";
import item from "@/components/item.vue";
<<<<<<< HEAD
=======
=======
import { searchCircle, filterCircle } from "ionicons/icons";
import accordion from "@/components/accordion.vue";
// import item from "@/components/item.vue";
import DadosBasicos from '@/components/criancas/form/DadosBasicos.vue'
import DocumentosCrianca from '@/components/criancas/form/DocumentosCrianca.vue'
import ResponsavelCrianca from '@/components/criancas/form/ResponsavelCrianca.vue'
import EnderecoCrianca from '@/components/criancas/form/EnderecoCrianca.vue'
import EscolaCrianca from '@/components/criancas/form/EscolaCrianca.vue'
import OcorrenciaCrianca from '@/components/criancas/form/OcorrenciaCrianca.vue'
import MedidaCrianca from '@/components/criancas/form/MedidaCrianca.vue'
>>>>>>> 9fdb20a07ac046e3c5a2d93c6436fd61103d08ff
>>>>>>> e8761b8d2c09c39867f2cd2dc8dda83edcc4db27

export default defineComponent({
  name: 'formulario',
  components: {
    accordion,
    // item,
    DadosBasicos,
    DocumentosCrianca,
    ResponsavelCrianca,
    EnderecoCrianca,
    EscolaCrianca,
    OcorrenciaCrianca,
    MedidaCrianca
  },
  setup() {
    const section1 = [
    {id: 1, name: "Dados Básicos", info: {nome: "nome", data: "Data", sexo: "Sexo"}},
    ]
    const section2 = [
    {id: 2, name: "Documentos", info: {cpf: "CPF", rg: "RG", ola: "OLA"}},
    ]
    const section3 = [
    {id: 3, name: "Responsável", info: {}},
    ]
    const section4 = [
    {id: 4, name: "Endereço", info: {}},
    ]
    const section5 = [
    {id: 5, name: "Escola", info: {}},
    ]
    const section6 = [
    {id: 6, name: "Ocorrência", info: {}},
    ]
    const section7 = [
    {id: 7, name: "Medida", info: {}}
    ];

    return {
      section1,
      section2,
      section3,
      section4,
      section5,
      section6,
      section7,
      searchCircle,
      filterCircle,
    }
  }
})
</script>
