
# ⚙️ XAMPP & phpMyAdmin Installation Guide

---

## 🪟 Installing XAMPP & phpMyAdmin on **Windows**

1. Download the XAMPP installer from the [official Apache Friends website](https://www.apachefriends.org/index.html).
2. Run the installer and follow the setup wizard.
3. Choose components (make sure **Apache**, **MySQL**, **phpMyAdmin**, and **PHP** are selected).
4. Select the installation location (default is fine).
5. After installation, launch the **XAMPP Control Panel**.
6. Start **Apache** and **MySQL** services.
7. Open your browser and go to:
   ```
   http://localhost/phpmyadmin
   ```
8. phpMyAdmin dashboard should now be accessible.

---

## 🍏 Installing XAMPP & phpMyAdmin on **macOS**

1. Download the macOS version of XAMPP from the [Apache Friends website](https://www.apachefriends.org/index.html).
2. Open the downloaded `.dmg` file and drag XAMPP to the Applications folder.
3. Launch XAMPP from **Applications > XAMPP**.
4. Start **Apache** and **MySQL** from the XAMPP control panel.
5. Open a browser and go to:
   ```
   http://localhost/phpmyadmin
   ```
6. You should now see the phpMyAdmin interface.

---

## 🐧 Installing phpMyAdmin with LAMP Stack on **Ubuntu**

> 📌 *XAMPP is available on Linux, but many developers prefer setting up LAMP (Linux, Apache, MySQL, PHP) directly.*

### 🔹 Method 1: Installing LAMP + phpMyAdmin

1. Open the Terminal.

2. Update your package index:
   ```bash
   sudo apt update
   ```

3. Install Apache, MySQL, and PHP:
   ```bash
   sudo apt install apache2 mysql-server php libapache2-mod-php php-mysql
   ```

4. Install phpMyAdmin:
   ```bash
   sudo apt install phpmyadmin
   ```

5. During setup:
   - Select **Apache2** when prompted.
   - Choose **Yes** when asked to configure a database.
   - Set a phpMyAdmin password.

6. Enable the PHP MySQL module and restart Apache:
   ```bash
   sudo phpenmod mysqli
   sudo systemctl restart apache2
   ```

7. Access phpMyAdmin via:
   ```
   http://localhost/phpmyadmin
   ```

---

### ✅ To Verify the Setup:
Run the following in terminal (or Command Prompt for Windows):

```bash
php -v
mysql --version
```
