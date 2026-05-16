// Ensure state acts inside frameworkless constraints
document.addEventListener('DOMContentLoaded', () => {
    const mainActionBtn = document.getElementById('init-plan-btn');
    const systemStatusText = document.getElementById('system-status-text');

    if (mainActionBtn) {
        mainActionBtn.addEventListener('click', () => {
            // Provide visual interface updates safely
            mainActionBtn.textContent = 'Active Execution Mode';
            mainActionBtn.style.backgroundColor = '#94825F';

            if (systemStatusText) {
                systemStatusText.textContent = 'System Status: Active Engine Initialized';
                systemStatusText.style.color = '#A5856F';
            }

            console.log('ForgeAI Interface: State transition updated successfully.');
        });
    }
});