// --- Firebase Configuration ---
const firebaseConfig = {
  apiKey: "AIzaSyBci7oy9vzE-T2_FDD4cCuNUQjuEK0i2no",
  authDomain: "jmps-library-booking.firebaseapp.com",
  projectId: "jmps-library-booking",
  storageBucket: "jmps-library-booking.firebasestorage.app",
  messagingSenderId: "797656215545",
  appId: "1:797656215545:web:ac92e5f559dcd42b151728"
};

// --- EmailJS Configuration ---
const EMAILJS_SERVICE_ID = 'service_1v4utl1';
const EMAILJS_TEMPLATE_ID = 'template_kc36e1h'; // New booking template
const EMAILJS_CANCEL_TEMPLATE_ID = 'template_5xy593p'; // New cancellation template
const EMAILJS_PUBLIC_KEY = 'TiGzJLOUe-bDo0pD5';
const ADMIN_RECIPIENT_EMAIL = 'taylchri4039@ddsb.ca'; // Your admin email

// --- App Configuration ---
const ALLOWED_DOMAINS = ["ddsb.ca"]; 
const ALLOWED_EMAILS = ["chrisjtaylor@gmail.com"]; // Add this new line
const ADMIN_EMAILS = ["taylchri4039@ddsb.ca"];

const PERIOD_TIMES = ["8:05 - 8:35", "8:35 - 9:05", "9:05 - 9:35", "9:50 - 10:20", "10:20 - 10:50", "11:50 - 12:20", "12:20 - 12:50", "12:50 - 1:20", "1:35 - 2:05", "2:05 - 2:35"];
const BOOKING_REASONS = ["Book Exchange", "Partnering", "Presentation", "Closed", "Coverage", "Other"];
const REASON_ICONS = { "Book Exchange": "book_2", "Partnering": "group", "Presentation": "co_present", "Closed": "event_busy", "Coverage": "chat_bubble", "Other": "calendar_check" };
const SCHOOL_CALENDAR = { "8/29/2025": "Holiday", "9/1/2025": "Holiday", "9/2/2025": "Day 1", "9/3/2025": "Day 2", "9/4/2025": "Day 3", "9/5/2025": "Day 4", "9/8/2025": "Day 5", "9/9/2025": "Day 1", "9/10/2025": "Day 2", "9/11/2025": "Day 3", "9/12/2025": "Day 4", "9/15/2025": "Day 5", "9/16/2025": "Day 1", "9/17/2025": "Day 2", "9/18/2025": "Day 3", "9/19/2025": "Day 4", "9/22/2025": "Day 5", "9/23/2025": "Day 1", "9/24/2025": "Day 2", "9/25/2025": "Day 3", "9/26/2025": "Day 4", "9/29/2025": "Day 5", "9/30/2025": "Day 1", "10/1/2025": "Day 2", "10/2/2025": "Day 3", "10/3/2025": "Day 4", "10/6/2025": "Day 5", "10/7/2025": "Day 1", "10/8/2025": "Day 2", "10/9/2025": "Day 3", "10/10/2025": "Day 4", "10/13/2025": "Holiday", "10/14/2025": "Day 5", "10/15/2025": "Day 1", "10/16/2025": "Day 2", "10/17/2025": "Day 3", "10/20/2025": "Day 4", "10/21/2025": "Day 5", "10/22/2025": "Day 1", "10/23/2025": "Day 2", "10/24/2025": "PA Day", "10/27/2025": "Day 3", "10/28/2025": "Day 4", "10/29/2025": "Day 5", "10/30/2025": "Day 1", "10/31/2025": "Day 2", "11/3/2025": "Day 3", "11/4/2025": "Day 4", "11/5/2025": "Day 5", "11/6/2025": "Day 1", "11/7/2025": "Day 2", "11/10/2025": "Day 3", "11/11/2025": "Day 4", "11/12/2025": "Day 5", "11/13/2025": "Day 1", "11/14/2025": "PA Day", "11/17/2025": "Day 2", "11/18/2025": "Day 3", "11/19/2025": "Day 4", "11/20/2025": "Day 5", "11/21/2025": "Day 1", "11/24/2025": "Day 2", "11/25/2025": "Day 3", "11/26/2025": "Day 4", "11/27/2025": "Day 5", "11/28/2025": "Day 1", "12/1/2025": "Day 2", "12/2/2025": "Day 3", "12/3/2025": "Day 4", "12/4/2025": "Day 5", "12/5/2025": "Day 1", "12/8/2025": "Day 2", "12/9/2025": "Day 3", "12/10/2025": "Day 4", "12/11/2025": "Day 5", "12/12/2025": "Day 1", "12/15/2025": "Day 2", "12/16/2025": "Day 3", "12/17/2025": "Day 4", "12/18/2025": "Day 5", "12/19/2025": "Day 1", "12/22/2025": "Holiday", "12/23/2025": "Holiday", "12/24/2025": "Holiday", "12/25/2025": "Holiday", "12/26/2025": "Holiday", "12/29/2025": "Holiday", "12/30/2025": "Holiday", "12/31/2025": "Holiday", "1/1/2026": "Holiday", "1/2/2026": "Holiday", "1/5/2026": "Day 2", "1/6/2026": "Day 3", "1/7/2026": "Day 4", "1/8/2026": "Day 5", "1/9/2026": "Day 1", "1/12/2026": "Day 2", "1/13/2026": "Day 3", "1/14/2026": "Day 4", "1/15/2026": "Day 5", "1/16/2026": "Day 1", "1/19/2026": "Day 2", "1/20/2026": "Day 3", "1/21/2026": "Day 4", "1/22/2026": "Day 5", "1/23/2026": "Day 1", "1/26/2026": "Day 2", "1/27/2026": "Day 3", "1/28/2026": "Day 4", "1/29/2026": "Day 5", "1/30/2026": "PA Day", "2/2/2026": "Day 1", "2/3/2026": "Day 2", "2/4/2026": "Day 3", "2/5/2026": "Day 4", "2/6/2026": "Day 5", "2/9/2026": "Day 1", "2/10/2026": "Day 2", "2/11/2026": "Day 3", "2/12/2026": "Day 4", "2/13/2026": "Day 5", "2/16/2026": "Holiday", "2/17/2026": "Day 1", "2/18/2026": "Day 2", "2/19/2026": "Day 3", "2/20/2026": "Day 4", "2/23/2026": "Day 5", "2/24/2026": "Day 1", "2/25/2026": "Day 2", "2/26/2026": "Day 3", "2/27/2026": "Day 4", "3/2/2026": "Day 5", "3/3/2026": "Day 1", "3/4/2026": "Day 2", "3/5/2026": "Day 3", "3/6/2026": "Day 4", "3/9/2026": "Day 5", "3/10/2026": "Day 1", "3/11/2026": "Day 2", "3/12/2026": "Day 3", "3/13/2026": "Holiday", "3/16/2026": "Holiday", "3/17/2026": "Holiday", "3/18/2026": "Holiday", "3/19/2026": "Holiday", "3/20/2026": "Holiday", "3/23/2026": "Day 4", "3/24/2026": "Day 5", "3/25/2026": "Day 1", "3/26/2026": "Day 2", "3/27/2026": "Day 3", "3/30/2026": "Day 4", "3/31/2026": "Day 5", "4/1/2026": "Day 1", "4/2/2026": "Day 2", "4/3/2026": "Holiday", "4/6/2026": "Holiday", "4/7/2026": "Day 3", "4/8/2026": "Day 4", "4/9/2026": "Day 5", "4/10/2026": "Day 1", "4/13/2026": "Day 2", "4/14/2026": "Day 3", "4/15/2026": "Day 4", "4/16/2026": "Day 5", "4/17/2026": "PA Day", "4/20/2026": "Day 1", "4/21/2026": "Day 2", "4/22/2026": "Day 3", "4/23/2026": "Day 4", "4/24/2026": "Day 5", "4/27/2026": "Day 1", "4/28/2026": "Day 2", "4/29/2026": "Day 3", "4/30/2026": "Day 4", "5/1/2026": "Day 5", "5/4/2026": "Day 1", "5/5/2026": "Day 2", "5/6/2026": "Day 3", "5/7/2026": "Day 4", "5/8/2026": "Day 5", "5/11/2026": "Day 1", "5/12/2026": "Day 2", "5/13/2026": "Day 3", "5/14/2026": "Day 4", "5/15/2026": "Day 5", "5/18/2026": "Holiday", "5/19/2026": "Day 1", "5/20/2026": "Day 2", "5/21/2026": "Day 3", "5/22/2026": "Day 4", "5/25/2026": "Day 5", "5/26/2026": "Day 1", "5/27/2026": "Day 2", "5/28/2026": "Day 3", "5/29/2026": "Day 4", "6/1/2026": "Day 5", "6/2/2026": "Day 1", "6/3/2026": "Day 2", "6/4/2026": "Day 3", "6/5/2026": "Day 4", "6/8/2026": "PA Day", "6/9/2026": "Day 5", "6/10/2026": "Day 1", "6/11/2026": "Day 2", "6/12/2026": "Day 3", "6/15/2026": "Day 4", "6/16/2026": "Day 5", "6/17/2026": "Day 1", "6/18/2026": "Day 2", "6/19/2026": "Day 3", "6/22/2026": "Day 4", "6/23/2026": "Day 5", "6/24/2026": "Day 1", "6/25/2026": "Day 2", "6/26/2026": "PA Day" };

const sortedCalendar = Object.entries(SCHOOL_CALENDAR).sort((a, b) => new Date(a[0]) - new Date(b[0]));
const schoolDays = sortedCalendar.filter(entry => entry[1].startsWith('Day'));

// --- Element References ---
const 

    // App state containers
    loginScreen = document.getElementById('login-screen'),
    mainApp = document.getElementById('main-app'),

    // Main page elements
    loginBtn = document.getElementById('login-btn'),
    logoutBtn = document.getElementById('logout-btn'),
    userInfo = document.getElementById('user-info'),
    userName = document.getElementById('user-name'),
    appContent = document.getElementById('app-content'),
    gridContainer = document.getElementById('schedule-grid'),
    infoBanner = document.getElementById('info-banner'),
    datePicker = document.getElementById('date-picker'),
    prevWeekBtn = document.getElementById('prev-week-btn'),
    nextWeekBtn = document.getElementById('next-week-btn'),
    todayBtn = document.getElementById('today-btn'),
    alertBanner = document.getElementById('alert-banner'),
    
    // Booking Modal
    bookingModal = document.getElementById('booking-modal'),
    bookingForm = document.getElementById('booking-form'),
    modalTitle = document.getElementById('modal-title'),
    cancelBookingBtn = document.getElementById('cancel-booking-btn'),
    deleteBookingBtn = document.getElementById('delete-booking-btn'),
    otherReasonInput = document.getElementById('other-reason'),
    reasonOptionsContainer = document.getElementById('booking-reason-options'),
    
    // Admin Modal
    adminBtn = document.getElementById('admin-btn'),
    adminModal = document.getElementById('admin-modal'),
    adminForm = document.getElementById('admin-form'),
    cancelAdminBtn = document.getElementById('cancel-admin-btn'),
    deleteBannerBtn = document.getElementById('delete-banner-btn'),
    notificationsToggle = document.getElementById('notifications-toggle'),
    
    // Mobile elements
    noCurrentDayMobile = document.getElementById('no-current-day-mobile'),
    mobileCurrentDayInfo = document.getElementById('mobile-current-day-info'),
    mobilePrevDay = document.getElementById('mobile-prev-day'),
    mobileNextDay = document.getElementById('mobile-next-day'),
    mobileDayInfo = document.getElementById('mobile-day-info'),
    
    // Confirmation Modal
    cancelDeleteBtn = document.getElementById('cancel-delete-btn'),
    confirmDeleteBtn = document.getElementById('confirm-delete-btn'),
    
    // Recurring Booking Creation
    recurringSection = document.getElementById('recurring-section'),
    makeRecurringCheckbox = document.getElementById('make-recurring'),
    recurringOptions = document.getElementById('recurring-options'),
    recurrenceType = document.getElementById('recurrence-type'),
    cycleDayOptions = document.getElementById('cycle-day-options'),
    weekdayOptions = document.getElementById('weekday-options'),
    recurrenceEndDate = document.getElementById('end-date'),
    endTypeOnDate = document.getElementById('end-type-on-date'),
    endTypeAfter = document.getElementById('end-type-after'),
    endDateContainer = document.getElementById('end-date-container'),
    occurrencesContainer = document.getElementById('occurrences-container'),
    recurrenceOccurrences = document.getElementById('recurrence-occurrences'),
    
    // Recurring Booking Management
    manageRecurringBtn = document.getElementById('manage-recurring-btn'),
    manageRecurringModal = document.getElementById('manage-recurring-modal'),
    closeManageRecurringBtn = document.getElementById('close-manage-recurring-btn'),
    recurringList = document.getElementById('recurring-list'),
    cancelChoiceBtn = document.getElementById('cancel-choice-btn'),
    cancelEditRecurringBtn = document.getElementById('cancel-edit-recurring-btn'),
    deleteEntireSeriesBtn = document.getElementById('delete-entire-series-btn'),

    // Notification Modal
    notificationModal = document.getElementById('notification-modal'),
    notificationIcon = document.getElementById('notification-icon'),
    notificationTitle = document.getElementById('notification-title'),
    notificationMessage = document.getElementById('notification-message'),
    notificationOkBtn = document.getElementById('notification-ok-btn'),
    confirmationModal = document.getElementById('confirmation-modal'),
    confirmationIcon = document.getElementById('confirmation-icon'),
    confirmationTitle = document.getElementById('confirmation-title'),
    confirmationMessage = document.getElementById('confirmation-message'),
    confirmYesBtn = document.getElementById('confirm-yes-btn'),
    confirmNoBtn = document.getElementById('confirm-no-btn');

