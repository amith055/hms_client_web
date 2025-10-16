# **App Name**: HostelMate

## Core Features:

- Hostel Registration: Allow hostels to register with details like hostel name, college, city, state, address, and admin contact number. Stores data in a 'hostels' collection in Firestore with a unique hostel_id after OTP verification using Firebase credentials (apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId).
- Admin Login: Enable admins to log in using either hostel_id or admin mobile number.
- Weekly Menu Input: First-time login redirects to a page for entering the weekly mess menu with a structured format. Stored in Firestore.
- Student Management: Allows adding student details (first name, last name, age, gender, contact info, address, etc.) via a form, and stores data in Firestore under a 'students' collection with a 'createdAt' field.
- Fees Management: Displays a list of students with their fee status, highlighting any dues.
- Announcement System: Allows wardens to send announcements (text, files, and photos) to students.
- Food Demand Prediction: AI tool to generate a dashboard that predicts how much food is required for each day based on hostel occupancy and historical consumption data. Incorporates attendance, student feedback and leave requests for refinement.

## Style Guidelines:

- Primary color: Light greyish-blue (#A7C4BC), evokes feelings of calm, focus, and efficiency, aligned with the organizational aspect of the app.
- Background color: Very light greyish-blue (#F0F4F3), a desaturated hue similar to the primary to maintain visual consistency, rendered in a light scheme for clarity.
- Accent color: Greyish-green (#87B38D), an analogous color that contrasts the primary due to increased saturation and lower brightness; intended to provide clarity, call out items that needs focus.
- Body and headline font: 'PT Sans', a humanist sans-serif blending modernity with a touch of warmth, used for both headlines and body text.
- Simple, consistent icons representing each module (students, fees, announcements, etc.).
- Clean, card-based layouts for information display and easy navigation.
- Subtle transitions and animations for a smooth user experience when navigating between pages or loading data.