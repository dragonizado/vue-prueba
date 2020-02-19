Vue.component('page-container-form-component',{
    template:`
        <div>
            <page-rows-form-component v-for="row of rows"></page-rows-form-component>
            <button @click="rows++">+ Nueva fila</button>
            <button @click="rows--">- Eliminar fila</button>
        </div>
    `,
    data(){
        return {
            rows:1
        }
    }
})