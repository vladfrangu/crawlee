import { ProxyConfiguration, SessionPool } from '@vladfrangu-dev/crawlee';

const proxyConfiguration = new ProxyConfiguration({ /* opts */ });

const sessionPool = await SessionPool.open({ /* opts */ });

const session = await sessionPool.getSession();

const proxyUrl = await proxyConfiguration.newUrl(session.id);
