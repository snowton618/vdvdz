// Get references to DOM elements
const summariesContainer = document.getElementById('summaries');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// Simple event listener to mimic adding a summary on send
sendBtn.addEventListener('click', () => {
  const text = userInput.value.trim();
  if (!text) return;

  // Create a new summary card element
  const summaryCard = document.createElement('div');
  summaryCard.className = 'summary-card';

  summaryCard.innerHTML = `
    <div class="summary-header">
      <h3>Summarized Text</h3>
      <div class="icon-group">
        <span title="Copy">📋</span>
        <span title="Regenerate">🔄</span>
      </div>
    </div>
    <div class="summary-body">
      <p style="color:#888; font-style: italic;">(Pretend AI Summary Here)</p>
      <span class="original-input">Input: ${text}</span>
    </div>
  `;

  // Append the new card to the summaries container
  summariesContainer.appendChild(summaryCard);

  // Clear the input field
  userInput.value = '';

  // Auto-scroll to the bottom of the summaries
  summariesContainer.scrollTop = summariesContainer.scrollHeight;
});