let currentWeekDates = [], appInitialized = false, activeBannerRecordId = null;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore(); // Firestore database reference

document.fonts.ready.then(function () {
    document.body.classList.add('material-symbols-outlined-ready');
});

// --- Authentication & Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // --- Authentication event listeners ---
    loginBtn.addEventListener('click', () => {
        // Use Popup login (shows COOP warning in console, but works fine)
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log('Sign-in successful:', result.user.email);
            })
            .catch((error) => {
                console.error('Sign-in error:', error);
                showNotificationModal(
                    "Sign-in failed. Please try again.",
                    'error',
                    'Authentication Error'
                );
            });

        /*
        // 👉 If you want to avoid the Cross-Origin warning,
        // comment out the signInWithPopup() above and use redirect instead:
        auth.signInWithRedirect(provider);
        */
    });

    logoutBtn.addEventListener('click', () => auth.signOut());

    // --- Single authentication state change listener ---
    auth.onAuthStateChanged((user) => {
        if (user) {
            console.log('User signed in:', user.email);

            // 👇 CHANGED: Check if the email ends with ANY of the domains in the array
            const userEmail = user.email.toLowerCase(); // Standardize to lowercase for reliable matching
            if (
                ALLOWED_DOMAINS.some(domain => userEmail.endsWith('@' + domain)) ||
                ALLOWED_EMAILS.includes(userEmail)
            ) {
                // ✅ User has the correct domain
                loginScreen.style.display = 'none';
                mainApp.style.display = 'block';

                appContent.classList.remove('hidden');
                userInfo.classList.remove('hidden');
                userName.textContent = user.displayName || user.email;
                mobileDayInfo.classList.remove('hidden');

                // Show admin button for admin users
                if (ADMIN_EMAILS.includes(user.email.toLowerCase())) {
                    adminBtn.classList.remove('hidden');
                }

                // Initialize the app if not already done
                if (!appInitialized) {
                    try {
                        console.log("Attempting to initialize the application...");
                        initializeApp();
                        appInitialized = true;
                        console.log("Application initialized successfully.");
                    } catch (error) {
                        console.error("A CRITICAL ERROR occurred during app initialization:", error);
                        document.body.innerHTML = `<div style="padding: 2em; color: red; background-color: #fff0f0; border: 2px solid red; margin: 2em; font-family: monospace;">
                            <h1>Application Error</h1>
                            <p>A critical error stopped the app from loading. The login screen may have reappeared because of this. See details below and in the console.</p>
                            <pre style="white-space: pre-wrap; word-wrap: break-word;">${error.stack}</pre>
                        </div>`;
                    }
                }
            } else {
                // ❌ User is not allowed
                // 👇 CHANGED: Updated the error message
                showNotificationModal(
                    "You must use an approved school domain or a specifically authorized email address to sign in.",
                    'error',
                    'Access Denied'
                );
                auth.signOut(); // Force sign-out
            }
        } else {
            console.log('User signed out');

            // Reset UI state
            loginScreen.style.display = 'flex'; // 👈 CHANGED
            mainApp.style.display = 'none';     // 👈 CHANGED
            
            userInfo.classList.add('hidden');
            userName.textContent = '';
            adminBtn.classList.add('hidden');
            mobileDayInfo.classList.add('hidden');
            appInitialized = false;
        }
    });

    // --- If using redirect login, handle result here ---
    auth.getRedirectResult()
        .then((result) => {
            if (result.user) {
                console.log('Redirect sign-in successful:', result.user.email);
            }
        })
        .catch((error) => {
            if (error && error.code !== 'auth/no-auth-event') {
                console.error('Redirect sign-in error:', error);
            }
        });        
});

function initializeApp() {
    drawGridStructure();
    populateReasonOptions();
    populateDayCheckboxes();
    fetchAndDisplayBanner();
    setupEmailNotifications();
    setupSwipeNavigation();

    datePicker.value = new Date().toISOString().split('T')[0];
    loadScheduleForSelectedDate();

    // Core listeners
    datePicker.addEventListener('change', loadScheduleForSelectedDate);
    todayBtn.addEventListener('click', jumpToToday);
    prevWeekBtn.addEventListener('click', () => navigateWeeks('prev'));
    nextWeekBtn.addEventListener('click', () => navigateWeeks('next'));
    mobilePrevDay.addEventListener('click', () => navigateDays('prev'));
    mobileNextDay.addEventListener('click', () => navigateDays('next'));
    window.addEventListener('resize', updateTodayButtonVisibility);

    // Main Booking Modal listeners
    bookingModal.addEventListener('click', (e) => { if (e.target === bookingModal) hideBookingModal(); });
    cancelBookingBtn.addEventListener('click', hideBookingModal);
    bookingForm.addEventListener('submit', handleBookingSubmit);

    // Admin Panel listeners
    adminBtn.addEventListener('click', openAdminPanel);
    adminModal.addEventListener('click', (e) => { if (e.target === adminModal) adminModal.classList.add('hidden'); });
    cancelAdminBtn.addEventListener('click', () => adminModal.classList.add('hidden'));
    adminForm.addEventListener('submit', handleBannerSubmit);
    deleteBannerBtn.addEventListener('click', deleteBanner);

    // Recurring Booking Creation listeners
    manageRecurringBtn.addEventListener('click', openManageRecurringPanel);
    closeManageRecurringBtn.addEventListener('click', () => manageRecurringModal.classList.add('hidden'));
    makeRecurringCheckbox.addEventListener('change', toggleRecurringOptions);
    recurrenceType.addEventListener('change', toggleRecurrenceDayPickers);
    endTypeOnDate.addEventListener('change', toggleEndCondition);
    endTypeAfter.addEventListener('change', toggleEndCondition);
    
    // Deletion confirmation listeners (for single bookings)
    deleteBookingBtn.addEventListener('click', handleDeleteFromModal);
    cancelDeleteBtn.addEventListener('click', hideConfirmDeleteModal);
    confirmDeleteBtn.addEventListener('click', executeDelete);

    // --- THIS IS THE FIX ---
    // Add back the listeners for the recurring edit/choice modals
    cancelChoiceBtn.addEventListener('click', () => document.getElementById('recurring-choice-modal').classList.add('hidden'));
    cancelEditRecurringBtn.addEventListener('click', () => document.getElementById('edit-recurring-modal').classList.add('hidden'));
    deleteEntireSeriesBtn.addEventListener('click', handleDeleteEntireSeries); // <-- ADD THIS LINE
    document.getElementById('edit-recurring-form').addEventListener('submit', handleRecurringUpdate);
    document.getElementById('edit-end-type-on-date').addEventListener('change', toggleEditEndCondition);
    document.getElementById('edit-end-type-after').addEventListener('change', toggleEditEndCondition);
    // ----------------------

    // Notification modal listener
    notificationOkBtn.addEventListener('click', () => notificationModal.classList.add('hidden'));
}

function setupSwipeNavigation() {
    // The main content area is a good target for swipe detection.
    const swipeTarget = document.getElementById('app-content');
    let touchstartX = 0;
    let touchendX = 0;
    let touchstartY = 0;
    let touchendY = 0;
    const swipeThreshold = 50; // Minimum pixel distance to be considered a swipe.

    swipeTarget.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
        touchstartY = e.changedTouches[0].screenY;
    }, { passive: true }); // Use passive listener for better scroll performance.

    swipeTarget.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        touchendY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const deltaX = touchendX - touchstartX;
        const deltaY = touchendY - touchstartY;

        // We only want to trigger a swipe if the horizontal movement
        // is greater than the vertical movement (to avoid interfering with scrolling).
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            
            // Check if the horizontal swipe distance meets our minimum threshold.
            if (Math.abs(deltaX) >= swipeThreshold) {
                if (touchendX < touchstartX) {
                    // If the touch ends to the left of where it started, it's a "next" swipe.
                    navigateDays('next');
                }
                if (touchendX > touchstartX) {
                    // If the touch ends to the right, it's a "previous" swipe.
                    navigateDays('prev');
                }
            }
        }
    }
}

// --- New Email Notification Logic ---
function setupEmailNotifications() {
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // This now correctly points to the 'settings' document
    const settingsDocRef = db.collection('app_config').doc('settings');
    settingsDocRef.onSnapshot(doc => {
        const data = doc.data();
        // This now correctly reads the 'emailNotificationsEnabled' field
        const isEnabled = data?.emailNotificationsEnabled ?? true;
        if (notificationsToggle) {
            notificationsToggle.checked = isEnabled;
        }
    }, err => {
        console.error("Error listening to notification settings:", err);
    });

    if (notificationsToggle) {
        notificationsToggle.addEventListener('change', async (event) => {
            const isEnabled = event.target.checked;
            try {
                // This now correctly writes to the 'emailNotificationsEnabled' field
                await settingsDocRef.set({ emailNotificationsEnabled: isEnabled }, { merge: true });
                showNotificationModal(`Email notifications are now ${isEnabled ? 'enabled' : 'disabled'}.`, 'success', 'Setting Updated');
            } catch (error) {
                console.error("Failed to update notification setting:", error);
                showNotificationModal("Failed to save the notification setting. Please try again.", 'error', 'Save Failed');
                // Revert the toggle state on failure
                event.target.checked = !isEnabled;
            }
        });
    }
}

async function sendNotificationEmail(action, bookingDetails) {
    const user = auth.currentUser;
    // Do not send emails if the current user is an admin
    if (user && ADMIN_EMAILS.includes(user.email.toLowerCase())) {
        return;
    }

    try {
        const settingsDoc = await db.collection('app_config').doc('settings').get();
        const isEnabled = settingsDoc.data()?.emailNotificationsEnabled ?? true;
        
        // Do not send emails if the feature is disabled
        if (!isEnabled) {
            return;
        }
        
        // Convert the date string to a Date object for formatting
        const bookingDate = new Date(bookingDetails.Date + 'T12:00:00');
        const mdyFormat = (bookingDate.getMonth() + 1) + '/' + bookingDate.getDate() + '/' + bookingDate.getFullYear();
        const dayType = SCHOOL_CALENDAR[mdyFormat] || " ";

        const startPeriod = bookingDetails.StartPeriod;
        const endPeriod = bookingDetails.EndPeriod || startPeriod;
        const periodRange = startPeriod === endPeriod ? `Period ${startPeriod}` : `Periods ${startPeriod} - ${endPeriod}`;

        const startTime = PERIOD_TIMES[startPeriod - 1].split(' - ')[0];
        const endTime = PERIOD_TIMES[endPeriod - 1].split(' - ')[1];
        const timeRange = `${startTime} - ${endTime}`;

        const templateParams = {
            'action': action,
            'teacher_name': bookingDetails.TeacherName || 'N/A',
            'booking_date': bookingDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }),
            'day_type': dayType,
            'period_range': periodRange,
            'time_range': timeRange,
            'booking_reason': bookingDetails.BookingReason || 'N/A'
        };
        
        // Determine which template to use based on the action
        let templateId = EMAILJS_TEMPLATE_ID;
        if (action === 'deleted' || action === 'series_deleted') {
            templateId = EMAILJS_CANCEL_TEMPLATE_ID;
        }

        await emailjs.send(EMAILJS_SERVICE_ID, templateId, templateParams, EMAILJS_PUBLIC_KEY);
        console.log("Email notification sent successfully.");

    } catch (error) {
        console.error("Failed to send email notification:", error);
    }
}

// --- Admin Banner Logic ---
async function fetchAndDisplayBanner() {
    try {
        const bannerDoc = await db.collection('app_config').doc('alert_banner').get();

        if (bannerDoc.exists) {
            const bannerData = bannerDoc.data();
            activeBannerRecordId = bannerDoc.id; // This is now 'alert_banner'
            const { Message, Expiry } = bannerData;
            
            // Firestore timestamps need to be converted to JS Dates
            const expiryDate = Expiry ? Expiry.toDate() : null;
            
            if ((expiryDate && expiryDate < new Date()) || !Message || Message.trim() === '') {
                alertBanner.classList.add('hidden');
            } else {
                alertBanner.textContent = Message;
                alertBanner.classList.remove('hidden');
            }
        } else {
            activeBannerRecordId = null;
            alertBanner.classList.add('hidden');
        }
    } catch (error) { 
        console.error("Banner fetch error:", error);
    }
}

async function handleBannerSubmit(event) {
    event.preventDefault();
    const message = document.getElementById('banner-message').value;
    const expiryValue = document.getElementById('banner-expiry').value;
    
    const bannerData = {
        "Message": message,
        // Convert the date string to a Firestore Timestamp
        "Expiry": expiryValue ? firebase.firestore.Timestamp.fromDate(new Date(expiryValue)) : null
    };

    try {
        // Use .set() which creates the document if it doesn't exist, or overwrites it if it does.
        await db.collection('app_config').doc('alert_banner').set(bannerData, { merge: true });
        adminModal.classList.add('hidden');
        fetchAndDisplayBanner();
    } catch (error) { 
        alert(`Error saving banner: ${error.message}`); 
    }
}

