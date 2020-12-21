
#!/usr/bin/env python3.8
# -*- coding: utf-8 -*-

# Requirements PIL


from PIL import Image
import glob, os

expanded_width = 1000
thumbnail_width = 100

img_source_path = os.getenv("HOME") + "/enheragu.github.io/img_gallery/originals/"
thumbnail_output_path = os.getenv("HOME") + "/enheragu.github.io/img_gallery/Thumbnails/"
expanded_output_path = os.getenv("HOME") + "/enheragu.github.io/img_gallery/"

print("Input images from " + img_source_path)
print("Output thumbnail to " + thumbnail_output_path)
print("Output extend image to " + expanded_output_path)


for file in os.listdir(img_source_path):
    if not file.upper().endswith(".PNG") and not file.upper().endswith(".JPG"):
        print("ERROR: Unknown extension for " + file)
        continue
    #print("Process image " + file)

    image = Image.open(img_source_path+file)
    
    #print("Save " + expanded_output_path+file)
    image.thumbnail((1000, 20000)) # max width , max heigth
    image.save(expanded_output_path+file)

    #print("Save " + thumbnail_output_path+file)
    image.thumbnail((100, 20000)) # max width , max heigth
    image.save(thumbnail_output_path+file)


