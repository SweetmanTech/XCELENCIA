import { usePrivy } from "@privy-io/react-auth"

const SignButton = ({ className = "" }) => {
  const { authenticated, logout, login, ready } = usePrivy()

  const handleClick = () => {
    if (authenticated) {
      logout()
      return
    }

    login()
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`text-[18px] font-bold uppercase bg-gray rounded-full
      text-uppercase
      px-[20px] py-[10px] ${className}`}
    >
      {ready && !authenticated ? "Sign In" : "Sign Out"}
    </button>
  )
}

export default SignButton
