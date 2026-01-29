import { useRef } from 'react';
import { useApp } from '@/context/AppContext';
import { Button, Card } from './ui';
import { exportToJSON, importFromJSON } from '@/utils/storage';

export function ImportExport() {
    const { state, dispatch } = useApp();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleExport = () => {
        exportToJSON(state.exerciseSets, state.exercises);
    };

    const handleImportClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            const { sets, exercises } = await importFromJSON(file);
            dispatch({ type: 'IMPORT_DATA', payload: { sets, exercises } });
            alert(`Successfully imported: ${sets.length} sets, ${exercises.length} exercises`);
        } catch (error) {
            alert('Import failed: ' + (error as Error).message);
        }

        // Reset input
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Import / Export</h3>

            <p className="text-sm text-gray-600 mb-4">
                Export your exercise sets as a JSON file to backup or share them.
                Import JSON files to add new sets.
            </p>

            <div className="flex gap-3">
                <Button variant="secondary" onClick={handleExport}>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Export
                </Button>
                <Button variant="outline" onClick={handleImportClick}>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    Import
                </Button>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".json"
                    onChange={handleFileChange}
                    className="hidden"
                />
            </div>

            <div className="mt-4 text-xs text-gray-400">
                Current data: {state.exerciseSets.length} sets, {state.exercises.length} exercises
            </div>
        </Card>
    );
}