async function deleteBanner() {
    const confirmed = await showConfirmationModal({
        title: 'Delete Banner',
        message: 'Are you sure you want to delete the current alert banner?'
    });
    if (!confirmed) return;
    try {
        await db.collection('app_config').doc('alert_banner').set({ "Message": "" }, { merge: true });
        adminModal.classList.add('hidden');
        fetchAndDisplayBanner();
    } catch (error) { 
        showNotificationModal(`Error deleting banner: ${error.message}`, 'error');
    }
}

async function openAdminPanel() {
    adminForm.reset(); // This line resets the toggle
    try {
        const bannerDoc = await db.collection('app_config').doc('alert_banner').get();
        if (bannerDoc.exists) {
            const data = bannerDoc.data();
            document.getElementById('banner-message').value = data.Message || '';
            if (data.Expiry) {
                const localDate = data.Expiry.toDate();
                localDate.setMinutes(localDate.getMinutes() - localDate.getTimezoneOffset());
                document.getElementById('banner-expiry').value = localDate.toISOString().slice(0, 16);
            }
        }

        // --- FIX STARTS HERE ---
        // Fetch and apply the current notification setting
        const settingsDoc = await db.collection('app_config').doc('settings').get();
        const isEnabled = settingsDoc.data()?.emailNotificationsEnabled ?? true; // Default to true
        document.getElementById('notifications-toggle').checked = isEnabled;
        // --- FIX ENDS HERE ---

    } catch (error) {
        console.error("Could not fetch admin panel details:", error);
    }
    adminModal.classList.remove('hidden');
}

// --- Modal and Booking Logic ---

function populateReasonOptions() {
    reasonOptionsContainer.innerHTML = ''; // Clear previous options
    const currentUser = auth.currentUser;
    const isUserAdmin = currentUser && ADMIN_EMAILS.includes(currentUser.email.toLowerCase());

    BOOKING_REASONS.forEach(reason => {
        // If the reason is "Closed" OR "Coverage" and the user is NOT an admin, skip it.
        if ((reason === "Closed" || reason === "Coverage") && !isUserAdmin) {
            return; // This acts like 'continue' in a forEach loop
        }

        const div = document.createElement('div');
        div.className = 'flex items-center';
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'bookingReason';
        input.value = reason;
        input.id = `reason-${reason.replace(/\s+/g, '')}`;
        input.className = 'h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500';
        if (reason === "Book Exchange") input.checked = true;
        const label = document.createElement('label');
        label.htmlFor = input.id;
        label.textContent = reason;
        label.className = 'ml-3 block text-sm font-medium text-gray-700';
        div.appendChild(input);
        div.appendChild(label);
        reasonOptionsContainer.appendChild(div);
    });
    reasonOptionsContainer.addEventListener('change', (e) => {
        const isOther = e.target.value === 'Other';
        otherReasonInput.style.display = isOther ? 'block' : 'none';
        otherReasonInput.required = isOther;
    });
}

function showBookingModal(dayNumber, startPeriod, dateString) {
    bookingForm.reset();
    delete bookingForm.dataset.recordId;
    document.getElementById('teacher-name').value = auth.currentUser.displayName;
    otherReasonInput.style.display = 'none';
    otherReasonInput.required = false;
    document.querySelector('input[name="bookingReason"][value="Book Exchange"]').checked = true;
    document.getElementById('start-period-container').classList.add('hidden');
    deleteBookingBtn.classList.add('hidden');

    // --- APPLYING THE SAME ROBUST FIX HERE ---
    const dateParts = dateString.split('-');
    const localDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    const displayDate = localDate.toLocaleDateString('en-US', {
        dateStyle: 'full'
    });
    // --- END OF FIX ---

    modalTitle.innerHTML = `
        <span class="material-symbols-outlined align-middle text-blue-600">calendar_month</span>
        ${displayDate}<br>
        <span class="material-symbols-outlined align-middle text-blue-600">schedule</span>
        Starting Period ${startPeriod}
        `;
    
    const endPeriodSelect = document.getElementById('end-period');
    endPeriodSelect.innerHTML = '';
    for (let p = parseInt(startPeriod); p <= 10; p++) {
        const cellId = `D${dayNumber}-P${p}`;
        const cell = document.getElementById(cellId);
        
        if (cell && cell.classList.contains('available')) {
            const option = document.createElement('option');
            option.value = p;
            option.textContent = `Period ${p} (${PERIOD_TIMES[p-1]})`;
            endPeriodSelect.appendChild(option);
        } else {
            break; 
        }
    }

    bookingForm.querySelector('.book').textContent = 'Book Slot(s)';
    bookingForm.dataset.startPeriod = startPeriod;
    bookingForm.dataset.date = dateString;
    
    if (ADMIN_EMAILS.includes(auth.currentUser.email.toLowerCase())) {
        recurringSection.classList.remove('hidden');
        makeRecurringCheckbox.checked = false; 
        recurringOptions.classList.add('hidden'); 
    } else {
        recurringSection.classList.add('hidden');
    }

    bookingModal.classList.remove('hidden');
    bookingModal.classList.add('flex');
    document.getElementById('teacher-name').focus();
}

async function showEditModal(recordId, isDetached = false) {
    try {
        const docRef = db.collection('bookings').doc(recordId);
        const docSnap = await docRef.get();

        if (!docSnap.exists) {
            throw new Error('Booking not found. It may have been deleted.');
        }
        const recordToEdit = { id: docSnap.id, fields: docSnap.data() };
        
        // --- START OF NEW SECURITY CHECK ---
        const currentUser = auth.currentUser;
        const bookingOwnerEmail = recordToEdit.fields.userEmail || '';
        const isUserAdmin = ADMIN_EMAILS.includes(currentUser.email.toLowerCase());
        const isUserOwner = currentUser.email.toLowerCase() === bookingOwnerEmail.toLowerCase();

        if (!isUserAdmin && !isUserOwner) {
            showNotificationModal("You do not have permission to edit this booking.", 'error', 'Permission Denied');
            return;
        }
        // --- END OF NEW SECURITY CHECK ---

        const { 
            Date: recordDateStr, 
            StartPeriod: currentStart, 
            EndPeriod: currentEnd = currentStart,
            TeacherName: teacherName = '',
            BookingReason: bookingReason = 'Book Exchange'
        } = recordToEdit.fields;
        
        // ... (the rest of the function is unchanged) ...

        const bookingsSnapshot = await db.collection('bookings')
                                         .where('Date', '==', recordDateStr)
                                         .get();

        const periodAvailability = {};
        for (let p = 1; p <= 10; p++) periodAvailability[p] = true;

        bookingsSnapshot.forEach(doc => {
            if (doc.id === recordId) return;
            const booking = doc.data();
            const start = booking.StartPeriod;
            const end = booking.EndPeriod || start;
            for (let p = start; p <= end; p++) {
                periodAvailability[p] = false;
            }
        });

        let earliestStart = currentStart;
        while (earliestStart > 1 && periodAvailability[earliestStart - 1]) {
            earliestStart--;
        }
        let latestEnd = currentEnd;
        while (latestEnd < 10 && periodAvailability[latestEnd + 1]) {
            latestEnd++;
        }

        bookingForm.reset();
        bookingForm.dataset.recordId = recordId;
        bookingForm.dataset.isDetached = isDetached;

        modalTitle.innerHTML = `<span class="material-symbols-outlined align-middle text-blue-600" style="font-size: 1.2em;">edit_calendar</span> Edit Booking`;
        bookingForm.querySelector('.book').textContent = 'Update Booking';
        deleteBookingBtn.classList.remove('hidden');
        document.getElementById('start-period-container').classList.remove('hidden');
        
        document.getElementById('teacher-name').value = teacherName;
        
        const reasonRadio = document.querySelector(`input[name="bookingReason"][value="${bookingReason}"]`);
        if (reasonRadio) {
            reasonRadio.checked = true;
            otherReasonInput.style.display = 'none';
            if (bookingReason === 'Other') {
                otherReasonInput.style.display = 'block';
                otherReasonInput.required = true;
                otherReasonInput.value = bookingReason;
            }
        } else {
            document.querySelector(`input[name="bookingReason"][value="Other"]`).checked = true;
            otherReasonInput.style.display = 'block';
            otherReasonInput.required = true;
            otherReasonInput.value = bookingReason;
        }

        const startPeriodSelect = document.getElementById('start-period');
        startPeriodSelect.innerHTML = '';
        for (let p = earliestStart; p <= latestEnd; p++) {
            const option = document.createElement('option');
            option.value = p;
            option.textContent = `Period ${p} (${PERIOD_TIMES[p-1]})`;
            startPeriodSelect.appendChild(option);
        }
        startPeriodSelect.value = currentStart;

        updateEndPeriodOptionsForEdit(currentStart, latestEnd);
        document.getElementById('end-period').value = currentEnd;

        startPeriodSelect.onchange = () => {
            updateEndPeriodOptionsForEdit(parseInt(startPeriodSelect.value), latestEnd);
        };
        
        recurringSection.classList.add('hidden');
        makeRecurringCheckbox.checked = false;

        bookingModal.classList.remove('hidden');
        bookingModal.classList.add('flex');
        document.getElementById('teacher-name').focus();
        
    } catch (error) {
        showNotificationModal('Could not load booking for editing. The schedule may have been updated by another user.', 'error');
        console.error(error);
        loadScheduleForSelectedDate();
    }
}

function hideBookingModal() {
    bookingModal.classList.add('hidden');
    bookingModal.classList.remove('flex');
}

// New helper function for updating end period options during editing
function updateEndPeriodOptionsForEdit(selectedStart, latestEnd) {
    const endPeriodSelect = document.getElementById('end-period');
    const currentEndValue = endPeriodSelect.value; // Store current selection
    endPeriodSelect.innerHTML = '';

    for (let p = selectedStart; p <= latestEnd; p++) {
        const option = document.createElement('option');
        option.value = p;
        option.textContent = `Period ${p} (${PERIOD_TIMES[p-1]})`;
        endPeriodSelect.appendChild(option);
    }
    
    // Restore selection if it's still valid, otherwise select the start period
    if (currentEndValue && parseInt(currentEndValue) >= selectedStart && parseInt(currentEndValue) <= latestEnd) {
        endPeriodSelect.value = currentEndValue;
    } else {
        endPeriodSelect.value = selectedStart;
    }
}

// Updated version of the existing updateEndPeriodOptions function for new bookings
function updateEndPeriodOptions(dayNumber, selectedStart, availableSlots) {
    const endPeriodSelect = document.getElementById('end-period');
    endPeriodSelect.innerHTML = '';

    for (let p = parseInt(selectedStart); p <= 10; p++) {
        if (availableSlots && availableSlots.includes(p)) {
            const option = document.createElement('option');
            option.value = p;
            option.textContent = `Period ${p} (${PERIOD_TIMES[p-1]})`;
            endPeriodSelect.appendChild(option);
        } else if (!availableSlots) {
            // If no availableSlots array provided, check the cell directly
            const cellId = `D${dayNumber}-P${p}`;
            const cell = document.getElementById(cellId);
            
            if (cell && cell.classList.contains('available')) {
                const option = document.createElement('option');
                option.value = p;
                option.textContent = `Period ${p} (${PERIOD_TIMES[p-1]})`;
                endPeriodSelect.appendChild(option);
            } else {
                break; 
            }
        } else {
            break;
        }
    }
}

async function handleBookingSubmit(event) {
    event.preventDefault();
    const teacherName = document.getElementById('teacher-name').value.trim();
    const selectedReason = document.querySelector('input[name="bookingReason"]:checked').value;
    const bookingReason = selectedReason === 'Other' ? otherReasonInput.value.trim() : selectedReason;
    
    const recordId = bookingForm.dataset.recordId;
    const isEditing = !!recordId;

    // --- Route between single and recurring ---
    if (makeRecurringCheckbox.checked && !isEditing) {
        // Create a new recurring booking
        const startPeriod = parseInt(bookingForm.dataset.startPeriod);
        const endPeriod = parseInt(document.getElementById('end-period').value);
        const fields = {
            TeacherName: teacherName,
            BookingReason: bookingReason,
            Date: bookingForm.dataset.date,
            StartPeriod: startPeriod,
            EndPeriod: endPeriod
        };
        handleRecurringBooking(fields); // Call the new Firestore recurring function
        return; 
    }

    // --- Logic for single bookings (create or update) ---
    const fields = {
        "TeacherName": teacherName,
        "BookingReason": bookingReason,
        "userEmail": auth.currentUser.email // Always include the user's email
    };
    
    if (isEditing) {
        fields.StartPeriod = parseInt(document.getElementById('start-period').value);
        fields.EndPeriod = parseInt(document.getElementById('end-period').value);
        // If we are detaching it, we use a special command to remove the SeriesID field
        if (bookingForm.dataset.isDetached === 'true') {
            fields.SeriesID = firebase.firestore.FieldValue.delete();
        }
    } else {
        fields.Date = bookingForm.dataset.date;
        fields.StartPeriod = parseInt(bookingForm.dataset.startPeriod);
        fields.EndPeriod = parseInt(document.getElementById('end-period').value);
    }

    try {
        if (isEditing) {
            // Use .update() for editing, as it won't overwrite the whole document
            await db.collection('bookings').doc(recordId).update(fields);
        } else {
            // Use .add() for creating a new booking
            await db.collection('bookings').add(fields);
            sendNotificationEmail('created', fields);
        }
        hideBookingModal();
        loadScheduleForSelectedDate();
    } catch (error) {
        showNotificationModal(`Could not save booking: ${error.message}`, 'error');
        console.error("Booking/editing failed:", error);
    }
}

