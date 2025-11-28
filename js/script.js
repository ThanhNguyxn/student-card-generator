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

    let currentUniversity = null;
    let uploadedPhotoBase64 = null;

    loadCountries();
    attachInputListeners();
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
        // Use Cloudflare Worker proxy - bypasses CORS!
        const WORKER_URL = 'https://student-photo-proxy.thanhnguyentuan2007.workers.dev';
        const gender = Math.random() > 0.5 ? 'male' : 'female';
        const realisticPhotoUrl = `${WORKER_URL}?gender=${gender}`;

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
     */
    function loadPhotoAsync(photoUrl) {
        const img = new Image();
        img.crossOrigin = "anonymous";

        img.onload = function () {
            console.log('[PHOTO] Loaded successfully, updating card...');
            updateCardPreview(photoUrl);
        };

        img.onerror = function () {
            console.warn('[PHOTO] Failed to load, using fallback avatar');
            // Generate fallback Dicebear avatar
            const seed = encodeURIComponent(studentNameInput.value);
            const fallbackUrl = `https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}`;
            updateCardPreview(fallbackUrl);
        };

        img.src = photoUrl;
    }

    function updateCardPreview(photoOverride = null) {
        if (!currentUniversity) return;
        // Fallback photo if needed
        const defaultPhoto = `https://randomuser.me/api/portraits/lego/1.jpg`;
        const photoUrl = photoOverride || uploadedPhotoBase64 || defaultPhoto;
        renderCard({
            name: studentNameInput.value || 'Student Name',
            id: studentIdInput.value || '000000000',
            email: studentEmailInput.value || 'student@university.edu',
            major: studentMajorInput.value || 'Information Technology',
            dob: formatDateForDisplay(dateOfBirthInput.value),
            issued: formatDateForDisplay(issueDateInput.value),
            validThru: formatDateForDisplay(expiryDateInput.value),
            photo: photoUrl,
            university: currentUniversity
        });
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

    async function exportToPng() {
        const card = document.querySelector('.id-card');
        if (!card) return alert('Please generate a student ID first');
        try {
            const canvas = await html2canvas(card, { useCORS: true, allowTaint: true, backgroundColor: '#ffffff', scale: 2 });
            const link = document.createElement('a');
            link.download = `student-id-${Date.now()}.png`;
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
            pdf.save(`student-id-${Date.now()}.pdf`);
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
        photoInput.value = '';
        if (currentUniversity) generateAllData(); else alert('Please select a university first');
    });
    downloadPngBtn.addEventListener('click', exportToPng);
    downloadPdfBtn.addEventListener('click', exportToPdf);

    console.log('[READY] All systems online');
});
