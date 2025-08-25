// --- Firebase Configuration ---
const firebaseConfig = {
  apiKey: "AIzaSyBci7oy9vzE-T2_FDD4cCuNUQjuEK0i2no",
  authDomain: "jmps-library-booking.firebaseapp.com",
  projectId: "jmps-library-booking",
  storageBucket: "jmps-library-booking.firebasestorage.app",
  messagingSenderId: "797656215545",
  appId: "1:797656215545:web:ac92e5f559dcd42b151728"
};

// --- App Configuration ---
const ALLOWED_DOMAIN = "ddsb.ca"; 
const ADMIN_EMAILS = ["taylchri4039@ddsb.ca"];
const AIRTABLE_BASE_ID = 'appCQATw4gkWsJSMV';
const AIRTABLE_TABLE_NAME = 'Bookings';
const AIRTABLE_BANNER_TABLE_NAME = 'AlertBanner';
const AIRTABLE_RECURRING_TABLE_NAME = 'RecurringBookings';
const AIRTABLE_API_KEY = 'patygW0NdWqSupAbh.cfb560a3f04ebe906e3275fc9d5d030ed3937ea5b8eca8ec7109d3380a82b7ab';

const PERIOD_TIMES = ["8:05 - 8:35", "8:35 - 9:05", "9:05 - 9:35", "9:50 - 10:20", "10:20 - 10:50", "11:50 - 12:20", "12:20 - 12:50", "12:50 - 1:20", "1:35 - 2:05", "2:05 - 2:35"];
const BOOKING_REASONS = ["Book Exchange", "Partnering", "Presentation", "Closed", "Other"];
const REASON_ICONS = { "Book Exchange": "book_2", "Partnering": "group", "Presentation": "co_present", "Closed": "event_busy", "Other": "calendar_check" };
const SCHOOL_CALENDAR = { "8/29/2025": "PA Day", "9/1/2025": "Holiday", "9/2/2025": "Day 1", "9/3/2025": "Day 2", "9/4/2025": "Day 3", "9/5/2025": "Day 4", "9/8/2025": "Day 5", "9/9/2025": "Day 1", "9/10/2025": "Day 2", "9/11/2025": "Day 3", "9/12/2025": "Day 4", "9/15/2025": "Day 5", "9/16/2025": "Day 1", "9/17/2025": "Day 2", "9/18/2025": "Day 3", "9/19/2025": "Day 4", "9/22/2025": "Day 5", "9/23/2025": "Day 1", "9/24/2025": "Day 2", "9/25/2025": "Day 3", "9/26/2025": "Day 4", "9/29/2025": "Day 5", "9/30/2025": "Day 1", "10/1/2025": "Day 2", "10/2/2025": "Day 3", "10/3/2025": "Day 4", "10/6/2025": "Day 5", "10/7/2025": "Day 1", "10/8/2025": "Day 2", "10/9/2025": "Day 3", "10/10/2025": "Day 4", "10/13/2025": "Holiday", "10/14/2025": "Day 5", "10/15/2025": "Day 1", "10/16/2025": "Day 2", "10/17/2025": "Day 3", "10/20/2025": "Day 4", "10/21/2025": "Day 5", "10/22/2025": "Day 1", "10/23/2025": "Day 2", "10/24/2025": "PA Day", "10/27/2025": "Day 3", "10/28/2025": "Day 4", "10/29/2025": "Day 5", "10/30/2025": "Day 1", "10/31/2025": "Day 2", "11/3/2025": "Day 3", "11/4/2025": "Day 4", "11/5/2025": "Day 5", "11/6/2025": "Day 1", "11/7/2025": "Day 2", "11/10/2025": "Day 3", "11/11/2025": "Day 4", "11/12/2025": "Day 5", "11/13/2025": "Day 1", "11/14/2025": "PA Day", "11/17/2025": "Day 2", "11/18/2025": "Day 3", "11/19/2025": "Day 4", "11/20/2025": "Day 5", "11/21/2025": "Day 1", "11/24/2025": "Day 2", "11/25/2025": "Day 3", "11/26/2025": "Day 4", "11/27/2025": "Day 5", "11/28/2025": "Day 1", "12/1/2025": "Day 2", "12/2/2025": "Day 3", "12/3/2025": "Day 4", "12/4/2025": "Day 5", "12/5/2025": "Day 1", "12/8/2025": "Day 2", "12/9/2025": "Day 3", "12/10/2025": "Day 4", "12/11/2025": "Day 5", "12/12/2025": "Day 1", "12/15/2025": "Day 2", "12/16/2025": "Day 3", "12/17/2025": "Day 4", "12/18/2025": "Day 5", "12/19/2025": "Day 1", "12/22/2025": "Holiday", "12/23/2025": "Holiday", "12/24/2025": "Holiday", "12/25/2025": "Holiday", "12/26/2025": "Holiday", "12/29/2025": "Holiday", "12/30/2025": "Holiday", "12/31/2025": "Holiday", "1/1/2026": "Holiday", "1/2/2026": "Holiday", "1/5/2026": "Day 2", "1/6/2026": "Day 3", "1/7/2026": "Day 4", "1/8/2026": "Day 5", "1/9/2026": "Day 1", "1/12/2026": "Day 2", "1/13/2026": "Day 3", "1/14/2026": "Day 4", "1/15/2026": "Day 5", "1/16/2026": "Day 1", "1/19/2026": "Day 2", "1/20/2026": "Day 3", "1/21/2026": "Day 4", "1/22/2026": "Day 5", "1/23/2026": "Day 1", "1/26/2026": "Day 2", "1/27/2026": "Day 3", "1/28/2026": "Day 4", "1/29/2026": "Day 5", "1/30/2026": "PA Day", "2/2/2026": "Day 1", "2/3/2026": "Day 2", "2/4/2026": "Day 3", "2/5/2026": "Day 4", "2/6/2026": "Day 5", "2/9/2026": "Day 1", "2/10/2026": "Day 2", "2/11/2026": "Day 3", "2/12/2026": "Day 4", "2/13/2026": "Day 5", "2/16/2026": "Holiday", "2/17/2026": "Day 1", "2/18/2026": "Day 2", "2/19/2026": "Day 3", "2/20/2026": "Day 4", "2/23/2026": "Day 5", "2/24/2026": "Day 1", "2/25/2026": "Day 2", "2/26/2026": "Day 3", "2/27/2026": "Day 4", "3/2/2026": "Day 5", "3/3/2026": "Day 1", "3/4/2026": "Day 2", "3/5/2026": "Day 3", "3/6/2026": "Day 4", "3/9/2026": "Day 5", "3/10/2026": "Day 1", "3/11/2026": "Day 2", "3/12/2026": "Day 3", "3/13/2026": "Holiday", "3/16/2026": "Holiday", "3/17/2026": "Holiday", "3/18/2026": "Holiday", "3/19/2026": "Holiday", "3/20/2026": "Holiday", "3/23/2026": "Day 4", "3/24/2026": "Day 5", "3/25/2026": "Day 1", "3/26/2026": "Day 2", "3/27/2026": "Day 3", "3/30/2026": "Day 4", "3/31/2026": "Day 5", "4/1/2026": "Day 1", "4/2/2026": "Day 2", "4/3/2026": "Holiday", "4/6/2026": "Holiday", "4/7/2026": "Day 3", "4/8/2026": "Day 4", "4/9/2026": "Day 5", "4/10/2026": "Day 1", "4/13/2026": "Day 2", "4/14/2026": "Day 3", "4/15/2026": "Day 4", "4/16/2026": "Day 5", "4/17/2026": "PA Day", "4/20/2026": "Day 1", "4/21/2026": "Day 2", "4/22/2026": "Day 3", "4/23/2026": "Day 4", "4/24/2026": "Day 5", "4/27/2026": "Day 1", "4/28/2026": "Day 2", "4/29/2026": "Day 3", "4/30/2026": "Day 4", "5/1/2026": "Day 5", "5/4/2026": "Day 1", "5/5/2026": "Day 2", "5/6/2026": "Day 3", "5/7/2026": "Day 4", "5/8/2026": "Day 5", "5/11/2026": "Day 1", "5/12/2026": "Day 2", "5/13/2026": "Day 3", "5/14/2026": "Day 4", "5/15/2026": "Day 5", "5/18/2026": "Holiday", "5/19/2026": "Day 1", "5/20/2026": "Day 2", "5/21/2026": "Day 3", "5/22/2026": "Day 4", "5/25/2026": "Day 5", "5/26/2026": "Day 1", "5/27/2026": "Day 2", "5/28/2026": "Day 3", "5/29/2026": "Day 4", "6/1/2026": "Day 5", "6/2/2026": "Day 1", "6/3/2026": "Day 2", "6/4/2026": "Day 3", "6/5/2026": "Day 4", "6/8/2026": "PA Day", "6/9/2026": "Day 5", "6/10/2026": "Day 1", "6/11/2026": "Day 2", "6/12/2026": "Day 3", "6/15/2026": "Day 4", "6/16/2026": "Day 5", "6/17/2026": "Day 1", "6/18/2026": "Day 2", "6/19/2026": "Day 3", "6/22/2026": "Day 4", "6/23/2026": "Day 5", "6/24/2026": "Day 1", "6/25/2026": "Day 2", "6/26/2026": "PA Day"
};

