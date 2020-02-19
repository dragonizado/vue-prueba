const app = new Vue({
    el: '#app',
    data:{
        titulo:'hola mundo desde vue',
        frutas: [
            {nombre:'Manzana',cantidad:0},
            {nombre:'pera', cantidad:0},
            {nombre:'mango',cantidad:0},
            {nombre:'Coco',cantidad:0},
        ],
        nuevaFruta: '',
        total:0
    },
    methods:{
        agregarFrutas(){
            if(this.nuevaFruta != ''){
                this.frutas.push({
                    nombre:this.nuevaFruta,
                    cantidad:0
                }
                )
                this.nuevaFruta = ''
            }
        }
    },
    computed:{
        sumarFrutas(){
            this.total = 0;
            for( fruta of this.frutas){
                this.total = this.total + fruta.cantidad
            }
            return this.total
        }
    }
})