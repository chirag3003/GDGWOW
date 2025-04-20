# Setting Up MongoDB Atlas for Free

Follow these steps to set up MongoDB Atlas and retrieve your connection string:

## Step 1: Create a MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Click on **Start Free** and sign up using your email or a third-party account (Google, GitHub, etc.).

## Step 2: Create a New Cluster
1. After logging in, click on **Build a Cluster**.
2. Choose the **Free Tier** option.
3. Select your preferred cloud provider (AWS, Azure, or GCP) and region.
4. Click **Create Cluster**.

## Step 3: Configure Network Access
1. Go to the **Network Access** tab in the left-hand menu.
2. Click **Add IP Address**.
3. Select **Allow Access from Anywhere** or specify your IP address.
4. Click **Confirm**.

## Step 4: Create a Database User
1. Navigate to the **Database Access** tab.
2. Click **Add New Database User**.
3. Set a username and password.
4. Assign the user **Read and Write to Any Database** permissions.
5. Click **Add User**.

## Step 5: Retrieve the Connection String
1. Go to the **Clusters** tab.
2. Click **Connect** next to your cluster.
3. Select **Connect Your Application**.
4. Copy the provided connection string.

## Step 6: Update the Connection String
1. Replace `<username>` and `<password>` with the database user's credentials.
2. Replace `<your-cluster-url>` with your cluster's URL.

Your connection string should look like this:
```
mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority
```

## Step 7: Test the Connection
Use the connection string in your application or a MongoDB client to verify the setup.
