

const calender={
    init(){
        const today=new Date();
        calender.showdata(today.getFullYear(),today.getMonth()+1);
        calender.evthandle()
    },
    evthandle(){
        document.querySelectorAll(".date").forEach(element=>{
            element.onclick=function(){
                document.querySelector('.model-bg').classList
                .add("show");
            }
        })
    },

    showdata(y,m){
        const before=document.querySelectorAll(".date")
        before.forEach(v=>v.remove());

        for(let i= -calender.getfirstday(y,m)+1;i<=calender.getlastdate(y,m);i++){
            document.querySelector(".calender").innerHTML +=
           `<div class="date ${1>i?"hidden-date":""}">
           <p>${i}</p>
           </div>`;
        }

    },

    getfirstday(y,m){
        const date=new Date(`${y}-${m}-01`)
        return date.getDay();
    },

    getlastdate(y,m){
        const date=new Date(y,m,0)
        return date.getDate()

    }
}