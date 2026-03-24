import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Plus, Edit, Trash2, Bus, Map, Users, Calendar, Cog } from 'lucide-react';

const IconMap = {
    Bus: Bus,
    Map: Map,
    Users: Users,
    Calendar: Calendar,
    Cog: Cog
};

export default function Index({ services }) {
    const { delete: destroy } = useForm();

    const deleteService = (id) => {
        if (confirm('Apakah Anda yakin ingin menghapus layanan ini?')) {
            destroy(route('admin.services.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold leading-tight text-navy">
                        Manajemen Layanan
                    </h2>
                    <Link
                        href={route('admin.services.create')}
                        className="btn-gold flex items-center gap-2 py-2 px-4 text-sm rounded-xl"
                    >
                        <Plus size={18} />
                        Tambah Layanan
                    </Link>
                </div>
            }
        >
            <Head title="Manajemen Layanan" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-xl sm:rounded-3xl border border-navy/5">
                        <div className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {services.map((service) => {
                                    const IconComponent = IconMap[service.icon] || Cog;
                                    return (
                                        <div key={service.id} className="group bg-white border border-navy/5 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                                            <div className="w-16 h-16 bg-navy/5 text-gold rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                                                <IconComponent size={32} />
                                            </div>
                                            <h3 className="text-xl font-bold text-navy mb-4">{service.title}</h3>
                                            <p className="text-sm text-navy/60 mb-6 leading-relaxed flex-1">
                                                {service.description}
                                            </p>
                                            <ul className="space-y-2 mb-8">
                                                {service.features && service.features.map((feature, fIndex) => (
                                                    <li key={fIndex} className="text-xs text-navy/70 flex items-center gap-2">
                                                        <div className="w-1 h-1 bg-gold rounded-full" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="flex items-center gap-2 pt-6 border-t border-navy/5">
                                                <Link
                                                    href={route('admin.services.edit', service.id)}
                                                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-navy/5 text-navy/60 rounded-xl hover:bg-gold hover:text-white transition-all font-bold text-sm"
                                                >
                                                    <Edit size={16} />
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() => deleteService(service.id)}
                                                    className="p-2 text-navy/20 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}

                                {services.length === 0 && (
                                    <div className="col-span-full py-20 text-center">
                                        <div className="inline-flex items-center justify-center w-20 h-20 bg-navy/5 rounded-full text-navy/20 mb-4">
                                            <Cog size={40} />
                                        </div>
                                        <h3 className="text-lg font-bold text-navy">Belum ada layanan</h3>
                                        <p className="text-navy/40 mt-1">Mulai tambahkan layanan pertama Anda.</p>
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
