# Node.js Installation Guide

## Installing Node.js on Windows
1. Download the Node.js installer from the [official website](https://nodejs.org/).
2. Run the installer and follow the setup wizard.
3. During installation, ensure the option to add Node.js to your system PATH is selected.
4. Verify the installation by opening a command prompt and running:
   ```
   node -v
   npm -v
   ```

## Installing Node.js on macOS
1. Open the Terminal.
2. Install Homebrew if it is not already installed by running:
   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
3. Use Homebrew to install Node.js:
   ```
   brew install node
   ```
4. Verify the installation by running:
   ```
   node -v
   npm -v
   ```

## Installing Node.js on Ubuntu
1. Open the Terminal.
2. Update the package index:
   ```
   sudo apt update
   ```
3. Install Node.js from the default Ubuntu repositories:
   ```
   sudo apt install -y nodejs
   sudo apt install -y npm
   ```
   Alternatively, you can install the latest version of Node.js using NodeSource:
   ```
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs
   ```
4. Verify the installation by running:
   ```
   node -v
   npm -v
   ```