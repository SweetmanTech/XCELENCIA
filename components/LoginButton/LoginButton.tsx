import { usePrivy } from "@privy-io/react-auth"

const LoginButton = ({ className = "", children = null }) => {
  const { login, authenticated, logout } = usePrivy()

  const handleClick = () => {
    if (!authenticated) {
      login()
      return
    }

    logout()
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`text-[18px] font-bold uppercase bg-gray rounded-full
      px-[10px] py-[10px] ${className}`}
    >
      {authenticated ? "Logout" : children || "Login"}
    </button>
  )
}

export default LoginButton
