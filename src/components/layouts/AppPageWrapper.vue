<template>
  <div id="page-wrapper">
    <div class="container-fluid">
      <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
          <h4 class="page-title">{{page}}</h4> </div>
        <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">

          <ol class="breadcrumb">
            <li><a href="#">{{title}}</a></li>
            <li class="active">{{page}}</li>
          </ol>
        </div>

      </div>
    </div>
    <!-- /.container-fluid -->
    <app-footer></app-footer>
  </div>
</template>
<script>

import AppFooter from '../layouts/AppFooter.vue'
  export default{
    props: ['name'],
    components: {AppFooter},
    data(){
      return {
        title: 'Wergu Yaram',
        page: 'Tableau de bord',
      }
    }
  }
</script>
