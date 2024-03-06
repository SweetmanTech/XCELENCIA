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
export const PRICE = "22977000000000000"

// Tokenbound
export const MULTICALL3_ADDRESS = "0xcA11bde05977b3631167028862bE2a173976CA11"
export const REGISTRY_ADDRESS = "0x000000006551c19487814612e58FE06813775758"
export const ACCOUNT_PROXY = "0x55266d75D1a14E4572138116aF39863Ed6596E7F"
export const ACCOUNT_IMPLEMENTATION = "0x41C8f39463A868d3A88af00cd0fe7102F30E44eC"
export const SALT = "0"
export const SALT_BYTES = "0x0000000000000000000000000000000000000000000000000000000000000000"
