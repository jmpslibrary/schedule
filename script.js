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
const ADMIN_EMAILS = ["taylchri4039@ddsb.ca"]; // IMPORTANT: Add your email here
const AIRTABLE_BASE_ID = 'appCQATw4gkWsJSMV';
const AIRTABLE_TABLE_NAME = 'Bookings';
const AIRTABLE_BANNER_TABLE_NAME = 'AlertBanner';
const AIRTABLE_API_KEY = 'patygW0NdWqSupAbh.cfb560a3f04ebe906e3275fc9d5d030ed3937ea5b8eca8ec7109d3380a82b7ab';

const PERIOD_TIMES = ["8:05 - 8:35", "8:35 - 9:05", "9:05 - 9:35", "9:50 - 10:20", "10:20 - 10:50", "11:50 - 12:20", "12:20 - 12:50", "12:50 - 1:20", "1:35 - 2:05", "2:05 - 2:35"];
const BOOKING_REASONS = ["Book Exchange", "Partnering", "Presentation", "Closed", "Other"];

const REASON_ICONS = {
    "Book Exchange": "book_2",
    "Partnering": "group",
    "Presentation": "co_present",
    "Closed": "event_busy",
    "Other": "calendar_check"
};

const SCHOOL_CALENDAR = { "8/29/2025": "PA Day", "9/1/2025": "Holiday", "9/2/2025": "Day 1", "9/3/2025": "Day 2", "9/4/2025": "Day 3", "9/5/2025": "Day 4", "9/8/2025": "Day 5", "9/9/2025": "Day 1", "9/10/2025": "Day 2", "9/11/2025": "Day 3", "9/12/2025": "Day 4", "9/15/2025": "Day 5", "9/16/2025": "Day 1", "9/17/2025": "Day 2", "9/18/2025": "Day 3", "9/19/2025": "Day 4", "9/22/2025": "Day 5", "9/23/2025": "Day 1", "9/24/2025": "Day 2", "9/25/2025": "Day 3", "9/26/2025": "Day 4", "9/29/2025": "Day 5", "9/30/2025": "Day 1", "10/1/2025": "Day 2", "10/2/2025": "Day 3", "10/3/2025": "Day 4", "10/6/2025": "Day 5", "10/7/2025": "Day 1", "10/8/2025": "Day 2", "10/9/2025": "Day 3", "10/10/2025": "Day 4", "10/13/2025": "Holiday", "10/14/2025": "Day 5", "10/15/2025": "Day 1", "10/16/2025": "Day 2", "10/17/2025": "Day 3", "10/20/2025": "Day 4", "10/21/2025": "Day 5", "10/22/2025": "Day 1", "10/23/2025": "Day 2", "10/24/2025": "PA Day", "10/27/2025": "Day 3", "10/28/2025": "Day 4", "10/29/2025": "Day 5", "10/30/2025": "Day 1", "10/31/2025": "Day 2", "11/3/2025": "Day 3", "11/4/2025": "Day 4", "11/5/2025": "Day 5", "11/6/2025": "Day 1", "11/7/2025": "Day 2", "11/10/2025": "Day 3", "11/11/2025": "Day 4", "11/12/2025": "Day 5", "11/13/2025": "Day 1", "11/14/2025": "PA Day", "11/17/2025": "Day 2", "11/18/2025": "Day 3", "11/19/2025": "Day 4", "11/20/2025": "Day 5", "11/21/2025": "Day 1", "11/24/2025": "Day 2", "11/25/2025": "Day 3", "11/26/2025": "Day 4", "11/27/2025": "Day 5", "11/28/2025": "Day 1", "12/1/2025": "Day 2", "12/2/2025": "Day 3", "12/3/2025": "Day 4", "12/4/2025": "Day 5", "12/5/2025": "Day 1", "12/8/2025": "Day 2", "12/9/2025": "Day 3", "12/10/2025": "Day 4", "12/11/2025": "Day 5", "12/12/2025": "Day 1", "12/15/2025": "Day 2", "12/16/2025": "Day 3", "12/17/2025": "Day 4", "12/18/2025": "Day 5", "12/19/2025": "Day 1", "12/22/2025": "Holiday", "12/23/2025": "Holiday", "12/24/2025": "Holiday", "12/25/2025": "Holiday", "12/26/2025": "Holiday", "12/29/2025": "Holiday", "12/30/2025": "Holiday", "12/31/2025": "Holiday", "1/1/2026": "Holiday", "1/2/2026": "Holiday", "1/5/2026": "Day 2", "1/6/2026": "Day 3", "1/7/2026": "Day 4", "1/8/2026": "Day 5", "1/9/2026": "Day 1", "1/12/2026": "Day 2", "1/13/2026": "Day 3", "1/14/2026": "Day 4", "1/15/2026": "Day 5", "1/16/2026": "Day 1", "1/19/2026": "Day 2", "1/20/2026": "Day 3", "1/21/2026": "Day 4", "1/22/2026": "Day 5", "1/23/2026": "Day 1", "1/26/2026": "Day 2", "1/27/2026": "Day 3", "1/28/2026": "Day 4", "1/29/2026": "Day 5", "1/30/2026": "PA Day", "2/2/2026": "Day 1", "2/3/2026": "Day 2", "2/4/2026": "Day 3", "2/5/2026": "Day 4", "2/6/2026": "Day 5", "2/9/2026": "Day 1", "2/10/2026": "Day 2", "2/11/2026": "Day 3", "2/12/2026": "Day 4", "2/13/2026": "Day 5", "2/16/2026": "Holiday", "2/17/2026": "Day 1", "2/18/2026": "Day 2", "2/19/2026": "Day 3", "2/20/2026": "Day 4", "2/23/2026": "Day 5", "2/24/2026": "Day 1", "2/25/2026": "Day 2", "2/26/2026": "Day 3", "2/27/2026": "Day 4", "3/2/2026": "Day 5", "3/3/2026": "Day 1", "3/4/2026": "Day 2", "3/5/2026": "Day 3", "3/6/2026": "Day 4", "3/9/2026": "Day 5", "3/10/2026": "Day 1", "3/11/2026": "Day 2", "3/12/2026": "Day 3", "3/13/2026": "Holiday", "3/16/2026": "Holiday", "3/17/2026": "Holiday", "3/18/2026": "Holiday", "3/19/2026": "Holiday", "3/20/2026": "Holiday", "3/23/2026": "Day 4", "3/24/2026": "Day 5", "3/25/2026": "Day 1", "3/26/2026": "Day 2", "3/27/2026": "Day 3", "3/30/2026": "Day 4", "3/31/2026": "Day 5", "4/1/2026": "Day 1", "4/2/2026": "Day 2", "4/3/2026": "Holiday", "4/6/2026": "Holiday", "4/7/2026": "Day 3", "4/8/2026": "Day 4", "4/9/2026": "Day 5", "4/10/2026": "Day 1", "4/13/2026": "Day 2", "4/14/2026": "Day 3", "4/15/2026": "Day 4", "4/16/2026": "Day 5", "4/17/2026": "PA Day", "4/20/2026": "Day 1", "4/21/2026": "Day 2", "4/22/2026": "Day 3", "4/23/2026": "Day 4", "4/24/2026": "Day 5", "4/27/2026": "Day 1", "4/28/2026": "Day 2", "4/29/2026": "Day 3", "4/30/2026": "Day 4", "5/1/2026": "Day 5", "5/4/2026": "Day 1", "5/5/2026": "Day 2", "5/6/2026": "Day 3", "5/7/2026": "Day 4", "5/8/2026": "Day 5", "5/11/2026": "Day 1", "5/12/2026": "Day 2", "5/13/2026": "Day 3", "5/14/2026": "Day 4", "5/15/2026": "Day 5", "5/18/2026": "Holiday", "5/19/2026": "Day 1", "5/20/2026": "Day 2", "5/21/2026": "Day 3", "5/22/2026": "Day 4", "5/25/2026": "Day 5", "5/26/2026": "Day 1", "5/27/2026": "Day 2", "5/28/2026": "Day 3", "5/29/2026": "Day 4", "6/1/2026": "Day 5", "6/2/2026": "Day 1", "6/3/2026": "Day 2", "6/4/2026": "Day 3", "6/5/2026": "Day 4", "6/8/2026": "PA Day", "6/9/2026": "Day 5", "6/10/2026": "Day 1", "6/11/2026": "Day 2", "6/12/2026": "Day 3", "6/15/2026": "Day 4", "6/16/2026": "Day 5", "6/17/2026": "Day 1", "6/18/2026": "Day 2", "6/19/2026": "Day 3", "6/22/2026": "Day 4", "6/23/2026": "Day 5", "6/24/2026": "Day 1", "6/25/2026": "Day 2", "6/26/2026": "PA Day"
};