const sortedCalendar = Object.entries(SCHOOL_CALENDAR).sort((a, b) => new Date(a[0]) - new Date(b[0]));
const schoolDays = sortedCalendar.filter(entry => entry[1].startsWith('Day'));
const AIRTABLE_API_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;
const AIRTABLE_BANNER_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_BANNER_TABLE_NAME}`;
const AIRTABLE_RECURRING_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_RECURRING_TABLE_NAME}`;

// --- Element References ---
const loginBtn = document.getElementById('login-btn'), logoutBtn = document.getElementById('logout-btn'), userInfo = document.getElementById('user-info'), userName = document.getElementById('user-name'), appContent = document.getElementById('app-content'), gridContainer = document.getElementById('schedule-grid'), infoBanner = document.getElementById('info-banner'), datePicker = document.getElementById('date-picker'), prevWeekBtn = document.getElementById('prev-week-btn'), nextWeekBtn = document.getElementById('next-week-btn'), todayBtn = document.getElementById('today-btn');
const bookingModal = document.getElementById('booking-modal'), bookingForm = document.getElementById('booking-form'), modalTitle = document.getElementById('modal-title'), cancelBookingBtn = document.getElementById('cancel-booking-btn'), deleteBookingBtn = document.getElementById('delete-booking-btn'), otherReasonInput = document.getElementById('other-reason'), reasonOptionsContainer = document.getElementById('booking-reason-options');
const alertBanner = document.getElementById('alert-banner'), adminBtn = document.getElementById('admin-btn'), adminModal = document.getElementById('admin-modal'), adminForm = document.getElementById('admin-form'), cancelAdminBtn = document.getElementById('cancel-admin-btn'), deleteBannerBtn = document.getElementById('delete-banner-btn');
const noCurrentDayMobile = document.getElementById('no-current-day-mobile'), mobileCurrentDayInfo = document.getElementById('mobile-current-day-info'), mobilePrevDay = document.getElementById('mobile-prev-day'), mobileNextDay = document.getElementById('mobile-next-day'), mobileDayInfo = document.getElementById('mobile-day-info');
const cancelDeleteBtn = document.getElementById('cancel-delete-btn'), confirmDeleteBtn = document.getElementById('confirm-delete-btn');
const recurringSection = document.getElementById('recurring-section'), makeRecurringCheckbox = document.getElementById('make-recurring'), recurringOptions = document.getElementById('recurring-options'), recurrenceType = document.getElementById('recurrence-type'), cycleDayOptions = document.getElementById('cycle-day-options'), weekdayOptions = document.getElementById('weekday-options'), recurrenceEndDate = document.getElementById('end-date'), manageRecurringBtn = document.getElementById('manage-recurring-btn'), manageRecurringModal = document.getElementById('manage-recurring-modal'), closeManageRecurringBtn = document.getElementById('close-manage-recurring-btn'), recurringList = document.getElementById('recurring-list'), endTypeOnDate = document.getElementById('end-type-on-date'), endTypeAfter = document.getElementById('end-type-after'), endDateContainer = document.getElementById('end-date-container'), occurrencesContainer = document.getElementById('occurrences-container'), recurrenceOccurrences = document.getElementById('recurrence-occurrences');

let currentWeekDates = [], appInitialized = false, activeBannerRecordId = null;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// --- Authentication & Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    loginBtn.addEventListener('click', () => auth.signInWithPopup(provider));
    logoutBtn.addEventListener('click', () => auth.signOut());
    auth.onAuthStateChanged(user => {
        if (user) {
            if (user.email.endsWith('@' + ALLOWED_DOMAIN)) {
                loginBtn.classList.add('hidden');
                appContent.classList.remove('hidden');
                userInfo.classList.remove('hidden');
                userName.textContent = user.displayName;
                mobileDayInfo.classList.remove('hidden');
                if (ADMIN_EMAILS.includes(user.email.toLowerCase())) {
                    adminBtn.classList.remove('hidden');
                }
                if (!appInitialized) {
                    initializeApp();
                    appInitialized = true;
                }
            } else {
                alert("Access denied. You must use a @" + ALLOWED_DOMAIN + " Google account.");
                auth.signOut();
            }
        } else {
            loginBtn.classList.remove('hidden');
            appContent.classList.add('hidden');
            userInfo.classList.add('hidden');
            userName.textContent = '';
            adminBtn.classList.add('hidden');
            mobileDayInfo.classList.add('hidden');
            appInitialized = false;
        }
    });
});

