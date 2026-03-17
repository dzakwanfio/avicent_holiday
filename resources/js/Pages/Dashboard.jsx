import { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { LayoutDashboard, Bus, ClipboardList, Star, Newspaper } from 'lucide-react';

export default function Dashboard() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [serverStatus, setServerStatus] = useState('Checking...');

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        const checkServer = async () => {
            try {
                const response = await fetch('/sanctum/csrf-cookie', { method: 'GET' });
                if (response.ok) {
                    setServerStatus('Online');
                } else {
                    setServerStatus('Degraded');
                }
            } catch (error) {
                setServerStatus('Offline');
            }
        };

        checkServer();
        const interval = setInterval(checkServer, 10000);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
            clearInterval(interval);
        };
    }, []);

    const stats = [
        { name: 'Layanan', icon: ClipboardList, href: route('admin.services.index') },
        { name: 'Armada', icon: Bus, href: route('admin.vehicles.index') },
        { name: 'Portofolio', icon: LayoutDashboard, href: route('admin.projects.index') },
        { name: 'Testimoni', icon: Star, href: route('admin.testimonials.index') },
        { name: 'Berita', icon: Newspaper, href: route('admin.posts.index') },
    ];

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-bold leading-tight text-navy">Admin Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {stats.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="bg-white p-6 rounded-3xl shadow-sm border border-navy/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center"
                                >
                                    <div className="w-12 h-12 bg-navy/5 text-gold rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold group-hover:text-white transition-colors">
                                        <Icon size={24} />
                                    </div>
                                    <span className="text-sm font-bold text-navy">{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Welcome Card */}
                    <div className="mt-8 bg-white overflow-hidden shadow-xl sm:rounded-3xl border border-navy/5">
                        <div className="p-10">
                            <h3 className="text-2xl font-bold text-navy mb-4">Selamat Datang di Panel Admin! 👋</h3>
                            <p className="text-navy/60 leading-relaxed max-w-2xl">
                                Melalui dashboard ini, Anda dapat mengelola seluruh konten website Avicent Holiday.
                                Mulai dari menambahkan armada bus terbaru, memperbarui layanan, hingga mempublikasikan berita dan artikel perjalanan.
                            </p>

                            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="p-6 bg-gold/5 rounded-2xl border border-gold/10">
                                    <h4 className="font-bold text-navy mb-2 text-sm">Update Terakhir</h4>
                                    <p className="text-xs text-navy/50">Sistem database sudah terhubung dengan landing page.</p>
                                </div>
                                <div className="p-6 bg-navy/5 rounded-2xl border border-navy/10">
                                    <h4 className="font-bold text-navy mb-2 text-sm">Status Server</h4>
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full animate-pulse ${isOnline && serverStatus === 'Online' ? 'bg-green-500' : 'bg-red-500'}`} />
                                        <p className={`text-xs font-bold ${isOnline && serverStatus === 'Online' ? 'text-green-600' : 'text-red-600'}`}>
                                            {isOnline && serverStatus === 'Online' ? 'Online & Sinkron' : 'Terputus / Offline'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
