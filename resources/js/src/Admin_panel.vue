<template>
    <div class="main_content">
        <header class="header">
            <div class="header__buttons">
                <button class="header__button_content" @click="is_content_choose ? this.is_content_choose = false :this.is_content_choose = true;
                                                              is_design_choose =false  " :class="{ overline_blue : is_content_choose }">
                    Контент
                </button>
                <button class="header__button_design"  @click="is_design_choose ? this.is_design_choose = false :this.is_design_choose = true;
                                                              is_content_choose =  false " :class="{ overline_blue : is_design_choose}">
                    Дизайн
                </button>
            </div>



        </header>

        <div class="content_frame" :class="{ nonvisible: !is_content_choose }">
            <div  v-for="post in posts" :key="post.answer">
                <post_component :answer="post.answer" :main_question="post.question"  :counter="post.id"></post_component>


            </div>
            <button class="append_post" @click="is_show_form_add_post ? this.is_show_form_add_post = false :this.is_show_form_add_post = true">
                <img id="append_post_svg" src="../../../resources/img/svg/append_post.svg">
                Добавить ещё
            </button>
            <form   method="post" action="http://localhost:4005/server" class="add_post"  :class="{ nonvisible: is_show_form_add_post }">
                <p class="p_add_post">Вопрос</p>
                <textarea type="text" name="post_question" v-model="question_added_post" class="add_post_input"></textarea>

                <p class="p_add_post">Ответ</p>
                <textarea type="text"  name="post_answer" v-model="answer_added_post" class="add_post_input"></textarea>

                <button >
                    Добавить
                </button>
            </form>

        </div>

        <div class="design_content" :class="{nonvisible: !is_design_choose }" >
            <div class="main_options">
                <div class="option">
                    <p class="name_option">Отступ сверху</p>
                    <div class="buttons_option">
                        <div class="button">
                            <input type="radio" id="radio-1" name="radio_margin_top" class="buttons_option_button_margin_top">
                            <label  for="radio-1" class="fake_chekbox"  @click="set_Item_localStore('post_margin_top', '30')" >

                            </label>
                            <p class="value_of_button">
                                 30px
                            </p>

                        </div>
                        <div class="button">
                            <input type="radio"  id="radio-2"  name="radio_margin_top" class="buttons_option_button_margin_top">
                            <label  for="radio-2" class="fake_chekbox"  @click="set_Item_localStore('post_margin_top', '50')">

                            </label>
                            <p class="value_of_button">
                                50px
                            </p>

                        </div>
                        <div class="button">
                            <input type="radio" id="radio-3" name="radio_margin_top" class="buttons_option_button_margin_top">
                            <label class="fake_chekbox" for="radio-3"  @click="set_Item_localStore('post_margin_top', '100')">

                            </label>
                            <p class="value_of_button">
                                100px
                            </p>

                        </div>
                        <div class="button">
                            <input type="radio" id="radio-4" name="radio_margin_top" class="buttons_option_button_margin_top">
                            <label class="fake_chekbox" for="radio-4"  @click="set_Item_localStore('post_margin_top', '150')">

                            </label>
                            <p class="value_of_button">
                                150px
                            </p>

                        </div>
                    </div>
                </div>
                <div class="option">
                    <p class="name_option">Отступ сверху</p>
                    <div class="buttons_option">
                        <div class="button">
                            <input type="radio" id="0_radio-1" name="radio_margin_bottom" class="buttons_option_button_margin_top">
                                <label  for="0_radio-1" class="fake_chekbox"  @click="set_Item_localStore('post_margin_buttom', '30')" >

                            </label>
                            <p class="value_of_button">
                                30px
                            </p>

                        </div>
                        <div class="button">
                            <input type="radio"  id="0_radio-2"  name="radio_margin_bottom" class="buttons_option_button_margin_top">
                            <label  for="0_radio-2" class="fake_chekbox"  @click="set_Item_localStore('post_margin_buttom', '50')">

                            </label>
                            <p class="value_of_button">
                                50px
                            </p>

                        </div>
                        <div class="button">
                            <input type="radio" id="0_radio-3" name="radio_margin_bottom" class="buttons_option_button_margin_top">
                            <label class="fake_chekbox" for="0_radio-3" @click="set_Item_localStore('post_margin_buttom', '100')">

                     </label>
                            <p class="value_of_button">
                                100px
                            </p>

                        </div>
                        <div class="button">
                            <input type="radio" id="0_radio-4" name="radio_margin_bottom" class="buttons_option_button_margin_top">
                            <label class="fake_chekbox" for="0_radio-4"  @click="set_Item_localStore('post_margin_buttom', '150')">

                            </label>
                            <p class="value_of_button">
                                150px
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import post_component from "./components/post_component.vue"
import {useStore} from "vuex";
const store = useStore();



