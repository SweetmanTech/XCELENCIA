function hexToEthAddress(hex) {
  return `0x${hex.slice(-40)}`.toLowerCase()
}

export default hexToEthAddress