async function cancelBooking(recordId) {
    try {
        const bookingDocRef = db.collection('bookings').doc(recordId);
        const bookingDoc = await bookingDocRef.get();
        
        if (bookingDoc.exists) {
            const bookingDetails = bookingDoc.data();

            // --- START OF NEW SECURITY CHECK ---
            const currentUser = auth.currentUser;
            const bookingOwnerEmail = bookingDetails.userEmail || '';
            const isUserAdmin = ADMIN_EMAILS.includes(currentUser.email.toLowerCase());
            const isUserOwner = currentUser.email.toLowerCase() === bookingOwnerEmail.toLowerCase();

            if (!isUserAdmin && !isUserOwner) {
                showNotificationModal("You do not have permission to delete this booking.", 'error', 'Permission Denied');
                return;
            }
            // --- END OF NEW SECURITY CHECK ---

            await bookingDocRef.delete();
            await sendNotificationEmail('deleted', bookingDetails);
        }
        loadScheduleForSelectedDate(); // Refresh the grid
    } catch (error) {
        showNotificationModal('Could not cancel booking. Please try again.', 'error');
        console.error(error);
    }
}

// --- Grid and Date Logic ---
async function fetchAndPopulateBookings() {
    try {
        const validDates = currentWeekDates.filter(d => d);
        let allBookingsForWeek = [];

        if (validDates.length > 0) {
            // Fetch individual bookings
            const bookingsSnapshot = await db.collection('bookings')
                                             .where('Date', 'in', validDates)
                                             .get();

            bookingsSnapshot.forEach(doc => {
                const bookingData = doc.data();
                const record = {
                    id: doc.id,
                    fields: bookingData,
                    isRecurring: !!bookingData.SeriesID
                };
                allBookingsForWeek.push(record);
            });

            // Fetch and generate recurring booking instances
            const recurringSnapshot = await db.collection('recurring_bookings').get();
            const recurringInstances = generateRecurringInstancesForWeek(
                recurringSnapshot.docs.map(doc => ({ id: doc.id, fields: doc.data() })),
                validDates
            );

            // Add recurring instances to the bookings list
            allBookingsForWeek.push(...recurringInstances);
        }
        
        // CHANGED: Do both operations together while invisible
        resetGridToAvailableWithoutFlash(allBookingsForWeek);
        renderBookings(allBookingsForWeek);

    } catch (error) {
        console.error("Error fetching and populating bookings:", error);
        resetGridToAvailableWithoutFlash(); 
    }
}

function resetGridToAvailableWithoutFlash(bookings = []) {
    const selectedDate = new Date(datePicker.value + 'T12:00:00');
    const selectedDateString = selectedDate.toLocaleDateString();

    // Create a Set of booked cells for quick lookup
    const bookedCells = new Set();
    bookings.forEach(record => {
        const startPeriod = record.fields.StartPeriod;
        const endPeriod = record.fields.EndPeriod || startPeriod;
        const recordDate = new Date(record.fields.Date + 'T12:00:00');

        const columnIndex = currentWeekDates.findIndex(d =>
            new Date(d + 'T12:00:00').toLocaleDateString() === recordDate.toLocaleDateString()
        );
        if (columnIndex === -1) return;

        const columnNumber = columnIndex + 1;
        for (let p = startPeriod; p <= endPeriod; p++) {
            bookedCells.add(`D${columnNumber}-P${p}`);
        }
    });

    document.querySelectorAll('.grid-cell').forEach(cell => {
        const [_, day, period] = cell.id.match(/D(\d+)-P(\d+)/);
        
        // Reset to base classes
        cell.className = `grid-cell D${day} p-1 sm:p-2 text-center min-h-[40px] sm:min-h-[60px] flex items-center justify-center text-xs border-b border-solid border-gray-200 sm:text-sm`;

        const dateStringForThisCell = currentWeekDates[day - 1];
        if (dateStringForThisCell) {
            const dateForThisCell = new Date(dateStringForThisCell + 'T12:00:00');
            const mdyFormat = (dateForThisCell.getMonth() + 1) + '/' + dateForThisCell.getDate() + '/' + dateForThisCell.getFullYear();
            const dayType = SCHOOL_CALENDAR[mdyFormat];

            // Only set up available cells if they're not going to be overwritten by bookings
            if (dayType && dayType.startsWith("Day") && !bookedCells.has(cell.id)) {
                cell.classList.add('available', 'bg-green-100', 'hover:bg-green-200', 'cursor-pointer', 'text-green-800');
                cell.innerHTML = 'Available';
                cell.onclick = () => showBookingModal(day, period, dateStringForThisCell);
            } else if (!bookedCells.has(cell.id)) {
                cell.classList.add('bg-gray-100', 'text-gray-500');
                cell.innerHTML = dayType || '';
                cell.onclick = null;
            }

            if (dateForThisCell.toLocaleDateString() === selectedDateString) {
                cell.classList.add('current-day');
            }
        } else {
            cell.classList.add('bg-gray-100');
            cell.innerHTML = '';
            cell.onclick = null;
        }
    });
}

function renderBookings(bookings) {
    const selectedDate = new Date(datePicker.value + 'T12:00:00').toLocaleDateString();
    const currentUser = auth.currentUser; // Get the current user once

    bookings.forEach(record => {
        const startPeriod = record.fields.StartPeriod;
        const endPeriod = record.fields.EndPeriod || startPeriod;
        const bookingReason = record.fields.BookingReason;
        const recordDate = new Date(record.fields.Date + 'T12:00:00');

        const columnIndex = currentWeekDates.findIndex(d =>
            new Date(d + 'T12:00:00').toLocaleDateString() === recordDate.toLocaleDateString()
        );
        if (columnIndex === -1) return;

        const columnNumber = columnIndex + 1;
        const isCurrentDay = (recordDate.toLocaleDateString() === selectedDate);

        for (let p = startPeriod; p <= endPeriod; p++) {
            const cellId = `D${columnNumber}-P${p}`;
            const cell = document.getElementById(cellId);
            if (!cell) continue;

            const isFirstCell = (p === startPeriod);

            let actionsHTML = ''; // Default to no actions

            // --- START OF NEW PERMISSION LOGIC ---
            const isUserAdmin = currentUser && ADMIN_EMAILS.includes(currentUser.email.toLowerCase());
            const bookingOwnerEmail = record.fields.userEmail || '';
            const isUserOwner = currentUser && currentUser.email.toLowerCase() === bookingOwnerEmail.toLowerCase();

            // Determine if the user has modification rights
            const canModify = isUserAdmin || isUserOwner;
            // --- END OF NEW PERMISSION LOGIC ---

            if (record.isRecurring) {
                const seriesId = record.fields.SeriesID;
                const recordDateStr = record.fields.Date;
                const iconColorClass = record.fields.BookingReason === 'Coverage' ? 'text-gray-300 hover:text-white' : 'text-gray-500';
                
                // For recurring bookings, the icon is always visible. The permission check happens inside the modal.
                actionsHTML = `<div class="booking-actions absolute top-1 right-1 z-10"><span class="material-symbols-outlined ${iconColorClass} cursor-pointer" style="font-size: 20px;" onclick="showRecurringChoiceModal('${record.id}', '${seriesId}', '${recordDateStr}')" title="Recurring Event">event_repeat</span></div>`;
            
            } else if (canModify) { // Only show edit/delete buttons if the user has permission
                 const iconColorClass = record.fields.BookingReason === 'Coverage' ? 'text-gray-300 hover:text-white' : 'text-gray-600';
                actionsHTML = `<div class="booking-actions absolute top-1 right-1 flex items-center gap-1 sm:gap-2 z-10">
                                   <span class="material-symbols-outlined edit-btn ${iconColorClass} hover:text-gray-900 cursor-pointer" data-record-id="${record.id}" title="Edit Booking">edit</span>
                                   <span class="material-symbols-outlined cancel-btn ${iconColorClass} hover:text-red-600 cursor-pointer" data-record-id="${record.id}" title="Cancel Booking">delete</span>
                               </div>`;
            }
            
            cell.onclick = null;

            if (bookingReason === "Closed") {
                cell.className = `grid-cell D${columnNumber} p-1 rounded-lg sm:p-2 text-xs relative bg-red-100 text-red-800`;
                if (isCurrentDay) cell.classList.add('current-day');
                if (isFirstCell) {
                    cell.innerHTML = `${actionsHTML} <div class="flex flex-col items-center justify-center h-full font-semibold uppercase tracking-tight sm:text-base gap-1"><span class="material-symbols-outlined" style="font-size: 24px;">event_busy</span><span class="text-[12px] leading-none">Closed</span></div>`;
                } else {
                    cell.innerHTML = `<div class="flex items-center justify-center h-full"><span class="material-symbols-outlined text-red-300" style="font-size: 24px;">arrow_cool_down</span></div>`;
                }
            } 
            else if (bookingReason === "Coverage") {
                cell.className = `grid-cell D${columnNumber} p-1 rounded-lg sm:p-2 text-xs relative coverage-cell`;
                if (isCurrentDay) cell.classList.add('current-day');
                if (isFirstCell) {
                    cell.innerHTML = `
                        ${actionsHTML}
                        <div class="flex flex-col items-center justify-center h-full text-center gap-1">
                            <span class="material-symbols-outlined text-3xl">chat_bubble</span>
                            <strong class="font-semibold block text-xs sm:text-sm leading-tight">Taylor in Port. 1</strong>
                            <small class="text-xs block leading-tight contact-text">Contact to book this period</small>
                        </div>
                    `;
                } else {
                    cell.innerHTML = `<div class="flex items-center justify-center h-full"><span class="material-symbols-outlined text-gray-400" style="font-size: 24px;">arrow_cool_down</span></div>`;
                }
            } 
            else {
                cell.className = `grid-cell D${columnNumber} p-1 rounded-lg sm:p-2 text-xs relative bg-blue-100 text-blue-800`;
                if (isCurrentDay) cell.classList.add('current-day');
                if (isFirstCell) {
                    let iconName = REASON_ICONS[bookingReason] || REASON_ICONS["Other"];
                    cell.innerHTML = `${actionsHTML} <div class="pt-6 sm:pt-5"><strong class="font-semibold block text-xs tracking-tighter sm:text-sm leading-tight">${record.fields.TeacherName}</strong><small class="flex items-center gap-1.5 text-blue-700 text-xs block mt-1 leading-tight"><span class="material-symbols-outlined" style="font-size: 16px;">${iconName}</span><span>${bookingReason || ''}</span></small></div>`;
                } else {
                    cell.innerHTML = `<div class="flex items-center justify-center h-full"><span class="material-symbols-outlined text-blue-300" style="font-size: 24px;">arrow_cool_down</span></div>`;
                }
            }
        }
    });

    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation();
            showEditModal(event.currentTarget.dataset.recordId, false);
        });
    });
    document.querySelectorAll('.cancel-btn').forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation();
            showConfirmDeleteModal(event.currentTarget.dataset.recordId);
        });
    });
}

function generateRecurringInstancesForWeek(rules, weekDates) {
    const instances = [];
    const weekDateStrings = new Set(weekDates.filter(d => d));
    
    // Get today's date in YYYY-MM-DD format
    const today = new Date();
    const todayStr = today.getFullYear() + '-' + 
                    String(today.getMonth() + 1).padStart(2, '0') + '-' + 
                    String(today.getDate()).padStart(2, '0');

    rules.forEach(rule => {
        const { EndDate, EndOccurrences, RecurrenceType, RecurrenceDays, SeriesID, Exceptions } = rule.fields;
        
        // Create a Set of exception dates for quick lookup
        const exceptionDates = new Set(Exceptions || []);

        if (!SeriesID) return;

        const seriesDates = new Set();
        let occurrencesFound = 0;
        const selectedDays = (RecurrenceDays || "").split(',').map(d => parseInt(d));
        const finalDate = EndDate ? new Date(EndDate + 'T23:59:59') : null;

        for (const [dateString, dayType] of sortedCalendar) {
            const dateParts = dateString.split('/');
            const month = dateParts[0].padStart(2, '0');
            const day = dateParts[1].padStart(2, '0');
            const year = dateParts[2];
            const isoDateString = `${year}-${month}-${day}`;
            
            // FIXED: Skip past dates - don't generate instances for dates before today
            if (isoDateString < todayStr) {
                continue;
            }
            
            const currentDate = new Date(isoDateString + 'T12:00:00');

            if (finalDate && currentDate > finalDate) break;
            if (EndOccurrences && occurrencesFound >= EndOccurrences) break;

            if (dayType && dayType.startsWith('Day')) {
                let match = false;
                if (RecurrenceType === 'cycle') {
                    const cycleDay = parseInt(dayType.split(' ')[1]);
                    if (selectedDays.includes(cycleDay)) match = true;
                } else if (RecurrenceType === 'weekday') {
                    const dayOfWeek = currentDate.getDay();
                    if (selectedDays.includes(dayOfWeek)) match = true;
                }

                if (match) {
                    // Only count and add the date if it's NOT an exception
                    if (!exceptionDates.has(isoDateString)) {
                        seriesDates.add(isoDateString);
                        occurrencesFound++;
                    }
                }
            }
        }

        // Only generate instances for dates that are in the current week AND not in the past
        weekDateStrings.forEach(weekDateStr => {
            if (seriesDates.has(weekDateStr) && weekDateStr >= todayStr) {
                instances.push({
                    id: `${rule.id}-${weekDateStr}`,
                    isRecurring: true,
                    fields: {
                        Date: weekDateStr,
                        StartPeriod: rule.fields.StartPeriod,
                        EndPeriod: rule.fields.EndPeriod,
                        TeacherName: rule.fields.TeacherName,
                        BookingReason: rule.fields.BookingReason,
                        SeriesID: SeriesID
                    }
                });
            }
        });
    });

    return instances;
}

