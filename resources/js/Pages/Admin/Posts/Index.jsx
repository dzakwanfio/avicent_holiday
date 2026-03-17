import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Plus, Edit, Trash2, Eye, Calendar, User } from 'lucide-react';

export default function Index({ posts }) {
    const { delete: destroy } = useForm();

    const deletePost = (id) => {
        if (confirm('Apakah Anda yakin ingin menghapus berita ini?')) {
            destroy(route('admin.posts.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold leading-tight text-navy">
                        Manajemen Berita (Blog)
                    </h2>
                    <Link
                        href={route('admin.posts.create')}
                        className="btn-gold flex items-center gap-2 py-2 px-4 text-sm rounded-xl"
                    >
                        <Plus size={18} />
                        Tambah Berita
                    </Link>
                </div>
            }
        >
            <Head title="Manajemen Berita" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="py-4">
                        <div className="p-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {posts.map((post) => (
                                    <div key={post.id} className="group flex flex-col bg-white border border-navy/5 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                                        <div className="relative aspect-[16/9] overflow-hidden">
                                            <img
                                                src={post.featured_image}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${post.is_published ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                                                    {post.is_published ? 'Published' : 'Draft'}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="flex items-center gap-4 text-[10px] text-navy/40 font-bold uppercase tracking-widest mb-3">
                                                <div className="flex items-center gap-1">
                                                    <Calendar size={12} />
                                                    {new Date(post.published_at).toLocaleDateString('id-ID')}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <User size={12} />
                                                    {post.author}
                                                </div>
                                            </div>

                                            <h3 className="text-lg font-bold text-navy mb-3 line-clamp-2 group-hover:text-gold transition-colors">
                                                {post.title}
                                            </h3>

                                            <p className="text-sm text-navy/60 mb-6 line-clamp-2 flex-1">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center justify-between pt-6 border-t border-navy/5">
                                                <div className="flex items-center gap-2">
                                                    <Link
                                                        href={route('admin.posts.edit', post.id)}
                                                        className="p-2 text-navy/40 hover:text-gold hover:bg-gold/10 rounded-xl transition-all"
                                                        title="Edit"
                                                    >
                                                        <Edit size={18} />
                                                    </Link>
                                                    <button
                                                        onClick={() => deletePost(post.id)}
                                                        className="p-2 text-navy/40 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                                        title="Hapus"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                                <a
                                                    href={`/blog/${post.slug}`}
                                                    target="_blank"
                                                    className="flex items-center gap-1 text-xs font-bold text-gold hover:underline"
                                                >
                                                    View Page
                                                    <Eye size={14} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {posts.length === 0 && (
                                    <div className="col-span-full py-20 text-center">
                                        <div className="inline-flex items-center justify-center w-20 h-20 bg-navy/5 rounded-full text-navy/20 mb-4">
                                            <Calendar size={40} />
                                        </div>
                                        <h3 className="text-lg font-bold text-navy">Belum ada berita</h3>
                                        <p className="text-navy/40 mt-1">Mulai buat berita pertama Anda sekarang.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
