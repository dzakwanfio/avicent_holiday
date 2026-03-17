<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class VehicleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $vehicles = \App\Models\Vehicle::latest()->get();
        return \Inertia\Inertia::render('Admin/Vehicles/Index', [
            'vehicles' => $vehicles
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return \Inertia\Inertia::render('Admin/Vehicles/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|in:bus,travel,luxury',
            'seat_capacity' => 'required|integer',
            'facilities' => 'required|array',
            'photo' => 'nullable|image|max:2048',
            'pdf_file' => 'nullable|mimes:pdf|max:5120',
            'description' => 'required|string',
            'is_active' => 'boolean',
        ]);

        if ($request->hasFile('photo')) {
            $validated['photo'] = '/storage/' . $request->file('photo')->store('vehicles/photos', 'public');
        }

        if ($request->hasFile('pdf_file')) {
            $validated['pdf_file'] = '/storage/' . $request->file('pdf_file')->store('vehicles/pdfs', 'public');
        }

        \App\Models\Vehicle::create($validated);

        return redirect()->route('admin.vehicles.index')->with('success', 'Armada berhasil ditambahkan.');
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
        $vehicle = \App\Models\Vehicle::findOrFail($id);
        return \Inertia\Inertia::render('Admin/Vehicles/Edit', [
            'vehicle' => $vehicle
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $vehicle = \App\Models\Vehicle::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|string',
            'seat_capacity' => 'required|integer',
            'facilities' => 'required|array',
            'photo' => 'nullable', // Can be file or string (path)
            'pdf_file' => 'nullable', // Can be file or string (path)
            'description' => 'required|string',
            'is_active' => 'boolean',
        ]);

        if ($request->hasFile('photo')) {
            $validated['photo'] = '/storage/' . $request->file('photo')->store('vehicles/photos', 'public');
        } else {
            unset($validated['photo']);
        }

        if ($request->hasFile('pdf_file')) {
            $validated['pdf_file'] = '/storage/' . $request->file('pdf_file')->store('vehicles/pdfs', 'public');
        } else {
            unset($validated['pdf_file']);
        }

        $vehicle->update($validated);

        return redirect()->route('admin.vehicles.index')->with('success', 'Armada berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $vehicle = \App\Models\Vehicle::findOrFail($id);
        $vehicle->delete();

        return redirect()->route('admin.vehicles.index')->with('success', 'Armada berhasil dihapus.');
    }
}
