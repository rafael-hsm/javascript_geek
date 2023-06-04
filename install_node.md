# Download package with curl
Installing curl and use NVM to manage the download.

`sudo apt-get install curl`
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`

# Access the file to terminal
`source ~/.bashrc`
## Check version disponible
`nvm list-remote`

# Install the last_version
```bash
nvm install last_version
nvm alias default last_version
node -v
```