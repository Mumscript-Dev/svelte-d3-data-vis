

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/map/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.d91cbf3b.js","_app/immutable/chunks/scheduler.c17f58d9.js","_app/immutable/chunks/index.cbc31333.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/transform.639829cf.js","_app/immutable/chunks/data.2959233d.js"];
export const stylesheets = ["_app/immutable/assets/5.ff234275.css"];
export const fonts = [];
