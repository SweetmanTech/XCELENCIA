import { base, baseSepolia, optimism, sepolia } from "viem/chains"

// General
export const SEO_TITLE = "El Niño Estrella"
export const SEO_DESCRIPTION = "album by Xcelencia"
export const SEO_IMAGE = "/images/logo.png"

// Networks
export const IS_TESTNET = process.env.NEXT_PUBLIC_TESTNET
export const CHAIN = IS_TESTNET ? baseSepolia : base
export const CHAIN_ID = CHAIN.id
export const INTERSTELLAR_CHAIN = IS_TESTNET ? sepolia : optimism
export const INTERSTELLAR_CHAIN_ID = INTERSTELLAR_CHAIN.id

// Tokenbound
export const MULTICALL3_ADDRESS = "0xcA11bde05977b3631167028862bE2a173976CA11"
export const REGISTRY_ADDRESS = "0x000000006551c19487814612e58FE06813775758"
export const ACCOUNT_PROXY = "0x55266d75D1a14E4572138116aF39863Ed6596E7F"
export const ACCOUNT_IMPLEMENTATION = "0x41C8f39463A868d3A88af00cd0fe7102F30E44eC"
export const SALT = "0"
export const SALT_BYTES = "0x0000000000000000000000000000000000000000000000000000000000000000"

// Relay
export const RELAY_URL = `https://api.${IS_TESTNET ? "testnets." : ""}relay.link/execute/call`

// Sound
export const SOUND_TRACKLIST = IS_TESTNET
  ? ([
      "0x4087A499CC83Aca2b5151255E37d7696E3E5753b",
      "0xA4151A4eD938a686EE1a85c648E157cD9e6A8b7F",
      "0xc4836FFEa055836dEfb9598CAe91a4f07363c3aB",
      "0xe164b2dE17fBcB6A52e979345031A259D1221788",
      "0x8f0ba824B61279b56aF1E7D31b54658e3d30a708",
      "0xd7BFa505BB2c7EC8e9f09CB86180780f94477416",
      "0x7cf48fcd77Bf3344cD3C4d07627609884367A00E",
      "0x183d6c62D06C442170a26024CfB5683a65ECDe2c",
      "0x1dbB8c2064726d56903d1e9B3b907298fb6b716A",
      "0xdbb470d0d695e7d4377873fe3ffba91460bc17af",
      "0x9dc88d492f6b6fb7a380c3314de61509cf8fa30e",
    ] as `0x${string}`[]) // base sepolia
  : ([
      "0xf57fdef4cbf30f7d47f578d313a181141c91c1e9", // INTRO
      "0xda7e196e3401b385d9e7a3394b5c38751121cb5a", // CHIMBITA
      "0xd1238dc286c8926eb64da55e2d77febca1fa7a14", // CAILE
      "0x568b37599335e288fd0589cb1e2fa9c7afe40196", // CUENTO DE HADAS
      "0xde88522dc78a6cc99c1cff060d8bc744291e159a", // Spotify
      "0xc6f8fdde16e568fafc424ed8ddf43d1b9d7781e1", // OASIS
      "0xf54bf271bb72a485b43ca6bcaa0ed4e5c114ed90", // TODAS
      "0x88a35ad8ef5efc78eae8d62fab2a8ec07a56113a", // REGGAETON
      "0x2c85701810c79279f70e27d0e6aeae7a5b9e4977", // PLAYA
      "0x508725ed6986bf4b865ff5bfb2735d50a70794a7", // MI NENA
      "0x3a66f8ec26faf81bc76745f52f1c1aa9b945a8c0", // ENE
    ] as `0x${string}`[]) // base mainnet
export const SOUND_INTERSTELLAR_TRACKLIST = IS_TESTNET
  ? ([
      "0x7c5eab814ee40e31a5c5d655ef46a855a97d738b",
      "0xf0e6a58d97c7dc72e46121fa9c0c3a001f2c9767",
      "0x5a4bdbc0ff1a605242ddceeb3cdb4158e94fe909",
    ] as `0x${string}`[]) // sepolia testnet
  : ([
      "0x60dcb74e687357308a54e905118c21f0199ceada", // Cancun FT. Tarot
      // "0xd179a77ecf429e2d9f7e65d8b055ac1a40394706", // Las Nike - not buyable
      "0xd1e31904865c9d38040Cef595677dC127537B296", // Eleven
    ] as `0x${string}`[]) // optimism mainnet

// Zora
export const DROP_ADDRESS = IS_TESTNET
  ? "0x0b93a56db47797142076e24c520c846c9bd0d6fa" // base sepolia
  : "0x16F1FC98282AFDA367999012027b5A3fA656a713" // base mainnet

export const ZORA_VIDEO = IS_TESTNET
  ? "0x78aeF8d0bdbA272F34d86bF6B8ba96aa54584932" // base sepolia testnet
  : "0x5ed5214bad1ed909a13cbc8fd5539e2e09c21b48" // base mainnet
export const ZORA_FIXED_PRICE_SALE_STRATEGY = IS_TESTNET
  ? "0xd34872BE0cdb6b09d45FCa067B07f04a1A9aE1aE" // base sepolia
  : "0x04E2516A2c207E84a1839755675dfd8eF6302F0a" // base mainnet
export const ZORA_PRICE = "777000000000000"
export const COMMENT = "XCELENCIA - ERC6551 smart album 🪄"
// TODO: CHANGE TO 0xSPLIT ADDRESS
export const MINT_REFERRAL_ADDRESS = process.env.NEXT_PUBLIC_REFERRAL as `0x${string}`

// Catalog
export const CATALOGCOSIGN_ADDRESS = IS_TESTNET
  ? "0xA9d06704e872C868be343C8DDBb2B412d17dea6c" // base sepolia
  : "0x15e57847c5eee553e0eaa247de0dffef28dd68eb" // base
export const CATALOG_ID = IS_TESTNET
  ? "5319329821006713189457368775898122609838495559285808490438434687907532899470" // base sepolia
  : "5319329821006713189457368775898122609838495559285808490438434687907532899375" // base mainnet
export const CATALOG_REFERRAL = process.env.NEXT_PUBLIC_REFERRAL as `0x${string}`
export const CATALOG_PRICE = "1000000000000000"
