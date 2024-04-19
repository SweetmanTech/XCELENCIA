const getUsdConversion = (ethAmount, ethPrice) => (parseFloat(ethAmount) * ethPrice).toFixed(2)

export default getUsdConversion