function resetGridToAvailable() {
    const selectedDate = new Date(datePicker.value + 'T12:00:00');
    const selectedDateString = selectedDate.toLocaleDateString();

    document.querySelectorAll('.grid-cell').forEach(cell => {
        const [_, day, period] = cell.id.match(/D(\d+)-P(\d+)/);
        cell.className = `grid-cell D${day} p-1 sm:p-2 text-center min-h-[40px] sm:min-h-[60px] flex items-center justify-center text-xs border-b border-solid border-gray-200 sm:text-sm`;

        const dateStringForThisCell = currentWeekDates[day - 1];
        if (dateStringForThisCell) {
            const dateForThisCell = new Date(dateStringForThisCell + 'T12:00:00');
            const mdyFormat = (dateForThisCell.getMonth() + 1) + '/' + dateForThisCell.getDate() + '/' + dateForThisCell.getFullYear();
            const dayType = SCHOOL_CALENDAR[mdyFormat];

            if (dayType && dayType.startsWith("Day")) {
                cell.classList.add('available', 'bg-green-100', 'hover:bg-green-200', 'cursor-pointer', 'text-green-800');
                cell.innerHTML = 'Available';
                cell.onclick = () => showBookingModal(day, period, dateStringForThisCell);
            } else {
                cell.classList.add('bg-gray-100', 'text-gray-500');
                cell.innerHTML = dayType || '';
                cell.onclick = null;
            }

            if (dateForThisCell.toLocaleDateString() === selectedDateString) {
                cell.classList.add('current-day');
            }
        } else {
            cell.classList.add('bg-gray-100');
            cell.innerHTML = '';
            cell.onclick = null;
        }
    });
}


// Day-by-day nav (used by mobile arrows)
function navigateDays(direction) {
    const currentDateStr = new Date(datePicker.value + 'T00:00:00').toLocaleDateString();
    const currentIndex = schoolDays.findIndex(entry => new Date(entry[0]).toLocaleDateString() === currentDateStr);

    if (currentIndex === -1 && direction === 'prev') {
        const today = new Date(datePicker.value + 'T12:00:00');
        const pastDays = schoolDays.filter(day => new Date(day[0]) < today);
        if (pastDays.length > 0) {
            const prevDay = pastDays[pastDays.length - 1];
            datePicker.value = new Date(prevDay[0]).toISOString().split('T')[0];
            loadScheduleForSelectedDate();
        }
        return;
    }

    let nextIndex;
    if (direction === 'next') {
        nextIndex = Math.min(currentIndex + 1, schoolDays.length - 1);
    } else {
        nextIndex = Math.max(currentIndex - 1, 0);
    }
    if (currentIndex === nextIndex) return;

    const nextDate = new Date(schoolDays[nextIndex][0]);
    datePicker.value = nextDate.toISOString().split('T')[0];
    loadScheduleForSelectedDate();
}

// Week-by-week nav (desktop arrows)
function navigateWeeks(direction) {
    const currentDateStr = new Date(datePicker.value + 'T00:00:00').toLocaleDateString();
    const currentIndex = schoolDays.findIndex(entry => new Date(entry[0]).toLocaleDateString() === currentDateStr);

    let nextIndex;
    if (direction === 'next') {
        nextIndex = Math.min(currentIndex + 5, schoolDays.length - 1);
    } else {
        nextIndex = Math.max(currentIndex - 5, 0);
    }

    if (currentIndex === nextIndex && currentIndex > -1) return;

    if (currentIndex === -1 && direction === 'prev') {
        const today = new Date(datePicker.value + 'T12:00:00');
        const pastDays = schoolDays.filter(day => new Date(day[0]) < today);
        if (pastDays.length > 0) {
            nextIndex = Math.max(pastDays.length - 5, 0);
        } else {
            return;
        }
    }

    const nextDate = new Date(schoolDays[nextIndex][0]);
    datePicker.value = nextDate.toISOString().split('T')[0];
    loadScheduleForSelectedDate();
}


// Jump back to the real “today”
function jumpToToday() {
    const today = new Date();
    datePicker.value = today.toISOString().split('T')[0];
    loadScheduleForSelectedDate();
}

// “Is selected date in the same week as today?” (for desktop behavior)
function isCurrentWeekToday() {
    const today = new Date();
    const selectedDate = new Date(datePicker.value + 'T12:00:00');

    const getMonday = (date) => {
        const d = new Date(date);
        const day = d.getDay();
        const diff = d.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(d.setDate(diff));
    };

    return getMonday(today).getTime() === getMonday(selectedDate).getTime();
}

// Mobile-aware visibility for the Today button
function updateTodayButtonVisibility() {
    if (!todayBtn) return;

    const selected = new Date(datePicker.value + 'T12:00:00');
    const today = new Date();
    const sameDay = selected.toDateString() === today.toDateString();
    const isMobile = window.matchMedia('(max-width: 640px)').matches;

    // Mobile: show whenever you're NOT on today
    // Desktop: keep your original behavior (show when you’ve left today’s week)
    const shouldShow = isMobile ? !sameDay : !isCurrentWeekToday();

    todayBtn.classList.toggle('hidden', !shouldShow);
}


async function loadScheduleForSelectedDate() {
    showLoadingState();
    // Add a tiny delay to ensure the browser has time to render the loading state
    await new Promise(resolve => setTimeout(resolve, 10));

    try {
        const selectedDate = new Date(datePicker.value);
        const timezoneOffset = selectedDate.getTimezoneOffset() * 60000;
        const adjustedDate = new Date(selectedDate.getTime() + timezoneOffset);
        const mdyFormat = (adjustedDate.getMonth() + 1) + '/' + adjustedDate.getDate() + '/' + adjustedDate.getFullYear();
    
        const weekDates = getWeekDateInfo(mdyFormat);
        currentWeekDates = weekDates.map(d => d ? new Date(d).toISOString().split('T')[0] : null);
    
        await fetchAndRenderComplete(mdyFormat);
    
        updateTodayButtonVisibility();
    } catch (error) {
        console.error("Error loading schedule:", error);
        // Optionally, display an error message in the UI
    } finally {
        hideLoadingState();
    }
}

async function fetchAndRenderComplete(dateString) {
    try {
        const validDates = currentWeekDates.filter(d => d);
        let allBookingsForWeek = [];

        if (validDates.length > 0) {
            // Fetch individual bookings
            const bookingsSnapshot = await db.collection('bookings')
                                             .where('Date', 'in', validDates)
                                             .get();

            bookingsSnapshot.forEach(doc => {
                const bookingData = doc.data();
                const record = {
                    id: doc.id,
                    fields: bookingData,
                    isRecurring: !!bookingData.SeriesID
                };
                allBookingsForWeek.push(record);
            });

            // Fetch and generate recurring booking instances
            const recurringSnapshot = await db.collection('recurring_bookings').get();
            const recurringInstances = generateRecurringInstancesForWeek(
                recurringSnapshot.docs.map(doc => ({ id: doc.id, fields: doc.data() })),
                validDates
            );

            allBookingsForWeek.push(...recurringInstances);
        }
        
        // Now update ALL UI elements at once while invisible
        updateDayInfoSilent(dateString);
        resetAndRenderGrid(allBookingsForWeek);

    } catch (error) {
        console.error("Error fetching and populating bookings:", error);
        updateDayInfoSilent(dateString);
        resetAndRenderGrid();
    }
}

function resetAndRenderGrid(bookings = []) {
    const selectedDate = new Date(datePicker.value + 'T12:00:00');
    const selectedDateString = selectedDate.toLocaleDateString();

    // First pass: reset all cells and set up basic state
    document.querySelectorAll('.grid-cell').forEach(cell => {
        const [_, day, period] = cell.id.match(/D(\d+)-P(\d+)/);
        cell.className = `grid-cell D${day} p-1 sm:p-2 text-center min-h-[40px] sm:min-h-[60px] flex items-center justify-center text-xs border-b border-solid border-gray-200 sm:text-sm`;
        cell.onclick = null;
        cell.innerHTML = '';

        const dateStringForThisCell = currentWeekDates[day - 1];
        if (dateStringForThisCell) {
            const dateForThisCell = new Date(dateStringForThisCell + 'T12:00:00');
            const mdyFormat = (dateForThisCell.getMonth() + 1) + '/' + dateForThisCell.getDate() + '/' + dateForThisCell.getFullYear();
            const dayType = SCHOOL_CALENDAR[mdyFormat];

            if (dayType && dayType.startsWith("Day")) {
                cell.classList.add('available', 'bg-green-100', 'hover:bg-green-200', 'cursor-pointer', 'text-green-800');
                cell.innerHTML = 'Available';
                cell.onclick = () => showBookingModal(day, period, dateStringForThisCell);
            } else {
                cell.classList.add('bg-gray-100', 'text-gray-500');
                cell.innerHTML = dayType || '';
            }

            if (dateForThisCell.toLocaleDateString() === selectedDateString) {
                cell.classList.add('current-day');
            }
        } else {
            cell.classList.add('bg-gray-100');
        }
    });

    // Second pass: render bookings on top
    renderBookings(bookings);
}

// Loading state functions
function showLoadingState() {
    // Hide the main grid
    gridContainer.style.display = 'none';
    
    // Create or show loading overlay
    let loadingOverlay = document.getElementById('schedule-loading');
    if (!loadingOverlay) {
        loadingOverlay = document.createElement('div');
        loadingOverlay.id = 'schedule-loading';
        loadingOverlay.className = 'flex flex-col items-center justify-center py-16 px-4 min-h-[600px]';
        loadingOverlay.innerHTML = `
            <div class="flex items-center gap-2 mb-4">
                <span class="animate-pulse text-blue-500 text-2xl">•</span>
                <span class="animate-pulse text-blue-500 text-2xl" style="animation-delay: 0.2s;">•</span>
                <span class="animate-pulse text-blue-500 text-2xl" style="animation-delay: 0.4s;">•</span>
            </div>
        `;
        gridContainer.parentNode.insertBefore(loadingOverlay, gridContainer);
    } else {
        loadingOverlay.style.display = 'flex';
    }
}

function hideLoadingState() {
    const loadingOverlay = document.getElementById('schedule-loading');

    // If the grid is meant to be hidden (e.g., non-school day), just hide the loading overlay.
    if (gridContainer.classList.contains('hidden')) {
        if (loadingOverlay) {
            loadingOverlay.style.display = 'none';
        }
        return; // And do nothing else
    }

    // Show the main grid with smooth transition
    gridContainer.style.display = 'grid';
    gridContainer.style.opacity = '0';
    
    // Hide loading overlay
    if (loadingOverlay) {
        loadingOverlay.style.display = 'none';
    }
    
    // Smooth fade in
    setTimeout(() => {
        gridContainer.style.opacity = '1';
    }, 50);
}

function updateDayInfoSilent(dateString) {
    // Clear previous highlights
    document.querySelectorAll('.current-day, .current-day-header').forEach(el => {
        el.classList.remove('current-day', 'current-day-header');
    });
    
    const weekDates = getWeekDateInfo(dateString);

    // Update desktop headers with actual dates
    for (let i = 0; i < 5; i++) {
        const headerDateDiv = document.querySelector(`.grid-header.D${i + 1} .header-date`);
        if (weekDates[i]) {
            const d = new Date(weekDates[i]);
            headerDateDiv.textContent = `${d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}`;
        } else {
            headerDateDiv.textContent = '';
        }
    }

    // Update the header titles with the actual day types from the calendar
    for (let i = 0; i < 5; i++) {
        const headerTitleSpan = document.querySelector(`.grid-header.D${i + 1} span`);
        if (weekDates[i]) {
            const dayType = SCHOOL_CALENDAR[weekDates[i]];
            headerTitleSpan.textContent = dayType || `Day ${i + 1}`;
        } else {
            headerTitleSpan.textContent = `Day ${i + 1}`;
        }
    }
    
    const dayType = SCHOOL_CALENDAR[dateString];
    const selectedDate = new Date(dateString);
    const selectedDayOfWeek = selectedDate.getDay();
    
    if (dayType && dayType.startsWith('Day')) {
        // This is a valid school day
        infoBanner.classList.add('hidden');
        noCurrentDayMobile.classList.add('hidden');
        gridContainer.classList.remove('hidden');
        
        // Map day of week to column index (Monday = 0, Tuesday = 1, etc.)
        let columnIndex;
        if (selectedDayOfWeek === 0) { // Sunday
            columnIndex = -1; // Invalid for school days
        } else {
            columnIndex = selectedDayOfWeek - 1; // Monday = 0, Tuesday = 1, etc.
        }
        
        // Add the header highlighting
        if (columnIndex >= 0 && columnIndex < 5) {
            const headerElement = document.querySelector(`.grid-header.D${columnIndex + 1}`);
            if (headerElement) {
                headerElement.classList.add('current-day-header');
            }
        }
        
        const dayDate = new Date(dateString);
        mobileCurrentDayInfo.textContent = `${dayType} - ${dayDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}`;

    } else {
        // This is NOT a school day
        gridContainer.classList.add('hidden');
        noCurrentDayMobile.classList.remove('hidden');
        mobileCurrentDayInfo.textContent = "Not a school day";

        // Logic for the desktop info banner
        if (dayType) { // PA Day or Holiday
            infoBanner.textContent = `The selected day (${dateString}) is a ${dayType}.`;
            infoBanner.classList.remove('hidden', 'bg-gray-200', 'text-gray-700');
            infoBanner.classList.add('bg-blue-100', 'text-blue-800');
        } else { // Weekend or not in calendar
            infoBanner.textContent = `The selected day (${dateString}) is a weekend or not in the calendar.`;
            infoBanner.classList.remove('hidden', 'bg-blue-100', 'text-blue-800');
            infoBanner.classList.add('bg-gray-200', 'text-gray-700');
        }
    }

    // Update button states for week navigation
    const currentIndex = schoolDays.findIndex(entry => entry[0] === dateString);
    prevWeekBtn.disabled = currentIndex < 5 && currentIndex !== -1;
    nextWeekBtn.disabled = currentIndex >= schoolDays.length - 5;
    mobilePrevDay.disabled = currentIndex <= 0;
    mobileNextDay.disabled = currentIndex >= schoolDays.length - 1;
}

