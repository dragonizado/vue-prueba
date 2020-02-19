Vue.component('page-columns-form-component',{
    template:`
        <div v-for="column of columns" class="column" style="border:1px solid black; min-height:138px; text-align:center;" :style="{width:columnsW+'%'}">hello</div>
        `,
    data(){
        return {
            columns:1
        }
    },
    props:['columnsW']
    
})