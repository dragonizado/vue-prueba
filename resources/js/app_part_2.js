const app = new Vue({
    el:'#app',
    data:{
        mensaje: 'Hola soy Yisus',
        contador:0
    },
    methods:{

    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('');
        },
        color(){
            return {
                'bg-success': this.contador <= 30,
                'bg-warning':this.contador >30 && this.contador <= 70,
                'bg-danger':this.contador > 70
            }
        }
    }
})