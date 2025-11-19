// -- Cargar variables de entorno desde .env --
const dotenv = require('dotenv');
dotenv.config();

// -- Logs para verificar que SERVER_URL y API_KEY se cargan correctamente --
console.log("🔎 Loaded SERVER_URL:", process.env.SERVER_URL);
console.log("🔎 Loaded API_KEY:", process.env.API_KEY ? "(present)" : "(missing!)");

const { defineConfig } = require('cypress');
const { cypressConfig } = require('@axe-core/watcher');
const assert = require('node:assert');

// -- Extraer variables --
const { SERVER_URL, API_KEY } = process.env;

// -- Validaciones claras --
assert(SERVER_URL, '❌ ERROR: SERVER_URL is required but missing.');
assert(API_KEY, '❌ ERROR: API_KEY is required but missing.');

console.log("✅ Using Axe Watcher with:");
console.log("   → SERVER_URL:", SERVER_URL);
console.log("   → API_KEY:", API_KEY);

// -- Exportar configuración final --
module.exports = defineConfig(
  cypressConfig({
    axe: {
      apiKey: API_KEY,
      serverURL: SERVER_URL,
    },
    e2e: {
      specPattern: './test/axe-watcher/cypress/*.js',
      supportFile: './test/axe-watcher/support.js',
    },
    video: false,
  })
);
