<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = \App\Models\Post::latest()->get();
        return \Inertia\Inertia::render('Admin/Posts/Index', [
            'posts' => $posts
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return \Inertia\Inertia::render('Admin/Posts/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'excerpt' => 'required|string|max:500',
            'content' => 'required|string|max:1000',
            'featured_image' => 'required|image|max:5000',
            'is_published' => 'boolean',
        ]);

        $validated['slug'] = \Illuminate\Support\Str::slug($validated['title']) . '-' . uniqid();
        $validated['published_at'] = now();

        if ($request->hasFile('featured_image')) {
            $validated['featured_image'] = '/storage/' . $request->file('featured_image')->store('posts', 'public');
        }

        \App\Models\Post::create($validated);

        return redirect()->route('admin.posts.index')->with('success', 'Berita berhasil diterbitkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $post = \App\Models\Post::findOrFail($id);
        return \Inertia\Inertia::render('Admin/Posts/Edit', [
            'post' => $post
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $post = \App\Models\Post::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'excerpt' => 'required|string|max:500',
            'content' => 'required|string|max:1000', 
            'featured_image' => 'nullable',
            'is_published' => 'boolean',
        ]);

        if ($request->hasFile('featured_image')) {
            $validated['featured_image'] = '/storage/' . $request->file('featured_image')->store('posts', 'public');
        } else {
            unset($validated['featured_image']);
        }

        $post->update($validated);

        return redirect()->route('admin.posts.index')->with('success', 'Berita berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $post = \App\Models\Post::findOrFail($id);
        $post->delete();

        return redirect()->route('admin.posts.index')->with('success', 'Berita berhasil dihapus.');
    }

}