const sortedCalendar = Object.entries(SCHOOL_CALENDAR).sort((a, b) => new Date(a[0]) - new Date(b[0]));
const schoolDays = sortedCalendar.filter(entry => entry[1].startsWith('Day'));
const AIRTABLE_API_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;
const AIRTABLE_BANNER_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_BANNER_TABLE_NAME}`;

// --- Element References ---
const loginBtn = document.getElementById('login-btn'), logoutBtn = document.getElementById('logout-btn'), userInfo = document.getElementById('user-info'), userName = document.getElementById('user-name'), appContent = document.getElementById('app-content'), gridContainer = document.getElementById('schedule-grid'), infoBanner = document.getElementById('info-banner'), datePicker = document.getElementById('date-picker'), prevWeekBtn = document.getElementById('prev-week-btn'), nextWeekBtn = document.getElementById('next-week-btn'), bookingModal = document.getElementById('booking-modal'), bookingForm = document.getElementById('booking-form'), modalTitle = document.getElementById('modal-title'), cancelBookingBtn = document.getElementById('cancel-booking-btn'), deleteBookingBtn = document.getElementById('delete-booking-btn'), otherReasonInput = document.getElementById('other-reason'), reasonOptionsContainer = document.getElementById('booking-reason-options');
const todayBtn = document.getElementById('today-btn');
// Admin Elements
const alertBanner = document.getElementById('alert-banner'), adminBtn = document.getElementById('admin-btn'), adminModal = document.getElementById('admin-modal'), adminForm = document.getElementById('admin-form'), cancelAdminBtn = document.getElementById('cancel-admin-btn'), deleteBannerBtn = document.getElementById('delete-banner-btn');
// Mobile Elements
const noCurrentDayMobile = document.getElementById('no-current-day-mobile'), mobileCurrentDayInfo = document.getElementById('mobile-current-day-info'), mobilePrevDay = document.getElementById('mobile-prev-day'), mobileNextDay = document.getElementById('mobile-next-day');
const mobileDayInfo = document.getElementById('mobile-day-info'); cancelDeleteBtn = document.getElementById('cancel-delete-btn'), confirmDeleteBtn = document.getElementById('confirm-delete-btn');

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
    fetchAndDisplayBanner();
    datePicker.value = new Date().toISOString().split('T')[0];
    loadScheduleForSelectedDate();
    datePicker.addEventListener('change', loadScheduleForSelectedDate);
    todayBtn.addEventListener('click', jumpToToday);
    // Desktop Nav
    prevWeekBtn.addEventListener('click', () => navigateWeeks('prev'));
    nextWeekBtn.addEventListener('click', () => navigateWeeks('next'));
    // Mobile Nav
    mobilePrevDay.addEventListener('click', () => navigateDays('prev'));
    mobileNextDay.addEventListener('click', () => navigateDays('next'));
    // Modals
    bookingModal.addEventListener('click', (e) => { if (e.target === bookingModal) hideBookingModal(); });
    cancelBookingBtn.addEventListener('click', hideBookingModal);
    bookingForm.addEventListener('submit', handleBookingSubmit);
    adminBtn.addEventListener('click', openAdminPanel);
    adminModal.addEventListener('click', (e) => { if (e.target === adminModal) adminModal.classList.add('hidden'); });
    cancelAdminBtn.addEventListener('click', () => adminModal.classList.add('hidden'));
    adminForm.addEventListener('submit', handleBannerSubmit);
    deleteBannerBtn.addEventListener('click', deleteBanner);
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

    // THIS IS THE FIX: Explicitly hide the start period container.
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
    endPeriodSelect.innerHTML = ''; // Clear previous options

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

    const fields = { "TeacherName": teacherName, "BookingReason": bookingReason };
    
    if (isEditing) {
        // When editing, get start and end periods from the dropdowns
        const startPeriod = document.getElementById('start-period').value;
        const endPeriod = document.getElementById('end-period').value;
        if (!startPeriod || !endPeriod) { alert('Please select a start and end period.'); return; }
        fields.StartPeriod = parseInt(startPeriod);
        fields.EndPeriod = parseInt(endPeriod);
    } else {
        // When creating a new booking
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

// Updated fetchAndPopulateBookings function - removes the resetGridToAvailable call
async function fetchAndPopulateBookings() {
    // REMOVED: resetGridToAvailable(); // This was causing the flicker
    
    const dateFilters = currentWeekDates.filter(d => d).map(d => `IS_SAME({Date}, '${d}', 'day')`);
    if (dateFilters.length === 0) {
        // If no valid dates, we still need to reset the grid
        resetGridToAvailable();
        return;
    }
    
    const filterFormula = `OR(${dateFilters.join(',')})`;
    const fetchURL = `${AIRTABLE_API_URL}?filterByFormula=${encodeURIComponent(filterFormula)}`;

    try {
        const response = await fetch(fetchURL, { headers: { 'Authorization': `Bearer ${AIRTABLE_API_KEY}` } });
        const data = await response.json(); 
        if (!response.ok) throw new Error(data.error.message);

        // NEW: Reset grid with booking data in mind
        resetGridToAvailableWithBookings(data.records);

        // Process bookings and update cells
        data.records.forEach(record => {
            const startPeriod = record.fields.StartPeriod;
            const endPeriod = record.fields.EndPeriod || startPeriod;
            const bookingReason = record.fields.BookingReason;
            const recordDate = new Date(record.fields.Date + 'T00:00:00');
            const dateStr = (recordDate.getMonth() + 1) + '/' + recordDate.getDate() + '/' + recordDate.getFullYear();
            
            // Find which column this date belongs to
            const columnIndex = currentWeekDates.findIndex(d => d === new Date(record.fields.Date).toISOString().split('T')[0]);
            if (columnIndex === -1) return; // Date not in current week
            
            const columnNumber = columnIndex + 1; // Convert to 1-based indexing

            for (let p = startPeriod; p <= endPeriod; p++) {
                const cellId = `D${columnNumber}-P${p}`;
                const cell = document.getElementById(cellId);
                if (!cell) continue;

                // Remove available classes and click handler
                cell.classList.remove('available', 'bg-green-100', 'hover:bg-green-200', 'cursor-pointer', 'text-green-800');
                cell.onclick = null;

                const isFirstCell = (p === startPeriod);
                
                const actionsHTML = `
                    <div class="booking-actions absolute top-1 right-1 flex items-center gap-1 sm:gap-2 z-10">
                        <span class="material-symbols-outlined text-gray-600 hover:text-gray-50 cursor-pointer transition-transform transform hover:scale-110" style="font-size: 20px;" title="Edit Booking" onclick="showEditModal('${record.id}')">edit</span>
                        <span class="material-symbols-outlined text-gray-600 hover:text-gray-50 cursor-pointer transition-transform transform hover:scale-110" style="font-size: 20px;" title="Cancel Booking" onclick="showConfirmDeleteModal('${record.id}')">delete</span>
                    </div>`;

                if (bookingReason === "Closed") {
                    cell.className = `grid-cell D${columnNumber} p-1 rounded-lg sm:p-2 text-xs relative bg-red-100 text-red-800`;
                    if (isFirstCell) {
                        const closedIcon = REASON_ICONS["Closed"] || 'do_not_disturb';
                        cell.innerHTML = `
                            ${actionsHTML}
                            <div class="flex flex-col items-center justify-center h-full font-semibold uppercase tracking-tight sm:text-base gap-1">
                                <span class="material-symbols-outlined" style="font-size: 24px;">${closedIcon}</span>
                                <span class="text-[12px] leading-none">Closed</span>
                            </div>`;
                    } else {
                        cell.innerHTML = `
                            <div class="flex items-center justify-center h-full">
                                <span class="material-symbols-outlined text-red-300" style="font-size: 24px;">arrow_cool_down</span>
                            </div>
                        `;
                    }
                } else {
                    cell.className = `grid-cell D${columnNumber} p-1 rounded-lg sm:p-2 text-xs relative bg-blue-100 text-blue-800`;
                    if (isFirstCell) {
                        let iconName = REASON_ICONS[bookingReason] || REASON_ICONS["Other"];
                        cell.innerHTML = `
                            ${actionsHTML}
                            <div class="pt-6 sm:pt-5">
                                <strong class="font-semibold block text-xs tracking-tighter sm:text-sm leading-tight">${record.fields.TeacherName}</strong>
                                <small class="flex items-center gap-1.5 text-blue-700 text-xs block mt-1 leading-tight">
                                    <span class="material-symbols-outlined" style="font-size: 16px;">${iconName}</span>
                                    <span>${bookingReason || ''}</span>
                                </small>
                            </div>`;
                    } else {
                        cell.innerHTML = `
                            <div class="flex items-center justify-center h-full">
                                <span class="material-symbols-outlined text-blue-300" style="font-size: 24px;">arrow_cool_down</span>
                            </div>
                        `;
                    }
                }

                // For mobile: mark current day cells
                const selectedDateStr = datePicker.value;
                const selectedDate = new Date(selectedDateStr + 'T00:00:00');
                const selectedMDY = (selectedDate.getMonth() + 1) + '/' + selectedDate.getDate() + '/' + selectedDate.getFullYear();
                if (dateStr === selectedMDY) {
                    cell.classList.add('current-day');
                }
            }
        });

    } catch (error) {
        console.error("Error fetching bookings:", error);
        // On error, fall back to the original reset behavior
        resetGridToAvailable();
    }
}

// NEW: Smart grid reset function that considers existing bookings
function resetGridToAvailableWithBookings(bookings) {
    const selectedDate = new Date(datePicker.value + 'T12:00:00');
    const selectedDateString = selectedDate.toLocaleDateString();

    // Create a map of booked periods for quick lookup
    const bookedPeriods = new Set();
    bookings.forEach(record => {
        const startPeriod = record.fields.StartPeriod;
        const endPeriod = record.fields.EndPeriod || startPeriod;
        const recordDate = new Date(record.fields.Date + 'T00:00:00');
        
        // Find which column this date belongs to
        const columnIndex = currentWeekDates.findIndex(d => d === new Date(record.fields.Date).toISOString().split('T')[0]);
        if (columnIndex === -1) return;
        
        const columnNumber = columnIndex + 1;
        
        for (let p = startPeriod; p <= endPeriod; p++) {
            bookedPeriods.add(`D${columnNumber}-P${p}`);
        }
    });

    document.querySelectorAll('.grid-cell').forEach(cell => {
        const [_, day, period] = cell.id.match(/D(\d+)-P(\d+)/);
        
        // Base classes, ensuring the structural D{day} class is always present.
        cell.className = `grid-cell D${day} p-1 sm:p-2 text-center min-h-[40px] sm:min-h-[60px] flex items-center justify-center text-xs border-b border-solid border-gray-200 sm:text-sm`;

        const dateStringForThisCell = currentWeekDates[day - 1];

        if (dateStringForThisCell) {
            const dateForThisCell = new Date(dateStringForThisCell + 'T12:00:00');
            const mdyFormat = (dateForThisCell.getMonth() + 1) + '/' + dateForThisCell.getDate() + '/' + dateForThisCell.getFullYear();
            const dayType = SCHOOL_CALENDAR[mdyFormat];

            if (dayType && dayType.startsWith("Day")) {
                // Only set as available if it's not in the booked periods
                if (!bookedPeriods.has(cell.id)) {
                    cell.classList.add('available', 'bg-green-100', 'hover:bg-green-200', 'cursor-pointer', 'text-green-800');
                    cell.innerHTML = 'Available';
                    cell.onclick = () => showBookingModal(day, period, dateStringForThisCell);
                }
                // If it is booked, leave it as-is (will be updated by the booking loop)
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
    
    // Periods where separators should be added after them
    const separatorAfterPeriods = [3, 5, 8];
    
    for (let p = 1; p <= 10; p++) {
        const pLabel = document.createElement('div');
        pLabel.className = 'grid-label p-1 sm:p-2 text-center font-semibold text-gray-600 bg-gray-100 text-xs rounded-md border-b border-solid';
        pLabel.innerHTML = `<strong class="block text-md sm:text-sm">Period ${p}</strong><small class="period-time text-gray-500 text-xs">${PERIOD_TIMES[p-1]}</small>`;
        gridContainer.appendChild(pLabel);
        
        for (let d = 1; d <= 5; d++) {
            const cell = document.createElement('div');
            cell.id = `D${d}-P${p}`;
            cell.className = `grid-cell D${d} p-1 sm:p-2 text-center border border-gray-200 rounded-md transition-colors duration-200 min-h-[40px] sm:min-h-[60px] flex items-center justify-center text-xs sm:text-sm`;
            gridContainer.appendChild(cell);
        }
        
        // Add separator line after specific periods
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