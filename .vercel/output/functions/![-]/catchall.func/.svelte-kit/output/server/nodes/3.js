import * as universal from '../entries/pages/_...slug_/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_...slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[...slug]/+page.ts";
export const imports = ["_app/immutable/nodes/3.DZlG-usD.js","_app/immutable/chunks/DDaFqBUN.js","_app/immutable/chunks/IJDI8Vje.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/C1YIMHzQ.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/BLUBpwEa.js","_app/immutable/chunks/xG_BLHwj.js","_app/immutable/chunks/QrIvD7Qm.js","_app/immutable/chunks/zjosUCXw.js","_app/immutable/chunks/ByV5FDZv.js"];
export const stylesheets = ["_app/immutable/assets/Button.Uvn1Xkfc.css"];
export const fonts = [];
