import avecTemplateHtml from '../avecTemplateHtml.js'




Vue.component('game', avecTemplateHtml({
    template : 'game.html',
    data() {
        return {
            a: "",
            b: "",
            c: "",
            d: "",
            e: "",
            f: "",
            g: "",
            h: "",
            i: "",
            player: "X",
            active: true,
            title: "Tic Tac Toe",
            clicks: 0,
            isClicked: false,
        }
        
    },
    methods: {
        reset() {
            Object.assign(this.$data, this.$options.data.call(this));
          },

        addToBox(boxClicked){

         
            
            
             if (boxClicked === "a"){
                 this.a = this.player
             }
             if (boxClicked === "b"){
                 this.b = this.player
             } 
             if (boxClicked === "c"){
                 this.c = this.player
             } 
             if (boxClicked === "d"){
                 this.d = this.player
             } 
             if (boxClicked === "e"){
                 this.e = this.player
             } 
             if (boxClicked === "f"){
                 this.f = this.player
             } 
             if (boxClicked === "g"){
                 this.g = this.player
             } 
             if (boxClicked === "h"){
                 this.h = this.player
             } 
             if (boxClicked === "i"){
                 this.i = this.player
             } 
             

           

            // below line is a refactored version of 9 if statements
            // this[boxClicked] = this.player
            //  way to alternate between x and o using ternary operator
            this.player = (this.player === "X") ? "O" : "X"

            this.clicks += 1

            if (this.clicks === 9){
                this.active = false
                this.title = "its a tie, new game starting in 5 seconds"
                setTimeout(()=>{
                    this.reset()
                }, 5000)
            }

            

            if (this.a === this.b && this.a === this.c && this.a != ''){
                this.active = false
                this.title = "Game over" + " " + (this.player = (this.player === "X") ? "O" : "X") +  " " + "wins, new game starting in 5 seconds"
                setTimeout(()=>{
                    this.reset()
                }, 5000)

            }
            if (this.d === this.e && this.d === this.f && this.d != ''){
                this.active = false
                this.title = "Game over" + " " + (this.player = (this.player === "X") ? "O" : "X") +  " " + "wins, new game starting in 5 seconds"
                setTimeout(()=>{
                    this.reset()
                }, 5000)
            }
            if (this.g === this.h && this.g === this.i && this.g != ''){
                this.active = false
                this.title = "Game over" + " " + (this.player = (this.player === "X") ? "O" : "X") +  " " + "wins, new game starting in 5 seconds"
                setTimeout(()=>{
                    this.reset()
                }, 5000)
            }
            if (this.a === this.d && this.a === this.g && this.a != ''){
                 this.active = false
                this.title = "Game over" + " " + (this.player = (this.player === "X") ? "O" : "X") +  " " + "wins, new game starting in 5 seconds"
                setTimeout(()=>{
                    this.reset()
                }, 5000)
            }
            if (this.b === this.e && this.b === this.h && this.b != ''){
                 this.active = false
                this.title = "Game over" + " " + (this.player = (this.player === "X") ? "O" : "X") +  " " + "wins, new game starting in 5 seconds"
                setTimeout(()=>{
                    this.reset()
                }, 5000)
            }
            if (this.c === this.f && this.c === this.i && this.c != ''){
                 this.active = false
                this.title = "Game over" + " " + (this.player = (this.player === "X") ? "O" : "X") +  " " + "wins, new game starting in 5 seconds"
                setTimeout(()=>{
                    this.reset()
                }, 5000)
            }
            if (this.a === this.e && this.a === this.i && this.a != ''){
                 this.active = false
                this.title = "Game over" + " " + (this.player = (this.player === "X") ? "O" : "X") +  " " + "wins, new game starting in 5 seconds"
                setTimeout(()=>{
                    this.reset()
                }, 5000)
            }
            if (this.g === this.e && this.g === this.c && this.g != ''){
                 this.active = false
                this.title = "Game over" + " " + (this.player = (this.player === "X") ? "O" : "X") +  " " + "wins, new game starting in 5 seconds"
                setTimeout(()=>{
                    this.reset()
                }, 5000)
            }
           
        
            
        }
        
    
    }
}))


let info = {
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
    g: "",
    h: "",
    i: "",
    player: "X",
    active: true,
    title: "Tic Tac Toe",
    clicks: 0,
    isClicked: false,
}