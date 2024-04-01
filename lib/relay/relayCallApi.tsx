import { RELAY_URL } from "../consts"

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
    const response = await fetch(RELAY_URL, options)
    const data = await response.json()
    return data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    return { error }
  }
}

export default relayCallApi
