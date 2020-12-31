// ========================================
// Puerto
// ========================================
process.env.PORT = process.env.PORT || 3000;

// ========================================
// Entorno
// ========================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ========================================
// Base de datos
// ========================================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

// ========================================
// Google client id
// ========================================
process.env.CLIENT_ID = process.env.CLIENT_ID || '527882806648-mq0d13igt54oa10ivpqg476k33m2td81.apps.googleusercontent.com';

// ========================================
// Vencimiento de token
// ========================================
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ========================================
// SEED de autenticación
// ========================================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';