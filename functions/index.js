const {onCall, HttpsError} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const axios = require("axios");

admin.initializeApp();

/**
 * Fetches the HTML title of a given URL.
 */
exports.getPageTitle = onCall({enforceAppCheck: false}, async (request) => {
  // Ensure the user is authenticated before running the function.
  if (!request.auth) {
    throw new HttpsError(
        "unauthenticated",
        "The function must be called while authenticated.",
    );
  }

  const url = request.data.url;
  if (!url) {
    throw new HttpsError(
        "invalid-argument",
        "The function must be called with a 'url' argument.",
    );
  }

  try {
    const response = await axios.get(url, {
      // Use a common User-Agent to avoid being blocked by some sites.
      headers: {
        "User-Agent": "Googlebot/2.1 (+http://www.google.com/bot.html)",
      },
    });
    const html = response.data;

    // Find the title tag and extract its content.
    const titleMatch = html.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : "Link";

    return {title: title};
  } catch (error) {
    console.error("Error fetching URL:", error);
    // If we can't get the title, just return a generic name.
    return {title: "Link"};
  }
});
