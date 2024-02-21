import { sepolia } from "viem/chains"

export const SEO_TITLE = "XCELENCIA"
export const SEO_DESCRIPTION = "el niño estrella"
export const SEO_IMAGE = "/images/logo.png"
export const DROP_ADDRESS = process.env.NEXT_PUBLIC_DROP_ADDRESS
export const IS_TESTNET = process.env.NEXT_PUBLIC_TESTNET
export const CHAIN = IS_TESTNET ? sepolia : sepolia
export const CHAIN_ID = CHAIN.id
export const MINTER_ADDRESS = process.env.NEXT_PUBLIC_MINTER
export const MINT_REFERRAL_ADDRESS = process.env.NEXT_PUBLIC_REFERRAL
