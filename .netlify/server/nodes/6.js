

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/scatterplot/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.ee54ad46.js","_app/immutable/chunks/scheduler.c17f58d9.js","_app/immutable/chunks/index.cbc31333.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/transform.639829cf.js","_app/immutable/chunks/Pastel2.342a34f7.js","_app/immutable/chunks/data.2959233d.js"];
export const stylesheets = ["_app/immutable/assets/6.5d64f0f9.css"];
export const fonts = [];
