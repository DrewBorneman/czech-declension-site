import json

# Path to your JSON file
input_file = "declensions.json"
output_file = "declensions_updated.json"

# Load the JSON data
with open(input_file, "r", encoding="utf-8") as f:
    data = json.load(f)

# Recalculate ranks
for i, entry in enumerate(data.get("declensions", []), start=1):
    entry["rank"] = i

# Save the updated JSON back to a new file
with open(output_file, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Ranks updated and saved to {output_file}")