function getWeekDateInfo(selectedDateString) {
    const weekDates = [null, null, null, null, null]; // Mon, Tue, Wed, Thu, Fri
    const selectedDate = new Date(selectedDateString);
    
    // Get the Monday of the week containing the selected date
    const dayOfWeek = selectedDate.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const daysFromMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Handle Sunday as 6 days from Monday
    
    const monday = new Date(selectedDate);
    monday.setDate(selectedDate.getDate() - daysFromMonday);
    
    // Fill in the week dates (Monday through Friday) - include ALL weekdays
    for (let i = 0; i < 5; i++) {
        const currentDay = new Date(monday);
        currentDay.setDate(monday.getDate() + i);
        const dateString = (currentDay.getMonth() + 1) + '/' + currentDay.getDate() + '/' + currentDay.getFullYear();
        
        // Include ALL weekdays, regardless of whether they're school days
        weekDates[i] = dateString;
    }
    
    return weekDates;
}

function updateDayInfo(dateString) {
    // Clear previous highlights
    document.querySelectorAll('.current-day, .current-day-header').forEach(el => {
        el.classList.remove('current-day', 'current-day-header');
    });
    
    const weekDates = getWeekDateInfo(dateString);
    currentWeekDates = weekDates.map(d => d ? new Date(d).toISOString().split('T')[0] : null);

    // Update desktop headers with actual dates
    for (let i = 0; i < 5; i++) {
        const headerDateDiv = document.querySelector(`.grid-header.D${i + 1} .header-date`);
        if (weekDates[i]) {
            const d = new Date(weekDates[i]);
            headerDateDiv.textContent = `${d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}`;
        } else {
            headerDateDiv.textContent = '';
        }
    }

    // Update the header titles with the actual day types from the calendar
    for (let i = 0; i < 5; i++) {
        const headerTitleSpan = document.querySelector(`.grid-header.D${i + 1} span`);
        if (weekDates[i]) {
            const dayType = SCHOOL_CALENDAR[weekDates[i]];
            headerTitleSpan.textContent = dayType || `Day ${i + 1}`;
        } else {
            headerTitleSpan.textContent = `Day ${i + 1}`;
        }
    }
    
    const dayType = SCHOOL_CALENDAR[dateString];
    const selectedDate = new Date(dateString);
    const selectedDayOfWeek = selectedDate.getDay();
    
    if (dayType && dayType.startsWith('Day')) {
        // This is a valid school day
        infoBanner.classList.add('hidden');
        noCurrentDayMobile.classList.add('hidden');
        gridContainer.classList.remove('hidden');
        
        // Map day of week to column index (Monday = 0, Tuesday = 1, etc.)
        let columnIndex;
        if (selectedDayOfWeek === 0) { // Sunday
            columnIndex = -1; // Invalid for school days
        } else {
            columnIndex = selectedDayOfWeek - 1; // Monday = 0, Tuesday = 1, etc.
        }
        
        // FIXED: Add the header highlighting here as well
        if (columnIndex >= 0 && columnIndex < 5) {
            const headerElement = document.querySelector(`.grid-header.D${columnIndex + 1}`);
            if (headerElement) {
                headerElement.classList.add('current-day-header');
            }
        }
        
        const dayDate = new Date(dateString);
        mobileCurrentDayInfo.textContent = `${dayType} - ${dayDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}`;

    } else {
        // This is NOT a school day
        gridContainer.classList.add('hidden');
        noCurrentDayMobile.classList.remove('hidden');
        mobileCurrentDayInfo.textContent = "Not a school day";

        // Logic for the desktop info banner
        if (dayType) { // PA Day or Holiday
            infoBanner.textContent = `The selected day (${dateString}) is a ${dayType}.`;
            infoBanner.classList.remove('hidden', 'bg-gray-200', 'text-gray-700');
            infoBanner.classList.add('bg-blue-100', 'text-blue-800');
        } else { // Weekend or not in calendar
            infoBanner.textContent = `The selected day (${dateString}) is a weekend or not in the calendar.`;
            infoBanner.classList.remove('hidden', 'bg-blue-100', 'text-blue-800');
            infoBanner.classList.add('bg-gray-200', 'text-gray-700');
        }
    }

    // Update button states for week navigation
    const currentIndex = schoolDays.findIndex(entry => entry[0] === dateString);
    prevWeekBtn.disabled = currentIndex < 5 && currentIndex !== -1;
    nextWeekBtn.disabled = currentIndex >= schoolDays.length - 5;
    mobilePrevDay.disabled = currentIndex <= 0;
    mobileNextDay.disabled = currentIndex >= schoolDays.length - 1;
}

