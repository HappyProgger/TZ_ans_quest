<template>
    <div class="part">
        <div class="header">{{ main_question }}<button @click="is_open_arrow_active ? this.is_open_arrow_active = false :this.is_open_arrow_active = true"
                                                     :class="is_open_arrow_active ? 'open_arrow_none_active':'open_arrow_active' "></button></div>

        <div class="answer" :style=" is_open_arrow_active ? 'display: none;' :  ''">
            {{answer}}
        </div>
    </div>

</template>

<script>
 export default {
     name : "questions_component",
     props :  {
         'main_question' : {
             required: true,
             type: String
         },
         'answer' : {
             required: true,
             type : String
         }},

     data(){
         return {
            is_open_arrow_active : true,

         };
     },

 }
</script>

<style>

.header{
    display: flex;
    flex-direction: row;
    justify-content: left;
    font-size: 2em;
    margin-bottom: 4vh;

}
.answer{
    width: inherit;
    max-width: 1000px;
    //display: ;

}
.part{
    //min-height: 250px;
    width: inherit;
    margin-bottom: 5vh;
}

.open_arrow_active{
    justify-items: end;
    margin-left: 1vw;
    height: 2.5em;
    width: 2.5em;
    border-style: none;
    background: url("../../../../resources/img/svg/downarrow_120663.svg") no-repeat;
    background-size: contain;
    transform: rotate(180deg);
}


.open_arrow_none_active{
    justify-items: end;
    margin-left: 1vw;
    height: 2.5em;
    width: 2.5em;
    border-style: none;
    background: url("../../../../resources/img/svg/downarrow_blue.svg") no-repeat;
    background-size: cover;
    //transform: rotate(180deg);
    fill: blue;
}




</style>
