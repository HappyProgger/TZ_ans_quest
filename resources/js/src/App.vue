
<template>
    <main class="main">

        <div class="content">
            <p class="main_text" >Ответы на вопросы</p>

          <div  v-for="post in posts" :key="post.answer">
                <questions_component :answer="post.main_question" :main_question="post.answer"></questions_component>

          </div>




        </div>
    </main>

</template>



<script>
    import questions_component from "./components/question.vue"


    export default {
        components : { questions_component },
        data(){
            return {
                posts : [
                    { answer : 'Lorem ipsum dolor sit amet.\n', main_question : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sapien vel.'},
                    { answer : 'Lorem ipsum dolor sit amet.\n', main_question : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices magna ut ' +
                            'luctus cursus. Aliquam elementum tortor at enim venenatis, eu dapibus nulla gravida. Suspendisse consectetur erat at ligula mollis varius.' +
                            ' Quisque vel dignissim ante. Sed efficitur, dui nec suscipit.'},
                    { answer : 'Lorem ipsum dolor sit amet.\n', main_question : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non sapien vel.'},

                ]
            }
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

.content{
    margin: 40px 50px 20px 50px;
    width: inherit;

}

@media screen and (min-width: 1440px){

.content{
    margin: 70px 100px;

}




}


</style>
