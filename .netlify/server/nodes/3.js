

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/bar/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.6155194c.js","_app/immutable/chunks/scheduler.c17f58d9.js","_app/immutable/chunks/index.cbc31333.js","_app/immutable/chunks/transform.639829cf.js"];
export const stylesheets = [];
export const fonts = [];
