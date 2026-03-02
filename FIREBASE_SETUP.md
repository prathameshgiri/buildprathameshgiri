# Firebase Setup Guide

Follow these steps to set up Firebase for your portfolio website.

## Step 1: Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **Add project** and follow the prompts (you can name it "portfolio-website").
3. Disable Google Analytics for this project (optional, to keep it simple).

## Step 2: Register your Web App

1. In the center of the project overview page, click the **Web icon** (</>) to get started.
2. Enter an app nickname (e.g., "Portfolio Web").
3. Click **Register app**.
4. You will see `firebaseConfig` object. Copy these values; you will need them for your environment variables.

## Step 3: Enable Authentication

1. In the left sidebar, click **Build > Authentication**.
2. Click **Get Started**.
3. Under **Sign-in method**, enable **Email/Password**.
4. Click **Save**.

## Step 4: Enable Firestore Database

1. In the left sidebar, click **Build > Firestore Database**.
2. Click **Create database**.
3. Choose a location (select one close to you or India).
4. Start in **Production mode**.
5. Click **Create**.

### Set Firestore Security Rules

1. Go to the **Rules** tab in Firestore.
2. Replace the existing rules with these:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow users to read and write their own profile
    match /profiles/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Allow users to write their own login history
    match /login_history/{docId} {
      allow create: if request.auth != null && request.resource.data.user_id == request.auth.uid;
      allow read: if request.auth != null && resource.data.user_id == request.auth.uid;
    }
    
    // Allow anyone to submit contact forms and project ideas
    match /contact_submissions/{docId} {
      allow create: if true;
    }
    match /project_ideas/{docId} {
      allow create: if true;
    }
  }
}
```

## Step 5: Set Environment Variables

Go to your project settings (or `.env` file locally) and add the following variables using the values from Step 2:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

## Step 6: Test the Integration

1. Refresh your website preview.
2. Go to the **Auth** page. The "Firebase Not Configured" warning should disappear once you set the environment variables.
3. Try signing up with a test email and password.
4. Check your Firebase Console under **Authentication** and **Firestore Database** to see the data.

## Why Firebase?

- **Stable in India**: Works perfectly without ISP blocking issues.
- **Fast**: Google's global infrastructure ensures low latency.
- **Free**: The Spark plan is generous and doesn't require a credit card.
