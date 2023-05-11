
directory = "/Users/nikolayrivkin/Documents/vscode/tinasaurus-ex/tinasaurus/docs"
# Define the directory you want to search in

import os
import re

# Define the directory you want to search in

# Define the regular expression to search for
regex = re.compile(r"(?<=\.md\))")

# Recursively search through the directory and all its subdirectories
for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith(".md"):

            # Construct the full path of the file
            filepath = os.path.join(root, file)

            # Read the contents of the file
            with open(filepath, "r") as f:
                content = f.read()

            # Replace all occurrences of ".md)" with ".mdx)"
            new_content = regex.sub("x)", content)

            # Write the new content back to the file
            with open(filepath, "w") as f:
                f.write(new_content)

            # Print a message to confirm the file was modified
            print(f"Modified {filepath}")