function initializeApp() {
    drawGridStructure();
    populateReasonOptions();
    populateDayCheckboxes();
    fetchAndDisplayBanner();
    
    datePicker.value = new Date().toISOString().split('T')[0];
    loadScheduleForSelectedDate();
    
    datePicker.addEventListener('change', loadScheduleForSelectedDate);
    todayBtn.addEventListener('click', jumpToToday);
    prevWeekBtn.addEventListener('click', () => navigateWeeks('prev'));
    nextWeekBtn.addEventListener('click', () => navigateWeeks('next'));
    mobilePrevDay.addEventListener('click', () => navigateDays('prev'));
    mobileNextDay.addEventListener('click', () => navigateDays('next'));
    
    bookingModal.addEventListener('click', (e) => { if (e.target === bookingModal) hideBookingModal(); });
    cancelBookingBtn.addEventListener('click', hideBookingModal);
    bookingForm.addEventListener('submit', handleBookingSubmit);
    
    adminBtn.addEventListener('click', openAdminPanel);
    adminModal.addEventListener('click', (e) => { if (e.target === adminModal) adminModal.classList.add('hidden'); });
    cancelAdminBtn.addEventListener('click', () => adminModal.classList.add('hidden'));
    adminForm.addEventListener('submit', handleBannerSubmit);
    deleteBannerBtn.addEventListener('click', deleteBanner);
    
    manageRecurringBtn.addEventListener('click', openManageRecurringPanel);
    closeManageRecurringBtn.addEventListener('click', () => manageRecurringModal.classList.add('hidden'));
    makeRecurringCheckbox.addEventListener('change', toggleRecurringOptions);
    recurrenceType.addEventListener('change', toggleRecurrenceDayPickers);
    endTypeOnDate.addEventListener('change', toggleEndCondition);
    endTypeAfter.addEventListener('change', toggleEndCondition);

    deleteBookingBtn.addEventListener('click', handleDeleteFromModal);
    cancelDeleteBtn.addEventListener('click', hideConfirmDeleteModal);
    confirmDeleteBtn.addEventListener('click', executeDelete);
}

// --- Admin Banner Logic ---
async function fetchAndDisplayBanner() {
    try {
        const response = await fetch(AIRTABLE_BANNER_URL, { headers: { 'Authorization': `Bearer ${AIRTABLE_API_KEY}` } });
        if (!response.ok) throw new Error("Could not fetch banner.");
        const data = await response.json();
        
        // Check if there are any records to display.
        if (data.records.length > 0) {
            const bannerRecord = data.records[0];
            activeBannerRecordId = bannerRecord.id;
            const { Message, Expiry } = bannerRecord.fields;
            const expiryDate = Expiry ? new Date(Expiry) : null;
            
            // Check for both expiry and a non-empty message.
            if ((expiryDate && expiryDate < new Date()) || !Message || Message.trim() === '') {
                // If expired or empty, hide the banner.
                alertBanner.classList.add('hidden');
            } else {
                // Otherwise, display the banner with the message.
                alertBanner.textContent = Message;
                alertBanner.classList.remove('hidden');
            }
        } else {
            // If no records, hide the banner.
            activeBannerRecordId = null;
            alertBanner.classList.add('hidden');
        }
    } catch (error) { 
        console.error("Banner fetch error:", error);
    }
}

async function openAdminPanel() {
    adminForm.reset();
    if (activeBannerRecordId) {
        const response = await fetch(`${AIRTABLE_BANNER_URL}/${activeBannerRecordId}`, { headers: { 'Authorization': `Bearer ${AIRTABLE_API_KEY}` } });
        const record = await response.json();
        document.getElementById('banner-message').value = record.fields.Message || '';
        if (record.fields.Expiry) {
            const localDate = new Date(record.fields.Expiry);
            localDate.setMinutes(localDate.getMinutes() - localDate.getTimezoneOffset());
            document.getElementById('banner-expiry').value = localDate.toISOString().slice(0, 16);
        }
    }
    adminModal.classList.remove('hidden');
}

