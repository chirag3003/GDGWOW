# Setting Up Docker on Windows, Mac, and Ubuntu

## Windows
1. Download Docker Desktop for Windows from the [official website](https://www.docker.com/products/docker-desktop).
2. Run the installer and follow the setup wizard.
3. Ensure WSL 2 is installed and enabled (Docker Desktop will guide you if it's not).
4. Restart your computer if prompted.
5. Launch Docker Desktop and complete the setup.

## Mac
1. Download Docker Desktop for Mac from the [official website](https://www.docker.com/products/docker-desktop).
2. Open the downloaded `.dmg` file and drag Docker to the Applications folder.
3. Launch Docker from the Applications folder.
4. Follow the setup instructions and grant necessary permissions.
5. Verify installation by running `docker --version` in the terminal.

## Ubuntu
1. Update your package index:
    ```bash
    sudo apt update
    ```
2. Install required packages:
    ```bash
    sudo apt install apt-transport-https ca-certificates curl software-properties-common
    ```
3. Add Docker’s official GPG key:
    ```bash
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
    ```
4. Add the Docker repository:
    ```bash
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    ```
5. Install Docker:
    ```bash
    sudo apt update
    sudo apt install docker-ce docker-ce-cli containerd.io
    ```
6. Verify installation:
    ```bash
    docker --version
    ```
