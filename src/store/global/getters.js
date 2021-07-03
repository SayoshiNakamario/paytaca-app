export function assets (state) {
  return state.assets
}

export function balances (state) {
  const account = state.privateMode ? 'private' : 'escrow'
  return state.accounts[account].balances
}

export function transactions (state) {
  const account = state.privateMode ? 'private' : 'escrow'
  return state.accounts[account].transactions
}

export function address (state) {
  const account = state.privateMode ? 'private' : 'escrow'
  return state.accounts[account].address
}

export function isPrivateMode (state) {
  return state.privateMode
}

export const getWIF = (state) => (address) => {
  return state.vault.privateKeys[address]
}

export const getMnemonic = (state) => () => {
  return state.vault.mnemonic
}
