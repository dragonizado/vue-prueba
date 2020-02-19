Vue.component('control-forms-component',{
    template:
    `
    <div>
        <div class="row" style="border: 1px solid #ababab;">
            <div v-for="column of columns" class="column" style=" display:inline-block; text-align:center;" :style="{width:columnsWidth+'%'}">hello</div>
        </div>
        <button @click="columns++">Nueva columna</button>
        <button @click="columns--">Eliminar columna</button>
    </div>
    `,
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