async function handleBannerSubmit(event) {
    event.preventDefault();
    const message = document.getElementById('banner-message').value;
    const expiry = document.getElementById('banner-expiry').value;
    const fields = { "Message": message, "Expiry": expiry ? new Date(expiry).toISOString() : null };
    const method = activeBannerRecordId ? 'PATCH' : 'POST';
    const url = activeBannerRecordId ? `${AIRTABLE_BANNER_URL}/${activeBannerRecordId}` : AIRTABLE_BANNER_URL;
    try {
        const response = await fetch(url, {
            method, headers: { 'Authorization': `Bearer ${AIRTABLE_API_KEY}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ fields })
        });
        if (!response.ok) { const err = await response.json(); throw new Error(err.error.message); }
        adminModal.classList.add('hidden');
        fetchAndDisplayBanner();
    } catch (error) { alert(`Error saving banner: ${error.message}`); }
}

async function deleteBanner() {
    if (!activeBannerRecordId) { alert("No active banner to delete."); return; }
    if (!confirm("Are you sure you want to delete the current alert banner?")) return;
    try {
        const response = await fetch(`${AIRTABLE_BANNER_URL}/${activeBannerRecordId}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${AIRTABLE_API_KEY}` } });
        if (!response.ok) { const err = await response.json(); throw new Error(err.error.message); }
        adminModal.classList.add('hidden');
        fetchAndDisplayBanner();
    } catch (error) { alert(`Error deleting banner: ${error.message}`); }
}

// --- Modal and Booking Logic ---

function populateReasonOptions() {
    reasonOptionsContainer.innerHTML = ''; // Clear previous options
    BOOKING_REASONS.forEach(reason => {
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
    document.querySelector('input[name="bookingReason"][value="Book Exchange"]').checked = true;
    document.getElementById('start-period-container').classList.add('hidden');
    deleteBookingBtn.classList.add('hidden');

    const displayDate = new Date(dateString + 'T00:00:00').toLocaleDateString('en-US', {
        dateStyle: 'full'
    });
    modalTitle.innerHTML = `
        <span class="material-symbols-outlined align-middle text-blue-600">calendar_month</span>
        ${displayDate}<br>
        <span class="material-symbols-outlined align-middle text-blue-600">schedule</span>
        Starting Period ${startPeriod}
        `;
    
    // Logic to populate the End Period dropdown
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
    
    // --- NEW LOGIC for showing recurring section ---
    if (ADMIN_EMAILS.includes(auth.currentUser.email.toLowerCase())) {
        recurringSection.classList.remove('hidden');
        makeRecurringCheckbox.checked = false; // Ensure it's unchecked by default
        recurringOptions.classList.add('hidden'); // Hide the options initially
    } else {
        recurringSection.classList.add('hidden');
    }

    bookingModal.classList.remove('hidden');
    bookingModal.classList.add('flex');
    document.getElementById('teacher-name').focus();
}

async function showEditModal(recordId) {
    try {
        // Step 1: Fetch the specific record we are editing
        let response = await fetch(`${AIRTABLE_API_URL}/${recordId}`, { 
            headers: { 'Authorization': `Bearer ${AIRTABLE_API_KEY}` } 
        });
        if (!response.ok) throw new Error('Failed to fetch booking details.');
        const recordToEdit = await response.json();
        
        const { 
            Date: recordDateStr, 
            StartPeriod: currentStart, 
            EndPeriod: currentEnd = currentStart,
            TeacherName: teacherName = '',
            BookingReason: bookingReason = 'Book Exchange'
        } = recordToEdit.fields;

        // Step 2: Fetch ALL records for that same day to check for conflicts
        const filterFormula = `IS_SAME({Date}, '${recordDateStr}', 'day')`;
        const fetchURL = `${AIRTABLE_API_URL}?filterByFormula=${encodeURIComponent(filterFormula)}`;
        response = await fetch(fetchURL, { 
            headers: { 'Authorization': `Bearer ${AIRTABLE_API_KEY}` } 
        });
        if (!response.ok) throw new Error('Failed to fetch day\'s bookings.');
        const dayBookings = await response.json();

        // Step 3: Create an availability map for all 10 periods
        const periodAvailability = {};
        for (let p = 1; p <= 10; p++) periodAvailability[p] = true;

        dayBookings.records.forEach(booking => {
            if (booking.id === recordId) return; // Skip the booking we are currently editing
            const start = booking.fields.StartPeriod;
            const end = booking.fields.EndPeriod || start;
            for (let p = start; p <= end; p++) {
                periodAvailability[p] = false;
            }
        });

        // Step 4: Find the boundaries of the continuous available block around our booking
        let earliestStart = currentStart;
        while (earliestStart > 1 && periodAvailability[earliestStart - 1]) {
            earliestStart--;
        }
        let latestEnd = currentEnd;
        while (latestEnd < 10 && periodAvailability[latestEnd + 1]) {
            latestEnd++;
        }

        // Step 5: Set up the modal
        bookingForm.reset();
        bookingForm.dataset.recordId = recordId;
        
        modalTitle.innerHTML = `<span class="material-symbols-outlined align-middle text-blue-600" style="font-size: 1.2em;">edit_calendar</span> Edit Booking`;
        bookingForm.querySelector('.book').textContent = 'Update Booking';
        deleteBookingBtn.classList.remove('hidden');
        document.getElementById('start-period-container').classList.remove('hidden');
        
        // Populate form fields
        document.getElementById('teacher-name').value = teacherName;
        
        // Handle booking reason selection
        const reasonRadio = document.querySelector(`input[name="bookingReason"][value="${bookingReason}"]`);
        if (reasonRadio) {
            reasonRadio.checked = true;
            if (bookingReason === 'Other') {
                otherReasonInput.style.display = 'block';
                otherReasonInput.required = true;
                otherReasonInput.value = bookingReason;
            }
        } else {
            // If the reason doesn't match any predefined option, select "Other"
            const otherRadio = document.querySelector(`input[name="bookingReason"][value="Other"]`);
            if (otherRadio) {
                otherRadio.checked = true;
                otherReasonInput.style.display = 'block';
                otherReasonInput.required = true;
                otherReasonInput.value = bookingReason;
            }
        }

        const startPeriodSelect = document.getElementById('start-period');
        
        // Populate Start Period dropdown
        startPeriodSelect.innerHTML = '';
        for (let p = earliestStart; p <= latestEnd; p++) {
            const option = document.createElement('option');
            option.value = p;
            option.textContent = `Period ${p} (${PERIOD_TIMES[p-1]})`;
            startPeriodSelect.appendChild(option);
        }
        startPeriodSelect.value = currentStart;

        // Populate End Period dropdown based on the start
        updateEndPeriodOptionsForEdit(currentStart, latestEnd);
        document.getElementById('end-period').value = currentEnd;

        // Update End Period options when Start Period changes
        startPeriodSelect.onchange = () => {
            updateEndPeriodOptionsForEdit(parseInt(startPeriodSelect.value), latestEnd);
        };
        
        bookingModal.classList.remove('hidden');
        bookingModal.classList.add('flex');
        document.getElementById('teacher-name').focus();
        
    } catch (error) {
        alert('Could not load booking for editing. The schedule might have changed.');
        console.error(error);
        loadScheduleForSelectedDate(); // Refresh schedule on error
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

    for (let p = selectedStart; p <= 10; p++) {
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

    // --- NEW LOGIC to route between single and recurring ---
    if (makeRecurringCheckbox.checked && !isEditing) {
        // Handle creating a NEW recurring booking
        const startPeriod = parseInt(bookingForm.dataset.startPeriod);
        const endPeriod = parseInt(document.getElementById('end-period').value);
        const fields = {
            TeacherName: teacherName,
            BookingReason: bookingReason,
            Date: bookingForm.dataset.date,
            StartPeriod: startPeriod,
            EndPeriod: endPeriod
        };
        handleRecurringBooking(fields);
        return; // Stop execution here for recurring bookings
    }

    // --- Existing logic for single bookings (create or update) ---
    const fields = { "TeacherName": teacherName, "BookingReason": bookingReason };
    
    if (isEditing) {
        const startPeriod = document.getElementById('start-period').value;
        const endPeriod = document.getElementById('end-period').value;
        if (!startPeriod || !endPeriod) { alert('Please select a start and end period.'); return; }
        fields.StartPeriod = parseInt(startPeriod);
        fields.EndPeriod = parseInt(endPeriod);
    } else {
        const endPeriod = document.getElementById('end-period').value;
        if (!endPeriod) { alert('Please select an end period.'); return; }
        fields.Date = bookingForm.dataset.date;
        fields.StartPeriod = parseInt(bookingForm.dataset.startPeriod);
        fields.EndPeriod = parseInt(endPeriod);
    }

    const url = isEditing ? `${AIRTABLE_API_URL}/${recordId}` : AIRTABLE_API_URL;
    const method = isEditing ? 'PATCH' : 'POST';

    try {
        const response = await fetch(url, {
            method: method,
            headers: { 'Authorization': `Bearer ${AIRTABLE_API_KEY}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ fields })
        });
        if (!response.ok) { const err = await response.json(); throw new Error(err.error.message); }
        hideBookingModal();
        loadScheduleForSelectedDate();
    } catch (error) {
        alert(`Could not save booking: ${error.message}`);
        console.error("Booking/editing failed:", error);
    }
}

