const path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

const config = {
	test: {
		root: rootPath,
		baseURL: 'http://localhost:3002',
		baseURL_API: 'http://localhost:3002',
		baseURL_Auth: 'http://localhost:3002',
		baseURL_CDN: 'http://localhost:3002',
		domain: 'localhost',
		port: 3002,
		accessToken: {
			secret: 'G-KaNdRgUkXp2s5v8y/B?E(H+MbQeShVmYq3t6w9z$C&F)J@NcRfUjWnZr4u7x!A',
			expTime: '15m',
			gameExpTime: '24h'
		},
		refreshToken: {
			expTime: '7d',
		},
		discord: {
			clientID: 'discord1234',
			clientSecret: 'shhhhh!',
		},
		twitch: {
			clientID: 'twitch1234',
			clientSecret: '*hey lil mama lemme whisper in your ear*',
		},
		twitter: {
			consumerKey: 'twitter12354',
			consumerSecret: '*lemme tell ya somethin youd like to hear*',
		},
		steam: {
			webAPIKey: 'webAPIKey12345',
			preventLimited: process.env.STEAM_PREVENT_LIMITED === 'true',
			useSteamTicketLibrary: process.env.STEAM_USE_ENCRYPTED_TICKETS === 'true',
			ticketsSecretKey: process.env.STEAM_TICKETS_SECRET,
		},
		db: {
			name: 'momentum_test',
			userName: 'mom_test',
			password: 'password',
			host: 'db',
			logging: false,
			pool: {
				max: 15,
				min: 0,
				acquire: 15000,
				idle: 500
			}
		},
		session: {
			secret: 'keyboard cat',
		},
		storage: {
			useLocal: process.env.MOM_STORAGE_USE_LOCAL === 'true',
			region: process.env.MOM_STORAGE_REGION,
			endpointURL: process.env.MOM_STORAGE_ENDPOINT_URL,
			bucketName: process.env.MOM_STORAGE_BUCKET_NAME,
		}
	},
	development: {
		root: rootPath,
		baseURL: process.env.BASE_URL,
		baseURL_API: process.env.API_URL,
		baseURL_Auth: process.env.AUTH_URL,
		baseURL_CDN: process.env.CDN_URL,
		domain: 'localhost',
		port: 3002,
		accessToken: {
			secret: 'G-KaNdRgUkXp2s5v8y/B?E(H+MbQeShVmYq3t6w9z$C&F)J@NcRfUjWnZr4u7x!A',
			expTime: '15m',
			gameExpTime: '24h'
		},
		refreshToken: {
			expTime: '7d',
		},
		discord: {
			clientID: process.env.DISCORD_CLIENT_ID,
			clientSecret: process.env.DISCORD_CLIENT_SECRET,
		},
		twitch: {
			clientID: process.env.TWITCH_CLIENT_ID,
			clientSecret: process.env.TWITCH_CLIENT_SECRET,
		},
		twitter: {
			consumerKey: process.env.TWITTER_CONSUMER_KEY,
			consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
		},
		steam: {
			webAPIKey: process.env.STEAM_WEB_API_KEY,
			preventLimited: process.env.STEAM_PREVENT_LIMITED === 'true',
			useSteamTicketLibrary: process.env.STEAM_USE_ENCRYPTED_TICKETS === 'true',
			ticketsSecretKey: process.env.STEAM_TICKETS_SECRET,
		},
		db: {
			name: 'momentum',
			userName: 'mom',
			password: 'password',
			host: 'db',
			logging: console.log,
			pool: {
				max: 10,
				min: 0,
				acquire: 30000,
				idle: 10000
			}
		},
		session: {
			secret: 'keyboard cat',
		},
		storage: {
			useLocal: process.env.MOM_STORAGE_USE_LOCAL === 'true',
			region: process.env.MOM_STORAGE_REGION,
			endpointURL: process.env.MOM_STORAGE_ENDPOINT_URL,
			bucketName: process.env.MOM_STORAGE_BUCKET_NAME,
		}
	},
	production: {
		root: rootPath,
		baseURL: process.env.BASE_URL,
		baseURL_API: process.env.API_URL,
		baseURL_Auth: process.env.AUTH_URL,
		baseURL_CDN: process.env.CDN_URL,
		domain: 'momentum-mod.org',
		port: process.env.NODE_PORT,
		accessToken: {
			secret: process.env.JWT_SECRET,
			expTime: '15m',
			gameExpTime: '24h'
		},
		refreshToken: {
			expTime: '7d',
		},
		discord: {
			clientID: process.env.DISCORD_CLIENT_ID,
			clientSecret: process.env.DISCORD_CLIENT_SECRET,
		},
		twitch: {
			clientID: process.env.TWITCH_CLIENT_ID,
			clientSecret: process.env.TWITCH_CLIENT_SECRET,
		},
		twitter: {
			consumerKey: process.env.TWITTER_CONSUMER_KEY,
			consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
		},
		steam: {
			webAPIKey: process.env.STEAM_WEB_API_KEY,
			preventLimited: process.env.STEAM_PREVENT_LIMITED === 'true',
			useSteamTicketLibrary: process.env.STEAM_USE_ENCRYPTED_TICKETS === 'true',
			ticketsSecretKey: process.env.STEAM_TICKETS_SECRET,
		},
		db: {
			name: 'momentum',
			userName: process.env.MOM_DATABASE_USER,
			password: process.env.MOM_DATABASE_PW,
			host: process.env.MOM_DATABASE_HOST,
			logging: false,
			pool: {
				max: 10,
				min: 0,
				acquire: 30000,
				idle: 10000
			}
		},
		session: {
			secret: process.env.EXPRESS_SESSION_SECRET,
		},
		storage: {
			useLocal: process.env.MOM_STORAGE_USE_LOCAL === 'true',
			region: process.env.MOM_STORAGE_REGION,
			endpointURL: process.env.MOM_STORAGE_ENDPOINT_URL,
			bucketName: process.env.MOM_STORAGE_BUCKET_NAME,
		}
	}
};

module.exports = config[env];
