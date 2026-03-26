import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import postRoutes from './routes/post.routes.js'

const app = new Hono()

app.route("/", postRoutes);

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
});
