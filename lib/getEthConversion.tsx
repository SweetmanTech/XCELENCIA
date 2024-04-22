const getEthConversion = (usdAmount, ethPrice) => (parseFloat(usdAmount) / ethPrice).toFixed(6)

export default getEthConversion
