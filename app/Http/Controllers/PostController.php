<?php

namespace App\Http\Controllers;


use App\Models\Post;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        sleep(2);
        $posts = Post::latest()->paginate(5);
        return inertia("Home", ['posts' => $posts, 'name' => 'Edem Kwaku']);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            "body" => ['required']
        ]);

        Post::create($data);

        return redirect("/");
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        $latestPost = Post::latest()->get();
        return inertia('Show', ['post' => $post, 'latestPost' => $latestPost]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        return inertia("Edit", ['post' => $post]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
