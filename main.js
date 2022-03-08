const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const range = $("#range");
const button = $("#button");
const messege = $(".message");
const arr = $(".arr");
const icon = $(".icon");


const randomlist = {
    lists: {}
    , getLists: function (length = 5) {
        this.lists = Array.from({ length: length }, (v, k) => k + 1);
    }
    , random: function () {
        if (this.lists.length > 0) {
            const index = Math.floor(Math.random() * this.lists.length);
            const val = this.lists[index];
            this.lists.splice(index, 1)
            messege.innerText = `Số ${val}`
            arr.innerText = `Còn lại : ${this.lists.length}`
            // console.log("index",index)
            console.log("val",val)
            // console.log("List",this.lists)
        } else {
            arr.innerText = "Done"
            console.log("Done")
        }
    }
    ,handleEvent: function(){
        const _this = this;
        range.onchange = function(){
            _this.getLists(range.value)
        }
        button.onclick = function(){
            _this.random()
        }
        icon.onclick = ()=>{
            _this.getLists(range.value)
            messege.innerText = ``
            arr.innerText = ``
        }

    }
    , init: function () {
        this.getLists(range.value);
        this.handleEvent()
    }

}


randomlist.init()