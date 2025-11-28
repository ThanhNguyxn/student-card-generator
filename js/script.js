// Student ID Generator - Final Clean Version with Working Photos
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

    function loadCountries() {
        countrySelect.innerHTML = '<option value="">-- Select Country --</option>';
        Object.keys(UNIVERSITY_DATA).forEach(country => {
            const option = document.createElement('option');
            option.value = country;
            option.textContent = country;
            countrySelect.appendChild(option);
        });
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
        if (!currentUniversity) {
            alert('Please select a university first');
            return;
        }

        const country = countrySelect.value;
        setFakerLocale(country);

        const dates = generateSmartDates();
        const studentId = generateStudentId();

        let major = "Information Technology";
        if (currentUniversity.majors && currentUniversity.majors.length > 0) {
            major = currentUniversity.majors[Math.floor(Math.random() * currentUniversity.majors.length)];
        }

        const fullName = faker.name.findName();
        const emailUsername = fullName.toLowerCase().replace(/\s+/g, '.').replace(/[^a-z.]/g, '');
        const email = `${emailUsername}@${currentUniversity.domain}`;

        // REALISTIC PHOTO - Using pravatar.cc which works without CORS issues
        const randomId = Math.floor(Math.random() * 70);
        const realisticPhotoUrl = `https://i.pravatar.cc/300?img=${randomId}`;

        studentNameInput.value = fullName;
        studentIdInput.value = studentId;
        studentEmailInput.value = email;
        studentMajorInput.value = major;
        dateOfBirthInput.value = formatDateForInput(dates.dob);
        issueDateInput.value = formatDateForInput(dates.issued);
        expiryDateInput.value = formatDateForInput(dates.validThru);

        const photoUrl = uploadedPhotoBase64 || realisticPhotoUrl;

        console.log('[GENERATED]', fullName, '|', major, '|', email);
        console.log('[DATES] DOB:', dates.dob.getFullYear(), '→ Enrolled:', dates.issued.getFullYear(), '→ Expires:', dates.validThru.getFullYear());
        console.log('[PHOTO]', uploadedPhotoBase64 ? 'Uploaded' : 'AI Generated');

        updateCardPreview(photoUrl);
    }

    function updateCardPreview(photoOverride = null) {
        if (!currentUniversity) return;

        const randomId = Math.floor(Math.random() * 70);
        const defaultPhoto = `https://i.pravatar.cc/300?img=${randomId}`;
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
        cardPreview.innerHTML = '';
        const layout = data.university.layout;
        const cardClass = layout === 'vertical' ? 'vertical-card' : 'horizontal-card';

        cardPreview.innerHTML = `
      <div class="id-card ${cardClass}" style="border-top: 4px solid ${data.university.color}">
        <div class="glass-overlay"></div>
        <div class="card-header" style="background: linear-gradient(135deg, ${data.university.color}, ${data.university.color}dd)">
          <img src="${data.university.logo}" alt="${data.university.shortName}" class="university-logo" onerror="this.style.display='none'">
          <div class="university-info">
            <h2 class="university-name">${data.university.shortName}</h2>
            <p class="university-full-name">${data.university.name}</p>
          </div>
        </div>
        <div class="card-content">
          <div class="photo-container">
            <img src="${data.photo}" alt="Student Photo" class="student-photo" crossorigin="anonymous">
          </div>
          <div class="student-info">
            <div class="info-row">
              <span class="label">Full Name:</span>
              <span class="value">${data.name}</span>
            </div>
            <div class="info-row">
              <span class="label">Student ID:</span>
              <span class="value id-number">${data.id}</span>
            </div>
            <div class="info-row">
              <span class="label">Date of Birth:</span>
              <span class="value">${data.dob}</span>
            </div>
            <div class="info-row">
              <span class="label">Major:</span>
              <span class="value">${data.major}</span>
            </div>
            <div class="info-row">
              <span class="label">Email:</span>
              <span class="value email">${data.email}</span>
            </div>
            <div class="info-row">
              <span class="label">Issued:</span>
              <span class="value">${data.issued}</span>
            </div>
            <div class="info-row">
              <span class="label">Valid Thru:</span>
              <span class="value">${data.validThru}</span>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="signature">
            <span class="signature-text">${data.name}</span>
            <span class="signature-label">Student Signature</span>
          </div>
          <div class="barcode">
            <svg viewBox="0 0 120 40" class="barcode-svg">
              <rect x="0" y="0" width="4" height="40" fill="#000"/>
              <rect x="6" y="0" width="2" height="40" fill="#000"/>
              <rect x="10" y="0" width="4" height="40" fill="#000"/>
              <rect x="16" y="0" width="2" height="40" fill="#000"/>
              <rect x="20" y="0" width="6" height="40" fill="#000"/>
              <rect x="28" y="0" width="2" height="40" fill="#000"/>
              <rect x="32" y="0" width="4" height="40" fill="#000"/>
              <rect x="38" y="0" width="2" height="40" fill="#000"/>
              <rect x="42" y="0" width="4" height="40" fill="#000"/>
              <rect x="48" y="0" width="6" height="40" fill="#000"/>
              <rect x="56" y="0" width="2" height="40" fill="#000"/>
              <rect x="60" y="0" width="4" height="40" fill="#000"/>
              <rect x="66" y="0" width="2" height="40" fill="#000"/>
              <rect x="70" y="0" width="6" height="40" fill="#000"/>
              <rect x="78" y="0" width="2" height="40" fill="#000"/>
              <rect x="82" y="0" width="4" height="40" fill="#000"/>
              <rect x="88" y="0" width="2" height="40" fill="#000"/>
              <rect x="92" y="0" width="4" height="40" fill="#000"/>
              <rect x="98" y="0" width="6" height="40" fill="#000"/>
              <rect x="106" y="0" width="2" height="40" fill="#000"/>
              <rect x="110" y="0" width="4" height="40" fill="#000"/>
              <rect x="116" y="0" width="2" height="40" fill="#000"/>
            </svg>
            <span class="barcode-number">${data.id}</span>
          </div>
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
        cardPreview.innerHTML = '<div class="placeholder-text">Select a country and university to generate student ID</div>';
        [studentNameInput, studentIdInput, studentEmailInput, dateOfBirthInput, issueDateInput, expiryDateInput].forEach(input => input.value = '');
        studentMajorInput.value = 'Information Technology';
        if (country) loadUniversities(country);
        else { universitySelect.innerHTML = '<option value="">-- Select University --</option>'; universitySelect.disabled = true; }
    });

    universitySelect.addEventListener('change', (e) => {
        const index = e.target.value;
        const country = countrySelect.value;
        if (index !== '' && country) {
            currentUniversity = UNIVERSITY_DATA[country][parseInt(index)];
            generateAllData();
        }
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
