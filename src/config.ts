export default {
  secretKey: process.env.secretKey || 'THISISMYSECURETOKEN',
  host: process.env.host || 'http://localhost',
  port: process.env.port || '21465',
  deviceName: process.env.deviceName || 'WA WhatsFinance',
  poweredBy: process.env.poweredBy || 'WhatsFinance',
  startAllSession: process.env.startAllSession || true,
  tokenStoreType: process.env.tokenStoreType || 'mongodb',
  maxListeners: process.env.maxListeners || 15,
  customUserDataDir: process.env.customUserDataDir || '../userDataDir/',
  webhook: {
    url: null,
    autoDownload: true,
    uploadS3: false,
    readMessage: true,
    allUnreadOnStart: false,
    listenAcks: true,
    onPresenceChanged: true,
    onParticipantsChanged: true,
    onReactionMessage: true,
    onPollResponse: true,
    onRevokedMessage: true,
    onLabelUpdated: true,
    onSelfMessage: false,
    ignore: ['status@broadcast'],
  },
  websocket: {
    autoDownload: false,
    uploadS3: false,
  },
  chatwoot: {
    sendQrCode: true,
    sendStatus: true,
  },
  archive: {
    enable: false,
    waitTime: 10,
    daysToArchive: 45,
  },
  log: {
    level: 'silly', // Before open a issue, change level to silly and retry a action
    logger: ['console', 'file'],
  },
  createOptions: {
    browserArgs: [
      '--disable-web-security',
      '--no-sandbox',
      '--disable-web-security',
      '--aggressive-cache-discard',
      '--disable-cache',
      '--disable-application-cache',
      '--disable-offline-load-stale-cache',
      '--disk-cache-size=0',
      '--disable-background-networking',
      '--disable-default-apps',
      '--disable-extensions',
      '--disable-sync',
      '--disable-translate',
      '--hide-scrollbars',
      '--metrics-recording-only',
      '--mute-audio',
      '--no-first-run',
      '--safebrowsing-disable-auto-update',
      '--ignore-certificate-errors',
      '--ignore-ssl-errors',
      '--ignore-certificate-errors-spki-list',
    ],
    /**
     * Example of configuring the linkPreview generator
     * If you set this to 'null', it will use global servers; however, you have the option to define your own server
     * Clone the repository https://github.com/wppconnect-team/wa-js-api-server and host it on your server with ssl
     *
     * Configure the attribute as follows:
     * linkPreviewApiServers: [ 'https://www.yourserver.com/wa-js-api-server' ]
     */
    linkPreviewApiServers: null,
  },
  mapper: {
    enable: false,
    prefix: 'tagone-',
  },
  db: {
    mongodbDatabase: process.env.mongodbDatabase || 'tokens',
    mongodbCollection: process.env.mongodbCollection || '',
    mongodbUser: process.env.mongodbUser || '',
    mongodbPassword: process.env.mongodbPassword || '',
    mongodbHost: process.env.mongodbHost || '',
    mongoIsRemote: process.env.mongoIsRemote || true,
    mongoURLRemote: process.env.mongoURLRemote || '',
    mongodbPort: process.env.mongodbPort || 27017,
    redisHost: process.env.redisHost || 'localhost',
    redisPort: process.env.redisPort || 6379,
    redisPassword: process.env.redisPassword || '',
    redisDb: process.env.redisDb || 0,
    redisPrefix: process.env.redisPrefix || 'docker',
  },
  aws_s3: {
    region: process.env.region || 'us-east-1',
    access_key_id: process.env.access_key_id || null,
    secret_key: process.env.secret_key || null,
    defaultBucketName: process.env.defaultBucketName || null,
    endpoint: process.env.endpoint || null,
    forcePathStyle:
      (process.env.forcePathStyle && Boolean(process.env.forcePathStyle)) ||
      null,
  },
};
