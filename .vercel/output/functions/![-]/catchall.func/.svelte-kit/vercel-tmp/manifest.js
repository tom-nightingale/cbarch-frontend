export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","browserconfig.xml","cb-initials.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","icons/icon-sprite.svg","landing-image.jpg","logo.png","logo.webp","mstile-150x150.png","robots.txt","safari-pinned-tab.svg","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".xml":"text/xml",".svg":"image/svg+xml",".jpg":"image/jpeg",".webp":"image/webp",".txt":"text/plain",".webmanifest":"application/manifest+json"},
	_: {
		client: {start:"_app/immutable/entry/start.DOgA4PZ1.js",app:"_app/immutable/entry/app.BlgBclWW.js",imports:["_app/immutable/entry/start.DOgA4PZ1.js","_app/immutable/chunks/CRgI2t4W.js","_app/immutable/chunks/IJDI8Vje.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/entry/app.BlgBclWW.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/IJDI8Vje.js","_app/immutable/chunks/IHki7fMi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/8.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/projects/[slug]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[...slug]",
				pattern: /^(?:\/([^]*))?\/?$/,
				params: [{"name":"slug","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/","/about","/contact","/privacy-policy","/projects","/team","/projects/cassio-green","/projects/Colwick","/projects/makers-yard-leyton","/projects/wilton-park","/projects/belmont-apartments","/projects/grand-union-apartments","/projects/flora-gardens","/projects/white-post-street","/projects/the-link-apartments-brent-cross","/projects/vanquish-house-northwood","/projects/whsc","/projects/grovewood-apartments"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
