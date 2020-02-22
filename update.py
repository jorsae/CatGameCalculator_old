import os, sys
import shutil
import argparse
import subprocess

dont_delete = ['.git', 'CNAME']
copy_over = ['css', 'dist', 'images', 'src',
            'index.html', 'about.html', 'feedback.html', 'privacy.html' ]

test_path = 'D:\code\web\CatGameCalculatorTest'
publish_path = 'D:\code\web\CatGameCalculatorPublish'
path = None
files_deleted = 0
files_copied = 0

parser = argparse.ArgumentParser()
parser.add_argument("-p", "--publish", action='store_true', help="If set, readies for publishing the new changes.")
parser.add_argument("-c", "--commit", type=str)
args = parser.parse_args()


def print_stats():
    print(f'Deleted: {files_deleted} files/folders')
    print(f'Copied: {files_copied} files/folders')

if args.publish:
    print(f'Updates publish version ({publish_path})')
    path = publish_path
else:
    print(f'Updating test env ({test_path})')
    path = test_path

for filename in os.listdir(path):
    if filename in dont_delete:
        continue
    filename = f'{path}\{filename}'
    if os.path.isfile(filename):
        print(f'Deleting: {filename}')
        os.remove(filename)
        files_deleted += 1
    else:
        print(f'Deleting: {filename}')
        shutil.rmtree(filename)
        files_deleted += 1

for filename in copy_over:
    if os.path.isdir(filename):
        print(f'[dir] Copying: {filename}')
        shutil.copytree(filename, f'{path}\{filename}')
    else:
        print(f'[file] Copying: {filename}')
        shutil.copy(filename, path)
    files_copied += 1

if not args.commit:
    print_stats()
    sys.exit()

subprocess.call(["git", "add", "."], shell=True, cwd=path)
subprocess.call(['git', 'commit', f'-m {args.commit}'], shell=True, cwd=path)
subprocess.call(['git', 'push', 'origin', 'master'], shell=True, cwd=path)

print_stats()