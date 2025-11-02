document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    const tooltipTriggers = document.querySelectorAll('[data-tooltip]');
    tooltipTriggers.forEach(trigger => {
        const tooltip = document.createElement('div');
        tooltip.className = 'hidden absolute z-10 p-2 text-xs text-white bg-gray-900 rounded shadow-lg';
        tooltip.textContent = trigger.getAttribute('data-tooltip');
        trigger.appendChild(tooltip);
        
        trigger.addEventListener('mouseenter', () => {
            tooltip.classList.remove('hidden');
        });
        
        trigger.addEventListener('mouseleave', () => {
            tooltip.classList.add('hidden');
        });
    });

    // Handle file upload display
    const fileInput = document.getElementById('file-upload');
    if (fileInput) {
        fileInput.addEventListener('change', function(e) {
            const fileName = e.target.files[0]?.name || 'No file selected';
            const fileDisplay = document.createElement('p');
            fileDisplay.className = 'text-sm text-gray-500 mt-1';
            fileDisplay.textContent = fileName;
            
            const uploadContainer = fileInput.closest('.border-dashed');
            if (uploadContainer) {
                const existingDisplay = uploadContainer.querySelector('.text-xs');
                if (existingDisplay) {
                    uploadContainer.insertBefore(fileDisplay, existingDisplay);
                }
            }
        });
    }

    // Mobile menu toggle would go here
    const mobileMenuButton = document.querySelector('button[aria-label="Mobile menu"]');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            // Toggle mobile menu visibility
        });
    }
});

// API key management
function addApiKey() {
    const keyInput = document.getElementById('api-key');
    if (keyInput.value.trim() === '') {
        alert('Please enter a valid API key');
        return;
    }
    
    // In a real app, you would store this securely
    console.log('Adding API key:', keyInput.value);
    keyInput.value = '';
    
    // Update UI to show key was added
    const warningDiv = document.querySelector('.bg-yellow-50');
    if (warningDiv) {
        warningDiv.classList.add('hidden');
    }
    
    // Show success message
    const successDiv = document.createElement('div');
    successDiv.className = 'rounded-md bg-green-50 p-4 mb-4';
    successDiv.innerHTML = `
        <div class="flex">
            <div class="flex-shrink-0">
                <i data-feather="check-circle" class="h-5 w-5 text-green-400"></i>
            </div>
            <div class="ml-3">
                <p class="text-sm font-medium text-green-800">API key added successfully</p>
            </div>
        </div>
    `;
    
    const apiKeySection = document.querySelector('.bg-gray-50');
    if (apiKeySection) {
        apiKeySection.insertBefore(successDiv, apiKeySection.firstChild);
        feather.replace();
    }
}
