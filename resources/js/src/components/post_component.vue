<template>
    <div class="part">

        <button class="title_button" @click="is_hiden ? this.is_hiden = false :this.is_hiden = true"><p class="title">Вопрос {{counter}}</p></button>
        <div class="content_place" :class="{ nonvisible : is_hiden}">
            <p class="question_label">Вопрос</p>

            <div class="header_post">{{ main_question }}</div>
            <p class="answer_label">Ответ</p>
            <div class="answer">
                {{answer}}
            </div>
        </div>
    </div>


</template>

<script>
export default {
    name : "post_component",

    props :  {
        'main_question' : {
            required: true,
            type: String
        },

        'answer' : {
            required: true,
            type : String
        },
        'counter' : {
            required: true,
            type: Number
        }},

    data(){
        return {
            is_hiden : true,

        };
    },

}
</script>

<style>


.header_post{
    max-width: 600px;
    background-color: #d7d0d0;
    color: #605555;
    display: flex;
    flex-direction: row;
    justify-content: left;
    font-size: 2em;
    margin-bottom: 2vh;
    border-radius: 10px;
    padding: 5px 10px;


}
.answer{
    margin-bottom: 1vh;
    background-color: #d7d0d0;
    color: #605555;
    height: inherit;
    margin-left: 0px;
    display: inline-block;
    border-radius: 10px;
    padding: 5px 10px;
    max-width: 600px;
//display: ;

}
.part{
//min-height: 250px;
    width: inherit;
    //margin-bottom: 3vh;
}
.nonvisible{
    display: none;
}

.title{
    margin: 10px 0px;
    font-weight: 700;

}
.part p{
    font-size: 2em;

}

.answer_label{
    margin-bottom: 10px;
    font-weight: 400;
}

.question_label{
    margin-bottom: 10px;
    font-weight: 400;
}

.title_button{
    border: none;

    text-align: left;

}

</style>
