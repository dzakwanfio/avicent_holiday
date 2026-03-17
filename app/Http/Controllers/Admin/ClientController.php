<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return redirect()->route('admin.projects.index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return \Inertia\Inertia::render('Admin/Portfolio/Clients/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'logo' => 'required|image|max:1024',
        ]);

        if ($request->hasFile('logo')) {
            $validated['logo'] = '/storage/' . $request->file('logo')->store('portfolio/clients', 'public');
        }

        \App\Models\Client::create($validated);

        return redirect()->route('admin.projects.index')->with('success', 'Klien berhasil ditambahkan.');
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
        $client = \App\Models\Client::findOrFail($id);
        return \Inertia\Inertia::render('Admin/Portfolio/Clients/Edit', [
            'client' => $client
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $client = \App\Models\Client::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'logo' => 'nullable',
        ]);

        if ($request->hasFile('logo')) {
            $validated['logo'] = '/storage/' . $request->file('logo')->store('portfolio/clients', 'public');
        } else {
            unset($validated['logo']);
        }

        $client->update($validated);

        return redirect()->route('admin.projects.index')->with('success', 'Klien berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $client = \App\Models\Client::findOrFail($id);
        $client->delete();

        return redirect()->route('admin.projects.index')->with('success', 'Klien berhasil dihapus.');
    }
}
