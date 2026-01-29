# onSET-Trainer

Eine Lernapp für Lückentexte (Cloze / Fill-in-the-blank), inspiriert vom OnSet-Übungsformat.

## Features

- 🎯 **Lückentext-Training**: Inline-Eingabefelder direkt im Text
- 📚 **Übungssets**: Organisiere Übungen in Sets mit Tags
- ✏️ **Editor**: Erstelle eigene Übungen durch Text-Markierung
- 📊 **Statistiken**: Fortschritt, Trefferquote, Streaks
- 🔄 **Training-Modi**: Lernen, Testen, Fehler wiederholen
- 💾 **Import/Export**: Sichere deine Daten als JSON
- ⌨️ **Tastatur-Navigation**: Enter → nächstes Feld, Ctrl+Enter → prüfen
- 📱 **Mobile-friendly**: Responsive Design

## Quick Start

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Die App läuft dann unter http://localhost:5173

## Struktur

```
src/
├── components/          # React-Komponenten
│   ├── ClozeRenderer   # Lückentext-Darstellung
│   ├── ExercisePlayer  # Übungs-Screen
│   ├── SetPicker       # Set-Auswahl
│   ├── StatsView       # Statistiken
│   ├── Editor          # Übungseditor
│   └── ui/             # Wiederverwendbare UI-Komponenten
├── context/            # React Context (State)
├── data/               # Beispieldaten
├── types/              # TypeScript-Definitionen
└── utils/              # Hilfsfunktionen
```

## Lückenformat

Lücken werden im Text mit doppelten Klammern markiert:

```
Der Hund [[läuft]] schnell über die [[Wiese]].
```

## Training-Modi

1. **Lernen**: Sofortiges Feedback nach dem Prüfen
2. **Testen**: Feedback erst am Ende aller Übungen
3. **Fehler wiederholen**: Nur falsch beantwortete Übungen

## Tastenkürzel

| Tastenkombination | Aktion |
|------------------|--------|
| `Enter` | Nächstes Eingabefeld |
| `Tab` | Nächstes Eingabefeld |
| `Ctrl+Enter` | Antworten prüfen |

## Daten

Alle Daten werden lokal im Browser (localStorage) gespeichert.
Export/Import als JSON-Datei möglich.

## Technologie

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router

## Lizenz

MIT
