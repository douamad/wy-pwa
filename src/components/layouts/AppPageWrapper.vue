<template>
  <div id="page-wrapper">
    <div class="container-fluid">
      <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
          <h4 class="page-title">{{pageName}}</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
          <a  href="#" class="btn btn-danger pull-right m-l-20 btn-rounded btn-outline hidden-xs hidden-sm waves-effect waves-light">Admission Patient</a>
          <ol class="breadcrumb">
            <li><a href="#">{{title}}</a></li>
            <li class="active">{{pageName}}</li>
          </ol>
        </div>

      </div>
      <!-- .row -->
      <div class="row el-element-overlay">
        <patient-thumb v-for="patient in patients" :key="patients" :patient="patient"></patient-thumb>
      </div>
      <!-- /.row -->

    </div>
    <!-- /.container-fluid -->
    <app-footer></app-footer>
  </div>
</template>
<script>

  import AppFooter from '../layouts/AppFooter.vue'
  import PatientThumb from '../patients/PatientThumb.vue'
  export default{
    props: ['pageName'],
    components: {AppFooter, PatientThumb},
    data(){
      return {
        title: 'Wergu Yaram',
        patients: [{
            nomComplet: 'Amadou Camara',
            sexe: 'Masculin',
            age: 26,
            profession: 'Informaticient'
          },
          {
            nomComplet: 'Ousmane Camara',
            sexe: 'Masculin',
            age: 26,
            profession: 'Mecanicien'
          },
          {
            nomComplet: 'Diaraye Diallo',
            sexe: 'Feminin',
            age: 26,
            profession: 'Marketeur'
          }]
      }
    },
    methods : {

    }
  }
</script>
