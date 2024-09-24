import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            manifest: true, // Habilitar la generación del archivo de manifiesto
            refresh: true,
        }),
    ],
});