async function cancelBooking(recordId) {
    try {
        await fetch(`${AIRTABLE_API_URL}/${recordId}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${AIRTABLE_API_KEY}` }
        });
        loadScheduleForSelectedDate(); // Refresh the grid
    } catch (error) {
        alert('Could not cancel booking.');
        console.error(error);
    }
}

// --- Grid and Date Logic ---

async function fetchAndPopulateBookings() {
    try {
        const dateFilters = currentWeekDates.filter(d => d).map(d => `IS_SAME({Date}, '${d}', 'day')`);
        let allBookingsForWeek = [];

        if (dateFilters.length > 0) {
            const filterFormula = `OR(${dateFilters.join(',')})`;
            const fetchURL = `${AIRTABLE_API_URL}?filterByFormula=${encodeURIComponent(filterFormula)}`;
            
            // We only need to fetch from the main Bookings table.
            const response = await fetch(fetchURL, { headers: { 'Authorization': `Bearer ${AIRTABLE_API_KEY}` } });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || 'Could not fetch bookings.');
            }
            const data = await response.json();
            allBookingsForWeek = data.records || [];
        }

        // THIS IS THE FIX:
        // Loop through the fetched bookings and add the 'isRecurring' flag if they have a SeriesID.
        allBookingsForWeek.forEach(booking => {
            if (booking.fields.SeriesID) {
                booking.isRecurring = true;
            }
        });

        // Now, reset the grid and render using this corrected data.
        resetGridToAvailable(allBookingsForWeek);
        renderBookings(allBookingsForWeek);

    } catch (error) {
        console.error("Error fetching and populating bookings:", error);
        // Fallback to a clean grid on error.
        resetGridToAvailable(); 
    }
}

// REPLACE your existing renderBookings function with this one
function renderBookings(bookings) {
    bookings.forEach(record => {
        const startPeriod = record.fields.StartPeriod;
        const endPeriod = record.fields.EndPeriod || startPeriod;
        const bookingReason = record.fields.BookingReason;
        const recordDate = new Date(record.fields.Date + 'T12:00:00');
        
        const columnIndex = currentWeekDates.findIndex(d => new Date(d + 'T12:00:00').toLocaleDateString() === recordDate.toLocaleDateString());
        if (columnIndex === -1) return;
        
        const columnNumber = columnIndex + 1;

        for (let p = startPeriod; p <= endPeriod; p++) {
            const cellId = `D${columnNumber}-P${p}`;
            const cell = document.getElementById(cellId);
            if (!cell) continue;

            const isFirstCell = (p === startPeriod);
            
            // The HTML now uses data attributes and classes instead of inline onclick
            const actionsHTML = record.isRecurring 
                ? `<div class="booking-actions absolute top-1 right-1 z-10">
                       <span class="material-symbols-outlined recurring-icon text-gray-500 cursor-pointer" data-record-id="${record.id}" style="font-size: 20px;" title="Manage Recurring Booking">event_repeat</span>
                   </div>`
                : `<div class="booking-actions absolute top-1 right-1 flex items-center gap-1 sm:gap-2 z-10">
                       <span class="material-symbols-outlined edit-btn text-gray-600 hover:text-gray-900 cursor-pointer" data-record-id="${record.id}" style="font-size: 20px;" title="Edit Booking">edit</span>
                       <span class="material-symbols-outlined cancel-btn text-gray-600 hover:text-red-600 cursor-pointer" data-record-id="${record.id}" style="font-size: 20px;" title="Cancel Booking">delete</span>
                   </div>`;

            if (bookingReason === "Closed") {
                cell.className = `grid-cell D${columnNumber} p-1 rounded-lg sm:p-2 text-xs relative bg-red-100 text-red-800`;
                if (isFirstCell) {
                    const closedIcon = REASON_ICONS["Closed"] || 'do_not_disturb';
                    cell.innerHTML = `${actionsHTML} <div class="flex flex-col items-center justify-center h-full font-semibold uppercase tracking-tight sm:text-base gap-1"><span class="material-symbols-outlined" style="font-size: 24px;">${closedIcon}</span><span class="text-[12px] leading-none">Closed</span></div>`;
                } else {
                    cell.innerHTML = `<div class="flex items-center justify-center h-full"><span class="material-symbols-outlined text-red-300" style="font-size: 24px;">arrow_cool_down</span></div>`;
                }
            } else {
                cell.className = `grid-cell D${columnNumber} p-1 rounded-lg sm:p-2 text-xs relative bg-blue-100 text-blue-800`;
                if (isFirstCell) {
                    let iconName = REASON_ICONS[bookingReason] || REASON_ICONS["Other"];
                    cell.innerHTML = `${actionsHTML} <div class="pt-6 sm:pt-5"><strong class="font-semibold block text-xs tracking-tighter sm:text-sm leading-tight">${record.fields.TeacherName}</strong><small class="flex items-center gap-1.5 text-blue-700 text-xs block mt-1 leading-tight"><span class="material-symbols-outlined" style="font-size: 16px;">${iconName}</span><span>${bookingReason || ''}</span></small></div>`;
                } else {
                    cell.innerHTML = `<div class="flex items-center justify-center h-full"><span class="material-symbols-outlined text-blue-300" style="font-size: 24px;">arrow_cool_down</span></div>`;
                }
            }
        }
    });

    // Add event listeners AFTER the grid is fully drawn
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation(); // Stop the click from bubbling to the cell
            showEditModal(event.currentTarget.dataset.recordId);
        });
    });
    document.querySelectorAll('.cancel-btn').forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation();
            showConfirmDeleteModal(event.currentTarget.dataset.recordId);
        });
    });
    document.querySelectorAll('.recurring-icon').forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation();
            handleRecurringIconClick(event.currentTarget.dataset.recordId);
        });
    });
}

