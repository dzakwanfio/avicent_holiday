import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save, Upload, X } from 'lucide-react';
import { useState } from 'react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        type: 'Bus Pariwisata',
        seat_capacity: '',
        facilities: [],
        photo: null,
        pdf_file: null,
        description: '',
        is_active: true,
    });

    const [tempFacility, setTempFacility] = useState('');

    const addFacility = () => {
        if (tempFacility.trim() && !data.facilities.includes(tempFacility.trim())) {
            setData('facilities', [...data.facilities, tempFacility.trim()]);
            setTempFacility('');
        }
    };

    const removeFacility = (index) => {
        setData('facilities', data.facilities.filter((_, i) => i !== index));
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.vehicles.store'));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-4">
                    <Link href={route('admin.vehicles.index')} className="p-2 hover:bg-navy/5 rounded-xl transition-all text-navy/40 hover:text-navy">
                        <ArrowLeft size={20} />
                    </Link>
                    <h2 className="text-xl font-bold leading-tight text-navy">
                        Tambah Armada Baru
                    </h2>
                </div>
            }
        >
            <Head title="Tambah Armada" />

            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <form onSubmit={submit} className="bg-white shadow-xl sm:rounded-3xl border border-navy/5 overflow-hidden">
                        <div className="p-8 space-y-8">
                            {/* Basic Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-navy uppercase tracking-wider">Nama Armada</label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                        className="w-full bg-navy/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold transition-all"
                                        placeholder="Contoh: Jetbus 5 High Deck"
                                    />
                                    {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-navy uppercase tracking-wider">Tipe Kendaraan</label>
                                    <select
                                        value={data.type}
                                        onChange={e => setData('type', e.target.value)}
                                        className="w-full bg-navy/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold transition-all"
                                    >
                                        <option value="Bus Pariwisata">Bus Pariwisata</option>
                                        <option value="Travel / Hiace">Travel / Hiace</option>
                                        <option value="Luxury Coach">Luxury Coach</option>
                                    </select>
                                    {errors.type && <p className="text-xs text-red-500">{errors.type}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-navy uppercase tracking-wider">Kapasitas Kursi</label>
                                    <input
                                        type="number"
                                        value={data.seat_capacity}
                                        onChange={e => setData('seat_capacity', e.target.value)}
                                        className="w-full bg-navy/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold transition-all"
                                        placeholder="Contoh: 50"
                                    />
                                    {errors.seat_capacity && <p className="text-xs text-red-500">{errors.seat_capacity}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-navy uppercase tracking-wider">Status</label>
                                    <div className="flex items-center gap-4 p-4 bg-navy/5 rounded-2xl">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                checked={data.is_active === true}
                                                onChange={() => setData('is_active', true)}
                                                className="text-gold focus:ring-gold"
                                            />
                                            <span className="text-sm text-navy">Aktif</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                checked={data.is_active === false}
                                                onChange={() => setData('is_active', false)}
                                                className="text-gold focus:ring-gold"
                                            />
                                            <span className="text-sm text-navy">Non-Aktif</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Facilities */}
                            <div className="space-y-4">
                                <label className="text-sm font-bold text-navy uppercase tracking-wider">Fasilitas Utama</label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={tempFacility}
                                        onChange={e => setTempFacility(e.target.value)}
                                        onKeyPress={e => e.key === 'Enter' && (e.preventDefault(), addFacility())}
                                        className="flex-1 bg-navy/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold transition-all"
                                        placeholder="Tambah fasilitas (contoh: Full AC)"
                                    />
                                    <button
                                        type="button"
                                        onClick={addFacility}
                                        className="p-4 bg-navy text-white rounded-2xl hover:bg-navy/90 transition-all font-bold"
                                    >
                                        Tambah
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {data.facilities.map((facility, index) => (
                                        <span key={index} className="flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold rounded-xl text-sm font-bold border border-gold/20">
                                            {facility}
                                            <button type="button" onClick={() => removeFacility(index)} className="hover:text-navy">
                                                <X size={14} />
                                            </button>
                                        </span>
                                    ))}
                                    {data.facilities.length === 0 && <p className="text-xs text-navy/30 italic">Belum ada fasilitas ditambahkan.</p>}
                                </div>
                                {errors.facilities && <p className="text-xs text-red-500">{errors.facilities}</p>}
                            </div>

                            {/* Files */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-sm font-bold text-navy uppercase tracking-wider">Foto Utama</label>
                                    <div className="relative border-2 border-dashed border-navy/10 rounded-3xl p-8 text-center hover:border-gold/50 transition-colors group cursor-pointer">
                                        <input
                                            type="file"
                                            onChange={e => setData('photo', e.target.files[0])}
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                            accept="image/*"
                                        />
                                        <Upload className="mx-auto mb-4 text-navy/20 group-hover:text-gold transition-colors" size={40} />
                                        <p className="text-sm text-navy/60">
                                            {data.photo ? data.photo.name : 'Klik atau seret foto ke sini (Max 2MB)'}
                                        </p>
                                    </div>
                                    {errors.photo && <p className="text-xs text-red-500">{errors.photo}</p>}
                                </div>

                                <div className="space-y-4">
                                    <label className="text-sm font-bold text-navy uppercase tracking-wider">File PDF Spesifikasi (Opsional)</label>
                                    <div className="relative border-2 border-dashed border-navy/10 rounded-3xl p-8 text-center hover:border-gold/50 transition-colors group cursor-pointer">
                                        <input
                                            type="file"
                                            onChange={e => setData('pdf_file', e.target.files[0])}
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                            accept=".pdf"
                                        />
                                        <Upload className="mx-auto mb-4 text-navy/20 group-hover:text-gold transition-colors" size={40} />
                                        <p className="text-sm text-navy/60">
                                            {data.pdf_file ? data.pdf_file.name : 'Klik atau seret file PDF (Max 5MB)'}
                                        </p>
                                    </div>
                                    {errors.pdf_file && <p className="text-xs text-red-500">{errors.pdf_file}</p>}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy uppercase tracking-wider">Deskripsi Singkat</label>
                                <textarea
                                    value={data.description}
                                    onChange={e => setData('description', e.target.value)}
                                    className="w-full bg-navy/5 border-none rounded-3xl p-6 focus:ring-2 focus:ring-gold transition-all min-h-[150px]"
                                    placeholder="Jelaskan detail armada, fasilitas interior, dan kenyamanan bus..."
                                />
                                {errors.description && <p className="text-xs text-red-500">{errors.description}</p>}
                            </div>
                        </div>

                        {/* Footer / Submit */}
                        <div className="bg-navy/5 p-8 flex justify-between items-center group">
                            <p className="text-sm text-navy/40 italic">Pastikan semua data sudah benar sebelum menyimpan.</p>
                            <button
                                type="submit"
                                disabled={processing}
                                className="btn-gold flex items-center gap-2 py-3 px-8 rounded-2xl text-base shadow-lg hover:shadow-xl disabled:opacity-50"
                            >
                                <Save size={20} />
                                {processing ? 'Menyimpan...' : 'Simpan Armada'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
