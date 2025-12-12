// Main Application - Clean Version with Initial Placeholder & Social Footer
document.addEventListener('DOMContentLoaded', function () {
    console.log('[START] Application initialized');

    const countrySelect = document.getElementById('countrySelect');
    const universitySelect = document.getElementById('universitySelect');
    const studentNameInput = document.getElementById('studentName');
    const studentIdInput = document.getElementById('studentId');
    const studentEmailInput = document.getElementById('studentEmail');
    const studentMajorInput = document.getElementById('studentMajor');
    const dateOfBirthInput = document.getElementById('dateOfBirth');
    const issueDateInput = document.getElementById('issueDate');
    const expiryDateInput = document.getElementById('expiryDate');
    const photoInput = document.getElementById('photoInput');
    const uploadBtn = document.getElementById('uploadBtn');
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    const regenerateBtn = document.getElementById('regenerateBtn');
    const downloadPngBtn = document.getElementById('downloadPngBtn');
    const downloadPdfBtn = document.getElementById('downloadPdfBtn');
    const cardPreview = document.getElementById('cardPreview');

    // Navigation bar elements
    const viewBothBtn = document.getElementById('viewBothBtn');
    const viewFrontBtn = document.getElementById('viewFrontBtn');
    const viewBackBtn = document.getElementById('viewBackBtn');
    const downloadZipBtn = document.getElementById('downloadZipBtn');

    // Mode and document type elements
    const studentModeBtn = document.getElementById('studentModeBtn');
    const teacherModeBtn = document.getElementById('teacherModeBtn');
    const docStandardBtn = document.getElementById('docStandardBtn');
    const docExtraBtn = document.getElementById('docExtraBtn');
    const docIdCardBtn = document.getElementById('docIdCardBtn');

    let currentUniversity = null;
    let uploadedPhotoBase64 = null;
    let loadedPhotoUrl = null; // Store photo URL loaded from Worker to preserve across view switches
    let currentViewMode = 'both'; // 'front', 'back', or 'both'
    let currentCardData = null; // Store card data for export
    let currentMode = 'student'; // 'student' or 'teacher'
    let currentDocType = 'idcard'; // 'standard', 'extra', or 'idcard'
    let zoomLevel = 100; // Current zoom percentage

    // Zoom elements
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');
    const zoomLevelDisplay = document.getElementById('zoomLevel');

    loadCountries();
    attachInputListeners();
    setupNavListeners(); // Setup navigation bar listeners
    setupZoomControls(); // Setup zoom functionality
    setupDragPan(); // Setup drag/pan functionality
    showPlaceholder(); // Show placeholder initially

    function loadCountries() {
        console.log('[DEBUG] Loading countries...');
        if (typeof UNIVERSITY_DATA === 'undefined') {
            console.error('[ERROR] UNIVERSITY_DATA is not defined!');
            alert('Error: University data not loaded. Please refresh the page.');
            return;
        }

        countrySelect.innerHTML = '<option value="">-- Select Country --</option>';
        Object.keys(UNIVERSITY_DATA).forEach(country => {
            const option = document.createElement('option');
            option.value = country;
            option.textContent = country;
            countrySelect.appendChild(option);
        });
        console.log('[DEBUG] Countries loaded:', countrySelect.options.length);
    }

    function showPlaceholder() {
        const placeholderHTML = `
            <div class="placeholder-card">
                <div class="placeholder-icon">🎓</div>
                <h2 class="placeholder-title">Student ID Generator</h2>
                <p class="placeholder-subtitle">Select a country and university to generate a professional student ID card</p>
                <div class="social-links">
                    <a href="https://github.com/ThanhNguyxn/student-card-generator" target="_blank" class="social-btn github">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        View Source
                    </a>
                    <a href="https://buymeacoffee.com/thanhnguyxn" target="_blank" class="social-btn coffee">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z"/></svg>
                        Buy Me a Coffee
                    </a>
                </div>
            </div>
        `;
        cardPreview.innerHTML = placeholderHTML;
    }

    function loadUniversities(country) {
        universitySelect.innerHTML = '<option value="">-- Select University --</option>';
        universitySelect.disabled = false;
        if (!country || !UNIVERSITY_DATA[country]) return;
        UNIVERSITY_DATA[country].forEach((uni, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = uni.name;
            universitySelect.appendChild(option);
        });
    }

    function setFakerLocale(country) {
        switch (country) {
            case 'Vietnam': faker.locale = 'vi'; break;
            case 'Japan': faker.locale = 'ja'; break;
            case 'Germany': faker.locale = 'de'; break;
            case 'France': faker.locale = 'fr'; break;
            case 'China': faker.locale = 'zh_CN'; break;
            default: faker.locale = 'en';
        }
    }

    function generateSmartDates() {
        const now = new Date();
        const age = 18 + Math.floor(Math.random() * 8);
        const dobYear = now.getFullYear() - age;
        const dob = new Date(dobYear, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
        const enrollmentYear = dobYear + 18;
        const issued = new Date(enrollmentYear, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
        const validThru = new Date(issued.getFullYear() + 4, issued.getMonth(), issued.getDate());
        return { issued, validThru, dob };
    }

    function formatDateForInput(date) {
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    }

    function formatDateForDisplay(dateString) {
        if (!dateString) return '';
        const date = new Date(dateString);
        return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
    }

    function generateStudentId() {
        return `${new Date().getFullYear()}${Math.floor(Math.random() * 90000) + 10000}`;
    }

    function generateAllData() {
        if (!currentUniversity) return alert('Please select a university first');
        const country = countrySelect.value;
        setFakerLocale(country);
        const dates = generateSmartDates();
        const studentId = generateStudentId();
        let major = "Information Technology";
        if (currentUniversity.majors && currentUniversity.majors.length > 0) {
            major = currentUniversity.majors[Math.floor(Math.random() * currentUniversity.majors.length)];
        }
        const fullName = faker.name.findName();
        // Fix email generation: remove accents, special chars, and ensure single dots
        const emailUsername = fullName.toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove accents
            .replace(/[^a-z0-9]/g, '.') // Replace non-alphanumeric with dots
            .replace(/\.+/g, '.') // Squash multiple dots
            .replace(/^\.+|\.+$/g, ''); // Trim leading/trailing dots

        const email = `${emailUsername}@${currentUniversity.domain}`;


        // Use randomuser.me API - has proper CORS headers and works on production
        // const gender = Math.random() > 0.5 ? 'men' : 'women';
        // const randomId = Math.floor(Math.random() * 99);
        // const realisticPhotoUrl = `https://randomuser.me/api/portraits/${gender}/${randomId}.jpg`;

        studentNameInput.value = fullName;
        studentIdInput.value = studentId;
        studentEmailInput.value = email;
        studentMajorInput.value = major;
        dateOfBirthInput.value = formatDateForInput(dates.dob);
        issueDateInput.value = formatDateForInput(dates.issued);
        expiryDateInput.value = formatDateForInput(dates.validThru);


        console.log('[GENERATED]', fullName);

        // Show card IMMEDIATELY with placeholder - no waiting!
        const placeholderPhoto = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPScjY2NjJyBzdHJva2Utd2lkdGg9JzInPjxjaXJjbGUgY3g9JzEyJyBjeT0nOCcgcj0nNCcvPjxwYXRoIGQ9J00yMCAyMXYtMmE0IDQgMCAwIDAtNC00SDhhNCA0IDAgMCAwLTQgNHYyJy8+PC9zdmc+";
        updateCardPreview(uploadedPhotoBase64 || placeholderPhoto);

        // Then load actual photo asynchronously
        if (!uploadedPhotoBase64) {
            const config = window.APP_CONFIG || {};
            const workerUrl = config.WORKER_URL;

            if (workerUrl && config.PHOTO?.enableRealisticPhotos) {
                // Use Cloudflare Worker for realistic photos
                console.log('[PHOTO] Using Cloudflare Worker:', workerUrl);
                const gender = Math.random() > 0.5 ? 'male' : 'female';
                const photoUrl = `${workerUrl}?gender=${gender}&t=${Date.now()}`;
                loadPhotoAsync(photoUrl);
            } else {
                // Fallback to Dicebear (always works!)
                console.log('[PHOTO] Using Dicebear fallback');
                const seed = encodeURIComponent(fullName);
                const style = config.FALLBACK?.dicebearStyle || 'adventurer';
                const fallbackUrl = `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}`;
                updateCardPreview(fallbackUrl);
            }
        }
    }

    /**
     * Load photo asynchronously without blocking card display
     * Converts to base64 for reliable html2canvas export
     */
    function loadPhotoAsync(photoUrl) {
        const img = new Image();
        img.crossOrigin = "anonymous";

        img.onload = function () {
            console.log('[PHOTO] Loaded successfully, converting to base64...');
            try {
                // Convert to base64 for reliable html2canvas export
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                const base64Url = canvas.toDataURL('image/jpeg', 0.9);
                loadedPhotoUrl = base64Url; // Save base64 for view switches and export
                updateCardPreview(base64Url);
                console.log('[PHOTO] Converted to base64 successfully');
            } catch (e) {
                console.warn('[PHOTO] Canvas conversion failed, using URL directly:', e);
                loadedPhotoUrl = photoUrl;
                updateCardPreview(photoUrl);
            }
        };

        img.onerror = function () {
            console.warn('[PHOTO] Failed to load, using fallback avatar');
            // Generate fallback Dicebear avatar
            const seed = encodeURIComponent(studentNameInput.value);
            const fallbackUrl = `https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}`;
            loadedPhotoUrl = fallbackUrl; // Save fallback too
            updateCardPreview(fallbackUrl);
        };

        img.src = photoUrl;
    }

    function updateCardPreview(photoOverride = null) {
        if (!currentUniversity) return;
        // Priority: photoOverride > uploadedPhotoBase64 > loadedPhotoUrl > Dicebear fallback
        const seed = encodeURIComponent(studentNameInput.value || 'student');
        const defaultPhoto = `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`;
        const photoUrl = photoOverride || uploadedPhotoBase64 || loadedPhotoUrl || defaultPhoto;

        // Store card data for exports
        currentCardData = {
            name: studentNameInput.value || 'Student Name',
            id: studentIdInput.value || '000000000',
            email: studentEmailInput.value || 'student@university.edu',
            major: studentMajorInput.value || 'Information Technology',
            dob: formatDateForDisplay(dateOfBirthInput.value),
            issued: formatDateForDisplay(issueDateInput.value),
            validThru: formatDateForDisplay(expiryDateInput.value),
            photo: photoUrl,
            university: currentUniversity
        };

        // Render based on view mode
        if (currentViewMode === 'both') {
            renderBothCards(currentCardData);
        } else if (currentViewMode === 'back') {
            cardPreview.innerHTML = renderCardBack(currentCardData);
        } else {
            renderCard(currentCardData);
        }
    }

    function renderCard(data) {
        // Base64 Encoded SVGs to avoid quote escaping issues in inline JS
        // Logo Fallback: Simple Building Icon
        const fallbackLogo = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPScjNjY2JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTMgMjF2LThhMiAyIDAgMCAxIDItMmgydjhhMiAyIDAgMCAxLTIgMmgtMmEyIDIgMCAwIDEtMi0yeiIvPjxwYXRoIGQ9Ik0xMyAyMVY5YTIgMiAwIDAgMSAyLTJoMnYxMmEyIDIgMCAwIDEtMiAyaC0yYTIgMiAwIDAgMSAyLTJ6Ii8+PHBhdGggZD0iTTUgN2g5Ii8+PHBhdGggZD0iTTUgMTFoOSIvPjwvc3ZnPg==";

        // Photo Fallback: User Icon
        const fallbackPhoto = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPScjOTk5JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTIwIDIxdi0yYTQgNCAwIDAgMC00LTRIOGE0IDQgMCAwIDAtNCA0djIiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjciIHI9IjQiLz48L3N2Zz4=";

        cardPreview.innerHTML = `
      <div class="id-card ${data.university.layout === 'vertical' ? 'vertical-card' : 'horizontal-card'}" style="border-top: 4px solid ${data.university.color}">
        <div class="glass-overlay"></div>
        <div class="card-header" style="background: linear-gradient(135deg, ${data.university.color}, ${data.university.color}dd)">
          <img src="${data.university.logo}" alt="${data.university.shortName}" class="university-logo" crossorigin="anonymous" onerror="this.onerror=null; this.src='${fallbackLogo}'; this.style.padding='5px'; this.style.background='white';">
          <div class="university-info">
            <h2 class="university-name">${data.university.shortName}</h2>
            <p class="university-full-name">${data.university.name}</p>
          </div>
        </div>
        <div class="card-content">
          <div class="photo-container">
            <img src="${data.photo}" alt="Student Photo" class="student-photo" crossorigin="anonymous" onerror="this.onerror=null; this.src='${fallbackPhoto}'; this.style.padding='20px'; this.style.background='#f0f0f0';">
          </div>
          <div class="student-info">
            <div class="info-row name-row"><span class="label">Full Name:</span><span class="value">${data.name}</span></div>
            <div class="info-row"><span class="label">Student ID:</span><span class="value id-number">${data.id}</span></div>
            <div class="info-row"><span class="label">Date of Birth:</span><span class="value">${data.dob}</span></div>
            <div class="info-row"><span class="label">Major:</span><span class="value">${data.major}</span></div>
            <div class="info-row"><span class="label">Issued:</span><span class="value">${data.issued}</span></div>
            <div class="info-row"><span class="label">Valid Thru:</span><span class="value">${data.validThru}</span></div>
          </div>
        </div>
        <div class="card-footer">
          <div class="signature"><span class="signature-text">${data.name}</span><span class="signature-label">Student Signature</span></div>
          <div class="barcode">
            <svg viewBox="0 0 120 40" class="barcode-svg">
              <rect x="0" y="0" width="4" height="40" fill="#000"/><rect x="6" y="0" width="2" height="40" fill="#000"/><rect x="10" y="0" width="4" height="40" fill="#000"/><rect x="16" y="0" width="2" height="40" fill="#000"/><rect x="20" y="0" width="6" height="40" fill="#000"/><rect x="28" y="0" width="2" height="40" fill="#000"/><rect x="32" y="0" width="4" height="40" fill="#000"/><rect x="38" y="0" width="2" height="40" fill="#000"/><rect x="42" y="0" width="4" height="40" fill="#000"/><rect x="48" y="0" width="6" height="40" fill="#000"/><rect x="56" y="0" width="2" height="40" fill="#000"/><rect x="60" y="0" width="4" height="40" fill="#000"/><rect x="66" y="0" width="2" height="40" fill="#000"/><rect x="70" y="0" width="6" height="40" fill="#000"/><rect x="78" y="0" width="2" height="40" fill="#000"/><rect x="82" y="0" width="4" height="40" fill="#000"/><rect x="88" y="0" width="2" height="40" fill="#000"/><rect x="92" y="0" width="4" height="40" fill="#000"/><rect x="98" y="0" width="6" height="40" fill="#000"/><rect x="106" y="0" width="2" height="40" fill="#000"/><rect x="110" y="0" width="4" height="40" fill="#000"/><rect x="116" y="0" width="2" height="40" fill="#000"/>
            </svg>
            <span class="barcode-number">${data.id}</span>
          </div>
        </div>
      </div>
      <div class="social-footer">
        <a href="https://github.com/ThanhNguyxn/student-card-generator" target="_blank" class="social-link-small">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </a>
        <span class="social-divider">•</span>
        <a href="https://buymeacoffee.com/thanhnguyxn" target="_blank" class="social-link-small">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z"/></svg>
          Buy Me a Coffee
        </a>
      </div>`;
    }

    // Render the back side of ID card
    function renderCardBack(data) {
        const fallbackPhoto = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPScjOTk5JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTIwIDIxdi0yYTQgNCAwIDAgMC00LTRIOGE0IDQgMCAwIDAtNCA0djIiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjciIHI9IjQiLz48L3N2Zz4=";

        return `
        <div class="id-card-back ${data.university.layout === 'vertical' ? 'vertical-card' : 'horizontal-card'}" style="border-top: 4px solid ${data.university.color}">
            <div class="card-back-header" style="background: ${data.university.color}">
                <span class="back-label">CARDHOLDER ADDRESS</span>
            </div>
            <div class="card-back-content">
                <div class="back-address">
                    <p class="address-text">${document.getElementById('studentName').value || data.name}</p>
                    <p class="address-text">${data.university.address || 'University Campus'}</p>
                </div>
                <div class="back-terms">
                    <p class="terms-text">This card is the property of ${data.university.name} and must be returned upon request. Faculty members are required to carry this card while on university premises. If found, please return to the nearest security department.</p>
                    <div class="emergency-contact">
                        <span class="contact-label">EMERGENCY CONTACT:</span>
                        <p class="contact-info">University Security: (555) 123-4567</p>
                        <p class="contact-info">HR Department: (555) 123-4568</p>
                    </div>
                </div>
                <div class="back-signature-section">
                    <div class="signature-box">
                        <span class="signature-text-back">${data.name}</span>
                        <span class="signature-label-back">Cardholder Signature</span>
                    </div>
                    <div class="back-photo">
                        <img src="${data.photo}" alt="Photo" class="photo-small" crossorigin="anonymous" onerror="this.onerror=null; this.src='${fallbackPhoto}';">
                    </div>
                </div>
            </div>
        </div>`;
    }

    // Render both front and back cards
    function renderBothCards(data) {
        const frontCard = `
        <div class="card-wrapper">
            <div class="card-label">Student ID (Front)</div>
            <div class="id-card ${data.university.layout === 'vertical' ? 'vertical-card' : 'horizontal-card'}" style="border-top: 4px solid ${data.university.color}" id="idCardFront">
                ${getCardFrontContent(data)}
            </div>
        </div>`;

        const backCard = `
        <div class="card-wrapper">
            <div class="card-label">Student ID (Back)</div>
            ${renderCardBack(data)}
        </div>`;

        cardPreview.innerHTML = `
            <div class="cards-container">
                ${frontCard}
                ${backCard}
            </div>
            <div class="social-footer">
                <a href="https://github.com/ThanhNguyxn/student-card-generator" target="_blank" class="social-link-small">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                </a>
                <span class="social-divider">•</span>
                <a href="https://buymeacoffee.com/thanhnguyxn" target="_blank" class="social-link-small">☕ Buy Me a Coffee</a>
            </div>`;
    }

    // Helper to get card front content for reuse
    function getCardFrontContent(data) {
        const fallbackLogo = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPScjNjY2JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTMgMjF2LThhMiAyIDAgMCAxIDItMmgydjhhMiAyIDAgMCAxLTIgMmgtMmEyIDIgMCAwIDEtMi0yeiIvPjxwYXRoIGQ9Ik0xMyAyMVY5YTIgMiAwIDAgMSAyLTJoMnYxMmEyIDIgMCAwIDEtMiAyaC0yYTIgMiAwIDAgMSAyLTJ6Ii8+PHBhdGggZD0iTTUgN2g5Ii8+PHBhdGggZD0iTTUgMTFoOSIvPjwvc3ZnPg==";
        const fallbackPhoto = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPScjOTk5JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTIwIDIxdi0yYTQgNCAwIDAgMC00LTRIOGE0IDQgMCAwIDAtNCA0djIiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjciIHI9IjQiLz48L3N2Zz4=";

        return `
            <div class="glass-overlay"></div>
            <div class="card-header" style="background: linear-gradient(135deg, ${data.university.color}, ${data.university.color}dd)">
                <img src="${data.university.logo}" alt="${data.university.shortName}" class="university-logo" crossorigin="anonymous" onerror="this.onerror=null; this.src='${fallbackLogo}'; this.style.padding='5px'; this.style.background='white';">
                <div class="university-info">
                    <h2 class="university-name">${data.university.shortName}</h2>
                    <p class="university-full-name">${data.university.name}</p>
                </div>
            </div>
            <div class="card-content">
                <div class="photo-container">
                    <img src="${data.photo}" alt="Student Photo" class="student-photo" crossorigin="anonymous" onerror="this.onerror=null; this.src='${fallbackPhoto}'; this.style.padding='20px'; this.style.background='#f0f0f0';">
                </div>
                <div class="student-info">
                    <div class="info-row name-row"><span class="label">Full Name:</span><span class="value">${data.name}</span></div>
                    <div class="info-row"><span class="label">Student ID:</span><span class="value id-number">${data.id}</span></div>
                    <div class="info-row"><span class="label">Date of Birth:</span><span class="value">${data.dob}</span></div>
                    <div class="info-row"><span class="label">Major:</span><span class="value">${data.major}</span></div>
                    <div class="info-row"><span class="label">Issued:</span><span class="value">${data.issued}</span></div>
                    <div class="info-row"><span class="label">Valid Thru:</span><span class="value">${data.validThru}</span></div>
                </div>
            </div>
            <div class="card-footer">
                <div class="signature"><span class="signature-text">${data.name}</span><span class="signature-label">Student Signature</span></div>
                <div class="barcode">
                    <svg viewBox="0 0 120 40" class="barcode-svg">
                        <rect x="0" y="0" width="4" height="40" fill="#000"/><rect x="6" y="0" width="2" height="40" fill="#000"/><rect x="10" y="0" width="4" height="40" fill="#000"/><rect x="16" y="0" width="2" height="40" fill="#000"/><rect x="20" y="0" width="6" height="40" fill="#000"/><rect x="28" y="0" width="2" height="40" fill="#000"/><rect x="32" y="0" width="4" height="40" fill="#000"/><rect x="38" y="0" width="2" height="40" fill="#000"/><rect x="42" y="0" width="4" height="40" fill="#000"/><rect x="48" y="0" width="6" height="40" fill="#000"/><rect x="56" y="0" width="2" height="40" fill="#000"/><rect x="60" y="0" width="4" height="40" fill="#000"/><rect x="66" y="0" width="2" height="40" fill="#000"/><rect x="70" y="0" width="6" height="40" fill="#000"/><rect x="78" y="0" width="2" height="40" fill="#000"/><rect x="82" y="0" width="4" height="40" fill="#000"/><rect x="88" y="0" width="2" height="40" fill="#000"/><rect x="92" y="0" width="4" height="40" fill="#000"/><rect x="98" y="0" width="6" height="40" fill="#000"/><rect x="106" y="0" width="2" height="40" fill="#000"/><rect x="110" y="0" width="4" height="40" fill="#000"/><rect x="116" y="0" width="2" height="40" fill="#000"/>
                    </svg>
                    <span class="barcode-number">${data.id}</span>
                </div>
            </div>`;
    }

    function attachInputListeners() {
        [studentNameInput, studentIdInput, studentEmailInput, studentMajorInput, dateOfBirthInput, issueDateInput, expiryDateInput].forEach(input => {
            if (input) input.addEventListener('input', () => { if (currentUniversity) updateCardPreview(); });
        });
    }

    function handlePhotoUpload(file) {
        if (!file.type.startsWith('image/')) return alert('Please upload a valid image file');
        const reader = new FileReader();
        reader.onload = (e) => { uploadedPhotoBase64 = e.target.result; if (currentUniversity) updateCardPreview(uploadedPhotoBase64); };
        reader.readAsDataURL(file);
    }

    function copyEmail() {
        const email = studentEmailInput.value;
        if (email) navigator.clipboard.writeText(email).then(() => alert('Email copied!')).catch(console.error);
    }

    // Setup zoom controls
    function setupZoomControls() {
        if (zoomInBtn) {
            zoomInBtn.addEventListener('click', () => {
                if (zoomLevel < 200) {
                    zoomLevel += 25;
                    applyZoom();
                }
            });
        }
        if (zoomOutBtn) {
            zoomOutBtn.addEventListener('click', () => {
                if (zoomLevel > 25) {
                    zoomLevel -= 25;
                    applyZoom();
                }
            });
        }
    }

    // Drag/pan state variables
    let panX = 0, panY = 0;
    let isDragging = false;
    let startX, startY;

    function applyZoom() {
        if (zoomLevelDisplay) {
            zoomLevelDisplay.textContent = zoomLevel + '%';
        }
        if (cardPreview) {
            cardPreview.style.transform = `scale(${zoomLevel / 100}) translate(${panX}px, ${panY}px)`;
        }
    }

    function setupDragPan() {
        const previewSection = document.querySelector('.preview-section');
        if (!previewSection) return;

        // Use event delegation for dynamically created cards
        let draggedCard = null;
        let cardStartX, cardStartY;
        let cardOffsetX = 0, cardOffsetY = 0;

        previewSection.addEventListener('mousedown', (e) => {
            // Find the closest draggable element (card-wrapper, document-preview, or direct id-card for front/back views)
            const cardWrapper = e.target.closest('.card-wrapper, .document-preview, .id-card, .id-card-back');
            if (cardWrapper) {
                draggedCard = cardWrapper;
                const rect = cardWrapper.getBoundingClientRect();
                cardStartX = e.clientX;
                cardStartY = e.clientY;

                // Get current transform
                const transform = cardWrapper.style.transform;
                const match = transform.match(/translate\((-?\d+)px,\s*(-?\d+)px\)/);
                cardOffsetX = match ? parseInt(match[1]) : 0;
                cardOffsetY = match ? parseInt(match[2]) : 0;

                cardWrapper.style.cursor = 'grabbing';
                cardWrapper.style.zIndex = '100';
                e.preventDefault();
            }
        });

        previewSection.addEventListener('mousemove', (e) => {
            if (!draggedCard) return;

            const deltaX = e.clientX - cardStartX;
            const deltaY = e.clientY - cardStartY;

            draggedCard.style.transform = `translate(${cardOffsetX + deltaX}px, ${cardOffsetY + deltaY}px)`;
        });

        previewSection.addEventListener('mouseup', () => {
            if (draggedCard) {
                // Save final position
                const transform = draggedCard.style.transform;
                const match = transform.match(/translate\((-?\d+)px,\s*(-?\d+)px\)/);
                if (match) {
                    draggedCard.dataset.offsetX = match[1];
                    draggedCard.dataset.offsetY = match[2];
                }
                draggedCard.style.cursor = 'grab';
                draggedCard.style.zIndex = '';
                draggedCard = null;
            }
        });

        previewSection.addEventListener('mouseleave', () => {
            if (draggedCard) {
                draggedCard.style.cursor = 'grab';
                draggedCard.style.zIndex = '';
                draggedCard = null;
            }
        });
    }

    // Setup navigation bar event listeners
    function setupNavListeners() {
        // View mode switching
        if (viewBothBtn) viewBothBtn.addEventListener('click', () => setViewMode('both'));
        if (viewFrontBtn) viewFrontBtn.addEventListener('click', () => setViewMode('front'));
        if (viewBackBtn) viewBackBtn.addEventListener('click', () => setViewMode('back'));


        // Mode switching (Student/Teacher)
        if (studentModeBtn) studentModeBtn.addEventListener('click', () => setMode('student'));
        if (teacherModeBtn) teacherModeBtn.addEventListener('click', () => setMode('teacher'));

        // Document type switching
        if (docStandardBtn) docStandardBtn.addEventListener('click', () => setDocType('standard'));
        if (docExtraBtn) docExtraBtn.addEventListener('click', () => setDocType('extra'));
        if (docIdCardBtn) docIdCardBtn.addEventListener('click', () => setDocType('idcard'));

        // Download
        if (downloadZipBtn) downloadZipBtn.addEventListener('click', downloadAsZip);
    }

    function setMode(mode) {
        currentMode = mode;

        // Update active styling
        [studentModeBtn, teacherModeBtn].forEach(btn => {
            if (btn) btn.classList.remove('active');
        });
        if (mode === 'student' && studentModeBtn) studentModeBtn.classList.add('active');
        if (mode === 'teacher' && teacherModeBtn) teacherModeBtn.classList.add('active');

        // Update sidebar title
        const sidebarTitle = document.querySelector('.sidebar h1');
        if (sidebarTitle) {
            sidebarTitle.textContent = mode === 'student' ? '🎓 Student ID Generator' : '👔 Faculty ID Generator';
        }

        // Re-render preview
        if (currentUniversity) updateCardPreview();
    }

    function setDocType(docType) {
        currentDocType = docType;

        // Update active styling
        [docStandardBtn, docExtraBtn, docIdCardBtn].forEach(btn => {
            if (btn) btn.classList.remove('active');
        });
        if (docType === 'standard' && docStandardBtn) docStandardBtn.classList.add('active');
        if (docType === 'extra' && docExtraBtn) docExtraBtn.classList.add('active');
        if (docType === 'idcard' && docIdCardBtn) docIdCardBtn.classList.add('active');

        // Re-render preview with new doc type
        if (currentUniversity) renderDocuments();
    }

    function renderDocuments() {
        if (!currentUniversity) return showPlaceholder();

        if (currentDocType === 'idcard') {
            updateCardPreview();
        } else if (currentDocType === 'standard') {
            if (currentMode === 'teacher') {
                renderTeacherStandardDocuments();
            } else {
                renderStandardDocuments();
            }
        } else if (currentDocType === 'extra') {
            if (currentMode === 'teacher') {
                renderTeacherExtraDocuments();
            } else {
                renderExtraDocuments();
            }
        }
    }

    // Render Teacher Standard Documents (Teaching Certificate, Employment Letter, Salary Statement)
    function renderTeacherStandardDocuments() {
        const name = studentNameInput.value || 'Teacher Name';
        const id = studentIdInput.value || 'UT-518434';
        const department = studentMajorInput.value || 'Computer Science';
        const uni = currentUniversity;
        const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

        cardPreview.innerHTML = `
        <div class="documents-grid">
            <!-- Teaching Certificate -->
            <div class="document-preview teaching-cert">
                <div class="doc-letterhead" style="border-color: ${uni.color}">
                    <img src="${uni.logo}" alt="${uni.shortName}" class="letterhead-logo" onerror="this.style.display='none'">
                    <div class="letterhead-info">
                        <h2>${uni.name}</h2>
                        <p>College of Engineering and Technology</p>
                    </div>
                </div>
                <div class="cert-content">
                    <p class="cert-title" style="color: ${uni.color}">TEACHING CERTIFICATE</p>
                    <p class="cert-body" style="text-align: center; font-size: 14px;">This is to certify that</p>
                    <p class="teacher-name" style="text-align: center; font-size: 24px; font-weight: 700; margin: 20px 0; font-family: 'Great Vibes', cursive;">${name}</p>
                    <p class="cert-body" style="text-align: center;">has been appointed as a member of the teaching faculty in the Department of <strong>${department}</strong> at ${uni.name}.</p>
                    <div class="cert-details">
                        <div class="detail-row"><span>Employee ID:</span><span>${id}</span></div>
                        <div class="detail-row"><span>Department:</span><span>${department}</span></div>
                        <div class="detail-row"><span>Position:</span><span>Assistant Professor</span></div>
                        <div class="detail-row"><span>Date Issued:</span><span>${today}</span></div>
                    </div>
                    <div class="cert-signature">
                        <span class="sig-name">Dr. Richard Thompson</span>
                        <span class="sig-title">Dean of Faculty</span>
                    </div>
                </div>
            </div>

            <!-- Employment Letter -->
            <div class="document-preview employment-letter">
                <div class="doc-letterhead" style="border-color: ${uni.color}">
                    <img src="${uni.logo}" alt="${uni.shortName}" class="letterhead-logo" onerror="this.style.display='none'">
                    <div class="letterhead-info">
                        <h2>${uni.name}</h2>
                        <p>Human Resources Department</p>
                    </div>
                </div>
                <div class="letter-content">
                    <p class="letter-title">EMPLOYMENT VERIFICATION</p>
                    <p class="letter-date">Date: ${today}</p>
                    <p class="cert-header">To Whom It May Concern:</p>
                    <p class="letter-body">This letter is to confirm that <strong>${name}</strong> is currently employed at ${uni.name} as a full-time faculty member.</p>
                    <div class="admission-box">
                        <div class="admission-row"><span>Employee Name:</span><span>${name}</span></div>
                        <div class="admission-row"><span>Employee ID:</span><span>${id}</span></div>
                        <div class="admission-row"><span>Department:</span><span>${department}</span></div>
                        <div class="admission-row"><span>Position:</span><span>Assistant Professor</span></div>
                        <div class="admission-row"><span>Employment Start:</span><span>August 15, 2019</span></div>
                        <div class="admission-row"><span>Employment Status:</span><span>Active - Full Time</span></div>
                    </div>
                    <p class="letter-body">This letter is issued upon the request of the employee for whatever legal purpose it may serve.</p>
                    <div class="letter-signature">
                        <span class="sig-name">Maria Santos</span>
                        <span class="sig-title">HR Director</span>
                    </div>
                </div>
            </div>

            <!-- Salary Statement -->
            <div class="document-preview salary-statement">
                <div class="doc-header" style="background: ${uni.color}">
                    <h3>${uni.name}</h3>
                    <p>Payroll Department</p>
                </div>
                <div class="doc-title">SALARY STATEMENT</div>
                <div class="doc-content">
                    <div class="doc-row"><span>Employee:</span><span>${name}</span></div>
                    <div class="doc-row"><span>Employee ID:</span><span>${id}</span></div>
                    <div class="doc-row"><span>Department:</span><span>${department}</span></div>
                    <div class="doc-row"><span>Period:</span><span>December 2024</span></div>
                    <table class="doc-table">
                        <tr><th>Description</th><th>Amount</th></tr>
                        <tr><td>Base Salary</td><td>$6,500.00</td></tr>
                        <tr><td>Teaching Allowance</td><td>$800.00</td></tr>
                        <tr><td>Research Grant</td><td>$1,200.00</td></tr>
                        <tr class="total"><td>GROSS PAY</td><td>$8,500.00</td></tr>
                        <tr><td>Federal Tax</td><td>-$1,275.00</td></tr>
                        <tr><td>State Tax</td><td>-$425.00</td></tr>
                        <tr><td>Benefits Deduction</td><td>-$350.00</td></tr>
                        <tr class="balance"><td>NET PAY</td><td>$6,450.00</td></tr>
                    </table>
                </div>
            </div>
        </div>`;
    }

    // Render Teacher Extra Documents
    function renderTeacherExtraDocuments() {
        const name = studentNameInput.value || 'Teacher Name';
        const id = studentIdInput.value || 'UT-518434';
        const department = studentMajorInput.value || 'Computer Science';
        const uni = currentUniversity;

        cardPreview.innerHTML = `
        <div class="documents-grid extra-docs">
            <div class="document-preview" style="padding: 40px; text-align: center;">
                <h3>📚 Teacher Extra Documents</h3>
                <p style="color: #666; margin-top: 15px;">Additional teacher documents are available in the Payslip Generator.</p>
                <a href="https://thanhnguyxn.github.io/payslip-generator/" target="_blank" style="display: inline-block; margin-top: 20px; padding: 12px 24px; background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; border-radius: 8px; text-decoration: none; font-weight: 600;">Go to Payslip Generator →</a>
            </div>
        </div>`;
    }

    // Render Standard Documents (Account Statement, Transcript, Schedule)
    function renderStandardDocuments() {
        const name = studentNameInput.value || 'Student Name';
        const id = studentIdInput.value || '000000000';
        const major = studentMajorInput.value || 'Information Technology';
        const uni = currentUniversity;
        const term = 'Fall 2024';

        // Generate sample courses
        const courses = [
            { code: 'CMST 1101', name: 'Business Statistics', credits: 3, grade: 'A', points: 12.00 },
            { code: 'BLAW 2201', name: 'Legal Environment of Business', credits: 3, grade: 'B+', points: 9.90 },
            { code: 'MRKT 2101', name: 'Professional Selling', credits: 4, grade: 'A-', points: 14.80 },
            { code: 'COMM 1010', name: 'Principles of Human Communication', credits: 3, grade: 'A', points: 12.00 },
            { code: 'FINC 3310', name: 'Principles of American Govt', credits: 4, grade: 'B', points: 12.00 },
            { code: 'PHIL 1101', name: 'Philosophy of Critical Thinking', credits: 3, grade: 'A-', points: 11.10 }
        ];

        const totalCredits = courses.reduce((sum, c) => sum + c.credits, 0);
        const totalPoints = courses.reduce((sum, c) => sum + c.points, 0);
        const gpa = (totalPoints / totalCredits).toFixed(2);

        cardPreview.innerHTML = `
        <div class="documents-grid">
            <!-- Account Statement -->
            <div class="document-preview account-statement">
                <div class="doc-header" style="background: ${uni.color}">
                    <h3>${uni.name}</h3>
                    <p>Student Business Services</p>
                </div>
                <div class="doc-title">ACCOUNT STATEMENT</div>
                <div class="doc-content">
                    <div class="doc-row"><span>To:</span><span>${name}</span></div>
                    <div class="doc-row"><span>Student ID:</span><span>${id}</span></div>
                    <div class="doc-row"><span>Term:</span><span>${term}</span></div>
                    <table class="doc-table">
                        <tr><th>Description</th><th>Amount</th></tr>
                        <tr><td>Tuition - Undergraduate (${totalCredits} Credits)</td><td>$5,480.00</td></tr>
                        <tr><td>University Tuition</td><td>$1,710.00</td></tr>
                        <tr><td>Computer Service Fee</td><td>$210.00</td></tr>
                        <tr><td>Library Fee</td><td>$125.00</td></tr>
                        <tr><td>Health Insurance</td><td>$1,850.00</td></tr>
                        <tr class="total"><td>TOTAL CHARGES</td><td>$9,375.00</td></tr>
                        <tr><td>Payments/Credits</td><td>-$9,375.00</td></tr>
                        <tr class="balance"><td>BALANCE DUE</td><td>$0.00</td></tr>
                    </table>
                </div>
            </div>

            <!-- Academic Transcript -->
            <div class="document-preview transcript">
                <div class="doc-header" style="background: ${uni.color}">
                    <h3>${uni.name}</h3>
                    <p>Office of the University Registrar</p>
                </div>
                <div class="doc-title">Academic Transcript</div>
                <div class="doc-content">
                    <div class="doc-row"><span>Name:</span><span>${name}</span></div>
                    <div class="doc-row"><span>Student ID:</span><span>${id}</span></div>
                    <div class="doc-row"><span>Program:</span><span>${currentMode === 'student' ? 'Bachelor of ' : 'Master of '}${major}</span></div>
                    <div class="term-header">${term}</div>
                    <table class="doc-table transcript-table">
                        <tr><th>Course</th><th>Description</th><th>Cr</th><th>Grd</th></tr>
                        ${courses.map(c => `<tr><td>${c.code}</td><td>${c.name}</td><td>${c.credits}</td><td>${c.grade}</td></tr>`).join('')}
                    </table>
                    <div class="gpa-box">
                        <span>Term Credits: ${totalCredits}</span>
                        <span>Quality Points: ${totalPoints.toFixed(2)}</span>
                        <span class="gpa">Term GPA: ${gpa}</span>
                    </div>
                </div>
            </div>

            <!-- Course Schedule -->
            <div class="document-preview schedule">
                <div class="doc-header" style="background: ${uni.color}">
                    <h3>${uni.name}</h3>
                    <p>Student Course Schedule</p>
                </div>
                <div class="doc-title">Course Schedule - ${term}</div>
                <div class="doc-content">
                    <div class="doc-row"><span>Student:</span><span>${name}</span></div>
                    <div class="doc-row"><span>ID:</span><span>${id}</span></div>
                    <table class="doc-table schedule-table">
                        <tr><th>Course</th><th>Description</th><th>Cr</th><th>Days</th><th>Time</th><th>Location</th></tr>
                        <tr><td>CMST 1101</td><td>Business Statistics</td><td>3</td><td>Mon, Wed</td><td>10:00 AM</td><td>DPRH 210</td></tr>
                        <tr><td>BLAW 2201</td><td>Legal Environment</td><td>3</td><td>Tue, Thu</td><td>10:05 AM</td><td>DPRH 238</td></tr>
                        <tr><td>MRKT 2101</td><td>Professional Selling</td><td>4</td><td>Mon, Wed, Fri</td><td>10:05 AM</td><td>Williams</td></tr>
                        <tr><td>FINC 3310</td><td>Principles of Finance</td><td>4</td><td>Mon, Wed</td><td>10:05 AM</td><td>Online</td></tr>
                    </table>
                    <div class="schedule-footer">Total Registered Credits: ${totalCredits}</div>
                </div>
            </div>
        </div>`;
    }

    // Render Extra Documents (Admission Letter, Enrollment Certificate)
    function renderExtraDocuments() {
        const name = studentNameInput.value || 'Student Name';
        const id = studentIdInput.value || '000000000';
        const major = studentMajorInput.value || 'Information Technology';
        const uni = currentUniversity;
        const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

        cardPreview.innerHTML = `
        <div class="documents-grid extra-docs">
            <!-- Letter of Admission -->
            <div class="document-preview admission-letter">
                <div class="doc-letterhead" style="border-color: ${uni.color}">
                    <img src="${uni.logo}" alt="${uni.shortName}" class="letterhead-logo" onerror="this.style.display='none'">
                    <div class="letterhead-info">
                        <h2>${uni.name}</h2>
                        <p>Office of Admissions</p>
                    </div>
                </div>
                <div class="letter-content">
                    <p class="letter-title">LETTER OF ADMISSION</p>
                    <p class="letter-date">Date: ${today}</p>
                    <p class="letter-salutation">Dear ${name},</p>
                    <p class="letter-body">We are pleased to inform you that you have been admitted to ${uni.name} for the Fall 2024 semester. The Admissions Committee was impressed by your academic achievements and believes you will make a significant contribution to our university community.</p>
                    <div class="admission-box">
                        <div class="admission-row"><span>Student ID:</span><span>${id}</span></div>
                        <div class="admission-row"><span>Program:</span><span>Bachelor of ${major}</span></div>
                        <div class="admission-row"><span>Major:</span><span>${major}</span></div>
                        <div class="admission-row"><span>College:</span><span>McCoy College of Business</span></div>
                    </div>
                    <p class="letter-body">Your program is expected to commence in August 2024. Please report to the International Student Office prior to finalize your registration.</p>
                    <p class="letter-closing">Congratulations on your acceptance! We look forward to welcoming you to campus.</p>
                    <div class="letter-signature">
                        <span class="sig-name">Frances Kim (PhD)</span>
                        <span class="sig-title">Dean of Admissions</span>
                    </div>
                </div>
            </div>

            <!-- Certificate of Enrollment -->
            <div class="document-preview enrollment-cert">
                <div class="doc-letterhead" style="border-color: ${uni.color}">
                    <img src="${uni.logo}" alt="${uni.shortName}" class="letterhead-logo" onerror="this.style.display='none'">
                    <div class="letterhead-info">
                        <h2>${uni.name}</h2>
                        <p>Office of the University Registrar</p>
                    </div>
                </div>
                <div class="cert-content">
                    <p class="cert-title">CERTIFICATE OF ENROLLMENT</p>
                    <p class="cert-date">Date Issued: ${today}</p>
                    <p class="cert-header">To Whom It May Concern:</p>
                    <p class="cert-body">This letter is to certify that <strong>${name}</strong> (Student ID: ${id}) is currently enrolled as a full-time student at ${uni.name}.</p>
                    <p class="cert-body">The student is pursuing a <strong>Bachelor of Business Administration</strong> in <strong>${major}</strong> within the McCoy College of Business. The student is currently registered for the Fall 2024 academic term.</p>
                    <p class="cert-body"><strong>Anticipated Graduation Date:</strong> May 2026</p>
                    <p class="cert-body"><strong>Academic Standing:</strong> Good Standing</p>
                    <p class="cert-note">This certificate is issued upon the request of the student for whatever legal purpose it may serve.</p>
                    <div class="cert-signature">
                        <span class="sig-name">Stracnan, Jovan</span>
                        <span class="sig-title">University Registrar</span>
                    </div>
                </div>
            </div>
        </div>`;
    }

    function setViewMode(mode) {
        currentViewMode = mode;

        // Update active tab styling
        [viewBothBtn, viewFrontBtn, viewBackBtn].forEach(btn => {
            if (btn) btn.classList.remove('active');
        });

        if (mode === 'both' && viewBothBtn) viewBothBtn.classList.add('active');
        if (mode === 'front' && viewFrontBtn) viewFrontBtn.classList.add('active');
        if (mode === 'back' && viewBackBtn) viewBackBtn.classList.add('active');

        // Re-render with new mode - use renderDocuments to respect current docType
        if (currentUniversity) renderDocuments();
    }

    async function exportSingleSide(side, format) {
        if (!currentCardData) return alert('Please generate a student ID first');

        // Temporarily render single side
        const originalMode = currentViewMode;
        setViewMode(side);

        await new Promise(resolve => setTimeout(resolve, 100)); // Wait for render

        const card = document.querySelector(side === 'front' ? '.id-card' : '.id-card-back');
        if (!card) {
            setViewMode(originalMode);
            return alert(`${side} card not found`);
        }

        try {
            const canvas = await html2canvas(card, { useCORS: true, allowTaint: true, backgroundColor: '#ffffff', scale: 2 });
            const link = document.createElement('a');
            const filename = generateDownloadFilename(format, side);
            link.download = filename;
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (error) {
            console.error('Export failed:', error);
            alert('Failed to export image');
        }

        setViewMode(originalMode);
    }

    async function downloadAsZip() {
        if (!currentCardData) return alert('Please generate a student ID first');
        if (typeof JSZip === 'undefined') {
            // Fallback: Download individually
            alert('ZIP functionality requires JSZip library. Downloading separately...');
            await exportSingleSide('front', 'png');
            await exportSingleSide('back', 'png');
            return;
        }

        const zip = new JSZip();
        const originalMode = currentViewMode;

        // Capture front
        setViewMode('front');
        await new Promise(resolve => setTimeout(resolve, 100));
        const frontCard = document.querySelector('.id-card');
        if (frontCard) {
            const frontCanvas = await html2canvas(frontCard, { useCORS: true, allowTaint: true, backgroundColor: '#ffffff', scale: 2 });
            zip.file(generateDownloadFilename('png', 'front'), frontCanvas.toDataURL('image/png').split(',')[1], { base64: true });
        }

        // Capture back
        setViewMode('back');
        await new Promise(resolve => setTimeout(resolve, 100));
        const backCard = document.querySelector('.id-card-back');
        if (backCard) {
            const backCanvas = await html2canvas(backCard, { useCORS: true, allowTaint: true, backgroundColor: '#ffffff', scale: 2 });
            zip.file(generateDownloadFilename('png', 'back'), backCanvas.toDataURL('image/png').split(',')[1], { base64: true });
        }

        // Generate and download ZIP
        const zipBlob = await zip.generateAsync({ type: 'blob' });
        const zipFilename = `Student_ID_${sanitizeFilename(studentNameInput.value || 'Student')}_${currentUniversity ? sanitizeFilename(currentUniversity.shortName) : 'University'}.zip`;
        const link = document.createElement('a');
        link.href = URL.createObjectURL(zipBlob);
        link.download = zipFilename;
        link.click();

        setViewMode(originalMode);
    }

    // Helper function to sanitize strings for filenames
    function sanitizeFilename(str) {
        return str
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove accents
            .replace(/[^a-zA-Z0-9\s]/g, '') // Remove special chars
            .trim()
            .replace(/\s+/g, '_'); // Replace spaces with underscores
    }

    // Generate descriptive filename for downloads
    function generateDownloadFilename(extension, side = null) {
        const studentName = sanitizeFilename(studentNameInput.value || 'Student');
        const uniName = currentUniversity ? sanitizeFilename(currentUniversity.shortName || 'University') : 'University';
        const sideLabel = side ? `_${side.charAt(0).toUpperCase() + side.slice(1)}` : '';
        return `Student_ID${sideLabel}_${studentName}_${uniName}.${extension}`;
    }

    async function exportToPng() {
        const card = document.querySelector('.id-card');
        if (!card) return alert('Please generate a student ID first');
        try {
            const canvas = await html2canvas(card, { useCORS: true, allowTaint: true, backgroundColor: '#ffffff', scale: 2 });
            const link = document.createElement('a');
            link.download = generateDownloadFilename('png');
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (error) { alert('Failed to export PNG'); }
    }

    async function exportToPdf() {
        const card = document.querySelector('.id-card');
        if (!card) return alert('Please generate a student ID first');
        try {
            const canvas = await html2canvas(card, { useCORS: true, allowTaint: true, backgroundColor: '#ffffff', scale: 2 });
            const pdf = new jsPDF('landscape', 'mm', 'a4');
            const imgWidth = 85.6;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', (297 - imgWidth) / 2, (210 - imgHeight) / 2, imgWidth, imgHeight);
            pdf.save(generateDownloadFilename('pdf'));
        } catch (error) { alert('Failed to export PDF'); }
    }

    // Event Listeners
    countrySelect.addEventListener('change', (e) => {
        const country = e.target.value;
        uploadedPhotoBase64 = null;
        currentUniversity = null;
        showPlaceholder();
        [studentNameInput, studentIdInput, studentEmailInput, dateOfBirthInput, issueDateInput, expiryDateInput].forEach(input => input.value = '');
        studentMajorInput.value = 'Information Technology';
        if (country) loadUniversities(country); else { universitySelect.innerHTML = '<option value="">-- Select University --</option>'; universitySelect.disabled = true; }
    });

    universitySelect.addEventListener('change', (e) => {
        const index = e.target.value;
        const country = countrySelect.value;
        if (index !== '' && country) { currentUniversity = UNIVERSITY_DATA[country][parseInt(index)]; generateAllData(); }
    });

    uploadBtn.addEventListener('click', () => photoInput.click());
    photoInput.addEventListener('change', (e) => { if (e.target.files[0]) handlePhotoUpload(e.target.files[0]); });
    copyEmailBtn.addEventListener('click', copyEmail);
    regenerateBtn.addEventListener('click', () => {
        uploadedPhotoBase64 = null;
        loadedPhotoUrl = null; // Reset to get new photo from Worker
        photoInput.value = '';
        if (currentUniversity) generateAllData(); else alert('Please select a university first');
    });
    downloadPngBtn.addEventListener('click', exportToPng);
    downloadPdfBtn.addEventListener('click', exportToPdf);

    console.log('[READY] All systems online');
});
