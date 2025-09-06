import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DkRZSIeE.js","_app/immutable/chunks/DDaFqBUN.js","_app/immutable/chunks/IJDI8Vje.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/BLUBpwEa.js","_app/immutable/chunks/DkSCk6px.js","_app/immutable/chunks/DkEvjY3K.js","_app/immutable/chunks/CRgI2t4W.js"];
export const stylesheets = ["_app/immutable/assets/Button.Uvn1Xkfc.css","_app/immutable/assets/Icon.B4vAxvv1.css","_app/immutable/assets/0.BmEv_E0r.css"];
export const fonts = [];