function generateRecurringInstancesForWeek(rules, weekDates) {
    const instances = [];
    const weekDateStrings = new Set(weekDates.map(d => new Date(d + 'T12:00:00').toLocaleDateString('en-US', {month: 'numeric', day: 'numeric', year: 'numeric'})));

    rules.forEach(rule => {
        // For each rule, generate the definitive list of ALL valid dates for the entire year
        const seriesDates = new Set();
        let occurrencesFound = 0;
        const { EndDate, EndOccurrences, RecurrenceType, RecurrenceDays } = rule.fields;
        const selectedDays = (RecurrenceDays || "").split(',').map(d => parseInt(d));
        const finalDate = EndDate ? new Date(EndDate + 'T23:59:59') : null;

        // Iterate through the entire school calendar from the start
        for (const [dateString, dayType] of sortedCalendar) {
            const currentDate = new Date(dateString + 'T12:00:00');

            // Stop if we've passed the rule's end date or found enough occurrences
            if (finalDate && currentDate > finalDate) break;
            if (EndOccurrences && occurrencesFound >= EndOccurrences) break;

            if (dayType && dayType.startsWith('Day')) {
                let match = false;
                if (RecurrenceType === 'cycle') {
                    const cycleDay = parseInt(dayType.split(' ')[1]);
                    if (selectedDays.includes(cycleDay)) match = true;
                } else if (RecurrenceType === 'weekday') {
                    const dayOfWeek = currentDate.getDay(); // Sunday=0, Monday=1
                    if (selectedDays.includes(dayOfWeek)) match = true;
                }

                if (match) {
                    seriesDates.add(dateString); // Add the valid date string (e.g., "9/2/2025")
                    occurrencesFound++;
                }
            }
        }

        // Now, check if any of the dates in the current week are in our generated series
        weekDateStrings.forEach(dateStr => {
            if (seriesDates.has(dateStr)) {
                // This date is part of the current week AND a valid recurring date. Create an instance.
                instances.push({
                    id: rule.id,
                    isRecurring: true,
                    fields: {
                        Date: new Date(dateStr).toISOString().split('T')[0],
                        StartPeriod: rule.fields.StartPeriod,
                        EndPeriod: rule.fields.EndPeriod,
                        TeacherName: rule.fields.TeacherName,
                        BookingReason: rule.fields.BookingReason
                    }
                });
            }
        });
    });

    return instances;
}

// REPLACE your existing resetGridToAvailable function with this one
function resetGridToAvailable(bookings = []) {
    const selectedDate = new Date(datePicker.value + 'T12:00:00');
    const selectedDateString = selectedDate.toLocaleDateString();

    const bookedPeriods = new Set();
    bookings.forEach(record => {
        const startPeriod = record.fields.StartPeriod;
        const endPeriod = record.fields.EndPeriod || startPeriod;
        const recordDate = new Date(record.fields.Date + 'T12:00:00');
        const columnIndex = currentWeekDates.findIndex(d => new Date(d + 'T12:00:00').toLocaleDateString() === recordDate.toLocaleDateString());
        if (columnIndex === -1) return;
        const columnNumber = columnIndex + 1;
        for (let p = startPeriod; p <= endPeriod; p++) {
            bookedPeriods.add(`D${columnNumber}-P${p}`);
        }
    });

    document.querySelectorAll('.grid-cell').forEach(cell => {
        const [_, day, period] = cell.id.match(/D(\d+)-P(\d+)/);
        
        // THE FIX: Explicitly remove any old event listeners before setting a new one.
        cell.onclick = null;
        
        cell.className = `grid-cell D${day} p-1 sm:p-2 text-center min-h-[40px] sm:min-h-[60px] flex items-center justify-center text-xs border-b border-solid border-gray-200 sm:text-sm`;
        
        const dateStringForThisCell = currentWeekDates[day - 1];

        if (dateStringForThisCell) {
            const dateForThisCell = new Date(dateStringForThisCell + 'T12:00:00');
            const mdyFormat = (dateForThisCell.getMonth() + 1) + '/' + dateForThisCell.getDate() + '/' + dateForThisCell.getFullYear();
            const dayType = SCHOOL_CALENDAR[mdyFormat];

            if (dayType && dayType.startsWith("Day")) {
                if (!bookedPeriods.has(cell.id)) {
                    cell.classList.add('available', 'bg-green-100', 'hover:bg-green-200', 'cursor-pointer', 'text-green-800');
                    cell.innerHTML = 'Available';
                    cell.onclick = () => showBookingModal(day, period, dateStringForThisCell);
                } else {
                    cell.innerHTML = '';
                }
            } else {
                cell.classList.add('bg-gray-100', 'text-gray-500');
                cell.innerHTML = dayType || '';
            }

            if (dateForThisCell.toLocaleDateString() === selectedDateString) {
                cell.classList.add('current-day');
            }
        } else {
            cell.classList.add('bg-gray-100');
            cell.innerHTML = '';
        }
    });
}

