<template>
<div>
    {{progress}}
    <upload :updata='updata' browse_button='up' @on-add="UploadAdd" @on-uploaded='Uploaded' @on-progress='Progress'>
        <button slot='button' id='up'>test</button>
    </upload>
</div>
</template>
<script>
import upload from "./test.vue";
export default {
  components: {
    upload
  },
  data() {
    return {
      updata: "",
      url:'',
      progress:''
    };
  },
  methods: {
    UploadAdd() {
      var self = this;
      this.ajax
        .get("/aliosstoken")
        .then(function(res) {
          self.updata = res.data.data;
        })
        .catch(function(err) {
          if (err.status_code == 404) {
            alert(err.message);
          }
        });
    },
    Uploaded(url){
        this.url=url;
    },
    Progress(pro){
        this.progress=pro;
    }
  }
};
</script>
