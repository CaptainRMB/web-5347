import os

dirName = os.getcwd()
filenames = os.listdir(dirName)

for filename in filenames:
    if filename.endswith(".jpeg"):
        newName = filename.replace("COMP5347-2022S1-", "")
        os.renames(dirName + "\\" + filename, dirName + "\\" + newName)
        print("Rename [%s]->[%s]成功! " % (filename, newName))
