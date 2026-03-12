from pathlib import Path
import re
#this is just suposed to be run w/ the npm cdn idk if it changes in package json u can check
# just incase
user = "ClaisaZ"
repo = "mkdocs-MySQL-user-guide"
ref = "main"
# if ur reading this i think if u update the name and the user then this will break, BUT we will prob finish this before u need to update it, so it wont matter.

base = f"https://cdn.jsdelivr.net/gh/{user}/{repo}@{ref}"

# md image syntaax
img = re.compile(r'(!\[[^\]]*\]\()([^)]+)(\))')

# these file ttypes
# image extensinions but i cant spell extnesinion so its just ext
ext = (".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg")


def normalize_image_path(path: str) -> str:
    path = path.strip()

    # leave external urls alone
    if path.startswith("http://") or path.startswith("https://"):
        return path

    # same w/ anchor
    if path.startswith("#") or path.startswith("data:"):
        return path

    lower = path.lower()
    if not lower.endswith(ext):
        return path

    # nromalize common paths
    if path.startswith("./docs/"):
        clean = path[2:]  # remove leading ./
    elif path.startswith("docs/"):
        clean = path
    elif path.startswith("./assets/"):
        clean = "docs/" + path[2:]
    elif path.startswith("assets/"):
        clean = "docs/" + path
    elif path.startswith("/docs/"):
        clean = path[1:]
    else:
        # MAYBE its relative doc this is a fallback assumign its relative doc
        clean = "docs/" + path.lstrip("./")

    return f"{base}/{clean}"


def replace_images_in_text(text: str) -> str:
    def repl(match):
        before, path, after = match.groups()
        new_path = normalize_image_path(path)
        return f"{before}{new_path}{after}"

    return img.sub(repl, text)


def main():
    docs_dir = Path("docs")

    for md_file in docs_dir.rglob("*.md"):
        original = md_file.read_text(encoding="utf-8")
        updated = replace_images_in_text(original)

        if updated != original:
            md_file.write_text(updated, encoding="utf-8")
            print(f"Updated: {md_file}")

    print("Done.")


if __name__ == "__main__":
    main()