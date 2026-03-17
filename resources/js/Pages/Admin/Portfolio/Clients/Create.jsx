import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save, Upload } from 'lucide-react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        logo: null,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.clients.store'));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-4">
                    <Link href={route('admin.projects.index')} className="p-2 hover:bg-navy/5 rounded-xl transition-all text-navy/40 hover:text-navy">
                        <ArrowLeft size={20} />
                    </Link>
                    <h2 className="text-xl font-bold leading-tight text-navy">
                        Tambah Klien / Mitra
                    </h2>
                </div>
            }
        >
            <Head title="Tambah Klien" />

            <div className="py-12">
                <div className="mx-auto max-w-xl sm:px-6 lg:px-8">
                    <form onSubmit={submit} className="bg-white shadow-xl sm:rounded-3xl border border-navy/5 overflow-hidden">
                        <div className="p-8 space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy uppercase tracking-wider">Nama Perusahaan / Instansi</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    className="w-full bg-navy/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold transition-all"
                                    placeholder="Contoh: PT. Maju Bersama"
                                />
                                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                            </div>

                            <div className="space-y-4">
                                <label className="text-sm font-bold text-navy uppercase tracking-wider">Logo Klien</label>
                                <div className="relative border-2 border-dashed border-navy/10 rounded-3xl p-12 text-center hover:border-gold/50 transition-colors group cursor-pointer">
                                    <input
                                        type="file"
                                        onChange={e => setData('logo', e.target.files[0])}
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                        accept="image/*"
                                    />
                                    <Upload className="mx-auto mb-4 text-navy/20 group-hover:text-gold transition-colors" size={40} />
                                    <p className="text-sm text-navy/60">
                                        {data.logo ? data.logo.name : 'Klik untuk pilih logo (Max 1MB)'}
                                    </p>
                                </div>
                                <p className="text-[10px] text-navy/30 text-center uppercase tracking-widest font-bold">Disarankan format PNG Transparan</p>
                                {errors.logo && <p className="text-xs text-red-500">{errors.logo}</p>}
                            </div>
                        </div>

                        <div className="bg-navy/5 p-8 flex justify-end">
                            <button
                                type="submit"
                                disabled={processing}
                                className="btn-gold flex items-center gap-2 py-3 px-8 rounded-2xl text-base shadow-lg hover:shadow-xl disabled:opacity-50"
                            >
                                <Save size={20} />
                                {processing ? 'Menyimpan...' : 'Simpan Klien'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
