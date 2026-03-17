import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save, Upload, Star } from 'lucide-react';
import { useState } from 'react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        customer_name: '',
        role: 'Pelanggan Setia',
        content: '',
        rating: 5,
        avatar: null,
    });

    const [hoverRating, setHoverRating] = useState(0);

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.testimonials.store'));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-4">
                    <Link href={route('admin.testimonials.index')} className="p-2 hover:bg-navy/5 rounded-xl transition-all text-navy/40 hover:text-navy">
                        <ArrowLeft size={20} />
                    </Link>
                    <h2 className="text-xl font-bold leading-tight text-navy">
                        Tambah Testimoni
                    </h2>
                </div>
            }
        >
            <Head title="Tambah Testimoni" />

            <div className="py-12">
                <div className="mx-auto max-w-2xl sm:px-6 lg:px-8">
                    <form onSubmit={submit} className="bg-white shadow-xl sm:rounded-3xl border border-navy/5 overflow-hidden">
                        <div className="p-8 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-navy uppercase tracking-wider">Nama Pelanggan</label>
                                    <input
                                        type="text"
                                        value={data.customer_name}
                                        onChange={e => setData('customer_name', e.target.value)}
                                        className="w-full bg-navy/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold transition-all"
                                        placeholder="Contoh: Bpk. Ahmad"
                                    />
                                    {errors.customer_name && <p className="text-xs text-red-500">{errors.customer_name}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-navy uppercase tracking-wider">Pekerjaan / Instansi</label>
                                    <input
                                        type="text"
                                        value={data.role}
                                        onChange={e => setData('role', e.target.value)}
                                        className="w-full bg-navy/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold transition-all"
                                        placeholder="Contoh: Guru SMAN 1 Jakarta"
                                    />
                                    {errors.role && <p className="text-xs text-red-500">{errors.role}</p>}
                                </div>
                            </div>

                            <div className="space-y-2 text-center py-4 bg-navy/[0.02] rounded-3xl">
                                <label className="text-sm font-bold text-navy uppercase tracking-wider block mb-2">Rating Kepuasan</label>
                                <div className="flex justify-center gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setData('rating', star)}
                                            onMouseEnter={() => setHoverRating(star)}
                                            onMouseLeave={() => setHoverRating(0)}
                                            className="transition-transform hover:scale-125"
                                        >
                                            <Star
                                                size={32}
                                                className={`${(hoverRating || data.rating) >= star ? "fill-gold text-gold" : "text-navy/10"} transition-colors`}
                                            />
                                        </button>
                                    ))}
                                </div>
                                {errors.rating && <p className="text-xs text-red-500">{errors.rating}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy uppercase tracking-wider">Isi Testimoni</label>
                                <textarea
                                    value={data.content}
                                    onChange={e => setData('content', e.target.value)}
                                    className="w-full bg-navy/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold transition-all min-h-[120px]"
                                    placeholder="Apa kata mereka tentang layanan Anda?"
                                />
                                {errors.content && <p className="text-xs text-red-500">{errors.content}</p>}
                            </div>

                            <div className="space-y-4">
                                <label className="text-sm font-bold text-navy uppercase tracking-wider">Foto Profil (Avatar) - Opsional</label>
                                <div className="relative border-2 border-dashed border-navy/10 rounded-3xl p-8 text-center hover:border-gold/50 transition-colors group cursor-pointer">
                                    <input
                                        type="file"
                                        onChange={e => setData('avatar', e.target.files[0])}
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                        accept="image/*"
                                    />
                                    <Upload className="mx-auto mb-4 text-navy/20 group-hover:text-gold transition-colors" size={40} />
                                    <p className="text-sm text-navy/60">
                                        {data.avatar ? data.avatar.name : 'Klik untuk pilih foto pelanggan (Max 1MB)'}
                                    </p>
                                </div>
                                {errors.avatar && <p className="text-xs text-red-500">{errors.avatar}</p>}
                            </div>
                        </div>

                        <div className="bg-navy/5 p-8 flex justify-end">
                            <button
                                type="submit"
                                disabled={processing}
                                className="btn-gold flex items-center gap-2 py-3 px-8 rounded-2xl text-base shadow-lg hover:shadow-xl disabled:opacity-50"
                            >
                                <Save size={20} />
                                {processing ? 'Menyimpan...' : 'Simpan Testimoni'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
