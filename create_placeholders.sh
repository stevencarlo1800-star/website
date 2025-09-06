#!/bin/bash
# Create a placeholder for the hero background
convert -size 1920x1080 xc:"#add8e6" images/hero.jpg

# Create placeholders for project images
convert -size 400x300 xc:"#d3d3d3" images/project1.jpg
convert -size 400x300 xc:"#d3d3d3" images/project2.jpg
convert -size 400x300 xc:"#d3d3d3" images/project3.jpg
convert -size 400x300 xc:"#d3d3d3" images/project4.jpg
convert -size 400x300 xc:"#d3d3d3" images/project5.jpg
convert -size 400x300 xc:"#d3d3d3" images/project6.jpg

# Create placeholders for detailed service images
convert -size 300x200 xc:"#e0e0e0" images/service-installation.jpg
convert -size 300x200 xc:"#e0e0e0" images/service-reparation.jpg
convert -size 300x200 xc:"#e0e0e0" images/service-maintenance.jpg

echo "Placeholder images created."
