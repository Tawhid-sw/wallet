import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { env } from 'cloudflare:workers'

export const getEnv = createServerFn().handler( async () =>{
  return {
    Env: env
  }
})
export const Route = createFileRoute('/')({ 
  loader: () => getEnv() ,
  component: Home })

function Home() {
  const data = Route.useLoaderData()
  console.log(data)
  return (
    <div className="p-8">
      {data.Env.test}
    </div>
  )
}
