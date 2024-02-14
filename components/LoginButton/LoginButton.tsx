import { usePrivy } from "@privy-io/react-auth"

const LoginButton = ({ className = "", children = null }) => {
  const { login } = usePrivy()

  return (
    <button
      type="button"
      onClick={login}
      className={`text-[18px] font-bold uppercase bg-gray rounded-full
      px-[10px] py-[10px] ${className}`}
    >
      {children || "Login"}
    </button>
  )
}

export default LoginButton
