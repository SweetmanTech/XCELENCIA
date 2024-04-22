const createWarpCast = (castBody: string) => {
  const text = encodeURIComponent(castBody)
  window.open(`https://warpcast.com/~/compose?text=${text}`, "_blank")
}

export default createWarpCast
