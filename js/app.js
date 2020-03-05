import "./components/game.js"
import "./components/welcome.js"



let vue_app = new Vue({
    el: '#app',
    data: { pageActive: "welcome"
    },
    methods: {
        goToPage(page) {
            this.pageActive = page
        }
    }
})

