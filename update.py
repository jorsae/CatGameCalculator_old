import os, sys
import shutil
import argparse
import subprocess

dont_delete = ['.git', 'CNAME']
copy_over = ['css', 'dist', 'images', 'src',
            'index.html', 'event.html', 'about.html',
            'feedback.html', 'privacy.html' ]

test_path = 'D:\code\web\CatGameCalculatorTest'
publish_path = 'D:\code\web\CatGameCalculatorPublish'
path = None

deleted = [0, 0] # files, folders
copied = [0, 0]  # files, folders

parser = argparse.ArgumentParser()
parser.add_argument("-p", "--publish", action='store_true', help="If set, readies for publishing the new changes.")
parser.add_argument("-c", "--commit", type=str)
args = parser.parse_args()

def print_stats():
    print()
    print('='*len(path))
    print(f'PATH:\t{path}')
    print(f'DELETED\tfiles: {deleted[0]}\tfolders: {deleted[1]}')
    print(f'COPIED\tfiles: {copied[0]}\tfolders: {copied[1]}')

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
    print(f'Deleting: {filename}')

    if os.path.isfile(filename):
        deleted[0] += 1
        os.remove(filename)
    else:
        deleted[1] += 1
        shutil.rmtree(filename)

for filename in copy_over:
    if os.path.isfile(filename):
        copied[0] += 1
        shutil.copy(filename, path)
    else:
        copied[1] += 1
        shutil.copytree(filename, f'{path}\{filename}')

if not args.commit:
    print_stats()
    sys.exit()

subprocess.call(["git", "add", "."], shell=True, cwd=path)
subprocess.call(['git', 'commit', f'-m {args.commit}'], shell=True, cwd=path)
subprocess.call(['git', 'push', 'origin', 'master'], shell=True, cwd=path)

print_stats()