// Option 2: Add a loading state to drawGridStructure
function drawGridStructure() {
    gridContainer.innerHTML = '';
    const headers = ['', 'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];
    headers.forEach((h, i) => {
        const header = document.createElement('div');
        header.className = 'grid-header hidden sm:block p-2 sm:p-3 text-center font-semibold text-gray-700 bg-gray-100 border-b-2 border-gray-200 rounded-t-lg text-xs sm:text-sm';
        if (i > 0) header.classList.add(`D${i}`);
        const title = document.createElement('span');
        title.className = "text-xs sm:text-sm font-bold";
        title.textContent = h;
        const dateDiv = document.createElement('div');
        dateDiv.className = 'header-date text-xs text-gray-500 font-normal mt-1';
        header.appendChild(title);
        header.appendChild(dateDiv);
        gridContainer.appendChild(header);
    });
    
    const separatorAfterPeriods = [3, 5, 8];
    
    for (let p = 1; p <= 10; p++) {
        const pLabel = document.createElement('div');
        pLabel.className = 'grid-label p-1 sm:p-2 text-center font-semibold text-gray-600 bg-gray-100 text-xs rounded-md border-b border-solid';
        pLabel.innerHTML = `<strong class="block text-md sm:text-sm">Period ${p}</strong><small class="period-time text-gray-500 text-xs">${PERIOD_TIMES[p-1]}</small>`;
        gridContainer.appendChild(pLabel);
        
        for (let d = 1; d <= 5; d++) {
            const cell = document.createElement('div');
            cell.id = `D${d}-P${p}`;
            // NEW: Start with a loading state instead of completely blank
            cell.className = `grid-cell D${d} p-1 sm:p-2 text-center border border-gray-200 rounded-md transition-colors duration-200 min-h-[40px] sm:min-h-[60px] flex items-center justify-center text-xs sm:text-sm bg-gray-50 text-gray-400`;
            cell.innerHTML = '<span class="animate-pulse font-semibold">•••</span>'; // Simple loading indicator
            gridContainer.appendChild(cell);
        }
        
        if (separatorAfterPeriods.includes(p)) {
            const separator = document.createElement('div');
            separator.className = 'grid-separator h-0 border-t-2 border-gray-300';
            separator.style.gridColumn = '1 / -1';
            separator.style.margin = '4px 0';
            gridContainer.appendChild(separator);
        }
    }
}

function handleDeleteFromModal() {
    const recordId = bookingForm.dataset.recordId;
    if (recordId) {
        hideBookingModal(); // Hide the edit modal
        showConfirmDeleteModal(recordId); // Show the new confirmation modal
    }
}

// This function opens the confirmation modal and stores the ID of the booking to be deleted.
function showConfirmDeleteModal(recordId) {
    const modal = document.getElementById('confirm-delete-modal');
    modal.dataset.recordId = recordId; // Store the ID on the modal itself
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

// This function simply hides the modal.
function hideConfirmDeleteModal() {
    const modal = document.getElementById('confirm-delete-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    delete modal.dataset.recordId; // Clean up the stored ID
}

async function handleDeleteEntireSeries() {
    const form = document.getElementById('edit-recurring-form');
    const masterRecordId = form.dataset.masterRecordId;

    if (!masterRecordId) {
        return showNotificationModal('Could not delete series: Missing record ID.', 'error');
    }

    // Hide the current modal before showing the confirmation
    document.getElementById('edit-recurring-modal').classList.add('hidden');

    // Call the existing delete function, which already has a confirmation modal
    await deleteRecurringSeries(masterRecordId);
}

// This function runs when the user clicks "Yes, Cancel Booking".
function executeDelete() {
    const modal = document.getElementById('confirm-delete-modal');
    const recordId = modal.dataset.recordId;
    if (recordId) {
        cancelBooking(recordId); // Call the original deletion logic
    }
    hideConfirmDeleteModal(); // Close the modal
}

function toggleRecurringOptions() {
    recurringOptions.classList.toggle('hidden', !makeRecurringCheckbox.checked);
}

function toggleRecurrenceDayPickers() {
    cycleDayOptions.classList.toggle('hidden', recurrenceType.value !== 'cycle');
    weekdayOptions.classList.toggle('hidden', recurrenceType.value !== 'weekday');
}

async function handleRecurringBooking(fields) {
    const type = recurrenceType.value;
    const endType = document.querySelector('input[name="end-type"]:checked').value;

    let endDate, maxOccurrences;
    if (endType === 'on-date') {
        const endDateValue = recurrenceEndDate.value;
        if (!endDateValue) { return showNotificationModal('Please select an end date.', 'error', 'Missing Information'); }
        endDate = new Date(endDateValue + 'T23:59:59');
    } else { // 'after'
        maxOccurrences = parseInt(recurrenceOccurrences.value);
        if (!maxOccurrences || maxOccurrences < 1) { return showNotificationModal('Please enter a valid number of occurrences.', 'error', 'Missing Information'); }
        endDate = new Date();
        endDate.setFullYear(endDate.getFullYear() + 5);
    }

    const daySelector = type === 'cycle' ? '#cycle-day-options input:checked' : '#weekday-options input:checked';
    const dayCheckboxes = document.querySelectorAll(daySelector);
    if (dayCheckboxes.length === 0) { return showNotificationModal('Please select at least one day for the recurrence.', 'error', 'Missing Information'); }
    const selectedDays = Array.from(dayCheckboxes).map(cb => parseInt(cb.value));

    // --- FIXED: MORE ROBUST DATE LOGIC ---
    const seriesDates = [];
    const seriesDateStrings = [];

    // Get today's date string in YYYY-MM-DD format for reliable comparison
    const today = new Date();
    const todayStr = today.getFullYear() + '-' + 
                    String(today.getMonth() + 1).padStart(2, '0') + '-' + 
                    String(today.getDate()).padStart(2, '0');
    
    console.log('Today:', todayStr);
    console.log('Start date:', fields.Date);

    // Determine the minimum date to use (today or start date, whichever is later)
    const useStartDate = fields.Date >= todayStr ? fields.Date : todayStr;
    console.log('Using minimum date:', useStartDate);

    for (const [dateString, dayType] of sortedCalendar) {
        // Convert M/D/YYYY to YYYY-MM-DD for comparison
        const dateParts = dateString.split('/'); // "9/8/2025" -> ["9", "8", "2025"]
        const month = dateParts[0].padStart(2, '0');
        const day = dateParts[1].padStart(2, '0');
        const year = dateParts[2];
        const isoDateString = `${year}-${month}-${day}`;
        
        // Skip dates before our minimum date
        if (isoDateString < useStartDate) {
            continue;
        }
        
        // Create Date object for other comparisons
        const currentDate = new Date(isoDateString + 'T12:00:00');

        // Check occurrence limit
        if (maxOccurrences && seriesDates.length >= maxOccurrences) break;
        
        // Check end date
        if (endDate && currentDate > endDate) break;

        // Only process school days
        if (dayType && dayType.startsWith('Day')) {
            let match = false;
            if (type === 'cycle') {
                const cycleDay = parseInt(dayType.split(' ')[1]);
                if (selectedDays.includes(cycleDay)) match = true;
            } else if (type === 'weekday') {
                const dayOfWeek = currentDate.getDay();
                if (selectedDays.includes(dayOfWeek)) match = true;
            }

            if (match) {
                console.log('Adding date:', isoDateString, 'Day type:', dayType);
                seriesDates.push(currentDate);
                seriesDateStrings.push(isoDateString);
            }
        }
    }
    // --- END: FIXED DATE LOGIC ---

    console.log('Final series dates:', seriesDateStrings);

    if (seriesDates.length === 0) { return showNotificationModal('No valid school days were found for the selected recurrence pattern.', 'error', 'No Dates Found'); }

    const conflictingBookings = [];
    try {
        const dateChunks = [];
        for (let i = 0; i < seriesDateStrings.length; i += 10) {
            dateChunks.push(seriesDateStrings.slice(i, i + 10));
        }

        for (const chunk of dateChunks) {
            const conflictSnapshot = await db.collection('bookings').where('Date', 'in', chunk).get();
            if (!conflictSnapshot.empty) {
                conflictSnapshot.forEach(doc => {
                    const booking = doc.data();
                    if (fields.StartPeriod <= (booking.EndPeriod || booking.StartPeriod) && fields.EndPeriod >= booking.StartPeriod) {
                        conflictingBookings.push({ id: doc.id, ...booking });
                    }
                });
            }
        }
    } catch (error) {
        console.error("Error checking for conflicts:", error);
        showNotificationModal("Could not check for booking conflicts. Please try again.", 'error');
        return;
    }

    if (conflictingBookings.length > 0) {
        const isUserAdmin = ADMIN_EMAILS.includes(auth.currentUser.email.toLowerCase());

        if (isUserAdmin) {
            const conflictMessages = conflictingBookings.map(b =>
                `• ${b.Date}: ${b.TeacherName} (P${b.StartPeriod}${b.EndPeriod && b.EndPeriod !== b.StartPeriod ? '-' + b.EndPeriod : ''})`
            ).join('\n');

            const confirmed = await showConfirmationModal({
                title: 'Confirm Override',
                message: `This action will override and delete the following ${conflictingBookings.length} booking(s):\n\n${conflictMessages}\n\nDo you want to proceed?`,
                icon: 'warning',
                confirmText: 'Yes, Override',
                cancelText: 'Cancel'
            });

            if (!confirmed) return;

        } else {
            const firstConflict = conflictingBookings[0];
            showNotificationModal(`The time slot is already taken on ${firstConflict.Date}. Please select a different time or date.`, 'error', 'Booking Conflict');
            return;
        }
    }

    const batch = db.batch();

    conflictingBookings.forEach(conflict => {
        const docRef = db.collection('bookings').doc(conflict.id);
        batch.delete(docRef);
    });

    const masterRecordRef = db.collection('recurring_bookings').doc();
    const uniqueSeriesId = masterRecordRef.id;

    const masterRecordFields = {
        TeacherName: fields.TeacherName, StartPeriod: fields.StartPeriod, EndPeriod: fields.EndPeriod,
        BookingReason: fields.BookingReason, RecurrenceType: type, RecurrenceDays: selectedDays.join(','),
        SeriesID: uniqueSeriesId,
        userEmail: auth.currentUser.email
    };

    if (endType === 'on-date') {
        masterRecordFields.EndDate = recurrenceEndDate.value;
    } else {
        masterRecordFields.EndOccurrences = maxOccurrences;
    }
    batch.set(masterRecordRef, masterRecordFields);

    // Use the already-formatted YYYY-MM-DD strings
    seriesDateStrings.forEach(dateStr => {
        const instanceRef = db.collection('bookings').doc();
        batch.set(instanceRef, {
            ...fields, Date: dateStr,
            SeriesID: uniqueSeriesId,
            userEmail: auth.currentUser.email
        });
    });

    try {
        await batch.commit();

        let successMessage = `Successfully created ${seriesDates.length} recurring bookings.`;
        if (conflictingBookings.length > 0) {
            successMessage += ` ${conflictingBookings.length} conflicting booking(s) were overridden.`;
        }
        showNotificationModal(successMessage, 'success');

        hideBookingModal();
        loadScheduleForSelectedDate();
        await sendNotificationEmail('created', { ...fields, isRecurring: true, RecurrenceType: type, RecurrenceDays: selectedDays });
    } catch (error) {
        console.error("Error creating recurring bookings:", error);
        showNotificationModal(`Failed to create bookings: ${error.message}`, 'error');
    }
}

async function openManageRecurringPanel(recordIdToHighlight = null) {
    adminModal.classList.add('hidden');
    recurringList.innerHTML = '<p class="text-center text-gray-500 py-4">Loading recurring bookings...</p>';
    manageRecurringModal.classList.remove('hidden');

    try {
        const snapshot = await db.collection('recurring_bookings').orderBy('TeacherName').get();
        
        recurringList.innerHTML = '';
        if (snapshot.empty) {
            recurringList.innerHTML = '<p class="text-center text-gray-500 py-8">No recurring bookings found.</p>';
            return;
        }

        const listContainer = document.createElement('ul');
        listContainer.className = 'divide-y divide-gray-200';

        snapshot.forEach(doc => {
            const record = { id: doc.id, fields: doc.data() };
            const { TeacherName, RecurrenceType, RecurrenceDays, EndDate, EndOccurrences, BookingReason, SeriesID } = record.fields;
            const li = document.createElement('li');
            li.id = `recurring-${record.id}`;
            li.className = 'p-4 flex justify-between items-start transition-colors duration-300';
            
            let daysText = RecurrenceType === 'cycle' ? `Cycle Days: ${RecurrenceDays}` : `Weekdays: ${RecurrenceDays.split(',').map(d => ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][d]).join(', ')}`;
            // --- FIX: Ensure EndDate is handled correctly ---
            let endText = EndDate ? `until ${new Date(EndDate + 'T12:00:00').toLocaleDateString()}` : `for ${EndOccurrences} occurrences`;
            
            li.innerHTML = `
                <div>
                    <div class="font-semibold text-gray-900">${TeacherName}</div>
                    <div class="text-sm text-gray-600">${BookingReason || 'Book Exchange'}</div>
                    <div class="text-sm text-gray-500">${daysText} ${endText}</div>
                </div>
                <div class="flex items-center gap-2">
                    <!-- FIX: Pass the unique document ID (record.id) instead of SeriesID -->
                    <button class="text-blue-600 hover:text-blue-800 p-1 rounded transition-colors" onclick="editRecurringSeries('${record.id}')" title="Edit Series">
                        <span class="material-symbols-outlined">edit</span>
                    </button>
                    <button class="text-red-600 hover:text-red-800 p-1 rounded transition-colors" onclick="deleteRecurringSeries('${record.id}')" title="Delete Series">
                        <span class="material-symbols-outlined">delete</span>
                    </button>
                </div>
            `;
            listContainer.appendChild(li);
        });
        
        recurringList.appendChild(listContainer);
        
    } catch (error) {
        console.error('Error loading recurring bookings:', error);
        recurringList.innerHTML = `<p class="text-center text-red-500 py-4">Error loading recurring bookings: ${error.message}</p>`;
    }
}

// New function to handle editing from the manage panel
function editRecurringSeries(masterRecordId) {
    manageRecurringModal.classList.add('hidden');
    showEditRecurringModal(masterRecordId);
}

async function deleteRecurringSeries(recordId) {
    const confirmed = await showConfirmationModal({
        title: 'Confirm Deletion',
        message: 'Are you sure you want to delete all future occurrences of this recurring series? Past bookings will remain. This cannot be undone.'
    });
    if (!confirmed) return;

    try {
        if (!recordId) {
            throw new Error('Master recurring record ID was not provided.');
        }

        const masterDoc = await db.collection('recurring_bookings').doc(recordId).get();
        if (!masterDoc.exists) throw new Error('Master recurring record not found.');

        const masterData = masterDoc.data();
        const seriesId = masterData.SeriesID;

        if (!seriesId) {
            throw new Error('Cannot delete: This booking is missing its Series ID.');
        }

        const todayStr = new Date().toISOString().split('T')[0];
        const bookingsToDeleteSnapshot = await db.collection('bookings')
            .where('SeriesID', '==', seriesId)
            .where('Date', '>=', todayStr)
            .get();

        const batch = db.batch();

        bookingsToDeleteSnapshot.forEach(doc => {
            batch.delete(doc.ref);
        });

        // --- CHANGE IS HERE ---
        // Instead of deleting the master record, we update it to end "yesterday".
        // This preserves the rule for past events while stopping future ones.
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        // Update the master record to end yesterday and remove any occurrence count.
        batch.update(masterDoc.ref, {
            EndDate: yesterdayStr,
            EndOccurrences: firebase.firestore.FieldValue.delete()
        });
        // --- END OF CHANGE ---

        await batch.commit();

        showNotificationModal(`Future recurring bookings deleted successfully. ${bookingsToDeleteSnapshot.size} bookings were removed.`, 'success');
        manageRecurringModal.classList.add('hidden');
        loadScheduleForSelectedDate();
        // Send a notification that the series was modified (not entirely deleted)
        await sendNotificationEmail('series_deleted', masterData);

    } catch (error) {
        console.error('Error deleting recurring series:', error);
        showNotificationModal(`Error deleting recurring series: ${error.message}`, 'error');
    }
}

function populateDayCheckboxes() {
    // Populate Cycle Day Checkboxes
    const cycleContainer = document.querySelector('#cycle-day-options');
    cycleContainer.innerHTML = ''; // Clear existing content
    const cycleCheckboxContainer = document.createElement('div');
    cycleCheckboxContainer.className = 'day-checkbox-container';
    for (let i = 1; i <= 5; i++) {
        const label = document.createElement('label');
        label.innerHTML = `<input type="checkbox" value="${i}" class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"> Day ${i}`;
        cycleCheckboxContainer.appendChild(label);
    }
    cycleContainer.appendChild(cycleCheckboxContainer);

    // Populate Weekday Checkboxes
    const weekdayContainer = document.querySelector('#weekday-options');
    weekdayContainer.innerHTML = ''; // Clear existing content
    const weekdayCheckboxContainer = document.createElement('div');
    weekdayCheckboxContainer.className = 'day-checkbox-container';
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for (let i = 1; i <= 5; i++) { // Only Monday (1) to Friday (5)
        const label = document.createElement('label');
        label.innerHTML = `<input type="checkbox" value="${i}" class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"> ${weekdays[i]}`;
        weekdayCheckboxContainer.appendChild(label);
    }
    weekdayContainer.appendChild(weekdayCheckboxContainer);
}

function toggleEndCondition() {
    endDateContainer.classList.toggle('hidden', !endTypeOnDate.checked);
    occurrencesContainer.classList.toggle('hidden', !endTypeAfter.checked);
}

function showRecurringChoiceModal(recordId, seriesId, dateString) {
    // --- START OF FIX ---
    // Check for admin permissions at the beginning of the function.
    const user = auth.currentUser;
    if (!user || !ADMIN_EMAILS.includes(user.email.toLowerCase())) {
        // If the user is not an admin, show a notification and stop.
        showNotificationModal("This is a recurring booking. You do not have permission to modify it. Please contact an administrator.", 'info', 'Permission Denied');
        return; 
    }
    // --- END OF FIX ---

    const modal = document.getElementById('recurring-choice-modal');

    if (!dateString) {
        console.error("showRecurringChoiceModal was called without a dateString.");
        showNotificationModal("An error occurred. Could not determine which event to modify.", 'error');
        return;
    }
    
    modal.classList.remove('hidden');
    
    const modalContent = modal.querySelector('.modal-content');
    
    // This is the key change: A generated instance has a composite ID like "MasterID-DateString".
    // A real booking has a standard Firestore ID without a hyphen.
    const isGeneratedInstance = recordId.includes('-');

    if (isGeneratedInstance) {
        // For generated instances that don't exist in the 'bookings' collection yet.
        // The user can delete this one occurrence (which creates an exception) or edit the whole series.
        modalContent.innerHTML = `
            <div class="flex items-center gap-3 mb-5">
                <span class="material-symbols-outlined text-3xl text-blue-600">event_repeat</span>
                <h2 class="text-xl sm:text-2xl font-semibold text-gray-800">Recurring Event Options</h2>
            </div>
            <p class="text-gray-600 mb-6 leading-relaxed mb-3">This is an occurrence of a recurring series. You can delete it or edit the entire series.</p>
            <div class="modal-buttons flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
                <button type="button" id="cancel-choice-btn" class="btn-large order-3 sm:order-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors">Cancel</button>
                <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 order-1 sm:order-2">
                    <button id="delete-one-occurrence-btn" class="btn-large px-5 py-3 font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors">
                        Delete This One
                    </button>
                    <button id="edit-series-btn" class="btn-large px-5 py-3 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                        Edit Entire Series
                    </button>
                </div>
            </div>
        `;
    } else {
        // For actual bookings in the database that are part of a series.
        modalContent.innerHTML = `
            <div class="flex items-center gap-3 mb-5">
                <span class="material-symbols-outlined text-3xl text-blue-600">event_repeat</span>
                <h2 class="text-xl sm:text-2xl font-semibold text-gray-800">Edit Recurring Booking</h2>
            </div>
            <p class="text-gray-600 mb-6 leading-relaxed mb-3">This booking is part of a recurring series. Would you like to edit only this specific event, or modify the entire recurring series?</p>
            <div class="modal-buttons flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
                <button type="button" id="cancel-choice-btn" class="btn-large order-3 sm:order-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors">Cancel</button>
                <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 order-1 sm:order-2">
                    <button type="button" id="edit-one-event-btn" class="btn-large px-5 py-3 font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors">
                        This One Event
                    </button>
                    <button type="button" id="edit-series-btn" class="btn-large px-5 py-3 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                        The Entire Series
                    </button>
                </div>
            </div>
        `;
    }
    
    // Add event listeners based on which modal was displayed
    if (isGeneratedInstance) {
        document.getElementById('delete-one-occurrence-btn').onclick = () => {
            modal.classList.add('hidden');
            deleteRecurringOccurrence(seriesId, dateString);
        };
    } else {
        document.getElementById('edit-one-event-btn').onclick = () => {
            modal.classList.add('hidden');
            showEditModal(recordId, true);
        };
    }
    
    document.getElementById('edit-series-btn').onclick = () => {
        modal.classList.add('hidden');
        showEditRecurringModal(seriesId);
    };
    
    document.getElementById('cancel-choice-btn').onclick = () => {
        modal.classList.add('hidden');
    };
}

async function showEditRecurringModal(masterRecordId) {
    const modal = document.getElementById('edit-recurring-modal');
    const form = document.getElementById('edit-recurring-form');
    form.reset();
    
    try {
        const masterDocRef = db.collection('recurring_bookings').doc(masterRecordId);
        const masterDoc = await masterDocRef.get();
        if (!masterDoc.exists) throw new Error("Could not find the master record for this series.");
        
        const masterRecord = masterDoc.data();
        form.dataset.masterRecordId = masterRecordId;
        form.dataset.seriesId = masterRecord.SeriesID; // Keep seriesId for updating instances
        
        if (masterRecord.EndDate) {
            document.getElementById('edit-end-type-on-date').checked = true;
            document.getElementById('edit-end-date').value = masterRecord.EndDate;
        } else if (masterRecord.EndOccurrences) {
            document.getElementById('edit-end-type-after').checked = true;
            document.getElementById('edit-recurrence-occurrences').value = masterRecord.EndOccurrences;
        }
        toggleEditEndCondition();
        modal.classList.remove('hidden');
        
    } catch (error) {
        showNotificationModal(error.message, 'error');
        console.error(error);
    }
}

async function handleRecurringUpdate(event) {
    event.preventDefault();
    const form = event.target;
    const seriesId = form.dataset.seriesId;
    const masterRecordId = form.dataset.masterRecordId;

    if (!seriesId || !masterRecordId) {
        return showNotificationModal('Cannot save. Missing series or record ID.', 'error');
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    try {
        submitButton.textContent = 'Saving...';
        submitButton.disabled = true;

        const masterDocRef = db.collection('recurring_bookings').doc(masterRecordId);
        const masterDoc = await masterDocRef.get();
        if (!masterDoc.exists) throw new Error("Master record not found.");
        const masterRecord = masterDoc.data();

        const newEndType = document.querySelector('input[name="edit-end-type"]:checked').value;
        let newEndDate, newMaxOccurrences;

        if (newEndType === 'on-date') {
            newEndDate = document.getElementById('edit-end-date').value;
            if (!newEndDate) throw new Error('Please select an end date.');
        } else {
            newMaxOccurrences = parseInt(document.getElementById('edit-recurrence-occurrences').value);
            if (!newMaxOccurrences || newMaxOccurrences < 1) throw new Error('Please enter a valid number of occurrences.');
        }

        const allNewDates = [];
        const selectedDays = masterRecord.RecurrenceDays.split(',').map(d => parseInt(d));
        const finalDate = newEndDate ? new Date(newEndDate + 'T23:59:59') : new Date('2099-12-31');

        for (const [dateString, dayType] of sortedCalendar) {
            const dateParts = dateString.split('/');
            const month = dateParts[0].padStart(2, '0');
            const day = dateParts[1].padStart(2, '0');
            const year = dateParts[2];
            const isoDateString = `${year}-${month}-${day}`;
            const currentDate = new Date(isoDateString + 'T12:00:00');

            if (currentDate > finalDate) break;
            if (newMaxOccurrences && allNewDates.length >= newMaxOccurrences) break;

            let match = false;
            if (dayType.startsWith('Day')) {
                if (masterRecord.RecurrenceType === 'cycle') {
                    const cycleDay = parseInt(dayType.split(' ')[1]);
                    if (selectedDays.includes(cycleDay)) match = true;
                } else {
                    const dayOfWeek = currentDate.getDay();
                    if (selectedDays.includes(dayOfWeek)) match = true;
                }
            }
            if (match) {
                allNewDates.push(isoDateString);
            }
        }

        const todayStr = new Date().toISOString().split('T')[0];
        const existingFutureBookingsSnapshot = await db.collection('bookings')
            .where('SeriesID', '==', seriesId)
            .where('Date', '>=', todayStr)
            .get();

        const existingFutureDates = new Set(existingFutureBookingsSnapshot.docs.map(doc => doc.data().Date));
        const newDatesSet = new Set(allNewDates.filter(d => d >= todayStr));
        const datesToAdd = [...newDatesSet].filter(d => !existingFutureDates.has(d));
        const bookingsToDelete = existingFutureBookingsSnapshot.docs.filter(doc => !newDatesSet.has(doc.data().Date));

        const batch = db.batch();
        bookingsToDelete.forEach(doc => batch.delete(doc.ref));

        for (const date of datesToAdd) {
            const bookingsOnDateSnapshot = await db.collection('bookings').where('Date', '==', date).get();
            if (!bookingsOnDateSnapshot.empty) {
                for (const doc of bookingsOnDateSnapshot.docs) {
                    const existingBooking = doc.data();
                    const newStart = masterRecord.StartPeriod;
                    const newEnd = masterRecord.EndPeriod;
                    const existingStart = existingBooking.StartPeriod;
                    const existingEnd = existingBooking.EndPeriod || existingStart;
                    if (newStart <= existingEnd && newEnd >= existingStart) {
                        throw new Error(`Conflict found on ${date} with an existing booking. Cannot extend series.`);
                    }
                }
            }
            const newBookingRef = db.collection('bookings').doc();
            batch.set(newBookingRef, {
                TeacherName: masterRecord.TeacherName, BookingReason: masterRecord.BookingReason,
                StartPeriod: masterRecord.StartPeriod, EndPeriod: masterRecord.EndPeriod,
                Date: date, SeriesID: seriesId, userEmail: masterRecord.userEmail
            });
        }

        const masterUpdateData = {};
        if (newEndDate) {
            masterUpdateData.EndDate = newEndDate;
            masterUpdateData.EndOccurrences = firebase.firestore.FieldValue.delete();
        } else {
            masterUpdateData.EndOccurrences = newMaxOccurrences;
            masterUpdateData.EndDate = firebase.firestore.FieldValue.delete();
        }
        batch.update(masterDocRef, masterUpdateData);

        await batch.commit();
        showNotificationModal("Recurring series updated successfully.", 'success');
        document.getElementById('edit-recurring-modal').classList.add('hidden');
        loadScheduleForSelectedDate();

    } catch (error) {
        console.error('Error updating recurring series:', error);
        showNotificationModal(error.message, 'error', 'Update Failed');
    } finally {
        submitButton.textContent = 'Save Changes';
        submitButton.disabled = false;
    }
}

async function deleteRecurringOccurrence(seriesId, dateString) {
    // --- START OF FIX ---
    // Manually parse the date string to avoid timezone errors.
    // This is the most reliable way to create a date object.
    const dateParts = dateString.split('-'); // e.g., ["2025", "09", "10"]
    const localDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]); // Month is 0-indexed
    
    const displayDate = localDate.toLocaleDateString('en-US', { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric' 
    });
    // --- END OF FIX ---

    const confirmed = await showConfirmationModal({
        title: 'Delete This Occurrence',
        // Use the reliably formatted displayDate in the message
        message: `Are you sure you want to delete the recurring event on ${displayDate}? This will not affect other occurrences in the series.`,
        icon: 'delete',
        confirmText: 'Yes, Delete This Occurrence',
        cancelText: 'Cancel'
    });
    
    if (!confirmed) return;

    try {
        const recurringSnapshot = await db.collection('recurring_bookings')
            .where('SeriesID', '==', seriesId)
            .limit(1)
            .get();

        if (recurringSnapshot.empty) {
            throw new Error('Recurring series not found.');
        }

        const masterDoc = recurringSnapshot.docs[0];
        const masterData = masterDoc.data();
        
        const currentExceptions = masterData.Exceptions || [];
        
        if (!currentExceptions.includes(dateString)) {
            currentExceptions.push(dateString);
            
            await masterDoc.ref.update({
                Exceptions: currentExceptions
            });
            
            const individualBookingsSnapshot = await db.collection('bookings')
                .where('SeriesID', '==', seriesId)
                .where('Date', '==', dateString)
                .get();
                
            const batch = db.batch();
            individualBookingsSnapshot.forEach(doc => {
                batch.delete(doc.ref);
            });
            
            if (!individualBookingsSnapshot.empty) {
                await batch.commit();
            }
            
            showNotificationModal('Recurring event occurrence deleted successfully.', 'success', 'Occurrence Deleted');
            loadScheduleForSelectedDate(); 
            
            await sendNotificationEmail('deleted', {
                ...masterData,
                Date: dateString
            });
        } else {
            showNotificationModal('This occurrence has already been deleted.', 'info', 'Already Deleted');
        }

    } catch (error) {
        console.error('Error deleting recurring occurrence:', error);
        showNotificationModal(`Error deleting occurrence: ${error.message}`, 'error', 'Delete Failed');
    }
}

// Also make sure the toggleEditEndCondition function is working properly
function toggleEditEndCondition() {
    const onDateChecked = document.getElementById('edit-end-type-on-date')?.checked;
    const endDateContainer = document.getElementById('edit-end-date-container');
    const occurrencesContainer = document.getElementById('edit-occurrences-container');
    
    if (endDateContainer) {
        endDateContainer.classList.toggle('hidden', !onDateChecked);
    }
    if (occurrencesContainer) {
        occurrencesContainer.classList.toggle('hidden', onDateChecked);
    }
}

function showNotificationModal(message, type, title) {
    notificationMessage.textContent = message;

    const modalContent = notificationModal.querySelector('.modal-content');
    modalContent.classList.remove('border-t-4', 'border-green-500', 'border-red-500', 'border-blue-500');

    switch (type) {
        case 'success':
            notificationTitle.textContent = title || 'Success';
            notificationIcon.textContent = 'check_circle';
            notificationIcon.className = 'material-symbols-outlined text-5xl mb-4 text-green-500';
            notificationOkBtn.className = 'btn-large w-full sm:w-auto px-8 py-3 font-medium text-white rounded-md transition-colors bg-green-600 hover:bg-green-700';
            modalContent.classList.add('border-t-4', 'border-green-500');
            break;
        case 'error':
            notificationTitle.textContent = title || 'Error';
            notificationIcon.textContent = 'error';
            notificationIcon.className = 'material-symbols-outlined text-5xl mb-4 text-red-500';
            notificationOkBtn.className = 'btn-large w-full sm:w-auto px-8 py-3 font-medium text-white rounded-md transition-colors bg-red-600 hover:bg-red-700';
            modalContent.classList.add('border-t-4', 'border-red-500');
            break;
        default: // 'info'
            notificationTitle.textContent = title || 'Notice';
            notificationIcon.textContent = 'info';
            notificationIcon.className = 'material-symbols-outlined text-5xl mb-4 text-blue-500';
            notificationOkBtn.className = 'btn-large w-full sm:w-auto px-8 py-3 font-medium text-white rounded-md transition-colors bg-blue-600 hover:bg-blue-700';
            modalContent.classList.add('border-t-4', 'border-blue-500');
            break;
    }
    notificationModal.classList.remove('hidden');
    notificationModal.classList.add('flex');
}

/**
 * Displays a custom confirmation modal and returns a promise that resolves with the user's choice.
 * @param {object} options
 * @param {string} options.title The title of the confirmation box.
 * @param {string} options.message The main message/question.
 * @param {string} [options.icon='delete_forever'] The Material Symbols icon name.
 * @param {string} [options.confirmText='Yes, Continue'] The text for the confirmation button.
 * @param {string} [options.cancelText='Cancel'] The text for the cancel button.
 * @returns {Promise<boolean>} A promise that resolves to true if the user confirms, false otherwise.
 */
function showConfirmationModal({ title, message, icon = 'delete_forever', confirmText = 'Yes, Continue', cancelText = 'Cancel' }) {
    return new Promise(resolve => {
        confirmationTitle.textContent = title;
        confirmationMessage.textContent = message;
        confirmationIcon.textContent = icon;
        confirmYesBtn.textContent = confirmText;
        confirmNoBtn.textContent = cancelText;

        confirmationModal.classList.remove('hidden');
        confirmationModal.classList.add('flex');

        const handleYes = () => {
            confirmationModal.classList.add('hidden');
            resolve(true);
        };

        const handleNo = () => {
            confirmationModal.classList.add('hidden');
            resolve(false);
        };

        // Use { once: true } to automatically remove the event listeners after they're clicked
        confirmYesBtn.addEventListener('click', handleYes, { once: true });
        confirmNoBtn.addEventListener('click', handleNo, { once: true });
    });
}

