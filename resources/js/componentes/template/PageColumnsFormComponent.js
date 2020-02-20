Vue.component('page-columns-form-component',{
    template:`
        <div class="column" :id="idColumn" style="border:1px solid black;  text-align:center;" :style="{width:columnsW+'%'}"></div>
        `,
        mounted(){
            
            const lista = this.$el;
            Sortable.create(lista,{
                animation:150,
                group:  'display-columns' 
            })
        },
    props:['columnsW','idColumn']
    
})