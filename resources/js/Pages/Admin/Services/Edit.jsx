import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save, X, Bus, Map, Users, Calendar, Cog } from 'lucide-react';
import { useState } from 'react';

const icons = [
    { name: 'Bus', icon: Bus },
    { name: 'Map', icon: Map },
    { name: 'Users', icon: Users },
    { name: 'Calendar', icon: Calendar },
    { name: 'Cog', icon: Cog },
];

export default function Edit({ service }) {
    const { data, setData, put, processing, errors } = useForm({
        title: service.title || '',
        description: service.description || '',
        icon: service.icon || 'Bus',
        features: service.features || [],
    });

    const [tempFeature, setTempFeature] = useState('');

    const addFeature = () => {
        if (tempFeature.trim() && !data.features.includes(tempFeature.trim())) {
            setData('features', [...data.features, tempFeature.trim()]);
            setTempFeature('');
        }
    };

    const removeFeature = (index) => {
        setData('features', data.features.filter((_, i) => i !== index));
    };

    const submit = (e) => {
        e.preventDefault();
        put(route('admin.services.update', service.id));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center gap-4">
                    <Link href={route('admin.services.index')} className="p-2 hover:bg-navy/5 rounded-xl transition-all text-navy/40 hover:text-navy">
                        <ArrowLeft size={20} />
                    </Link>
                    <h2 className="text-xl font-bold leading-tight text-navy">
                        Edit Layanan: {service.title}
                    </h2>
                </div>
            }
        >
            <Head title={`Edit ${service.title}`} />

            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <form onSubmit={submit} className="bg-white shadow-xl sm:rounded-3xl border border-navy/5 overflow-hidden">
                        <div className="p-8 space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-navy uppercase tracking-wider">Judul Layanan</label>
                                        <input
                                            type="text"
                                            value={data.title}
                                            onChange={e => setData('title', e.target.value)}
                                            className="w-full bg-navy/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold transition-all"
                                        />
                                        {errors.title && <p className="text-xs text-red-500">{errors.title}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-navy uppercase tracking-wider">Pilih Ikon</label>
                                        <div className="grid grid-cols-5 gap-2">
                                            {icons.map((item) => (
                                                <button
                                                    key={item.name}
                                                    type="button"
                                                    onClick={() => setData('icon', item.name)}
                                                    className={`p-4 rounded-2xl flex items-center justify-center transition-all ${data.icon === item.name ? 'bg-gold text-white shadow-lg shadow-gold/20' : 'bg-navy/5 text-navy/40 hover:bg-navy/10'}`}
                                                >
                                                    <item.icon size={24} />
                                                </button>
                                            ))}
                                        </div>
                                        {errors.icon && <p className="text-xs text-red-500">{errors.icon}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-navy uppercase tracking-wider">Deskripsi Singkat</label>
                                    <textarea
                                        value={data.description}
                                        onChange={e => setData('description', e.target.value)}
                                        className="w-full bg-navy/5 border-none rounded-3xl p-6 focus:ring-2 focus:ring-gold transition-all h-[185px]"
                                    />
                                    {errors.description && <p className="text-xs text-red-500">{errors.description}</p>}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-sm font-bold text-navy uppercase tracking-wider">Fitur / Keunggulan</label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={tempFeature}
                                        onChange={e => setTempFeature(e.target.value)}
                                        onKeyPress={e => e.key === 'Enter' && (e.preventDefault(), addFeature())}
                                        className="flex-1 bg-navy/5 border-none rounded-2xl p-4 focus:ring-2 focus:ring-gold transition-all"
                                        placeholder="Tambah fitur..."
                                    />
                                    <button
                                        type="button"
                                        onClick={addFeature}
                                        className="p-4 bg-navy text-white rounded-2xl hover:bg-navy/90 transition-all font-bold"
                                    >
                                        Tambah
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {data.features.map((feature, index) => (
                                        <span key={index} className="flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold rounded-xl text-sm font-bold border border-gold/20">
                                            {feature}
                                            <button type="button" onClick={() => removeFeature(index)} className="hover:text-navy">
                                                <X size={14} />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                                {errors.features && <p className="text-xs text-red-500">{errors.features}</p>}
                            </div>
                        </div>

                        <div className="bg-navy/5 p-8 flex justify-between items-center">
                            <p className="text-sm text-navy/40 italic">Pastikan data sudah benar sebelum menyimpan perubahan.</p>
                            <button
                                type="submit"
                                disabled={processing}
                                className="btn-gold flex items-center gap-2 py-3 px-8 rounded-2xl text-base shadow-lg hover:shadow-xl disabled:opacity-50"
                            >
                                <Save size={20} />
                                {processing ? 'Memperbarui...' : 'Simpan Perubahan'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
