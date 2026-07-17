import { updatePassword } from '\''../actions'\''

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-sm w-full space-y-6">
        <h1 className="text-2xl font-bold text-center">Set a new password</h1>

        <form action={updatePassword} className="space-y-4">
          <input
            type="password"
            name="password"
            placeholder="New password (min 6 characters)"
            required
            minLength={6}
            className="w-full border rounded-lg px-4 py-2"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 font-medium hover:bg-blue-700"
          >
            Update password
          </button>
        </form>
      </div>
    </div>
  )
}
