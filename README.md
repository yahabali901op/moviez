# AnimeWorld — admin-only movie uploads

This starter website uses GitHub Pages for the public site and Firebase Authentication, Firestore, and Storage for login, movie details, and files.

## Important
- Upload only movies you own or have permission to distribute.
- GitHub Pages hosts the website files; Firebase stores movie metadata and uploaded files.
- Do not put private service-account keys in browser code.
- Replace the Firebase config placeholders in `firebase.js`.
- Replace `REPLACE_WITH_ADMIN_UID` in `firebase.js`, `firestore.rules`, and `storage.rules` with your own Firebase Authentication user UID.
- The security rules are essential: hiding the admin page is not security by itself.

## Setup checklist
1. In Firebase Console, create/select a project and register a Web App.
2. Enable Authentication → Sign-in method → Email/Password.
3. Add your admin account under Authentication → Users; copy its UID.
4. Create a Firestore database.
5. Enable Firebase Storage.
6. Paste the Firebase Web App config into `firebase.js`; fill in the admin UID in all three files.
7. Publish `firestore.rules` in Firestore → Rules.
8. Publish `storage.rules` in Storage → Rules.
9. Upload `index.html`, `admin.html`, and `firebase.js` to the root of your GitHub repository. Enable GitHub Pages from Settings → Pages → Deploy from branch → main → /(root).
10. In Firebase Authentication → Settings → Authorized domains, add your GitHub Pages domain (for example, `yourname.github.io`).
11. Open `admin.html`, sign in, and upload a small test MP4 and poster.

## Notes
- This starter expects direct video file URLs that browsers can play (MP4 is recommended). YouTube/Vimeo URLs are not supported by the basic player.
- Large movie files may exceed storage limits or incur charges. Check current Firebase Storage plan/limits before uploading full-length films.
- Firestore may ask you to create a composite index for the published/createdAt query; use the link in the Firebase error message.
- Deleting a movie removes its Firestore record. Remove the corresponding file in Firebase Storage separately if needed.
- Firebase Storage rules above allow public reads of uploaded media. Use only media intended to be publicly viewable.
