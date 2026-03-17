import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Plus, Edit, Trash2, Image as ImageIcon, Building2, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function Index({ projects, clients }) {
    const [activeTab, setActiveTab] = useState('projects');
    const { delete: destroy } = useForm();

    const deleteItem = (type, id) => {
        if (confirm(`Apakah Anda yakin ingin menghapus ${type === 'projects' ? 'proyek' : 'klien'} ini?`)) {
            destroy(route(`admin.${type}.destroy`, id));
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold leading-tight text-navy">
                        Manajemen Portofolio
                    </h2>
                    <div className="flex gap-2">
                        {activeTab === 'projects' ? (
                            <Link
                                href={route('admin.projects.create')}
                                className="btn-gold flex items-center gap-2 py-2 px-4 text-sm rounded-xl"
                            >
                                <Plus size={18} />
                                Tambah Proyek
                            </Link>
                        ) : (
                            <Link
                                href={route('admin.clients.create')}
                                className="btn-gold flex items-center gap-2 py-2 px-4 text-sm rounded-xl"
                            >
                                <Plus size={18} />
                                Tambah Klien
                            </Link>
                        )}
                    </div>
                </div>
            }
        >
            <Head title="Manajemen Portofolio" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Tabs */}
                    <div className="flex gap-4 mb-8">
                        <button
                            onClick={() => setActiveTab('projects')}
                            className={`px-6 py-3 rounded-2xl font-bold transition-all ${activeTab === 'projects' ? 'bg-navy text-white shadow-lg' : 'bg-white text-navy/40 hover:bg-navy/5'}`}
                        >
                            <div className="flex items-center gap-2">
                                <ImageIcon size={20} />
                                Proyek & Galeri
                            </div>
                        </button>
                        <button
                            onClick={() => setActiveTab('clients')}
                            className={`px-6 py-3 rounded-2xl font-bold transition-all ${activeTab === 'clients' ? 'bg-navy text-white shadow-lg' : 'bg-white text-navy/40 hover:bg-navy/5'}`}
                        >
                            <div className="flex items-center gap-2">
                                <Building2 size={20} />
                                Klien / Mitra
                            </div>
                        </button>
                    </div>

                    <div className="py-4">
                        <div className="p-0">
                            {activeTab === 'projects' ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {projects.map((project) => (
                                        <div key={project.id} className="group relative bg-white border border-navy/5 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                                            <div className="aspect-[4/3] overflow-hidden bg-navy/5">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <span className="text-[10px] font-bold text-gold uppercase tracking-widest block mb-2">{project.category}</span>
                                                <h3 className="text-lg font-bold text-navy mb-4">{project.title}</h3>
                                                <div className="flex items-center justify-end gap-2 pt-4 border-t border-navy/5">
                                                    <Link
                                                        href={route('admin.projects.edit', project.id)}
                                                        className="p-2 text-navy/20 hover:text-gold hover:bg-gold/10 rounded-xl transition-all"
                                                    >
                                                        <Edit size={18} />
                                                    </Link>
                                                    <button
                                                        onClick={() => deleteItem('projects', project.id)}
                                                        className="p-2 text-navy/20 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {projects.length === 0 && (
                                        <div className="col-span-full py-20 text-center">
                                            <ImageIcon className="mx-auto mb-4 text-navy/10" size={48} />
                                            <p className="text-navy/40">Belum ada proyek ditambahkan.</p>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                    {clients.map((client) => (
                                        <div key={client.id} className="group flex flex-col items-center bg-white border border-navy/5 p-6 rounded-3xl hover:shadow-xl transition-all">
                                            <div className="w-full aspect-square flex items-center justify-center p-4 bg-navy/[0.02] rounded-2xl mb-4">
                                                <img
                                                    src={client.logo}
                                                    alt={client.name}
                                                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                                />
                                            </div>
                                            <p className="text-xs font-bold text-navy text-center line-clamp-1">{client.name}</p>
                                            <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Link
                                                    href={route('admin.clients.edit', client.id)}
                                                    className="p-1.5 text-navy/20 hover:text-gold transition-all"
                                                >
                                                    <Edit size={14} />
                                                </Link>
                                                <button
                                                    onClick={() => deleteItem('clients', client.id)}
                                                    className="p-1.5 text-navy/20 hover:text-red-500 transition-all"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    {clients.length === 0 && (
                                        <div className="col-span-full py-20 text-center">
                                            <Building2 className="mx-auto mb-4 text-navy/10" size={48} />
                                            <p className="text-navy/40">Belum ada klien ditambahkan.</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