export default {

    components : { post_component },
    data(){

        return {

                count_of_posts : 0,
                is_show_form_add_post: true,



                is_content_choose: true,
                is_design_choose: false,

                answer_added_post : '',
                question_added_post : '',



            posts : []
        }

    }
    ,
    methods : {
        refactor_count_of_posts(){

            this.count_of_posts = this.count_of_posts + 1
            return this.count_of_posts
        },

        set_Item_localStore(key, value){
            window.localStorage.setItem(key, value)
        }






    },
    // mounted() {
    // }
    computed:{
        // fetch_psots(){
        //     this.posts = axios("http://localhost:4005/server").then((data) => this.posts =  data.data )
        //
        // },

        // calc_count_of_posts(){
        //     this.count_of_posts =  this.posts.length
        //
        // },




    }
    ,
    created(){
        axios("http://localhost:4005/server").then((data) => this.posts =  data.data )
    }


}
</script>

<style>
html * {
    box-sizing: border-box;
    background-color: white;
}
.nonvisible{
    display: none;
}

.main_content{
    margin: 40px 50px 20px 50px;
    width: inherit;
}

/*


 */


input[type="radio"]
{
    display: none;
    width: 30px;
    padding: 0 0 0 0px;
}
input[type="radio"]:checked + .fake_chekbox{
    background-color: blue;
}
 .name_option{
     font-size: 2em;
 }
.button{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.option{
    min-width: 250px;
    max-width: 250px;
}

.fake_chekbox{
    margin-bottom: 5px;
    width: inherit;
    min-height: 10px;
    min-width: 30px;
    border:  solid blue 1px;
    border-radius: 80px;
}

.fake_chekbox:checked{
    background-color: blue;
}


.buttons_option{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}


.header__buttons {
    font-size: 2em;
    display: flex;
    flex-direction: row;

}


.header__buttons div{
    margin-left: 100px;

    border-style: none;
}

.overline_blue{
    box-shadow: 0px 10px 1px -1px blue;
}

.header__buttons div:first-child{
    margin-left: 0px;
}

.append_post{
    display: flex;
    flex-direction: row;
    border: none;
    flex-wrap: nowrap;
    font-weight: 700;
    font-size: 2em;
    color: blue;
    min-width: 400px;
}

#append_post_svg    {
    max-width: 1em;
    margin-right: 20px;

}
.header__button_content{
    border: none;
    font-size: 1em;

}
.header__button_design{
    border: none;
    font-size: 1em;
    margin-left: 1vw;
}

@media screen and (max-width: 680px){

    .header__button_content{
        margin-bottom: 40px;
    }
    .header__buttons{
        flex-direction: column;
    }

    .add_post{
        min-width: 100%;
    }
    .add_post_input{
        min-width: inherit;
    }
}


@media screen and (min-width: 680px){
    .main_options{
        display: flex;
        flex-direction: column;
    }

    .add_post_input{
        width: 600px;
        min-height: 100px;

    }
    .main_options {

        max-width: 700px;
        font-size: 1em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 100px 0px;
    }




}

</style>
