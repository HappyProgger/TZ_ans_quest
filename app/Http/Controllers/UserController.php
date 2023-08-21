<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PostsModel;


class UserController extends Controller
{
    public function take_posts_from_server()

    {
        return      PostsModel::all()->toJson();
    }

    public function add_post_to_server(Request $request)

    {
        PostsModel::create([
            'answer' => $request->post_answer,
//            'answer' => "fdasfasdfasdfasdfad11111111111111",
            'question' => $request->post_question,
//            'question' => 'fsadfdsaf0000000000000000000',
        ]);
        return redirect('/admin_panel');
    }
}
