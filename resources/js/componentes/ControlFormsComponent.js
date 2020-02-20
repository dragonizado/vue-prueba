Vue.component('control-forms-component',{
    template:
    `
    <div id="form-controls-tools">
        <input-form-component></input-form-component>
        <input-search-list-btn-form-component></input-search-list-btn-form-component>
        <form-input-search-component></form-input-search-component>
        <form-checkout-component></form-checkout-component>
        <document-adjunt-form-component></document-adjunt-form-component>
    </div>
        `,
        mounted(){
            const lista_tools = this.$el

            Sortable.create(lista_tools,{
                animation: 150,
                group: { 
                    name:'display-columns',
                    pull:'clone',
                    put:false
                }
            })
        },
    data(){
        return{
            controls:[
                {name:'Entrada texto',icon:'',description:'Entrada que permite escribir texto',tutorial_img:''}
            ],
            columns:1,
        } 
    },
    computed:{ 
            
    }
})