import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { logout } from '../auth/actions'

export default async function DashboardPage() {
  const supabase = await createClient()

  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    redirect('/auth/login')
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">Welcome, {user.email}</h1>
      <p className="text-gray-500 mt-2">This is your dashboard.</p>
      <form action={logout} className="mt-6">
        <button className="text-red-600 underline">Log out</button>
      </form>
    </div>
  )
}