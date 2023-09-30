

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.da8bbe4c.js","_app/immutable/chunks/scheduler.c17f58d9.js","_app/immutable/chunks/index.cbc31333.js","_app/immutable/chunks/singletons.17b1fd68.js"];
export const stylesheets = [];
export const fonts = [];
