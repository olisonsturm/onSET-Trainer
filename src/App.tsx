import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { SetPicker, ExercisePlayer, StatsView, Editor, ResultScreen, ImportExport } from './components';

function Layout({ children }: { children: React.ReactNode }) {
    const location = useLocation();
    const isExercising = location.pathname.includes('/exercise/');

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header - hidden during exercise */}
            {!isExercising && (
                <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <Link to="/" className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-xl font-bold text-gray-900">onSET-Trainer</span>
                            </Link>

                            <nav className="flex items-center gap-1">
                                <NavLink to="/" label="Overview" />
                                <NavLink to="/stats" label="Statistics" />
                                <NavLink to="/editor" label="Editor" />
                            </nav>
                        </div>
                    </div>
                </header>
            )}

            {/* Main Content */}
            <main className={`${isExercising ? 'py-6' : 'py-8'} px-4 sm:px-6 lg:px-8`}>
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>

            {/* Footer - hidden during exercise */}
            {!isExercising && (
                <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
                        <p>onSET-Trainer – C-Test exercises for effective learning</p>
                        <p className="mt-1 text-xs text-gray-400">
                            Data is stored locally. No server connection required.
                        </p>
                    </div>
                </footer>
            )}
        </div>
    );
}

function NavLink({ to, label }: { to: string; label: string }) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
        >
            {label}
        </Link>
    );
}

// Page Components
function DashboardPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to onSET-Trainer</h1>
                <p className="text-gray-600">
                    Choose an exercise set or create your own C-Test exercises in the Editor.
                </p>
            </div>
            <SetPicker />
            <ImportExport />
        </div>
    );
}

function StatsPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Statistics</h1>
            <StatsView />
        </div>
    );
}

function EditorPage() {
    return <Editor />;
}

function ExercisePage() {
    return <ExercisePlayer />;
}

function ResultPage() {
    return <ResultScreen />;
}

function NotFoundPage() {
    return (
        <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
            <p className="text-gray-600 mb-8">Page not found</p>
            <Link to="/" className="text-primary-600 hover:text-primary-700 font-medium">
                Back to Overview
            </Link>
        </div>
    );
}

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/stats" element={<StatsPage />} />
                <Route path="/editor" element={<EditorPage />} />
                <Route path="/exercise/:setId/:mode" element={<ExercisePage />} />
                <Route path="/result/:setId" element={<ResultPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Layout>
    );
}