function resetGridToAvailable() {
    const selectedDate = new Date(datePicker.value + 'T12:00:00');
    const selectedDateString = selectedDate.toLocaleDateString();

    document.querySelectorAll('.grid-cell').forEach(cell => {
        const [_, day, period] = cell.id.match(/D(\d+)-P(\d+)/);
        
        // Base classes, ensuring the structural D{day} class is always present.
        cell.className = `grid-cell D${day} p-1 sm:p-2 text-center min-h-[40px] sm:min-h-[60px] flex items-center justify-center text-xs border-b border-solid border-gray-200 sm:text-sm`;

        const dateStringForThisCell = currentWeekDates[day - 1]; // This is a STRING like "2025-09-02"

        if (dateStringForThisCell) {
            // THIS IS THE FIX: Convert the string back into a real Date object.
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

function navigateDays(direction) {
    const currentDateStr = new Date(datePicker.value + 'T00:00:00').toLocaleDateString();
    const currentIndex = schoolDays.findIndex(entry => new Date(entry[0]).toLocaleDateString() === currentDateStr);
    if (currentIndex === -1 && direction === 'prev') {
        // If current day is not a school day (e.g. weekend) and going back, find the closest past school day
        const today = new Date(datePicker.value + 'T12:00:00'); // Use noon to avoid timezone issues
        const pastDays = schoolDays.filter(day => new Date(day[0]) < today);
        if(pastDays.length > 0) {
            const prevDay = pastDays[pastDays.length-1];
            const nextDate = new Date(prevDay[0]);
            datePicker.value = nextDate.toISOString().split('T')[0];
            loadScheduleForSelectedDate();
        }
        return;
    }
    
    let nextIndex;
    if (direction === 'next') {
        nextIndex = Math.min(currentIndex + 1, schoolDays.length - 1);
    } else { // 'prev'
        nextIndex = Math.max(currentIndex - 1, 0);
    }
    if (currentIndex === nextIndex) return; // Don't move if at start/end
    
    const nextDate = new Date(schoolDays[nextIndex][0]);
    datePicker.value = nextDate.toISOString().split('T')[0];
    loadScheduleForSelectedDate();
}

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
         if(pastDays.length > 0) {
            nextIndex = Math.max(pastDays.length - 5, 0);
         } else {
            return;
         }
    }

    const nextDate = new Date(schoolDays[nextIndex][0]);
    datePicker.value = nextDate.toISOString().split('T')[0];
    loadScheduleForSelectedDate();
}


// New function to jump to today's date
function jumpToToday() {
    const today = new Date();
    datePicker.value = today.toISOString().split('T')[0];
    loadScheduleForSelectedDate();
}

// New function to check if current date is in today's week
function isCurrentWeekToday() {
    const today = new Date();
    const selectedDate = new Date(datePicker.value + 'T12:00:00');
    
    // Get the start of the week (Monday) for both dates
    const getMonday = (date) => {
        const d = new Date(date);
        const day = d.getDay();
        const diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is Sunday
        return new Date(d.setDate(diff));
    };
    
    const todayMonday = getMonday(today);
    const selectedMonday = getMonday(selectedDate);
    
    // Compare if they're in the same week
    return todayMonday.getTime() === selectedMonday.getTime();
}

// Updated updateDayInfo function - add this logic to show/hide the Today button
function updateTodayButtonVisibility() {
    if (isCurrentWeekToday()) {
        todayBtn.classList.add('hidden');
    } else {
        todayBtn.classList.remove('hidden');
    }
}

// Modified loadScheduleForSelectedDate function - add the Today button visibility update
function loadScheduleForSelectedDate() {
    const selectedDate = new Date(datePicker.value);
    const timezoneOffset = selectedDate.getTimezoneOffset() * 60000;
    const adjustedDate = new Date(selectedDate.getTime() + timezoneOffset);
    const mdyFormat = (adjustedDate.getMonth() + 1) + '/' + adjustedDate.getDate() + '/' + adjustedDate.getFullYear();
    updateDayInfo(mdyFormat);
    updateTodayButtonVisibility(); // NEW: Update Today button visibility
    fetchAndPopulateBookings();
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
    document.querySelectorAll('.current-day, .current-day-header').forEach(el => el.classList.remove('current-day', 'current-day-header'));
    
    const weekDates = getWeekDateInfo(dateString);
    currentWeekDates = weekDates.map(d => d ? new Date(d).toISOString().split('T')[0] : null);

    // Update desktop headers with actual dates
    for (let i = 0; i < 5; i++) {
        const headerDateDiv = document.querySelector(`.grid-header.D${i + 1} .header-date`);
        if (weekDates[i]) {
            const d = new Date(weekDates[i]);
            const dayType = SCHOOL_CALENDAR[weekDates[i]];
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
    const selectedDayOfWeek = selectedDate.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
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
        
        if (columnIndex >= 0 && columnIndex < 5) {
            document.querySelectorAll(`.D${columnIndex + 1}`).forEach(el => el.classList.add('current-day'));
            document.querySelector(`.grid-header.D${columnIndex + 1}`).classList.add('current-day-header');
        }
        
        const dayDate = new Date(dateString);
        const dayName = dayDate.toLocaleDateString('en-US', { weekday: 'long' });
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
    const selectedDateObj = new Date(dateString);
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
        if (!endDateValue) {
            alert('Please select an end date.');
            return;
        }
        endDate = new Date(endDateValue + 'T23:59:59');
    } else { // 'after'
        maxOccurrences = parseInt(recurrenceOccurrences.value);
        if (!maxOccurrences || maxOccurrences < 1) {
            alert('Please enter a valid number of occurrences.');
            return;
        }
        endDate = new Date();
        endDate.setFullYear(endDate.getFullYear() + 5);
    }
    
    // THIS IS THE FIX: Build the selector string correctly for both types.
    let daySelector = '';
    if (type === 'cycle') {
        daySelector = '#cycle-day-options input:checked';
    } else { // type === 'weekday'
        daySelector = '#weekday-options input:checked';
    }
    const dayCheckboxes = document.querySelectorAll(daySelector);
    
    if (dayCheckboxes.length === 0) {
        alert('Please select at least one day for the recurrence.');
        return;
    }
    const selectedDays = Array.from(dayCheckboxes).map(cb => parseInt(cb.value));

    // --- The rest of the function remains the same ---
    const seriesDates = [];
    let currentDate = new Date(fields.Date + 'T12:00:00');
    while (currentDate <= endDate && (!maxOccurrences || seriesDates.length < maxOccurrences)) {
        const mdyFormat = (currentDate.getMonth() + 1) + '/' + currentDate.getDate() + '/' + currentDate.getFullYear();
        const calendarEntry = SCHOOL_CALENDAR[mdyFormat];
        
        if (calendarEntry && calendarEntry.startsWith('Day')) {
            if (type === 'cycle') {
                const cycleDay = parseInt(calendarEntry.split(' ')[1]);
                if (selectedDays.includes(cycleDay)) { seriesDates.push(new Date(currentDate)); }
            } else if (type === 'weekday') {
                const dayOfWeek = currentDate.getDay();
                if (selectedDays.includes(dayOfWeek)) { seriesDates.push(new Date(currentDate)); }
            }
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    if (seriesDates.length === 0) {
        alert('No valid school days found for the selected recurrence pattern.');
        return;
    }

    const allBookings = await fetchAllBookings();
    for (const date of seriesDates) {
        for (let p = fields.StartPeriod; p <= fields.EndPeriod; p++) {
            const conflict = allBookings.find(b => 
                new Date(b.fields.Date).toLocaleDateString() === date.toLocaleDateString() &&
                p >= b.fields.StartPeriod && p <= (b.fields.EndPeriod || b.fields.StartPeriod)
            );
            if (conflict) {
                alert(`Conflict found on ${date.toLocaleDateString()} for Period ${p}. Please resolve the conflict.`);
                return;
            }
        }
    }
    
    const seriesId = `series-${Date.now()}`;
    const newBookingRecords = seriesDates.map(date => ({
        fields: { ...fields, Date: date.toISOString().split('T')[0], SeriesID: seriesId }
    }));
    
    for (let i = 0; i < newBookingRecords.length; i += 10) {
        const chunk = newBookingRecords.slice(i, i + 10);
        await fetch(AIRTABLE_API_URL, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${AIRTABLE_API_KEY}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ records: chunk })
        });
    }

    const masterRecordFields = {
        TeacherName: fields.TeacherName, StartPeriod: fields.StartPeriod, EndPeriod: fields.EndPeriod,
        BookingReason: fields.BookingReason, RecurrenceType: type, RecurrenceDays: selectedDays.join(','), SeriesID: seriesId
    };
    if (endType === 'on-date') {
        masterRecordFields.EndDate = endDate.toISOString().split('T')[0];
    } else {
        masterRecordFields.EndOccurrences = maxOccurrences;
    }
    
    await fetch(AIRTABLE_RECURRING_URL, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${AIRTABLE_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ records: [ { fields: masterRecordFields } ] })
    });
    
    alert(`Successfully created ${seriesDates.length} recurring bookings.`);
    hideBookingModal();
    loadScheduleForSelectedDate();
}

