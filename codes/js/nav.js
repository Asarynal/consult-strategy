new Vue({
    el: 'header',
    data:{
        brand: "Consult & Strategy",
    },
    methods:{
        insert:function(arr){
            let html = "";
            arr.forEach((list)=>{
                html+=`<li class='nav-item'>${list}</li>`;
            });
            return html;
        }
    }
});