import os
import re

def convert_kabab_case_to_title(filename):
    title = filename.replace('-', ' ').title()
    return title

def process_file(filepath):
    with open(filepath, 'r') as file:
        content = file.read()

    title = convert_kabab_case_to_title(os.path.splitext(os.path.basename(filepath))[0])
    title_line = f'title: {title}\n'

    front_matter_pattern = r'---\n(.*\n)*?---'
    front_matter_match = re.search(front_matter_pattern, content, re.MULTILINE)

    if front_matter_match:
        # Check if the title line already exists
        if not re.search(r'^title: .*\n', front_matter_match.group(0), re.MULTILINE):
            content = content[:front_matter_match.start()+4] + title_line + content[front_matter_match.start()+4:]
    else:
        title_section = f'---\n{title_line}---\n'
        content = title_section + content

    with open(filepath, 'w') as file:
        file.write(content)

def find_md_files_and_process(root_folder):
    for root, _, files in os.walk(root_folder):
        for file in files:
            if file.endswith('.md'):
                process_file(os.path.join(root, file))

if __name__ == "__main__":
    folder_path = "/Users/nikolayrivkin/Documents/vscode/tinasaurus-ex/tinasaurus/docs"
    find_md_files_and_process(folder_path)
