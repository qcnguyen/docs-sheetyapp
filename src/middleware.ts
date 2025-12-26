import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  
  // If it's a 404 response
  if (response.status === 404) {
    const url = new URL(context.request.url);
    
    // If it's NOT a docs path, redirect to our custom 404
    if (!url.pathname.startsWith('/docs')) {
      return context.rewrite('/404-main');
    }
    // Otherwise, let Starlight handle it with its default 404
  }
  
  return response;
});
