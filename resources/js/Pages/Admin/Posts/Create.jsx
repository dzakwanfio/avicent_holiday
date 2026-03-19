import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save, Upload } from 'lucide-react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        excerpt: '',
        content: '',
        featured_image: null,
        is_published: true,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.posts.store'));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-4">
                    <Link href={route('admin.posts.index')} className="p-2 hover:bg-navy/5 rounded-xl transition-all text-navy/40 hover:text-navy">
                        <ArrowLeft size={20} />
                    </Link>
                    <h2 className="text-xl font-bold leading-tight text-navy">
                        Buat Berita Baru
                    </h2>
                </div>
            }
        >
            <Head title="Buat Berita" />

            <div className="py-12">
                <div className="mx-auto max-w-5xl sm:px-6 lg:px-8">
                    <form onSubmit={submit} className="bg-white shadow-xl sm:rounded-3xl border border-navy/5 overflow-hidden">
                        <div className="p-8 space-y-8">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy uppercase tracking-wider">Judul Berita</label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={e => setData('title', e.target.value)}
                                    className="w-full bg-navy/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold transition-all font-bold text-lg"
                                    placeholder="Ketik judul berita di sini..."
                                />
                                {errors.title && <p className="text-xs text-red-500">{errors.title}</p>}
                            </div>

                            {/* Excerpt */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy uppercase tracking-wider">Ringkasan Singkat</label>
                                <textarea
                                    value={data.excerpt}
                                    onChange={e => setData('excerpt', e.target.value)}
                                    className="w-full bg-navy/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold transition-all min-h-[100px]"
                                    placeholder="Jelaskan sedikit tentang isi berita ini agar pembaca tertarik..."
                                />
                                {errors.excerpt && <p className="text-xs text-red-500">{errors.excerpt}</p>}
                            </div>

                            {/* Main Link */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy uppercase tracking-wider">Link Berita Utama</label>
                                <input
                                    type="url"
                                    value={data.content}
                                    onChange={e => setData('content', e.target.value)}
                                    className="w-full bg-navy/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold transition-all"
                                    placeholder="https://instagram.com/p/xxx"
                                />
                                {errors.content && <p className="text-xs text-red-500">{errors.content}</p>}
                            </div>

                            {/* Featured Image & Status */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-sm font-bold text-navy uppercase tracking-wider">Foto Utama</label>
                                    <div className="relative border-2 border-dashed border-navy/10 rounded-3xl p-12 text-center hover:border-gold/50 transition-colors group cursor-pointer">
                                        <input
                                            type="file"
                                            onChange={e => setData('featured_image', e.target.files[0])}
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                            accept="image/*"
                                        />
                                        <Upload className="mx-auto mb-4 text-navy/20 group-hover:text-gold transition-colors" size={40} />
                                        <p className="text-sm text-navy/60">
                                            {data.featured_image ? data.featured_image.name : 'Klik untuk pilih foto utama berita (Max 2MB)'}
                                        </p>
                                    </div>
                                    {errors.featured_image && <p className="text-xs text-red-500">{errors.featured_image}</p>}
                                </div>

                                <div className="space-y-4">
                                    <label className="text-sm font-bold text-navy uppercase tracking-wider">Status Publikasi</label>
                                    <div className="p-6 bg-navy/5 rounded-3xl space-y-4">
                                        <label className="flex items-center gap-4 cursor-pointer group">
                                            <input
                                                type="radio"
                                                checked={data.is_published === true}
                                                onChange={() => setData('is_published', true)}
                                                className="w-5 h-5 text-gold focus:ring-gold"
                                            />
                                            <div className="flex flex-col">
                                                <span className="font-bold text-navy text-sm group-hover:text-gold transition-colors">Terbitkan Sekarang</span>
                                                <span className="text-[10px] text-navy/40">Berita akan langsung muncul di halaman Blog.</span>
                                            </div>
                                        </label>
                                        <label className="flex items-center gap-4 cursor-pointer group border-t border-navy/5 pt-4">
                                            <input
                                                type="radio"
                                                checked={data.is_published === false}
                                                onChange={() => setData('is_published', false)}
                                                className="w-5 h-5 text-gold focus:ring-gold"
                                            />
                                            <div className="flex flex-col">
                                                <span className="font-bold text-navy text-sm group-hover:text-gold transition-colors">Simpan Sebagai Draft</span>
                                                <span className="text-[10px] text-navy/40">Simpan dulu, publikasikan nanti.</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="bg-navy/5 p-8 flex justify-between items-center group">
                            <p className="text-sm text-navy/40 italic">Buat konten yang menarik bagi pembaca Anda!</p>
                            <button
                                type="submit"
                                disabled={processing}
                                className="btn-gold flex items-center gap-2 py-3 px-8 rounded-2xl text-base shadow-lg hover:shadow-xl disabled:opacity-50"
                            >
                                <Save size={20} />
                                {processing ? 'Mempublikasikan...' : 'Terbitkan Berita'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
