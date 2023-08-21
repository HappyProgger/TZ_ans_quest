
<template>
    <main class="main">

        <div class="content">
            <p class="main_text" >Ответы на вопросы</p>

            <div  v-for="post in posts" :key="post.answer" >
                <questions_component
                    :answer="post.question"
                    :main_question="post.answer"
                    :post_margin_top = 'admin_margin_top'
                    :post_margin_buttom="admin_margin_bottom">

                </questions_component>

            </div>




        </div>
    </main>

</template>



<script>
import questions_component from "./components/question.vue"


export default {
    components: {questions_component},
    data() {
        return {
            admin_margin_top:window.localStorage.getItem('post_margin_top'),
            admin_margin_bottom: window.localStorage.getItem('post_margin_buttom'),
            posts: []
        }
    },

    created() {
        axios("http://localhost:4005/server").then((data) => this.posts = data.data)
    }
}





</script>

<style>
html *{
    box-sizing: border-box ;
    background-color: #d7d0d0;
    color: black;
}

.main_text{
    font-size: 3em;
}
main *{
    height: 100%;
    width: 100%;

}

//
@media screen and (max-width: 400px){

    .content{
        margin: 30px 100px;

    }


}

@media screen and (min-width: 1440px){

    .content{
        margin: 70px 100px;

    }




}


</style>
