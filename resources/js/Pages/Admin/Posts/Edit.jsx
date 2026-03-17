import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save, Upload } from 'lucide-react';

export default function Edit({ post: blogPost }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'PUT',
        title: blogPost.title || '',
        excerpt: blogPost.excerpt || '',
        content: blogPost.content || '',
        featured_image: null,
        is_published: blogPost.is_published,
        author: blogPost.author || 'Admin Avicent',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.posts.update', blogPost.id));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-4">
                    <Link href={route('admin.posts.index')} className="p-2 hover:bg-navy/5 rounded-xl transition-all text-navy/40 hover:text-navy">
                        <ArrowLeft size={20} />
                    </Link>
                    <h2 className="text-xl font-bold leading-tight text-navy">
                        Edit Berita
                    </h2>
                </div>
            }
        >
            <Head title={`Edit ${blogPost.title}`} />

            <div className="py-12">
                <div className="mx-auto max-w-5xl sm:px-6 lg:px-8">
                    <form onSubmit={submit} className="bg-white shadow-xl sm:rounded-3xl border border-navy/5 overflow-hidden">
                        <div className="p-8 space-y-8">
                            {/* Title & Author */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-bold text-navy uppercase tracking-wider">Judul Berita</label>
                                    <input
                                        type="text"
                                        value={data.title}
                                        onChange={e => setData('title', e.target.value)}
                                        className="w-full bg-navy/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold transition-all font-bold text-lg"
                                    />
                                    {errors.title && <p className="text-xs text-red-500">{errors.title}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-navy uppercase tracking-wider">Penulis</label>
                                    <input
                                        type="text"
                                        value={data.author}
                                        onChange={e => setData('author', e.target.value)}
                                        className="w-full bg-navy/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold transition-all"
                                    />
                                    {errors.author && <p className="text-xs text-red-500">{errors.author}</p>}
                                </div>
                            </div>

                            {/* Excerpt */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy uppercase tracking-wider">Ringkasan Singkat (Excerpt)</label>
                                <textarea
                                    value={data.excerpt}
                                    onChange={e => setData('excerpt', e.target.value)}
                                    className="w-full bg-navy/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold transition-all min-h-[100px]"
                                />
                                {errors.excerpt && <p className="text-xs text-red-500">{errors.excerpt}</p>}
                            </div>

                            {/* Main Content */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy uppercase tracking-wider">Isi Berita Lengkap</label>
                                <textarea
                                    value={data.content}
                                    onChange={e => setData('content', e.target.value)}
                                    className="w-full bg-navy/5 border-none rounded-3xl p-6 focus:ring-2 focus:ring-gold transition-all min-h-[400px] leading-relaxed"
                                />
                                {errors.content && <p className="text-xs text-red-500">{errors.content}</p>}
                            </div>

                            {/* Featured Image & Status */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-sm font-bold text-navy uppercase tracking-wider">Foto Utama (Banner)</label>
                                    <div className="mb-4 aspect-[16/9] rounded-2xl overflow-hidden bg-navy/5">
                                        <img src={blogPost.featured_image} alt="Current" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="relative border-2 border-dashed border-navy/10 rounded-3xl p-12 text-center hover:border-gold/50 transition-colors group cursor-pointer">
                                        <input
                                            type="file"
                                            onChange={e => setData('featured_image', e.target.files[0])}
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                            accept="image/*"
                                        />
                                        <Upload className="mx-auto mb-4 text-navy/20 group-hover:text-gold transition-colors" size={40} />
                                        <p className="text-sm text-navy/60">
                                            {data.featured_image ? data.featured_image.name : 'Klik untuk ganti foto utama (Max 2MB)'}
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
                                                <span className="font-bold text-navy text-sm group-hover:text-gold transition-colors">Tampilkan di Publik</span>
                                                <span className="text-[10px] text-navy/40">Berita terlihat oleh pengunjung website.</span>
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
                                                <span className="font-bold text-navy text-sm group-hover:text-gold transition-colors">Sembunyikan / Draft</span>
                                                <span className="text-[10px] text-navy/40">Hanya Anda yang bisa melihat berita ini.</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="bg-navy/5 p-8 flex justify-end items-center gap-4">
                            <button
                                type="submit"
                                disabled={processing}
                                className="btn-gold flex items-center gap-2 py-3 px-8 rounded-2xl text-base shadow-lg hover:shadow-xl disabled:opacity-50"
                            >
                                <Save size={20} />
                                {processing ? 'Menyimpan...' : 'Simpan Perubahan'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
