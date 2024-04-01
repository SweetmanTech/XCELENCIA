const relayCallApi = async ({ destinationChainId, originChainId, user, txs }: any) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      destinationChainId,
      originChainId,
      source: "estrella.city",
      txs,
      user,
    }),
  }

  try {
    const response = await fetch("https://api.testnets.relay.link/execute/call", options)
    console.log("SWEETS response", response)

    const data = await response.json()
    return data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    return { error }
  }
}

export default relayCallApi
