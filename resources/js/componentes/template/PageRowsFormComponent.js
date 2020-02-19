Vue.component('page-rows-form-component',{
    template:`
        <div class="row" style="border: 1px solid #ababab; display:flex">
            <page-columns-form-component v-for="column of columns" :columnsW="columnsWidth"></page-columns-form-component>
            <div style="">
                <button class="btn-temporal-ok" @click="columns++">+</button>
                <button class="btn-temporal-bad" @click="columns--">-</button>
            </div>
        </div>
        
    `,
    mounted() {
        // alert("this component is mounted")
    },
    data(){
        return {
            columns:1
        }
    },
    computed:{
        columnsWidth() {
            if (this.columns < 12) {
                return (100 / this.columns)
            } else {
                this.columns = 12
                alert('No se puede tener más de 12 columnas')
                return (100 / 12)
            }
        }
    }
})