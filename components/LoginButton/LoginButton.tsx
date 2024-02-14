import { usePrivy } from "@privy-io/react-auth"

const LoginButton = ({ className = "" }) => {
  const { login } = usePrivy()

  return (
    <button
      type="button"
      onClick={login}
      className={`text-[18px] font-bold uppercase bg-gray rounded-full
      px-[20px] py-[10px] ${className}`}
    >
      Login
    </button>
  )
}

export default LoginButton
