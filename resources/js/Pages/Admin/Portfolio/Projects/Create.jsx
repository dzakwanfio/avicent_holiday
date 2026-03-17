import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save, Upload } from 'lucide-react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        category: 'Wisata Religi',
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.projects.store'));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-4">
                    <Link href={route('admin.projects.index')} className="p-2 hover:bg-navy/5 rounded-xl transition-all text-navy/40 hover:text-navy">
                        <ArrowLeft size={20} />
                    </Link>
                    <h2 className="text-xl font-bold leading-tight text-navy">
                        Tambah Proyek Baru
                    </h2>
                </div>
            }
        >
            <Head title="Tambah Proyek" />

            <div className="py-12">
                <div className="mx-auto max-w-2xl sm:px-6 lg:px-8">
                    <form onSubmit={submit} className="bg-white shadow-xl sm:rounded-3xl border border-navy/5 overflow-hidden">
                        <div className="p-8 space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy uppercase tracking-wider">Judul Proyek / Keterangan</label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={e => setData('title', e.target.value)}
                                    className="w-full bg-navy/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold transition-all"
                                    placeholder="Contoh: Rombongan Ziarah Wali Songo"
                                />
                                {errors.title && <p className="text-xs text-red-500">{errors.title}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy uppercase tracking-wider">Kategori</label>
                                <select
                                    value={data.category}
                                    onChange={e => setData('category', e.target.value)}
                                    className="w-full bg-navy/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold transition-all"
                                >
                                    <option value="Wisata Religi">Wisata Religi</option>
                                    <option value="Study Tour">Study Tour</option>
                                    <option value="Outing Kantor">Outing Kantor</option>
                                    <option value="Kunjungan Industri">Kunjungan Industri</option>
                                    <option value="Carter Bus">Carter Bus</option>
                                </select>
                                {errors.category && <p className="text-xs text-red-500">{errors.category}</p>}
                            </div>

                            <div className="space-y-4">
                                <label className="text-sm font-bold text-navy uppercase tracking-wider">Foto Proyek</label>
                                <div className="relative border-2 border-dashed border-navy/10 rounded-3xl p-12 text-center hover:border-gold/50 transition-colors group cursor-pointer">
                                    <input
                                        type="file"
                                        onChange={e => setData('image', e.target.files[0])}
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                        accept="image/*"
                                    />
                                    <Upload className="mx-auto mb-4 text-navy/20 group-hover:text-gold transition-colors" size={40} />
                                    <p className="text-sm text-navy/60">
                                        {data.image ? data.image.name : 'Klik untuk pilih foto proyek (Max 2MB)'}
                                    </p>
                                </div>
                                {errors.image && <p className="text-xs text-red-500">{errors.image}</p>}
                            </div>
                        </div>

                        <div className="bg-navy/5 p-8 flex justify-end">
                            <button
                                type="submit"
                                disabled={processing}
                                className="btn-gold flex items-center gap-2 py-3 px-8 rounded-2xl text-base shadow-lg hover:shadow-xl disabled:opacity-50"
                            >
                                <Save size={20} />
                                {processing ? 'Menyimpan...' : 'Simpan Proyek'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
