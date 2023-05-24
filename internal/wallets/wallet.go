package wallet

type Wallet interface {
	GetMnemonic(path string, passwords []string) (string, error)
}
