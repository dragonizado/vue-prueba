Vue.component('page-columns-form-component',{
    template:`
        <div class="column" :id="idColumn" style="border:1px solid black;  text-align:center;" :style="{width:columnsW+'%'}"></div>
        `,
        mounted(){
            
            const lista = this.$el;
            Sortable.create(lista,{
                animation:150,
                group:  'display-columns' ,
                store: {
                    // Guardar el orden de la lista
                    set: (sortable) => {
                        const orden = sortable.toArray();
                        localStorage.setItem(sortable.options.group.name, orden.join('|'));
                    },
                    // obtener el orden de la lista
                    get: (sortable) => {
                        const orden = localStorage.getItem(sortable.options.group.name)
                        return orden ? orden.split('|') : [];
                    }
                }
            })
        },
    props:['columnsW','idColumn']
    
})