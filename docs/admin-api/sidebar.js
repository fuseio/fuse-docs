module.exports = [
  { type: 'doc', id: 'admin-api/admin-api' },
  {
    type: 'category',
    label: 'Wallets',
    link: { type: 'doc', id: 'admin-api/wallets' },
    items: [
      {
        type: 'doc',
        id: 'admin-api/create-a-custodial-wallet',
        label: 'Create a Custodial Wallet',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'admin-api/get-latest-wallet-by-phone-number',
        label: 'Get Latest Wallet by Phone Number',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'admin-api/get-all-wallets-by-phone-number',
        label: 'Get All Wallets by Phone Number',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'admin-api/check-if-wallet-exists',
        label: 'Check if Wallet Exists',
        className: 'api-method get',
      },
    ],
  },
  {
    type: 'category',
    label: 'Tokens',
    link: { type: 'doc', id: 'admin-api/tokens' },
    items: [
      {
        type: 'doc',
        id: 'admin-api/create-an-erc-20-token',
        label: 'Create an ERC20 Token',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'admin-api/mint-an-erc-20-token',
        label: 'Mint an ERC20 token',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'admin-api/burn-an-erc-20-token',
        label: 'Burn an ERC20 token',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'admin-api/transfer-an-erc-20-token',
        label: 'Transfer an ERC20 token',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'admin-api/get-tokens-by-owner',
        label: 'Get Tokens by Owner',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'admin-api/get-tokens-by-address',
        label: 'Get Tokens by Address',
        className: 'api-method get',
      },
    ],
  },
  {
    type: 'category',
    label: 'Jobs API',
    link: { type: 'doc', id: 'admin-api/jobs-api' },
    items: [
      {
        type: 'doc',
        id: 'admin-api/get-job-by-id',
        label: 'Get Job by Id',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'admin-api/get-job-by-external-id',
        label: 'Get Job by External Id',
        className: 'api-method get',
      },
    ],
  },
]
