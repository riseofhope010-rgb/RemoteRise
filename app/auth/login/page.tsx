import { login, loginWithGoogle } from '../actions'
import Link from 'next/link'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const params = await searchParams
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-sm w-full space-y-6">
        <h1 className="text-2xl font-bold text-center">Welcome back</h1>
        {params.error && (
          <p className="text-red-600 text-sm text-center">{params.error}</p>
        )}
        <form action={login} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border rounded-lg px-4 py-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full border rounded-lg px-4 py-2"
          />
          <div className="text-right">
            <Link href="/auth/forgot-password" className="text-sm text-blue-600">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700"
          >
            Log in
          </button>
        </form>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <form action={loginWithGoogle}>
          <button
            type="submit"
            className="w-full border rounded-lg py-2 font-medium hover:bg-gray-50"
          >
            Continue with Google
          </button>
        </form>
        <p className="text-center text-sm text-gray-500">
          No account?{' '}
          <Link href="/auth/signup" className="text-blue-600">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}