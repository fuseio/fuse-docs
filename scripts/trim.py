import os

folder_path = "/Users/nikolayrivkin/Documents/vscode/tinasaurus-ex/tinasaurus/docs/.gitbook/assets"

for filename in os.listdir(folder_path):
    # Check if the filename contains spaces
    if " " in filename:
        # Replace all spaces with empty string
        new_filename = filename.replace(" ", "")
        # Construct the full path of the old and new file
        old_path = os.path.join(folder_path, filename)
        new_path = os.path.join(folder_path, new_filename)
        # Rename the file
        os.rename(old_path, new_path)