async function openManageRecurringPanel(recordIdToHighlight = null) {
    adminModal.classList.add('hidden');
    recurringList.innerHTML = '<p class="text-center text-gray-500 py-4">Loading recurring bookings...</p>';
    manageRecurringModal.classList.remove('hidden');

    try {
        const response = await fetch(AIRTABLE_RECURRING_URL, {
            headers: { 'Authorization': `Bearer ${AIRTABLE_API_KEY}` }
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`HTTP ${response.status}: ${errorData.error?.message || response.statusText}`);
        }
        
        const data = await response.json();
        recurringList.innerHTML = '';
        
        if (data.records.length === 0) {
            recurringList.innerHTML = '<p class="text-center text-gray-500 py-8">No recurring bookings found.</p>';
            return;
        }

        const listContainer = document.createElement('ul');
        listContainer.className = 'divide-y divide-gray-200';

        data.records.forEach(record => {
            const { TeacherName, RecurrenceType, RecurrenceDays, EndDate, EndOccurrences, BookingReason } = record.fields;
            const li = document.createElement('li');
            li.id = `recurring-${record.id}`; // Add a unique ID to each list item
            li.className = 'p-4 flex justify-between items-start transition-colors duration-300';
            
            let daysText = '';
            if (RecurrenceType === 'cycle') {
                daysText = `Cycle Days: ${RecurrenceDays}`;
            } else if (RecurrenceType === 'weekday') {
                const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                const selectedDays = (RecurrenceDays || '').split(',').map(day => weekdays[parseInt(day)]).join(', ');
                daysText = `Weekdays: ${selectedDays}`;
            }
            
            let endText = '';
            if (EndDate) {
                endText = `until ${new Date(EndDate).toLocaleDateString()}`;
            } else if (EndOccurrences) {
                endText = `for ${EndOccurrences} occurrences`;
            }
            
            li.innerHTML = `
                <div>
                    <div class="font-semibold text-gray-900">${TeacherName}</div>
                    <div class="text-sm text-gray-600">${BookingReason || 'Book Exchange'}</div>
                    <div class="text-sm text-gray-500">${daysText} ${endText}</div>
                </div>
                <button class="text-red-600 hover:text-red-800 p-1 rounded" onclick="deleteRecurringSeries('${record.id}')">
                    <span class="material-symbols-outlined">delete</span>
                </button>
            `;
            listContainer.appendChild(li);
        });
        
        recurringList.appendChild(listContainer);

        // This is the new logic: If an ID was passed, scroll to and highlight it.
        if (recordIdToHighlight) {
            const targetElement = document.getElementById(`recurring-${recordIdToHighlight}`);
            if (targetElement) {
                // The scrollIntoView happens almost instantly
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Add a highlight class
                targetElement.classList.add('bg-blue-100');
                
                // Remove the highlight after a couple of seconds so it just flashes
                setTimeout(() => {
                    targetElement.classList.remove('bg-blue-100');
                }, 2000);
            }
        }
        
    } catch (error) {
        console.error('Error loading recurring bookings:', error);
        recurringList.innerHTML = `<p class="text-center text-red-500 py-4">Error loading recurring bookings: ${error.message}</p>`;
    }
}

async function deleteRecurringSeries(recordId) {
    if (!confirm('Are you sure you want to delete this entire recurring series and all its future bookings? This cannot be undone.')) return;
    
    try {
        // Get the master record first to find its unique SeriesID
        const masterResponse = await fetch(`${AIRTABLE_RECURRING_URL}/${recordId}`, {
            headers: { 'Authorization': `Bearer ${AIRTABLE_API_KEY}` }
        });
        if (!masterResponse.ok) throw new Error('Failed to fetch the master recurring record.');
        const masterRecord = await masterResponse.json();
        const seriesId = masterRecord.fields.SeriesID;
        
        if (!seriesId) throw new Error('Cannot delete: This recurring booking is missing its Series ID.');
        
        // Find all future bookings that are part of this series
        const filter = `AND({SeriesID} = '${seriesId}', IS_AFTER({Date}, TODAY()))`;
        const fetchURL = `${AIRTABLE_API_URL}?filterByFormula=${encodeURIComponent(filter)}`;
        
        // Use the new helper function to get ALL matching records
        const bookingsToDelete = await fetchAllRecordsWithPagination(fetchURL);
        
        // Delete them in chunks of 10 (Airtable's limit)
        const recordIdsToDelete = bookingsToDelete.map(r => r.id);
        for (let i = 0; i < recordIdsToDelete.length; i += 10) {
            const chunk = recordIdsToDelete.slice(i, i + 10);
            const deleteResponse = await fetch(`${AIRTABLE_API_URL}?records[]=${chunk.join('&records[]=')}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${AIRTABLE_API_KEY}` }
            });
            if (!deleteResponse.ok) throw new Error('Failed to delete a chunk of bookings.');
        }

        // Finally, delete the master record itself
        await fetch(`${AIRTABLE_RECURRING_URL}/${recordId}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${AIRTABLE_API_KEY}` }
        });
        
        alert(`Recurring series deleted successfully. ${recordIdsToDelete.length} future bookings were removed.`);
        manageRecurringModal.classList.add('hidden');
        loadScheduleForSelectedDate();
        
    } catch (error) {
        console.error('Error deleting recurring series:', error);
        alert(`Error deleting recurring series: ${error.message}`);
    }
}

// Helper to get all bookings for conflict check
async function fetchAllBookings() {
    const response = await fetch(AIRTABLE_API_URL, { headers: { 'Authorization': `Bearer ${AIRTABLE_API_KEY}` } });
    const data = await response.json();
    return data.records;
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

const OriginalDate = Date;
Date = class extends OriginalDate {
    constructor(...args) {
        if (args.length === 0) {
            // When new Date() is called with no arguments, return our fake date
            return new OriginalDate('2025-09-02T12:00:00');
        }
        return new OriginalDate(...args);
    }
    
    static now() {
        return new OriginalDate('2025-09-02T12:00:00').getTime();
    }
};

// ADD THIS NEW HELPER FUNCTION
async function fetchAllRecordsWithPagination(url) {
    let allRecords = [];
    let offset = null;

    do {
        const fetchUrl = offset ? `${url}&offset=${offset}` : url;
        const response = await fetch(fetchUrl, { headers: { 'Authorization': `Bearer ${AIRTABLE_API_KEY}` } });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Airtable fetch failed: ${errorData.error?.message || response.statusText}`);
        }
        const data = await response.json();
        allRecords = allRecords.concat(data.records);
        offset = data.offset;
    } while (offset);

    return allRecords;
}

function handleRecurringIconClick(recordId) {
    const user = auth.currentUser;
    // Check if the current user is in the admin list
    if (user && ADMIN_EMAILS.includes(user.email.toLowerCase())) {
        // If they are an admin, open the panel and pass the record ID to highlight it
        openManageRecurringPanel(recordId);
    } else {
        // If they are not an admin, show a simple alert
        alert("This is a recurring booking. You do not have permission to modify it. Please contact an administrator.");
    }
}