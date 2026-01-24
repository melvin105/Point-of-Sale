import { Info } from 'lucide-react'

interface ComingSoonPageProps {
    title: string
    icon?: React.ElementType
}

export function ComingSoonPage({ title, icon: Icon = Info }: ComingSoonPageProps) {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center p-12 bg-white rounded-xl border border-dashed border-gray-300">
            <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mb-6">
                <Icon size={40} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-500 max-w-md">
                This module is part of the MVP roadmap. The core logic for data structures and
                Syncfusion integration is ready for implementation.
            </p>
            <div className="mt-8 flex gap-3">
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium shadow-sm active:scale-95 transition-all">
                    Generate Mock Data
                </button>
                <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 active:scale-95 transition-all">
                    View Documentation
                </button>
            </div>
        </div>
    )
}
