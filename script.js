import OpenAI from "openai";

const openai = new OpenAI();

// Listen for the send button click
document.getElementById("sendBtn").addEventListener("click", async () => {
  // Get text from the textbox
  const inputText = document.getElementById("userInput").value.trim();
  if (!inputText) return; // Exit if the textbox is empty

  // Prepend "summarize " to the user input
  const prompt = "summarize " + inputText;

  try {
    // Call the OpenAI Chat API
    const completion = await openai.chat.completions.create({
      model: "gpt-4o", // Replace with your model if needed
      messages: [
        { role: "developer", content: "You are a helpful assistant." },
        { role: "user", content: prompt },
      ],
      store: true,
    });

    // Log the returned message to the console
    console.log(completion.choices[0].message);

    // Optionally, add the summary to your UI
    const summaryResponse = completion.choices[0].message.content;
    const summariesContainer = document.getElementById("summaries");

    // Create a new summary card
    const summaryCard = document.createElement("div");
    summaryCard.className = "summary-card";
    summaryCard.innerHTML = `
      <div class="summary-header">
        <h3>Summarized Text</h3>
        <div class="icon-group">
          <span title="Copy">📋</span>
          <span title="Regenerate">🔄</span>
        </div>
      </div>
      <div class="summary-body">
        <p>${summaryResponse}</p>
        <span class="original-input">Input: ${inputText}</span>
      </div>
    `;

    // Append the new summary card to the summaries container
    summariesContainer.appendChild(summaryCard);

    // Clear the input field
    document.getElementById("userInput").value = "";
    
    // Auto-scroll to the bottom of the summaries container
    summariesContainer.scrollTop = summariesContainer.scrollHeight;

  } catch (error) {
    console.error("Error fetching summary:", error);
  }
});
