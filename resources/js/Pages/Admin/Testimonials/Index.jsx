import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Plus, Edit, Trash2, Quote, Star, User } from 'lucide-react';

export default function Index({ testimonials }) {
    const { delete: destroy } = useForm();

    const deleteTestimonial = (id) => {
        if (confirm('Apakah Anda yakin ingin menghapus testimoni ini?')) {
            destroy(route('admin.testimonials.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold leading-tight text-navy">
                        Manajemen Testimoni
                    </h2>
                    <Link
                        href={route('admin.testimonials.create')}
                        className="btn-gold flex items-center gap-2 py-2 px-4 text-sm rounded-xl"
                    >
                        <Plus size={18} />
                        Tambah Testimoni
                    </Link>
                </div>
            }
        >
            <Head title="Manajemen Testimoni" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((item) => (
                            <div key={item.id} className="group relative bg-white border border-navy/5 p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500">
                                <div className="absolute top-6 right-6 text-gold/20 group-hover:text-gold/40 transition-colors">
                                    <Quote size={40} />
                                </div>

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-full overflow-hidden bg-navy/5 border-2 border-gold/20 p-1">
                                        {item.avatar ? (
                                            <img src={item.avatar} alt={item.customer_name} className="w-full h-full object-cover rounded-full" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-navy/5 text-navy/20">
                                                <User size={24} />
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-navy">{item.customer_name}</h3>
                                        <p className="text-xs text-navy/40 uppercase tracking-widest">{item.role}</p>
                                    </div>
                                </div>

                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            className={i < item.rating ? "fill-gold text-gold" : "text-navy/10"}
                                        />
                                    ))}
                                </div>

                                <p className="text-sm text-navy/60 leading-relaxed italic mb-8">
                                    "{item.content}"
                                </p>

                                <div className="flex items-center justify-end gap-2 pt-6 border-t border-navy/5">
                                    <Link
                                        href={route('admin.testimonials.edit', item.id)}
                                        className="p-2 text-navy/20 hover:text-gold hover:bg-gold/10 rounded-xl transition-all"
                                    >
                                        <Edit size={18} />
                                    </Link>
                                    <button
                                        onClick={() => deleteTestimonial(item.id)}
                                        className="p-2 text-navy/20 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}

                        {testimonials.length === 0 && (
                            <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-navy/5 shadow-sm">
                                <Quote className="mx-auto mb-4 text-navy/10" size={48} />
                                <p className="text-navy/40">Belum ada testimoni pelanggan.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
