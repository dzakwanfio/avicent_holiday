import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Plus, Edit, Trash2, Users, Bus, FileText, CheckCircle, XCircle } from 'lucide-react';

export default function Index({ vehicles }) {
    const { delete: destroy } = useForm();

    const deleteVehicle = (id) => {
        if (confirm('Apakah Anda yakin ingin menghapus armada ini?')) {
            destroy(route('admin.vehicles.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold leading-tight text-navy">
                        Manajemen Armada (Kendaraan)
                    </h2>
                    <Link
                        href={route('admin.vehicles.create')}
                        className="btn-gold flex items-center gap-2 py-2 px-4 text-sm rounded-xl"
                    >
                        <Plus size={18} />
                        Tambah Armada
                    </Link>
                </div>
            }
        >
            <Head title="Manajemen Armada" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="py-4">
                        <div className="p-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {vehicles.map((vehicle) => (
                                    <div key={vehicle.id} className="group flex flex-col bg-white border border-navy/5 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                                        <div className="relative aspect-[16/9] overflow-hidden bg-navy/5">
                                            {vehicle.photo ? (
                                                <img
                                                    src={vehicle.photo}
                                                    alt={vehicle.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-navy/10">
                                                    <Bus size={64} />
                                                </div>
                                            )}
                                            <div className="absolute top-4 left-4 flex gap-2">
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${vehicle.is_active ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                                    {vehicle.is_active ? 'Aktif' : 'Non-Aktif'}
                                                </span>
                                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-navy uppercase tracking-wider shadow-sm">
                                                    {vehicle.type}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="flex items-center gap-2 text-gold mb-2">
                                                <Users size={16} />
                                                <span className="text-xs font-bold uppercase tracking-widest">{vehicle.seat_capacity} Kursi</span>
                                            </div>

                                            <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                                                {vehicle.name}
                                            </h3>

                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {vehicle.facilities && vehicle.facilities.slice(0, 3).map((facility, fIndex) => (
                                                    <span key={fIndex} className="px-2 py-1 bg-navy/5 text-navy/60 text-[10px] rounded-lg">
                                                        {facility}
                                                    </span>
                                                ))}
                                                {vehicle.facilities && vehicle.facilities.length > 3 && (
                                                    <span className="px-2 py-1 bg-navy/5 text-navy/60 text-[10px] rounded-lg">
                                                        +{vehicle.facilities.length - 3}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex items-center justify-between pt-6 border-t border-navy/5">
                                                <div className="flex items-center gap-2">
                                                    <Link
                                                        href={route('admin.vehicles.edit', vehicle.id)}
                                                        className="p-2 text-navy/40 hover:text-gold hover:bg-gold/10 rounded-xl transition-all"
                                                        title="Edit"
                                                    >
                                                        <Edit size={18} />
                                                    </Link>
                                                    <button
                                                        onClick={() => deleteVehicle(vehicle.id)}
                                                        className="p-2 text-navy/40 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                                        title="Hapus"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>

                                                {vehicle.pdf_file && (
                                                    <a
                                                        href={vehicle.pdf_file}
                                                        target="_blank"
                                                        className="flex items-center gap-1 text-xs font-bold text-navy/40 hover:text-navy transition-colors"
                                                    >
                                                        <FileText size={14} />
                                                        PDF Specs
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {vehicles.length === 0 && (
                                    <div className="col-span-full py-20 text-center">
                                        <div className="inline-flex items-center justify-center w-20 h-20 bg-navy/5 rounded-full text-navy/20 mb-4">
                                            <Bus size={40} />
                                        </div>
                                        <h3 className="text-lg font-bold text-navy">Belum ada armada</h3>
                                        <p className="text-navy/40 mt-1">Mulai tambahkan kendaraan pertama Anda.</p>
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
