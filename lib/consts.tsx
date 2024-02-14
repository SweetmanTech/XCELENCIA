import { BigNumber } from "ethers"
import { base, sepolia } from "@wagmi/core/chains"

export const SEO_TITLE = "XCELENCIA"
export const SEO_DESCRIPTION = "el niño estrella"
export const SEO_IMAGE = "/images/logo.png"

export const CHAIN = process.env.NEXT_PUBLIC_TESTNET ? sepolia : base
export const CHAIN_ID = CHAIN.id
export const IS_TESTNET = process.env.NEXT_PUBLIC_TESTNET
export const BASE_MINTER = "0xFF8B0f870ff56870Dc5aBd6cB3E6E89c8ba2e062"
export const SEPOLIA_MINTER = "0x1Cd1C1f3b8B779B50Db23155F2Cb244FCcA06B21"
export const MULTICALL_3_ADDRESS = "0xcA11bde05977b3631167028862bE2a173976CA11"
export const MINT_REFERRAL = "0xcfBf34d385EA2d5Eb947063b67eA226dcDA3DC38"
export const GAS_LIMIT_CHECKOUT_PER_ITEM = "175000"

export const ZORA_FEE = BigNumber.from("777000000000000")
