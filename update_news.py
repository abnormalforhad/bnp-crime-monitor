import os
import json
import time
from google import genai
from google.genai import types

# 1. Setup Gemini Client
# We use the API key stored in GitHub Secrets
api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    print("Error: GEMINI_API_KEY not found.")
    exit(1)

client = genai.Client(api_key=api_key)

# 2. Define the Prompt
# We ask Gemini to find news and format it strictly as the JSON your app expects.
prompt = """
Find the 5 latest "breaking news" incidents involving the BNP (Bangladesh Nationalist Party) 
from the last 24-48 hours. Focus on protests, arrests, legal cases, or political clashes.

Return the data STRICTLY as a JSON list of objects. Use this exact schema:
[
  {
    "id": 123 (unique random number),
    "date": "DD Mon YYYY" (e.g. "16 Feb 2026"),
    "time": "HH:MM" (24-hour format),
    "title": "Headline in Bengali or English",
    "description": "A short summary (max 2 sentences).",
    "location": "City or District Name",
    "isBnpRelated": true,
    "link": "URL to the news source"
  }
]

IMPORTANT:
- The "date" field MUST be in "DD Mon YYYY" format (e.g. "12 Feb 2026").
- Do not use markdown formatting (no ```json). Just return the raw JSON string.
- Ensure the JSON is valid.
"""

# 3. Call Gemini with Google Search Grounding
try:
    print("Fetching news from Gemini...")
    response = client.models.generate_content(
        model='gemini-2.0-flash', 
        contents=prompt,
        config=types.GenerateContentConfig(
            tools=[types.Tool(google_search=types.GoogleSearch())], # Enables Google Search
            response_mime_type="application/json"
        )
    )

    # 4. Save to file
    new_incidents = json.loads(response.text)
    
    # Define where to save the file
    # We save it as a JSON file, which is easier to overwrite than a .ts file
    output_path = os.path.join("src", "utils", "incidents.json")
    
    # Ensure directory exists
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(new_incidents, f, indent=2, ensure_ascii=False)
        
    print(f"Successfully updated {len(new_incidents)} incidents.")

except Exception as e:
    print(f"Error updating news: {e}")
    exit(1)